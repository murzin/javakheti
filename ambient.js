'use strict';
// Original Georgian-inspired ambient score. All timbres are synthesized;
// the modal phrases are newly composed, not quotations of traditional songs.
class HighlandAmbient {
  constructor(context, output) {
    this.context = context;
    this.nodes = new Set();
    this.phrase = 0;
    this.timer = null;
    this.input = context.createGain();
    const warmth = context.createBiquadFilter();
    warmth.type = 'lowpass';
    warmth.frequency.value = 2600;
    const compressor = context.createDynamicsCompressor();
    compressor.threshold.value = -22;
    compressor.knee.value = 18;
    compressor.ratio.value = 3;
    compressor.attack.value = 0.04;
    compressor.release.value = 1.2;
    this.input.connect(warmth);
    warmth.connect(compressor);
    compressor.connect(output);
    const reverb = context.createConvolver();
    const impulse = context.createBuffer(2, Math.ceil(context.sampleRate * 5), context.sampleRate);
    let seed = 7241;
    for (let channel = 0; channel < 2; channel++) {
      const data = impulse.getChannelData(channel);
      for (let i = 0; i < data.length; i++) {
        seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
        data[i] = (seed / 2147483648 - 1) * Math.exp(-i / (context.sampleRate * 1.1)) * Math.min(1, i / 700);
      }
    }
    reverb.buffer = impulse;
    const wet = context.createGain();
    wet.gain.value = 0.32;
    warmth.connect(reverb);
    reverb.connect(wet).connect(compressor);
    const echo = context.createDelay(2), echoGain = context.createGain();
    echo.delayTime.value = 0.81;
    echoGain.gain.value = 0.17;
    warmth.connect(echo);
    echo.connect(echoGain).connect(compressor);
  }
  tone(midi, start, duration, level, pan, plucked = false) {
    const ctx = this.context, frequency = 440 * 2 ** ((midi - 69) / 12);
    const harmonics = plucked ? [1, 2, 3, 5] : [1, 2, 3];
    harmonics.forEach((harmonic, i) => {
      const osc = ctx.createOscillator(), envelope = ctx.createGain(), stereo = ctx.createStereoPanner();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(frequency * harmonic, start);
      osc.detune.value = plucked ? (i % 2 ? 2 : -2) : (i % 2 ? 3 : -3);
      const strength = level * (plucked ? [1, 0.34, 0.13, 0.045][i] : [1, 0.16, 0.065][i]);
      const attack = plucked ? 0.018 : Math.min(2.3, duration * 0.25);
      envelope.gain.setValueAtTime(0, start);
      envelope.gain.linearRampToValueAtTime(strength, start + attack);
      if (plucked) envelope.gain.exponentialRampToValueAtTime(0.00001, start + duration);
      else {
        envelope.gain.setValueAtTime(strength * 0.8, start + duration * 0.55);
        envelope.gain.exponentialRampToValueAtTime(0.00001, start + duration);
      }
      stereo.pan.value = pan;
      osc.connect(envelope).connect(stereo).connect(this.input);
      this.nodes.add(osc);
      osc.onended = () => { this.nodes.delete(osc); osc.disconnect(); envelope.disconnect(); stereo.disconnect(); };
      osc.start(start);
      osc.stop(start + duration + 0.1);
    });
  }
  schedule(start) {
    // A low fifth drone, spacious three-part responses and descending modal turns.
    // The plucked line suggests a small wooden lute without using instrument samples.
    const phrases = [
      [[0,62],[3.4,65],[6.2,67],[9.6,69],[13.1,67],[16.7,65],[20.2,62]],
      [[0,69],[3.3,70],[6.6,69],[10.0,67],[13.5,65],[17.0,64],[20.3,62]],
      [[0,67],[3.5,69],[6.7,72],[10.1,70],[13.4,69],[16.8,67],[20.3,65]],
      [[0,65],[3.4,67],[6.7,65],[10.0,64],[13.3,62],[17.0,60],[20.2,62]]
    ];
    const part = this.phrase++ % phrases.length;
    this.tone(38, start, 28, 0.052, -0.12);
    this.tone(part === 2 ? 48 : 45, start + 0.2, 27.5, 0.023, 0.12);
    [[0,part===2?60:57],[7.8,part===1?58:60],[15.8,57]].forEach(([offset,note]) => {
      this.tone(note, start + offset, 10, 0.019, -0.42);
      this.tone(note + (offset === 7.8 ? 5 : 7), start + offset + 0.65, 9.5, 0.013, 0.42);
    });
    phrases[part].forEach(([offset,note], i) => {
      this.tone(note, start + offset + 0.08, 5.2, 0.065, -0.22, true);
      if (i === 2 || i === 5) this.tone(note - 7, start + offset + 1.2, 4.3, 0.028, 0.32, true);
    });
  }
  start() {
    if (this.timer !== null) return;
    this.next = this.context.currentTime + 0.08;
    const tick = () => {
      while (this.next < this.context.currentTime + 2) {
        this.schedule(this.next);
        this.next += 24;
      }
    };
    tick();
    this.timer = setInterval(tick, 500);
  }
  stop() {
    clearInterval(this.timer);
    this.timer = null;
    // Gain is faded by the player before these voices finish.
    for (const osc of this.nodes) osc.stop(this.context.currentTime + 1.3);
  }
}
