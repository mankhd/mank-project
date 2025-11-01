// Simple translation system (default = Indonesian)
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
  mn: { /* Minang - example translations; feel free to edit */
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
  my: { /* Melayu */
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
  jw: { /* Jawa (basic) */
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

const langBtn = document.getElementById('langBtn');
const langMenu = document.getElementById('langMenu');
const langButtons = Array.from(langMenu.querySelectorAll('button'));

// default language = Indonesian
let currentLang = 'id';
applyTranslations(currentLang);

// Toggle dropdown
function toggleLangMenu() {
  const isActive = langMenu.classList.contains('active');
  if (isActive) closeMenu();
  else openMenu();
}
function openMenu() {
  langMenu.classList.add('active');
  langMenu.setAttribute('aria-hidden','false');
  langBtn.setAttribute('aria-expanded','true');
}
function closeMenu() {
  langMenu.classList.remove('active');
  langMenu.setAttribute('aria-hidden','true');
  langBtn.setAttribute('aria-expanded','false');
}

// Clicking language option
langButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.lang;
    if (!lang || !translations[lang]) return;
    currentLang = lang;
    applyTranslations(lang);
    closeMenu();
  });
});

// click outside to close
document.addEventListener('click', (e) => {
  const target = e.target;
  if (!langMenu.contains(target) && target !== langBtn) closeMenu();
});

// Apply translations to elements with data-key
function applyTranslations(lang) {
  const dict = translations[lang] || translations['id'];
  document.querySelectorAll('[data-key]').forEach(el => {
    const k = el.getAttribute('data-key');
    if (k && dict[k]) el.textContent = dict[k];
  });
}
