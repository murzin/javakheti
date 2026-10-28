'use strict';
const slides = [
 {file:'20261026_135533',chapter:'The highlands',eyebrow:'Javakheti, Georgia',title:'Land of lakes.<br><em>Open skies.</em>',text:'A quiet journey through Georgia’s volcanic highlands, where water holds the sky and the horizon has room to breathe.',caption:'Still water beneath the highlands',alt:'Small lake beneath golden slopes and a broad mountain under a blue sky'},
 {file:'20261026_131325',chapter:'The approach',eyebrow:'01 — Follow the open road',title:'Beyond the<br><em>familiar.</em>',text:'A track bends into the grasslands. Clouds gather over the mountains. The journey begins with the simple pleasure of looking further.',caption:'A road into the grasslands',alt:'A gravel track winding through autumn grass toward cloud-wrapped mountains'},
 {file:'20261026_134842',chapter:'Volcanic earth',eyebrow:'02 — Shaped by the earth',title:'Old fire.<br><em>Quiet ground.</em>',text:'Volcanic mountains give the Javakheti Plateau its unmistakable shape. Broad slopes and stony ridges meet an almost treeless horizon.',caption:'Volcanic forms and open grassland',alt:'Pale volcanic mountains rising above an open grassland beneath heavy clouds'},
 {file:'20261026_134847',chapter:'Stone & sky',eyebrow:'03 — A closer look',title:'Written<br><em>in stone.</em>',text:'Dark rock interrupts the soft line of the hillside. Up close, this open landscape becomes a study in texture, shadow and time.',caption:'Dark stone against an autumn sky',alt:'Jagged dark rocks on a grassy ridge below brilliant clouds'},
 {file:'20261026_143339',chapter:'The lakes',eyebrow:'04 — Water, held in the highlands',title:'A second<br><em>sky.</em>',text:'Javakheti is a land of lakes, including Paravani, Georgia’s largest. In the region’s long, cold winters, the water can remain frozen for months.',caption:'Lake water and distant mountain silhouettes',alt:'Blue lake stretching toward a chain of distant mountains'},
 {file:'20261026_153706',chapter:'Living landscape',eyebrow:'05 — Fields of quiet',title:'Room<br><em>to breathe.</em>',text:'Few trees break the plateau’s great expanses. In these photographs, fields and grasslands carry the warm colours of late October.',caption:'Autumn fields beneath passing clouds',alt:'Golden and green fields across an immense open plain under billowing clouds'},
 {file:'P1040789',chapter:'Wild lives',eyebrow:'06 — A landscape worth protecting',title:'Pause.<br><em>Look closer.</em>',text:'The region’s lakes shelter nesting and migratory birds. Javakheti’s protected areas, established in 2011, conserve a remarkable highland landscape.',caption:'A quiet encounter along the way · species unidentified',alt:'A bird perched high on a utility pole against a clear blue sky',position:'50% 43%'},
 {file:'20261026_165716',chapter:'Evening water',eyebrow:'07 — The light grows softer',title:'Nothing<br><em>to hurry.</em>',text:'Mountains settle into layers beyond the water. Stay for the shifting light; let the next moment arrive in its own time.',caption:'Soft evening light across the lake',alt:'Late afternoon light on a lake and overlapping mountain ridges'},
 {file:'20261026_174417',chapter:'After the light',eyebrow:'08 — Carry the quiet with you',title:'The day fades.<br><em>The feeling stays.</em>',text:'A last veil of mist. A little gold at the edge of the sky. The journey ends here, but there is always another reason to look again.',caption:'Sunset and mist over the highlands',alt:'Golden sunset behind mountains with a low veil of mist across dark grassland'}
];
const $=id=>document.getElementById(id);
const scenes=$('scenes'),nav=$('chapters');
slides.forEach((s,i)=>{const el=document.createElement('div');el.className='scene';el.setAttribute('aria-hidden','true');const im=document.createElement('img');im.src=`assets/${s.file}.webp`;im.alt=s.alt;im.style.objectPosition=s.position||'50% 50%';im.decoding='async';im.loading=i<2?'eager':'lazy';el.append(im);scenes.append(el);const b=document.createElement('button');b.title=s.chapter;b.setAttribute('aria-label',`${i+1}: ${s.chapter}`);b.innerHTML=`<img src="assets/${s.file}.webp" alt="" loading="lazy">`;b.onclick=()=>go(i);nav.append(b)});
let current=0,timer=null,playing=false,swap=0;
function render(){const s=slides[current];[...scenes.children].forEach((el,i)=>{el.classList.toggle('active',i===current);el.setAttribute('aria-hidden',String(i!==current))});[...nav.children].forEach((el,i)=>{el.classList.toggle('active',i===current);el.setAttribute('aria-current',i===current?'step':'false')});$('eyebrow').textContent=s.eyebrow;$('title').innerHTML=s.title;$('description').textContent=s.text;$('photoCaption').textContent=s.caption;$('chapterLabel').textContent=`${String(current+1).padStart(2,'0')} / ${s.chapter.toUpperCase()}`;$('current').textContent=String(current+1).padStart(2,'0');$('sideCount').textContent=`${String(current+1).padStart(2,'0')} — 09`;$('begin').textContent=current===0?'Begin the journey ↗':current===8?'Experience it again ↗':'Continue exploring ↗';$('progress').style.width=`${(current+1)/slides.length*100}%`;history.replaceState(null,'',`#${current+1}`);}
function go(i){current=(i+slides.length)%slides.length;clearTimeout(swap);document.querySelector('.story').classList.add('changing');swap=setTimeout(()=>{render();document.querySelector('.story').classList.remove('changing')},matchMedia('(prefers-reduced-motion: reduce)').matches?0:220);if(playing)restart()}
function restart(){clearInterval(timer);timer=setInterval(()=>go(current+1),10000)}
function play(value){playing=value;$('autoplay').setAttribute('aria-label',playing?'Pause slideshow':'Play slideshow');$('playIcon').textContent=playing?'Ⅱ':'▶';$('playStatus').textContent=playing?'A new chapter every 10 seconds':'Explore at your own pace';if(playing)restart();else clearInterval(timer)}
document.querySelector('.wordmark').onclick=e=>{e.preventDefault();go(0)};
$('begin').onclick=()=>go(current+1);$('previous').onclick=()=>go(current-1);$('next').onclick=()=>go(current+1);$('autoplay').onclick=()=>play(!playing);
$('sourceOpen').onclick=()=>{play(false);$('notes').showModal()};$('sourceClose').onclick=()=>$('notes').close();$('notes').onclick=e=>{if(e.target===$('notes')){const r=$('notes').getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)$('notes').close()}};
document.addEventListener('keydown',e=>{if($('notes').open||/INPUT/.test(e.target.tagName))return;if(e.key==='ArrowRight'){e.preventDefault();go(current+1)}if(e.key==='ArrowLeft'){e.preventDefault();go(current-1)}if(e.code==='Space'&&!/BUTTON|A/.test(e.target.tagName)){e.preventDefault();play(!playing)}});
let touch;document.addEventListener('touchstart',e=>{if(!$('notes').open)touch={x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY}},{passive:true});document.addEventListener('touchend',e=>{if(!touch||$('notes').open)return;const dx=e.changedTouches[0].clientX-touch.x,dy=e.changedTouches[0].clientY-touch.y;if(Math.abs(dx)>60&&Math.abs(dx)>Math.abs(dy))go(current+(dx<0?1:-1));touch=null},{passive:true});
$('fullscreen').onclick=async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await $('experience').requestFullscreen()}catch{$('fullscreen').title='Fullscreen is unavailable in this browser'}};if(!document.fullscreenEnabled)$('fullscreen').hidden=true;
// A rendered original score replaces the previous generative synthesizer entirely.
const audio=$('soundtrack');
let soundOn=false;
audio.volume=+$('volume').value;
function soundState(on){
  soundOn=on;
  $('sound').setAttribute('aria-pressed',String(on));
  $('sound').setAttribute('aria-label',on?'Turn off ambient music':'Turn on ambient music');
  $('soundLabel').textContent=on?'Sound on':'Sound off';
}
$('sound').onclick=async()=>{
  if(soundOn){audio.pause();soundState(false);return;}
  try{audio.currentTime=0;await audio.play();soundState(true);}
  catch{soundState(false);$('soundLabel').textContent='Tap to retry';}
};
$('volume').oninput=()=>{audio.volume=+$('volume').value;};
audio.addEventListener('error',()=>{soundState(false);$('soundLabel').textContent='Tap to retry';});
document.addEventListener('visibilitychange',()=>{
  if(document.hidden){play(false);audio.pause();}
  else if(soundOn)audio.play().catch(()=>soundState(false));
});
const hash=Number(location.hash.slice(1));if(Number.isInteger(hash)&&hash>=1&&hash<=slides.length)current=hash-1;render();
