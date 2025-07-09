// Переключение языков по ключам data-lang-key

const translations = {
  ru: {
    title: "Shuhrat Korean Academy",
    welcome: "Добро пожаловать в лучшую академию для изучения корейского языка!",
    "features-title": "Что тебя ждёт?",
    feature1: "Уникальные уроки по Хангылю и грамматике",
    feature2: "Интерактивные тесты и карточки",
    feature3: "Видео и аудио материалы",
    feature4: "Поддержка на русском, английском и корейском"
  },
  en: {
    title: "Shuhrat Korean Academy",
    welcome: "Welcome to the best academy for learning Korean!",
    "features-title": "What awaits you?",
    feature1: "Unique lessons on Hangul and grammar",
    feature2: "Interactive tests and flashcards",
    feature3: "Video and audio materials",
    feature4: "Support in Russian, English, and Korean"
  },
  ko: {
    title: "슈흐랏 한국 아카데미",
    welcome: "한국어를 배우기에 최고의 아카데미에 오신 것을 환영합니다!",
    "features-title": "기대할 점은?",
    feature1: "한글 및 문법에 관한 독특한 수업",
    feature2: "인터랙티브 테스트 및 플래시카드",
    feature3: "비디오 및 오디오 자료",
    feature4: "러시아어, 영어, 한국어 지원"
  }
};

const langButtons = document.querySelectorAll(".lang-btn");
const elementsToTranslate = document.querySelectorAll("[data-lang-key]");

langButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const lang = btn.getAttribute("data-lang");
    elementsToTranslate.forEach(el => {
      const key = el.getAttribute("data-lang-key");
      el.textContent = translations[lang][key];
    });
  });
});
