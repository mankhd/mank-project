// ========== ANIMASI FADE IN SAAT LOAD ==========
window.addEventListener("load", () => {
  document.body.classList.remove("preload");
  document.body.classList.add("loaded");
});

// ========== DROPDOWN BAHASA ==========
const langBtn = document.getElementById("langBtn");
const langMenu = document.getElementById("langMenu");
const langButtons = langMenu.querySelectorAll("button");

// default: Indonesia 🇮🇩
let currentLang = "id";
applyTranslations(currentLang);
updateLangButton(currentLang);

// buka/tutup menu bahasa
function toggleLangMenu() {
  langMenu.classList.toggle("active");
}

// tutup saat klik di luar
document.addEventListener("click", (e) => {
  if (!langMenu.contains(e.target) && e.target !== langBtn) {
    langMenu.classList.remove("active");
  }
});

// pilih bahasa
langButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const lang = btn.dataset.lang;
    if (lang && translations[lang]) {
      currentLang = lang;
      applyTranslations(lang);
      updateLangButton(lang);
      langMenu.classList.remove("active");
    }
  });
});

// ========== UPDATE TEKS & EMOJI BAHASA AKTIF ==========
function updateLangButton(lang) {
  const emojiMap = {
    id: "🇮🇩",
    en: "🇬🇧",
    mn: "🥥",
    my: "🌺",
    jw: "🦜",
  };
  langBtn.textContent = emojiMap[lang] + " 🌐";
}

// ========== SISTEM TRANSLASI ==========
const translations = {
  id: {
    gamesTitle: "Games I Play",
    robloxTitle: "Roblox",
    robloxSub: "mankhade",
    stumbleTitle: "Stumble Guys",
    stumbleSub: "ELz | Mank",
    donateTitle: "Donate Me",
    sociabuzz: "SociaBuzz",
    sociabuzzSub: "MankHD",
    saweria: "Saweria",
    saweriaSub: "manks",
    findTitle: "Find Me",
    spotify: "Spotify",
    spotifySub: "Mank",
    youtube: "YouTube",
    youtubeSub: "manghd",
    github: "GitHub",
    githubSub: "mankhd",
    discord: "Discord",
    discordSub: "ELz Clan • SG"
  },
  en: {
    gamesTitle: "Games I Play",
    robloxTitle: "Roblox",
    robloxSub: "mankhade",
    stumbleTitle: "Stumble Guys",
    stumbleSub: "ELz | Mank",
    donateTitle: "Donate Me",
    sociabuzz: "SociaBuzz",
    sociabuzzSub: "MankHD",
    saweria: "Saweria",
    saweriaSub: "manks",
    findTitle: "Find Me",
    spotify: "Spotify",
    spotifySub: "Mank",
    youtube: "YouTube",
    youtubeSub: "manghd",
    github: "GitHub",
    githubSub: "mankhd",
    discord: "Discord",
    discordSub: "ELz Clan • SG"
  },
  mn: {
    gamesTitle: "Game nan Ambo Mainkan",
    robloxTitle: "Roblox",
    robloxSub: "mankhade",
    stumbleTitle: "Stumble Guys",
    stumbleSub: "ELz | Mank",
    donateTitle: "Donasi",
    sociabuzz: "SociaBuzz",
    sociabuzzSub: "MankHD",
    saweria: "Saweria",
    saweriaSub: "manks",
    findTitle: "Cari Ambo",
    spotify: "Spotify",
    spotifySub: "Mank",
    youtube: "YouTube",
    youtubeSub: "manghd",
    github: "GitHub",
    githubSub: "mankhd",
    discord: "Discord",
    discordSub: "ELz Clan • SG"
  },
  my: {
    gamesTitle: "Permainan Saya",
    robloxTitle: "Roblox",
    robloxSub: "mankhade",
    stumbleTitle: "Stumble Guys",
    stumbleSub: "ELz | Mank",
    donateTitle: "Sumbangan",
    sociabuzz: "SociaBuzz",
    sociabuzzSub: "MankHD",
    saweria: "Saweria",
    saweriaSub: "manks",
    findTitle: "Temui Saya",
    spotify: "Spotify",
    spotifySub: "Mank",
    youtube: "YouTube",
    youtubeSub: "manghd",
    github: "GitHub",
    githubSub: "mankhd",
    discord: "Discord",
    discordSub: "ELz Clan • SG"
  },
  jw: {
    gamesTitle: "Game sing Tak Main",
    robloxTitle: "Roblox",
    robloxSub: "mankhade",
    stumbleTitle: "Stumble Guys",
    stumbleSub: "ELz | Mank",
    donateTitle: "Sumbang",
    sociabuzz: "SociaBuzz",
    sociabuzzSub: "MankHD",
    saweria: "Saweria",
    saweriaSub: "manks",
    findTitle: "Golek Aku",
    spotify: "Spotify",
    spotifySub: "Mank",
    youtube: "YouTube",
    youtubeSub: "manghd",
    github: "GitHub",
    githubSub: "mankhd",
    discord: "Discord",
    discordSub: "ELz Clan • SG"
  }
};

// ========== FUNGSI UTAMA GANTI TEKS ==========
function applyTranslations(lang) {
  const dict = translations[lang] || translations.id;
  document.querySelectorAll("[data-key]").forEach((el) => {
    const key = el.dataset.key;
    if (dict[key]) el.textContent = dict[key];
  });
}
