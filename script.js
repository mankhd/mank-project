function toggleLangMenu() {
  const menu = document.getElementById('langMenu');
  menu.classList.toggle('active');
}

document.addEventListener('click', (e) => {
  const menu = document.getElementById('langMenu');
  const btn = document.querySelector('.hamburger-btn');
  if (!menu.contains(e.target) && e.target !== btn) {
    menu.classList.remove('active');
  }
});

function switchLanguage(lang) {
  console.log("Language selected:", lang);
  document.getElementById('langMenu').classList.remove('active');
}
