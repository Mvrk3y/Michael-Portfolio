const strong = document.querySelector('.hero strong');
const originalText = strong.textContent;
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*';
let iterations = 0;

function decryptEffect() {
  let display = '';
  for (let i = 0; i < originalText.length; i++) {
    if (i < iterations) {
      display += originalText[i];
    } else if (originalText[i] === ' ') {
      display += ' ';
    } else {
      display += chars[Math.floor(Math.random() * chars.length)];
    }
  }
  strong.textContent = display;
  if (iterations < originalText.length) {
    iterations++;
    setTimeout(decryptEffect, 170);
  }
}

window.addEventListener('DOMContentLoaded', decryptEffect);

// Scroll to Top Button
const btn = document.getElementById('btn-back-to-top');
window.onscroll = function () {
  btn.style.display = (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) ? "block" : "none";
};
btn.onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Section reveal on scroll
const reveals = document.querySelectorAll('.reveal');
function revealOnScroll() {
  for (const el of reveals) {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add('visible');
    }
  }
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

// Dark mode toggle
document.getElementById('darkModeToggle').onclick = function () {
  document.body.classList.toggle('dark-mode');
};
