





//задаем значения попапам
const popupProfileSelector = '.popup_type_profile';//профиль
const popupPhoto = '.popup_type_photo';//картинки
const popupZoom = '.popup_type_modal';//zoom
export const popupChangeAvatar = '.popup_change-avatar';
export const popupDeleteConfirm = document.querySelector('.popup_delete-confirm')

//задаем значения кнопкам закрытия попапов
const closeButtons = document.querySelectorAll('.popup__close');
// профилb
export const profileElement = document.querySelector('.profile');
//задаем значения кнопкам открытия попапов
const openModalBtn = profileElement.querySelector('.profile__button');
const openSecondModalBtn = profileElement.querySelector('.profile__add-button');
export const profileAvatarEditButton = '.profile__avatar-change';
export const profileAvatar = '.profile__photo';
const nameInput = document.querySelector('.popup__input_type_name');//задаем инпут имени профиля
const jobInput = document.querySelector('.popup__input_type_job');//задаем инпут рода занятия профиля
export const popupViewerSelector = '.popup_viewer';//попап изменения картинки аватара
const profileName = '.profile__name';//задаем обозначение имени профиля
const profileJob = '.profile__about';//задаем обозначение рода деятельности профиля
const formElementProfile = document.querySelector('.form_type_profile');//задаем форму
export const cardSelector = '#elements-template';
export const popupConfirmSelector = '.popup_form_confirm';
//контейнеры
const container = document.querySelector('.content');
const cardContainer = '.elements__list';
export const avatarForm = document.querySelector('.form_type_avatar-form');
const formCards = document.querySelector('.form_type_photo');
const title = document.querySelector('.popup__input_type_title');
const image = document.querySelector('.popup__input_type_src');
//конфиг объект для валидации
const config = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__savebutton',
  inactiveBtnClass: 'popup__savebutton_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
};
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
export {
  popupProfileSelector, popupPhoto, popupZoom,
  openModalBtn, openSecondModalBtn, closeButtons,
  nameInput, jobInput, profileName, profileJob,
  formElementProfile, container, cardContainer, formCards,
  title, image, config, initialCards
};
