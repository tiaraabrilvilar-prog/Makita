// ========== Navbar scroll effect ==========
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
    navbar.style.background = 'rgba(21,23,40,0.9)';
  } else {
    navbar.classList.remove('scrolled');
    navbar.style.background = 'transparent';
  }
});

// ========== Mobile menu ==========
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');
let menuOpen = false;

function toggleMenu() {
  menuOpen = !menuOpen;
  mobileMenu.classList.toggle('open', menuOpen);
  menuIcon.classList.toggle('hidden', menuOpen);
  closeIcon.classList.toggle('hidden', !menuOpen);
}

function closeMenu() {
  menuOpen = false;
  mobileMenu.classList.remove('open');
  menuIcon.classList.remove('hidden');
  closeIcon.classList.add('hidden');
}

menuBtn.addEventListener('click', toggleMenu);

// ========== Tabs ==========
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const tab = btn.dataset.tab;
    tabBtns.forEach(b => b.classList.remove('active'));
    tabContents.forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-' + tab).classList.add('active');
  });
});

// ========== Scroll reveal ==========
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

revealElements.forEach(el => revealObserver.observe(el));

// ========== Product details hover ==========
const badges = document.querySelectorAll('.detail-badge');
const hotspots = document.querySelectorAll('.hotspot');

function setActive(id) {
  badges.forEach(b => b.classList.toggle('active', b.dataset.id === id));
  hotspots.forEach(h => h.classList.toggle('active', h.dataset.id === id));
}

badges.forEach(b => {
  b.addEventListener('mouseenter', () => setActive(b.dataset.id));
  b.addEventListener('mouseleave', () => setActive(null));
});

hotspots.forEach(h => {
  h.addEventListener('mouseenter', () => setActive(h.dataset.id));
  h.addEventListener('mouseleave', () => setActive(null));
});

// ========== Smooth scroll for anchor links ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') {
      e.preventDefault();
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
