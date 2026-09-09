const header = document.querySelector('.site-header');
const langBtn = document.getElementById('langBtn');
let lang = 'en';

function setLanguage(next){
  lang = next;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-en]').forEach(el => {
    el.innerHTML = el.dataset[lang];
  });
  langBtn.textContent = lang === 'en' ? 'IT' : 'EN';
}

langBtn.addEventListener('click', () => setLanguage(lang === 'en' ? 'it' : 'en'));
window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 24), {passive:true});
document.getElementById('year').textContent = new Date().getFullYear();
