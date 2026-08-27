const dot=document.querySelector('.cursor-dot'), ring=document.querySelector('.cursor');
window.addEventListener('pointermove',e=>{dot.style.left=e.clientX+'px';dot.style.top=e.clientY+'px';ring.animate({left:e.clientX+'px',top:e.clientY+'px'},{duration:350,fill:'forwards'});});
document.querySelectorAll('a,.project,.service-list>div').forEach(el=>{
  el.addEventListener('mouseenter',()=>ring.style.transform='translate(-50%,-50%) scale(1.65)');
  el.addEventListener('mouseleave',()=>ring.style.transform='translate(-50%,-50%) scale(1)');
});
const art=document.querySelector('.hero-art');
window.addEventListener('scroll',()=>{if(art && innerWidth>850){const y=scrollY;art.style.transform=`translateY(${Math.min(y*.08,45)}px)`;}});
