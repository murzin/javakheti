'use strict';
const slides = [
  {
    "file": "20261026_135533",
    "chapter": "The highlands",
    "eyebrow": "Javakheti, Georgia",
    "title": "Land of lakes.<br><em>Open skies.</em>",
    "text": "A quiet journey through Georgia’s volcanic highlands, where water holds the sky and the horizon has room to breathe.",
    "caption": "Still water beneath the highlands",
    "alt": "Small lake beneath golden slopes and a broad mountain under a blue sky"
  },
  {
    "file": "20261026_131325",
    "chapter": "The approach",
    "eyebrow": "02 — The approach",
    "title": "Beyond the<br><em>familiar.</em>",
    "text": "A track bends into the grasslands. Clouds gather over the mountains. The journey begins with the simple pleasure of looking further.",
    "caption": "A road into the grasslands",
    "alt": "A gravel track winding through autumn grass toward cloud-wrapped mountains"
  },
  {
    "file": "20261026_131648",
    "chapter": "Into the clouds",
    "title": "Follow the<br><em>mountain.</em>",
    "text": "The road draws closer to a cloud-wrapped slope. Golden grass gives way to pale stone beneath the changing sky.",
    "caption": "A gravel road beneath low mountain cloud",
    "alt": "Gravel road through golden grass toward a mountain wrapped in cloud",
    "eyebrow": "03 — Into the clouds"
  },
  {
    "file": "20261026_132235",
    "chapter": "Hillside shelters",
    "title": "Small signs.<br><em>Wide horizons.</em>",
    "text": "A few buildings rest at the foot of an immense hillside. Their scale makes the surrounding space feel even larger.",
    "caption": "Buildings at the foot of the hillside",
    "alt": "A track leading to small stone buildings beneath a broad mountain slope",
    "eyebrow": "04 — Hillside shelters"
  },
  {
    "file": "20261026_132803",
    "chapter": "Sunlit slopes",
    "title": "Light on<br><em>the land.</em>",
    "text": "Sunlight catches a low rounded hill. Green and gold meet beneath a sky that seems to go on forever.",
    "caption": "Sunlit grassland and a rounded hill",
    "alt": "Green and golden grass below a rounded hill and a bright blue sky",
    "eyebrow": "05 — Sunlit slopes"
  },
  {
    "file": "20261026_134842",
    "chapter": "Volcanic earth",
    "eyebrow": "06 — Volcanic earth",
    "title": "Old fire.<br><em>Quiet ground.</em>",
    "text": "Volcanic mountains give the Javakheti Plateau its unmistakable shape. Broad slopes and stony ridges meet an almost treeless horizon.",
    "caption": "Volcanic forms and open grassland",
    "alt": "Pale volcanic mountains rising above an open grassland beneath heavy clouds"
  },
  {
    "file": "20261026_134847",
    "chapter": "Stone & sky",
    "eyebrow": "07 — Stone & sky",
    "title": "Written<br><em>in stone.</em>",
    "text": "Dark rock interrupts the soft line of the hillside. Up close, this open landscape becomes a study in texture, shadow and time.",
    "caption": "Dark stone against an autumn sky",
    "alt": "Jagged dark rocks on a grassy ridge below brilliant clouds"
  },
  {
    "file": "20261026_135140",
    "chapter": "Across the plateau",
    "title": "The long<br><em>view.</em>",
    "text": "A rough track opens onto rolling grassland. The distant hills invite the eye to wander beyond the next ridge.",
    "caption": "A stony track across open grassland",
    "alt": "A rough stony track across rolling grassland with mountains in the distance",
    "eyebrow": "08 — Across the plateau"
  },
  {
    "file": "20261026_135348",
    "chapter": "Rock & grass",
    "title": "Dark stone.<br><em>Golden grass.</em>",
    "text": "A dark band of rock cuts across the hillside. Beyond it, the mountain rises into a few passing clouds.",
    "caption": "Dark rock beneath a distant mountain",
    "alt": "A dark rocky ridge above golden grass with a broad mountain beyond",
    "eyebrow": "09 — Rock & grass"
  },
  {
    "file": "20261026_135640",
    "chapter": "Passing weather",
    "title": "Clouds<br><em>in motion.</em>",
    "text": "Puddles catch the light beside the track. Overhead, clouds bring a different rhythm to this still, open country.",
    "caption": "Cloud shadows and water beside the track",
    "alt": "Puddles beside a muddy track through open grassland under large clouds",
    "eyebrow": "10 — Passing weather"
  },
  {
    "file": "20261026_135830",
    "chapter": "The open plain",
    "title": "Under one<br><em>great sky.</em>",
    "text": "The plain stretches toward a distant mountain. Almost nothing interrupts the meeting of earth and sky.",
    "caption": "An open plain beneath the mountain",
    "alt": "A broad dry grassland plain beneath a mountain and a deep blue sky",
    "eyebrow": "11 — The open plain"
  },
  {
    "file": "20261026_140511",
    "chapter": "Stones in the meadow",
    "title": "Near enough<br><em>to notice.</em>",
    "text": "A small gathering of pale stones sits in the grass. Slow down, and the immense landscape begins to reveal its details.",
    "caption": "Pale stones scattered in the grass",
    "alt": "Pale rocks in a grassy meadow with rolling hills and clouds beyond",
    "eyebrow": "12 — Stones in the meadow"
  },
  {
    "file": "20261026_143339",
    "chapter": "The lakes",
    "eyebrow": "13 — The lakes",
    "title": "A second<br><em>sky.</em>",
    "text": "Javakheti is a land of lakes, including Paravani, Georgia’s largest. In the region’s long, cold winters, the water can remain frozen for months.",
    "caption": "Lake water and distant mountain silhouettes",
    "alt": "Blue lake stretching toward a chain of distant mountains"
  },
  {
    "file": "20261026_150626",
    "chapter": "Everyday highlands",
    "title": "Life beneath<br><em>the peaks.</em>",
    "text": "Low buildings stand beneath a distant snowy summit. The quiet of the highlands also holds the marks of everyday life.",
    "caption": "Low buildings and a snow-bright summit",
    "alt": "Low rural buildings with a distant snow-covered summit beneath layered clouds",
    "eyebrow": "14 — Everyday highlands"
  },
  {
    "file": "20261026_153706",
    "chapter": "Living landscape",
    "eyebrow": "15 — Living landscape",
    "title": "Room<br><em>to breathe.</em>",
    "text": "Few trees break the plateau’s great expanses. In these photographs, fields and grasslands carry the warm colours of late October.",
    "caption": "Autumn fields beneath passing clouds",
    "alt": "Golden and green fields across an immense open plain under billowing clouds"
  },
  {
    "file": "P1040789",
    "chapter": "Wild lives",
    "eyebrow": "16 — Wild lives",
    "title": "Pause.<br><em>Look closer.</em>",
    "text": "The region’s lakes shelter nesting and migratory birds. Javakheti’s protected areas, established in 2011, conserve a remarkable highland landscape.",
    "caption": "A quiet encounter along the way · species unidentified",
    "alt": "A bird perched high on a utility pole against a clear blue sky",
    "position": "50% 43%"
  },
  {
    "file": "20261026_165154",
    "chapter": "Worked earth",
    "title": "Lines across<br><em>the land.</em>",
    "text": "Furrows lead the eye toward the mountains. Cultivated fields add their own geometry to the wide highland landscape.",
    "caption": "Furrows pointing toward distant mountains",
    "alt": "Ploughed field furrows leading toward a distant chain of mountains",
    "eyebrow": "17 — Worked earth"
  },
  {
    "file": "20261026_165716",
    "chapter": "Evening water",
    "eyebrow": "18 — Evening water",
    "title": "Nothing<br><em>to hurry.</em>",
    "text": "Mountains settle into layers beyond the water. Stay for the shifting light; let the next moment arrive in its own time.",
    "caption": "Soft evening light across the lake",
    "alt": "Late afternoon light on a lake and overlapping mountain ridges"
  },
  {
    "file": "20261026_171648",
    "chapter": "The last expanse",
    "title": "A softer<br><em>horizon.</em>",
    "text": "The colours grow quieter as the day moves on. A strip of water rests beyond the open grassland and dark earth.",
    "caption": "Late light over grassland and water",
    "alt": "Open grassland and dark soil beside a distant strip of water in late light",
    "eyebrow": "19 — The last expanse"
  },
  {
    "file": "20261026_174417",
    "chapter": "After the light",
    "eyebrow": "20 — After the light",
    "title": "The day fades.<br><em>The feeling stays.</em>",
    "text": "A last veil of mist. A little gold at the edge of the sky. The journey ends here, but there is always another reason to look again.",
    "caption": "Sunset and mist over the highlands",
    "alt": "Golden sunset behind mountains with a low veil of mist across dark grassland"
  }
];
const $=id=>document.getElementById(id);
const scenes=$('scenes'),nav=$('chapters');
$('total').textContent=String(slides.length).padStart(2,'0');
nav.setAttribute('aria-label','Choose a photograph');
slides.forEach((s,i)=>{const el=document.createElement('div');el.className='scene';el.setAttribute('aria-hidden','true');const im=document.createElement('img');im.src=`assets/${s.file}.webp`;im.alt=s.alt;im.style.objectPosition=s.position||'50% 50%';im.decoding='async';im.loading=i<2?'eager':'lazy';el.append(im);scenes.append(el);const b=document.createElement('button');b.title=s.chapter;b.setAttribute('aria-label',`${i+1}: ${s.chapter}`);b.innerHTML=`<img src="assets/${s.file}.webp" alt="" loading="lazy">`;b.onclick=()=>go(i);nav.append(b)});
let current=0,timer=null,playing=false,swap=0;
function render(){const s=slides[current];[...scenes.children].forEach((el,i)=>{el.classList.toggle('active',i===current);el.setAttribute('aria-hidden',String(i!==current))});[...nav.children].forEach((el,i)=>{el.classList.toggle('active',i===current);el.setAttribute('aria-current',i===current?'step':'false')});const selected=nav.children[current];if(selected){const left=selected.getBoundingClientRect().left-nav.getBoundingClientRect().left+nav.scrollLeft;nav.scrollTo({left:Math.max(0,left-nav.clientWidth/2+selected.clientWidth/2),behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}scenes.children[current].querySelector('img').loading='eager';scenes.children[(current+1)%slides.length].querySelector('img').loading='eager';$('eyebrow').textContent=s.eyebrow;$('title').innerHTML=s.title;$('description').textContent=s.text;$('photoCaption').textContent=s.caption;$('chapterLabel').textContent=`${String(current+1).padStart(2,'0')} / ${s.chapter.toUpperCase()}`;$('current').textContent=String(current+1).padStart(2,'0');$('sideCount').textContent=`${String(current+1).padStart(2,'0')} — ${String(slides.length).padStart(2,'0')}`;$('begin').textContent=current===0?'Begin the journey ↗':current===slides.length-1?'Experience it again ↗':'Continue exploring ↗';$('progress').style.width=`${(current+1)/slides.length*100}%`;history.replaceState(null,'',`${location.pathname}${location.search}#${current+1}`);}
function go(i){current=(i+slides.length)%slides.length;clearTimeout(swap);document.querySelector('.story').classList.add('changing');swap=setTimeout(()=>{render();document.querySelector('.story').classList.remove('changing')},matchMedia('(prefers-reduced-motion: reduce)').matches?0:220);if(playing)restart()}
function restart(){clearInterval(timer);timer=setInterval(()=>go(current+1),10000)}
function play(value){playing=value;$('autoplay').setAttribute('aria-label',playing?'Pause slideshow':'Play slideshow');$('playIcon').textContent=playing?'Ⅱ':'▶';$('playStatus').textContent=playing?'A new chapter every 10 seconds':'Explore at your own pace';if(playing)restart();else clearInterval(timer)}
document.querySelector('.wordmark').onclick=e=>{e.preventDefault();go(0)};
$('begin').onclick=()=>go(current+1);$('previous').onclick=()=>go(current-1);$('next').onclick=()=>go(current+1);$('autoplay').onclick=()=>play(!playing);
$('sourceOpen').onclick=()=>{play(false);$('notes').showModal()};$('sourceClose').onclick=()=>$('notes').close();$('notes').onclick=e=>{if(e.target===$('notes')){const r=$('notes').getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)$('notes').close()}};
document.addEventListener('keydown',e=>{if($('notes').open||/INPUT/.test(e.target.tagName))return;if(e.key==='ArrowRight'){e.preventDefault();go(current+1)}if(e.key==='ArrowLeft'){e.preventDefault();go(current-1)}if(e.code==='Space'&&!/BUTTON|A/.test(e.target.tagName)){e.preventDefault();play(!playing)}});
let touch;document.addEventListener('touchstart',e=>{if(e.target.closest?.('#chapters,button,a,input,dialog')){touch=null;return;}if(!$('notes').open)touch={x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY}},{passive:true});document.addEventListener('touchend',e=>{if(!touch||$('notes').open)return;const dx=e.changedTouches[0].clientX-touch.x,dy=e.changedTouches[0].clientY-touch.y;if(Math.abs(dx)>60&&Math.abs(dx)>Math.abs(dy))go(current+(dx<0?1:-1));touch=null},{passive:true});
$('fullscreen').onclick=async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await $('experience').requestFullscreen()}catch{$('fullscreen').title='Fullscreen is unavailable in this browser'}};if(!document.fullscreenEnabled)$('fullscreen').hidden=true;
// Start the owner's soundtrack by default; respect browser autoplay decisions.
const audio=$('soundtrack');
let soundOn=false,wantsSound=true,awaitingSound=false,audioAttempt=0,resumeSlideshow=false;
audio.volume=+$('volume').value;
function soundState(on){
  soundOn=on;
  $('sound').setAttribute('aria-pressed',String(on));
  $('sound').setAttribute('aria-label',on?'Turn off ambient music':'Turn on ambient music');
  $('soundLabel').textContent=on?'Sound on':'Sound off';
  $('sound').classList.remove('audio-awaiting');
}
async function startAudio(){
  if(!wantsSound||document.hidden)return;
  const attempt=++audioAttempt;
  try{
    await audio.play();
    if(attempt!==audioAttempt)return;
    if(!wantsSound){audio.pause();return;}
    awaitingSound=false;soundState(true);
  }catch(error){
    if(attempt!==audioAttempt||!wantsSound||document.hidden)return;
    soundState(false);
    awaitingSound=error.name==='NotAllowedError';
    $('soundLabel').textContent=awaitingSound?'Enable sound':'Retry sound';
    $('sound').classList.add('audio-awaiting');
    $('sound').title=awaitingSound?'Your browser needs a click to start the music':'Try playing the soundtrack again';
  }
}
$('sound').onclick=()=>{
  if(soundOn){wantsSound=false;awaitingSound=false;++audioAttempt;audio.pause();soundState(false);return;}
  wantsSound=true;startAudio();
};
// A normal visitor gesture can unlock requested sound, without overriding a mute.
function unlockSound(event){
  if(!event.isTrusted||!wantsSound||!awaitingSound||event.target.closest?.('#sound,#volume'))return;
  awaitingSound=false;startAudio();
}
document.addEventListener('pointerup',unlockSound);
document.addEventListener('keydown',unlockSound);
$('volume').oninput=()=>{audio.volume=+$('volume').value;};
audio.addEventListener('playing',()=>{
  if(!wantsSound||document.hidden){audio.pause();return;}
  awaitingSound=false;soundState(true);
});
audio.addEventListener('error',()=>{
  soundState(false);$('soundLabel').textContent='Retry sound';$('sound').classList.add('audio-awaiting');
});
document.addEventListener('visibilitychange',()=>{
  if(document.hidden){resumeSlideshow=playing;play(false);++audioAttempt;audio.pause();}
  else{
    if(resumeSlideshow&&!$('notes').open)play(true);
    resumeSlideshow=false;
    if(wantsSound)startAudio();
  }
});
const hash=Number(location.hash.slice(1));if(Number.isInteger(hash)&&hash>=1&&hash<=slides.length)current=hash-1;render();

function startExperience(){
  if(document.hidden){resumeSlideshow=true;return;}
  play(true);startAudio();
}
if(document.readyState==='complete')startExperience();
else window.addEventListener('load',startExperience,{once:true});
