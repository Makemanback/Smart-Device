const order = document.querySelector('.order-button');

const changeOrder = () => {
  if (window.innerWidth > 767) {
    order.textContent = 'получить бесплатную консультацию';
  } else {
    order.textContent = 'получить консультацию';
  }
};

changeOrder();

window.addEventListener('resize', changeOrder);

const protect = document.querySelector('.protected');

const hideProtected = () => {
  if (window.innerWidth < 1024) {
    protect.classList.add('visually-hidden');
  } else {
    protect.classList.remove('visually-hidden');
  }
};

hideProtected();
window.addEventListener('resize', hideProtected);

// конпки открытия закрытия меню
const sectionsButton = document.querySelector('.sections__button');
const sectionsOpenIcon = document.querySelector('.open-image');
const sectionsCloseIcon = document.querySelector('.close-image');

const sections = document.querySelector('.sections__block-wrapper');

const hideSections = () => {
  if (window.innerWidth < 768) {
    sections.classList.add('visually-hidden');
    sectionsButton.classList.remove('visually-hidden');
  } else {
    sections.classList.remove('visually-hidden');
    sectionsButton.classList.add('visually-hidden');
  }
}

hideSections();
window.addEventListener('resize', hideSections);

sectionsOpenIcon.classList.remove('visually-hidden');
sectionsCloseIcon.classList.add('visually-hidden');

const openMenu = () => {
  sections.classList.toggle('visually-hidden');
  sectionsOpenIcon.classList.toggle('visually-hidden');
  sectionsCloseIcon.classList.toggle('visually-hidden');
}

sectionsOpenIcon.addEventListener('click', openMenu)
sectionsCloseIcon.addEventListener('click', openMenu)

// кнопки открытия закрытия адреса
const addressButton = document.querySelector('.address__button');
const addressOpenIcon = document.querySelector('.open-image-address');
const addressCloseIcon = document.querySelector('.close-image-address');

const address = document.querySelector('.address__block');

const hideAddress = () => {
  if (window.innerWidth < 768) {
    address.classList.add('visually-hidden');
    addressButton.classList.remove('visually-hidden');
  } else {
    address.classList.remove('visually-hidden');
    addressButton.classList.add('visually-hidden');
  }
}

hideAddress();
window.addEventListener('resize', hideAddress);

addressOpenIcon.classList.remove('visually-hidden');
addressCloseIcon.classList.add('visually-hidden');

const openAddress = () => {
  address.classList.toggle('visually-hidden');
  addressOpenIcon.classList.toggle('visually-hidden');
  addressCloseIcon.classList.toggle('visually-hidden');
}

addressOpenIcon.addEventListener('click', openAddress);
addressCloseIcon.addEventListener('click', openAddress);

// модальное окно

const modalClose = document.querySelector('.modal__close')
const modal = document.querySelector('.modal');
const modalForm = document.querySelector('.modal__form')
const openModal = document.querySelector('.header__phone-button');
const openModalMobile = document.querySelector('.header__phone-icon');

const nameInput = document.querySelector('[name=username]');
const phoneInput = document.querySelector('[name=phone]');
const textInput = document.querySelector('[name=message]');
const focusInput = document.querySelector('.form__name');

// данные в локал сторедж
const isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("username");
  storage = localStorage.getItem("phone");
  storage = localStorage.getItem("message");
} catch (err) {
  isStorageSupport = false;
}


const closeEscModal = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    document.body.style.overflow = 'visible';
    modal.classList.add('visually-hidden');
  }
};

const openPopup = () => {
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

const container = document.querySelector('.modal__container')
const closePopup = (evt) => {

  if (evt.target !== container) {
    modal.classList.add('visually-hidden');
    document.removeEventListener('keydown', closeEscModal);
  }
};

const submitForm = (evt) => {
  evt.preventDefault();
  closePopup();

  if (isStorageSupport) {
    localStorage.setItem("username", nameInput.value);
    localStorage.setItem("phone", phoneInput.value);
    localStorage.setItem("message", textInput.value);
  }
};

openModal.addEventListener('click', openPopup);
openModalMobile.addEventListener('click', openPopup);
modal.addEventListener('click', closePopup);
modalClose.addEventListener('click', closePopup);
modalForm.addEventListener('submit', submitForm);

// прокрутка с главной
const scrollAdvantages = document.querySelector('.header__button');
const advantages = document.querySelector('#advantages');
const scrollFeedback = document.querySelector('.order-button');
const feedback = document.querySelector('.feedback');

const scroll = (elem) => elem.scrollIntoView({block: "center", behavior: "smooth"});

scrollAdvantages.addEventListener('click', (evt) => {
  evt.preventDefault();
  scroll(advantages);
})

scrollFeedback.addEventListener('click', (evt) => {
  evt.preventDefault();
  scroll(feedback);
});
