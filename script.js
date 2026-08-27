const nav=document.querySelector('.nav');
window.addEventListener('scroll',()=>{
  nav.style.background = scrollY>40 ? 'linear-gradient(180deg,#130e08ee,#130e08cc)' : 'linear-gradient(180deg,#130e08cc,transparent)';
});

document.querySelectorAll('.gallery-grid figure').forEach(fig=>{
  fig.addEventListener('click',()=>{
    document.querySelectorAll('.gallery-grid figcaption').forEach(c=>c.style.opacity=0);
    const cap=fig.querySelector('figcaption'); if(cap) cap.style.opacity=1;
  });
});


// Background music: otomatis mencoba berjalan dan aktif setelah interaksi pertama.
const bgMusic = document.getElementById('bg-music');
if (bgMusic) {
  bgMusic.volume = 0.32;
  const startMusic = () => {
    bgMusic.play().catch(() => {});
  };
  startMusic();
  ['pointerdown','touchstart','scroll','keydown'].forEach(evt => {
    window.addEventListener(evt, startMusic, { once: true, passive: true });
  });
}
