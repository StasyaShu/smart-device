const loadWindow = (() => {
  const footerNav = document.querySelector('.footer-navigation__wrapper');
  const footerH3 = document.querySelectorAll('.footer-navigation__item');
  const footerTab = document.querySelectorAll('.footer-navigation__tab');

  return {
    removeNojs: () => {
      footerNav.classList.remove('footer-navigation__wrapper--nojs');
      footerH3.classList.remove('footer-navigation__item--nojs');
      footerH3.classList.add('footer-navigation__item--not-select');
      footerTab.classList.remove('footer-navigation__tab--nojs');
    }
  }
})()
window.addEventListener('load', loadWindow.removeNojs());

// Появление попапа с формой

(function showPopup() {
  const orderCallButton = document.querySelector('.page-header__order-call');
  const popupTemplate = document.querySelector('#popup').content.querySelector('.popup');
  const popupCloseButton = popupTemplate.querySelector('.popup__close');

  const popupForm = popupTemplate.cloneNode(true);
})();

// Аккордеон

(function handleAccordion() {
  const accordion = document.getElementById('accordion');

  if (accordion) {
    accordion.addEventListener('click', change);

    function change(evt) {
      const targ = evt.target;
      if (targ.tagName !== 'H3') return;

      if (targ.classList.contains('footer-navigation__item--select')) {
        hideAll();
      } else {
        hideAll();
        targ.classList.add('footer-navigation__item--select');
        showText(targ.nextElementSibling);
      }
    }

    function hideAll() {
      const h3El = accordion.querySelectorAll('h3');
      const divEl = accordion.querySelectorAll('div');
      for (var i = 0; i < h3El.length; i++) {
        h3El[i].classList.remove('footer-navigation__item--select');
      }
      for (var i = 0; i < divEl.length; i++) {
        divEl[i].style.height = '0';
      }
    }

    function showText(textEl) {
      textEl.style.height = textEl.scrollHeight + 'px';
    }
  }
})();

// Плавный скролл

(function scrollToAnchor() {
  const anchors = document.querySelectorAll('a[href*="#"]');
  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href').substr(1);

      if (document.getElementById(blockID)) {
        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    })
  }
})();

// Валидатор поля имени

(function validateName() {
  const inputName = document.getElementById('name-id');
  inputName.addEventListener('invalid', () => {
    if (inputName.validity.tooShort) {
      inputName.setCustomValidity('Введите пожалуйста минимум 2 символа');
    } else if (inputName.validity.tooLong) {
      inputName.setCustomValidity('Значение не должно превышать 25-ти символов');
    } else if (inputName.validity.valueMissing) {
      inputName.setCustomValidity('Введите пожалуйста Ваше имя');
    } else if (inputName.validity.patternMismatch) {
      inputName.setCustomValidity('Имя должно состоять из букв русского или английского алфавита');
    } else {
      inputName.setCustomValidity('');
    }
  })
})();

// Валидатор поля телефона

(function validateTel() {
  const inputTel = document.getElementById('tel-id');
  inputTel.addEventListener('invalid', () => {
    if (inputTel.validity.valueMissing) {
      inputTel.setCustomValidity('Введите пожалуйста номер телефона');
    } else if (inputTel.value.length < 10) {
      inputTel.setCustomValidity('Номер телефона должен содержать 11 цифр, включая +7');
    } else {
      inputTel.setCustomValidity('');
    }
  })
})();

// Маска для телефона

(() => {
  document.addEventListener('DOMContentLoaded', () => {

    const inputTel = document.getElementById('tel-id');
    const maskOptions = {
      mask: '+{7}(000)000-00-00'
    }
    IMask(inputTel, maskOptions)
  })
})();
