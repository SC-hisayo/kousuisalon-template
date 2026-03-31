/* loader */
window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('loader').classList.add('hidden'), 2400);
});

/* nav scroll */
const navbar = document.getElementById('navbar');
const fab    = document.getElementById('lineFab');
window.addEventListener('scroll', () => {
  const s = window.scrollY > 60;
  navbar.classList.toggle('scrolled', s);
  fab.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });

/* mobile menu */
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.add('open');
  document.body.style.overflow = 'hidden';
});
function closeMobile() {
  document.getElementById('mobileMenu').classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('mobileClose').addEventListener('click', closeMobile);

/* scroll reveal */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* floating petals */
const container = document.getElementById('petals');
const symbols   = ['🌸', '✿', '❀', '🌺'];
for (let i = 0; i < 14; i++) {
  const p = document.createElement('span');
  p.className = 'petal';
  p.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  const tx  = (Math.random() - .5) * 220;
  const rot = Math.random() * 720 - 360;
  const dur = 9 + Math.random() * 13;
  const del = Math.random() * 12;
  p.style.cssText = `
    left:${Math.random()*100}%;
    font-size:${.55 + Math.random()*.65}rem;
    --tx:${tx}px; --rot:${rot}deg;
    animation:petalFall ${dur}s ${del}s linear infinite;
  `;
  container.appendChild(p);
}
