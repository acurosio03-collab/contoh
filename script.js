const nav=document.querySelector('.nav');
window.addEventListener('scroll',()=>{
  nav.style.background = scrollY>40
    ? 'linear-gradient(180deg,#130e08ee,#130e08cc)'
    : 'linear-gradient(180deg,#130e08cc,transparent)';
});

// tap-to-reveal captions on touch devices (hover doesn't exist there)
document.querySelectorAll('.gallery-grid figure').forEach(fig=>{
  fig.addEventListener('click',()=>{
    document.querySelectorAll('.gallery-grid figcaption').forEach(c=>c.style.opacity=0);
    const cap=fig.querySelector('figcaption');
    if(cap) cap.style.opacity=1;
  });
});
