"use strict";

const btnMain = document.querySelector(".btn__lang");
const btnBack = document.querySelector(".btn__lang_back");

btnMain.addEventListener("click", function () {
  btnBack.classList.toggle("hidden");
});

document.addEventListener("DOMContentLoaded", function () {
  // Получаем элементы btn__lang и btn__lang_back
  const btnLang = document.querySelector(".btn__lang .btn__lang_item");
  const btnLangBackItems = document.querySelectorAll(
    ".btn__lang_back .btn__lang_item"
  );

  btnLangBackItems.forEach((item) => {
    item.addEventListener("click", function (event) {
      event.preventDefault();

      // Сохраняем текущий текст и id из btn__lang
      const currentLangText = btnLang.textContent;
      const currentLangId = btnLang.id;

      // Меняем текст и id у btn__lang на значения выбранного элемента
      btnLang.textContent = this.textContent;
      btnLang.id = this.id;

      // Меняем текст и id у выбранного элемента на значения, сохраненные ранее
      this.textContent = currentLangText;
      this.id = currentLangId;

      //   btnMain.addEventListener("click", tap());
    });
    item.addEventListener("click", function () {
      btnBack.classList.toggle("hidden");
    });
  });
});
