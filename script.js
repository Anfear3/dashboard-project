document.addEventListener("DOMContentLoaded", () => {
  const shareButton = document.querySelector(".share-button");
  const socialMenu = document.querySelector(".social-menu");
  const cardFooter = document.querySelector(".card-footer");
  const authorInfo = document.querySelector(".author-info");

  if (!shareButton || !socialMenu || !cardFooter || !authorInfo) {
    console.error("Не все элементы найдены. Проверь селекторы.");
    return;
  }

  shareButton.addEventListener("click", () => {
    // Проверяем ширину окна
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;

    if (isDesktop) {
      // --- ЛОГИКА ДЛЯ ДЕСКТОПА ---
      // Просто показываем/скрываем "облачко"
      socialMenu.classList.toggle("active");
      shareButton.classList.toggle("active-state");
    } else {
      // --- ЛОГИКА ДЛЯ МОБИЛКИ ---
      // "Облачко" нам не нужно, мы меняем весь футер

      // Переключаем активное состояние на кнопке
      shareButton.classList.toggle("active-state");

      // Показываем/скрываем элементы
      authorInfo.toggleAttribute("hidden");
      socialMenu.classList.toggle("active"); // Используем .active для display:flex

      // Меняем фон футера
      cardFooter.classList.toggle("footer-active-mobile");
    }
  });
});
