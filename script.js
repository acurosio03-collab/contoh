const nav=document.querySelector('.nav');
window.addEventListener('scroll',()=>{
  nav.style.background = scrollY>40
    ? 'linear-gradient(180deg,#130e08ee,#130e08cc)'
    : 'linear-gradient(180deg,#130e08cc,transparent)';
});

// hero video starts muted (browsers block autoplay-with-sound no matter what
// the code does) — the very first tap/click ANYWHERE on the page unmutes it,
// so sound turns on as soon as the visitor does anything, not just the button
const heroVideo=document.querySelector('.hero-video');
const soundToggle=document.getElementById('soundToggle');

function setSoundIcon(){
  if(soundToggle) soundToggle.innerHTML = heroVideo.muted ? '🔇 <span>Suara</span>' : '🔊 <span>Suara</span>';
}

if(heroVideo){
  document.addEventListener('click', function firstTap(){
    heroVideo.muted=false;
    heroVideo.play().catch(()=>{});
    setSoundIcon();
    document.removeEventListener('click', firstTap);
  }, {once:true});
}

if(soundToggle){
  soundToggle.addEventListener('click',(e)=>{
    e.stopPropagation();
    heroVideo.muted=!heroVideo.muted;
    setSoundIcon();
  });
}

// tap-to-reveal captions on touch devices (hover doesn't exist there)
document.querySelectorAll('.gallery-grid figure').forEach(fig=>{
  fig.addEventListener('click',()=>{
    document.querySelectorAll('.gallery-grid figcaption').forEach(c=>c.style.opacity=0);
    const cap=fig.querySelector('figcaption');
    if(cap) cap.style.opacity=1;
  });
});
