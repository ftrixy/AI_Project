// Базові стилі для елементів акордеона
document.querySelectorAll("[data-accordion]").forEach((el) => {
   el.parentElement.addEventListener("click", toggleAccordion);
   // el.children[0].style.cursor = "pointer";
   el.children[1].style.height = "0px";
   // el.children[1].style.overflow = "hidden";
   el.children[1].style.transition = "height 0.5s ease";
});

// ? Если нужно открыть элемент аккордеона при загрузке страницы - нужно добавить класс 'opened' к элементу data-accordion
if (document.querySelector("[data-accordion].opened")) {
   document.querySelectorAll("[data-accordion].opened").forEach((el) => {
      el.children[1].style.height = el.children[1].scrollHeight + "px";
   });
}

function toggleAccordion(e) {
   if (e.target.closest("[data-accordion] > div:first-child")) {
      if (e.target.closest("[data-accordion]").classList.contains("opened")) {
         e.target.closest("[data-accordion]").classList.remove("opened");
         e.target.closest("[data-accordion]").children[1].style.height = "0px";
      } else {
         document.querySelectorAll("[data-accordion]").forEach(function (el) {
            el.classList.remove("opened");
            el.children[1].style.height = "0px";
         });
         e.target.closest("[data-accordion]").classList.toggle("opened");
         e.target.closest("[data-accordion]").children[1].style.height =
            e.target.closest("[data-accordion]").children[1].scrollHeight + "px";
      }
   }
}




// Відкриття та закриття модального вікна
const popupBtnHeader = document.querySelector('.header__btn');
const popupBtnWork = document.querySelector('.work__btn');
const popupBtnFaq = document.querySelector('.faq__btn');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const body = document.querySelector('.body');

popupBtnHeader.addEventListener('click', () => {
    popup.classList.toggle('open');
    body.classList.toggle('body--lock');
});
popupBtnWork.addEventListener('click', () => {
    popup.classList.toggle('open');
    body.classList.toggle('body--lock');
});
popupBtnFaq.addEventListener('click', () => {
    popup.classList.toggle('open');
    body.classList.toggle('body--lock');
});
popupClose.addEventListener('click', () => {
    popup.classList.remove('open');
    body.classList.toggle('body--lock');
});

