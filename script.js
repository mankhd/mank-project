// Animasi load halus
window.addEventListener("load", () => {
  document.body.classList.remove("preload");
});

// Toggle menu bahasa 🌐
const langBtn = document.getElementById("langBtn");
const langMenu = document.getElementById("langMenu");

function toggleLangMenu() {
  langMenu.classList.toggle("active");
}

document.addEventListener("click", (e) => {
  if (!langMenu.contains(e.target) && e.target !== langBtn) {
    langMenu.classList.remove("active");
  }
});

// 🔤 Data terjemahan
const translations = {
  id: {
    gamesIPlay: "Aku Main",
    donation: "Dukung Aku",
    findMe: "Cari Aku",
  },
  en: {
    gamesIPlay: "Games I Play",
    donation: "Support Me",
    findMe: "Find Me",
  },
  mn: {
    gamesIPlay: "Game nan Ambo Mainkan",
    donation: "Donasi",
    findMe: "Cari Ambo",
  },
  my: {
    gamesIPlay: "Permainan Saya",
    donation: "Sumbangan",
    findMe: "Temui Saya",
  },
  jw: {
    gamesIPlay: "Game sing Tak Main",
    donation: "Sumbang Aku",
    findMe: "Golek Aku",
  },
};

// 🔁 Fungsi ubah bahasa
function switchLanguage(lang) {
  const texts = translations[lang] || translations.id;
  document.querySelectorAll("[data-translate]").forEach((el) => {
    const key = el.getAttribute("data-translate");
    if (texts[key]) {
      el.textContent = texts[key];
    }
  });
  updateLangIcon(lang);
  langMenu.classList.remove("active");
}

// 🌐 Ganti emoji bendera
function updateLangIcon(lang) {
  const icons = {
    id: "🇮🇩",
    en: "🇬🇧",
    mn: "🥥",
    my: "🌺",
    jw: "🦜",
  };
  langBtn.textContent = icons[lang] + " 🌐";
}

// Set default ke Indonesia
switchLanguage("id");
