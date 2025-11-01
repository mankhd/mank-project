const translations = {
  id: {
    project: "Proyek",
    findMe: "Media Sosial",
    desc: "Buatan Mank",
    gamesIPlay: "Aku Main",
    position: "Buatan Mank"
  },
  en: {
    project: "Project",
    findMe: "Find Me",
    desc: "Created by Mank",
    gamesIPlay: "Games I Play",
    position: "Made by Mank"
  },
  mn: {
    project: "Puloik",
    findMe: "Cari Den",
    desc: "Buatan Mank",
    gamesIPlay: "Game Ambo",
    position: "Kajoan Mank"
  },
  my: {
    project: "Projek",
    findMe: "Cari Saya",
    desc: "Buatan Mank",
    gamesIPlay: "Permainan Saya",
    position: "Dibikin Mank"
  },
  jw: {
    project: "Proyek",
    findMe: "Goleki Aku",
    desc: "Gaweane Mank",
    gamesIPlay: "Game Sing Tak Mainke",
    position: "Digawe Mank"
  }
};

function getBrowserLanguage() {
  let lang = navigator.language.split('-')[0];
  return translations[lang] ? lang : "id";
}

let currentLang = getBrowserLanguage();

function switchLanguage(lang) {
  currentLang = lang;
  updateContent();
}

function updateContent() {
  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    el.textContent = translations[currentLang][key];
  });
}

document.addEventListener("DOMContentLoaded", updateContent);

function toggleLangMenu() {
  const menu = document.getElementById("langMenu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

document.addEventListener("click", e => {
  const menu = document.getElementById("langMenu");
  const btn = document.querySelector(".hamburger-btn");
  if (!menu.contains(e.target) && !btn.contains(e.target)) menu.style.display = "none";
});
