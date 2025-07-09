
const translations = {
  ru: {
    title: "Shuhrat Korean Academy",
    welcome: "Добро пожаловать в лучшую академию для изучения корейского языка!",
    start: "🚀 Начать учиться"
  },
  en: {
    title: "Shuhrat Korean Academy",
    welcome: "Welcome to the best academy for learning Korean!",
    start: "🚀 Start Learning"
  },
  ko: {
    title: "슈흐랏 한국 아카데미",
    welcome: "한국어를 배우기에 최고의 아카데미에 오신 것을 환영합니다!",
    start: "🚀 학습 시작"
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
