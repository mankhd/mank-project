// fade-in page on load
window.addEventListener("load", () => {
  document.body.classList.remove("preload");
  document.body.classList.add("loaded");
});

// language menu logic
const langBtn = document.getElementById("langBtn");
const langMenu = document.getElementById("langMenu");
const langButtons = langMenu.querySelectorAll("button");
let currentLang = "id";
applyTranslations(currentLang);

function toggleLangMenu() {
  langMenu.classList.toggle("active");
}

document.addEventListener("click", (e) => {
  if (!langMenu.contains(e.target) && e.target !== langBtn) {
    langMenu.classList.remove("active");
  }
});

langButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const lang = btn.dataset.lang;
    if (lang && translations[lang]) {
      currentLang = lang;
      applyTranslations(lang);
      langMenu.classList.remove("active");
    }
  });
});

const translations = {
  id: { gamesTitle: "Games I Play", donateTitle: "Donate Me", findTitle: "Find Me" },
  en: { gamesTitle: "Games I Play", donateTitle: "Donate Me", findTitle: "Find Me" },
  mn: { gamesTitle: "Game nan Ambo Mainkan", donateTitle: "Donasi", findTitle: "Cari Ambo" },
  my: { gamesTitle: "Permainan Saya", donateTitle: "Sumbangan", findTitle: "Temui Saya" },
  jw: { gamesTitle: "Game sing Tak Main", donateTitle: "Sumbang", findTitle: "Golek Aku" },
};

function applyTranslations(lang) {
  const dict = translations[lang] || translations.id;
  document.querySelectorAll("[data-key]").forEach((el) => {
    const key = el.dataset.key;
    if (dict[key]) el.textContent = dict[key];
  });
}
