const dot=document.querySelector('.cursor-dot'), ring=document.querySelector('.cursor');
window.addEventListener('pointermove',e=>{
  dot.style.left=e.clientX+'px';dot.style.top=e.clientY+'px';
  ring.animate({left:e.clientX+'px',top:e.clientY+'px'},{duration:350,fill:'forwards'});
});
document.querySelectorAll('a,.project,.stamp-card').forEach(el=>{
  el.addEventListener('mouseenter',()=>ring.style.transform='translate(-50%,-50%) scale(1.65)');
  el.addEventListener('mouseleave',()=>ring.style.transform='translate(-50%,-50%) scale(1)');
});

// pause the ticker/tape animations on hover so headline text is easy to read
document.querySelectorAll('.ticker-track,.tape-track').forEach(el=>{
  el.addEventListener('mouseenter',()=>el.style.animationPlayState='paused');
  el.addEventListener('mouseleave',()=>el.style.animationPlayState='running');
});
