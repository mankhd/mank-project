const translations = {
  en: {
    workExperience: "Work Experience",
    project: "Project",
    findMe: "Find Me",
    findMyIdDesc: "Made by Mank",
    position: "Creator (2024–Now)",
    pancakeLang: "English",
    noPage: "The page you’re looking for isn’t available.",
    gamesIPlay: "Games I Play"
  },
  id: {
    workExperience: "Pengalaman",
    project: "Proyek",
    findMe: "Media Sosial",
    findMyIdDesc: "Buatan Mank",
    position: "Kreator (2024–Sekarang)",
    pancakeLang: "Bahasa Indonesia",
    noPage: "Halaman yang kamu cari tidak tersedia.",
    gamesIPlay: "Aku Main"
  },
  mn: {
    workExperience: "Pangalaman",
    project: "Projek",
    findMe: "Cari Ambo",
    findMyIdDesc: "Buatan Mank",
    position: "Pencipta (2024–Kini)",
    pancakeLang: "Bahaso Minang",
    noPage: "Halaman nan dicari ndak ado.",
    gamesIPlay: "Game Ambo Mainkan"
  },
  my: {
    workExperience: "Pengalaman",
    project: "Projek",
    findMe: "Temui Saya",
    findMyIdDesc: "Buatan Mank",
    position: "Pencipta (2024–Sekarang)",
    pancakeLang: "Bahasa Melayu",
    noPage: "Halaman yang kamu cari tidak ada.",
    gamesIPlay: "Permainan Saya"
  },
  jw: {
    workExperience: "Pengalaman Kerja",
    project: "Proyek",
    findMe: "Temokno Aku",
    findMyIdDesc: "Gaweané Mank",
    position: "Sing Gawe (2024–Saiki)",
    pancakeLang: "Basa Jawa",
    noPage: "Halaman sing kok goleki ora ana.",
    gamesIPlay: "Game Sing Tak Dolani"
  }
};

// Ambil bahasa browser
function getBrowserLanguage() {
  let lang = navigator.language.split('-')[0];
  return translations[lang] ? lang : "id";
}

let currentLang = getBrowserLanguage();

// Ganti bahasa
function switchLanguage(lang) {
  currentLang = lang;
  updateContent();
}

// Update teks sesuai bahasa
function updateContent() {
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    element.textContent = translations[currentLang][key];
  });
}

// Jalankan saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
  updateContent();
});

// Tombol dropdown bahasa
function toggleLangMenu() {
  let menu = document.getElementById("langMenu");
  menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

// Tutup menu jika klik di luar
document.addEventListener("click", function(event) {
  let menu = document.getElementById("langMenu");
  let button = document.querySelector(".lang-btn");

  if (!menu.contains(event.target) && !button.contains(event.target)) {
    menu.style.display = "none";
  }
});

// Carousel gambar (kalau mau dipakai nanti)
const cards = document.querySelectorAll('.carousel-card');

const images = [
  ['imgs/carouselroblox1.png', 'imgs/carouselroblox2.png'], 
  ['imgs/carouselstumbleguys1.png', 'imgs/carouselstumbleguys2.png', 'imgs/carouseltheheck.gif']
];

let indices = [0, 0];

function changeBackground() {
  cards.forEach((card, i) => {
    indices[i] = (indices[i] + 1) % images[i].length;
    card.style.backgroundImage = `
      linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 5%, rgba(0, 0, 0, 0) 95%),
      url(${images[i][indices[i]]})`;
  });
}

changeBackground();
setInterval(changeBackground, 15000);
