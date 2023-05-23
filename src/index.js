import './pages/index.css';

import {Card} from './scripts/Card.js';

import {FormValidator} from './scripts/FormValidator.js';

import Section from './scripts/Section.js'; 

import PopupWithForm from './scripts/PopupWithForm.js';

import PopupWithImage from './scripts/PopupWithImage.js';

import UserInfo from './scripts/UserInfo.js';

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

const page = document.querySelector('.page');


const editButton = page.querySelector('.profile__edit');

const nameInput = document.querySelector('input[name="nameInput"]');
const aboutInput = document.querySelector('input[name="aboutInput"]');
const profileEditForm = document.forms.editProfile;
const imageProfileForm = document.forms.imageProfile;


const imageEdit = page.querySelector('.profile__add');
const imageAddPopup = page.querySelector('.popup_type_images');
const imageAddPopupButton = imageAddPopup.querySelector('.popup__submit');

const titleInput = document.querySelector('input[name="titleInput"]');
const srcInput = document.querySelector('input[name="srcInput"]');

const elementsList = document.querySelector('.elements__list');
const elementTemplate = document.querySelector('.element-template').content;

const validationProfile = new FormValidator({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}, profileEditForm)

const validationImage = new FormValidator({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}, imageProfileForm)

const enlargeImage = new PopupWithImage('.popup_type_enlarge');

enlargeImage.setEventListeners();

const section = new Section ({items:initialCards, renderer:createCard}, '.elements__list')

section.renderCards()



function createCard(obj) {
  
  const card = new Card(obj.name, obj.link, '.element-template', handleCardClick)
  
  return card.getCard()
 
}

function handleCardClick(elementTitle, elementImage) {
  enlargeImage.open(elementTitle, elementImage)
}
 
const profileForm = new PopupWithForm('.popup_type_profile', editProfileForm);

profileForm.setEventListeners();



const imageForm = new PopupWithForm('.popup_type_images', editImageForm);

imageForm.setEventListeners();

const profileInfo = new UserInfo({name:'.profile__author', about:'.profile__about'});



// Это поп ап профиля
function editProfile() {

  profileForm.open();

  const objInfo = profileInfo.getUserInfo();
  nameInput.value = objInfo.name;
  aboutInput.value = objInfo.about;

}

function editImages() {
  
  imageForm.open();
  validationImage.disableButton()
  validationImage.inputErrorReset()

}


// Лайки активируются
function toggleLike(button){

  button.classList.toggle('elements__like-button_active');

}

function editProfileForm (e) {
  e.preventDefault();

  profileInfo.setUserInfo({name:nameInput.value, about:aboutInput.value})
  // authorName.textContent = nameInput.value;
  // authorAbout.textContent = aboutInput.value;

  profileForm.close();
  
}

function editImageForm (e) {
  e.preventDefault();
  const card = new Card(
    titleInput.value, 
    srcInput.value, 
    '.element-template', 
    imageForm.open()
    );

    section.addItem(card.getCard());

    imageForm.close();
  

}


imageProfileForm.addEventListener('submit', editImageForm)


editButton.addEventListener('click', editProfile);

imageEdit.addEventListener('click', editImages);

validationProfile.enableValidation()
validationImage.enableValidation()
