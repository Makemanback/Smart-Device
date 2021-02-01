'use strict';

(function () {
  var ESC_BUTTON = 'Escape';
  var WindowWidths = {
    tablet: 768,
    desktop: 1024
  };

  // маски
  var tels = document.querySelectorAll('input[type="tel"]');
  /*eslint-disable*/
  var im = new Inputmask({
    mask: ['+7-999-999-99-99'],
    clearIncomplete: true
  }
  );

  /*eslint-disable*/
  im.mask(tels);

  // console.log(tels[0].inputmask.maskset.tests)
  var order = document.querySelector('.order-button');

  var changeOrder = function () {
    if (window.innerWidth >= WindowWidths.tablet) {
      order.textContent = 'получить бесплатную консультацию';
    } else {
      order.textContent = 'бесплатная консультация';
    }
  };

  changeOrder();

  window.addEventListener('resize', changeOrder);

  var protect = document.querySelector('.protected');

  var hideProtected = function () {
    if (window.innerWidth < WindowWidths.desktop) {
      protect.classList.add('visually-hidden');
    } else {
      protect.classList.remove('visually-hidden');
    }
  };

  hideProtected();
  window.addEventListener('resize', hideProtected);

  // конпки открытия закрытия меню
  var section = document.querySelector('.sections');
  var sectionsButton = document.querySelector('.sections__button');
  var sectionsOpenIcon = document.querySelector('.open-image');
  var sectionsCloseIcon = document.querySelector('.close-image');
  var sections = document.querySelector('.sections__block-wrapper');

  var addressSection = document.querySelector('.address');
  var addressButton = document.querySelector('.address__button');
  var addressOpenIcon = document.querySelector('.open-image-address');
  var addressCloseIcon = document.querySelector('.close-image-address');
  var address = document.querySelector('.address__block');

  var hideSections = function () {
    if (window.innerWidth < WindowWidths.tablet) {
      sections.classList.add('visually-hidden');
      sectionsButton.classList.remove('visually-hidden');
    } else {
      sections.classList.remove('visually-hidden');
      sectionsButton.classList.add('visually-hidden');
    }
  };

  hideSections();
  window.addEventListener('resize', hideSections);

  sectionsOpenIcon.classList.remove('visually-hidden');
  sectionsCloseIcon.classList.add('visually-hidden');

  var openMenu = function () {
    sections.classList.toggle('visually-hidden');
    sectionsOpenIcon.classList.toggle('visually-hidden');
    sectionsCloseIcon.classList.toggle('visually-hidden');

    if (!address.classList.contains('visually-hidden')) {
      address.classList.add('visually-hidden');
      addressOpenIcon.classList.toggle('visually-hidden');
      addressCloseIcon.classList.toggle('visually-hidden');
    }

  };

  sectionsButton.addEventListener('click', openMenu);
  sectionsOpenIcon.addEventListener('click', openMenu);
  sectionsCloseIcon.addEventListener('click', openMenu);
  section.addEventListener('click', openMenu);

  // кнопки открытия закрытия адреса


  var hideAddress = function () {
    if (window.innerWidth < WindowWidths.tablet) {
      address.classList.add('visually-hidden');
      addressButton.classList.remove('visually-hidden');
    } else {
      address.classList.remove('visually-hidden');
      addressButton.classList.add('visually-hidden');
    }
  };

  hideAddress();
  window.addEventListener('resize', hideAddress);

  addressOpenIcon.classList.remove('visually-hidden');
  addressCloseIcon.classList.add('visually-hidden');

  var openAddress = function () {
    address.classList.toggle('visually-hidden');
    addressOpenIcon.classList.toggle('visually-hidden');
    addressCloseIcon.classList.toggle('visually-hidden');

    if (!sections.classList.contains('visually-hidden')) {
      sections.classList.add('visually-hidden');
      sectionsOpenIcon.classList.toggle('visually-hidden');
      sectionsCloseIcon.classList.toggle('visually-hidden');
    }

  };

  addressButton.addEventListener('click', openAddress);
  addressOpenIcon.addEventListener('click', openAddress);
  addressCloseIcon.addEventListener('click', openAddress);
  addressSection.addEventListener('click', openAddress);
  // модальное окно

  var modalClose = document.querySelector('.modal__close');
  var modal = document.querySelector('.modal');
  var modalForm = document.querySelector('.modal__form');
  var openModal = document.querySelector('.header__phone-button');
  var openModalMobile = document.querySelector('.header__phone-icon');

  var nameInput = document.querySelector('[name=username]');
  var phoneInput = document.querySelector('[name=phone]');
  var textInput = document.querySelector('[name=message]');
  var focusInput = document.querySelector('.form__name');

  // данные в локал сторедж
  var isStorageSupport = true;
  var storage = '';

  try {
    storage = localStorage.getItem('username');
    storage = localStorage.getItem('phone');
    storage = localStorage.getItem('message');
  } catch (err) {
    isStorageSupport = false;
  }

  var closeEscModal = function (evt) {
    if (evt.key === ESC_BUTTON) {
      evt.preventDefault();
      document.body.style.overflow = 'visible';
      modal.classList.add('visually-hidden');
    }
  };

  var openPopup = function (evt) {
    evt.preventDefault();
    modal.classList.remove('visually-hidden');
    document.body.style.overflow = 'hidden';

    if (storage) {
      nameInput.value = storage;
      phoneInput.value = storage;
      textInput.value = storage;
    }

    focusInput.focus();
    document.addEventListener('keydown', closeEscModal);
  };

  var modalCloseImg = document.querySelector('.close-image-modal');

  var closePopup = function (evt) {
    if (evt.target === modal || evt.target === modalClose || evt.target === modalCloseImg) {
      modal.classList.add('visually-hidden');
      document.body.style.overflow = 'visible';
      document.removeEventListener('keydown', closeEscModal);
    }
  };

  var sendForm = function () {
    modal.classList.add('visually-hidden');
    document.body.style.overflow = 'visible';
    document.removeEventListener('keydown', closeEscModal);
  };

  var submitForm = function (evt) {
    evt.preventDefault();
    sendForm();
    if (isStorageSupport) {
      localStorage.setItem('username', nameInput.value);
      localStorage.setItem('phone', phoneInput.value);
      localStorage.setItem('message', textInput.value);
    }
  };

  openModal.addEventListener('click', openPopup);
  openModalMobile.addEventListener('click', openPopup);
  modal.addEventListener('click', closePopup);
  modalClose.addEventListener('click', closePopup);
  modalForm.addEventListener('submit', submitForm);

  // прокрутка с главной
  var scrollAdvantages = document.querySelector('.header__button');
  var advantages = document.querySelector('#advantages');
  var scrollFeedback = document.querySelector('.order-button');
  var feedback = document.querySelector('.feedback');

  var scroll = function (elem) {
    return elem.scrollIntoView({block: 'center', behavior: 'smooth'});
  };

  scrollAdvantages.addEventListener('click', function (evt) {
    evt.preventDefault();
    scroll(advantages);
  });

  scrollFeedback.addEventListener('click', function (evt) {
    evt.preventDefault();
    scroll(feedback);
  });

  // табиндексы в футере
  var footerButtons = document.querySelectorAll('.open-button');

  var disableTab = function () {
    if (window.innerWidth >= WindowWidths.tablet) {

      footerButtons.forEach(function (button) {
        button.setAttribute('tabindex', '-1');
      });
    } else {
      footerButtons.forEach(function (button) {
        button.setAttribute('tabindex', '0');
      });
    }
  };

  window.addEventListener('resize', disableTab);

})();
