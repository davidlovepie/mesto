import './index.css';

import {Card} from '../components/Card.js';

import {FormValidator} from '../components/FormValidator.js';

import Section from '../components/Section.js'; 

import PopupWithForm from '../components/PopupWithForm.js';

import PopupWithImage from '../components/PopupWithImage.js';

import UserInfo from '../components/UserInfo.js';

import {initialCards, editButton, nameInput, aboutInput, profileEditForm, imageProfileForm, imageEdit, titleInput, srcInput} from '../utils/constants.js';

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


const section = new Section ({
  items:initialCards, 
  renderer:createCard}, '.elements__list')

section.renderCards()
 
const profileForm = new PopupWithForm('.popup_type_profile', handleProfileFormSubmit);

profileForm.setEventListeners();


const imageForm = new PopupWithForm('.popup_type_images', editImageForm);

imageForm.setEventListeners();

const profileInfo = new UserInfo({name:'.profile__author', about:'.profile__about'});



function createCard(obj) {

  const card = new Card(obj.name, obj.link, '.element-template', handleCardClick);

  return card.getCard()
 
}

function editImageForm (e) {
  e.preventDefault();
  const card = new Card(
    titleInput.value, 
    srcInput.value, 
    '.element-template', 
    handleCardClick
    );

    section.addItem(card.getCard());
    imageForm.close();
  

}

function handleCardClick(elementTitle, elementImage) {
  enlargeImage.open(elementTitle, elementImage)
}

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
  validationImage.getInputErrorReset()

}


// Лайки активируются
function toggleLike(button){

  button.classList.toggle('elements__like-button_active');

}

function handleProfileFormSubmit (e) {
  e.preventDefault();

  profileInfo.setUserInfo({name:nameInput.value, about:aboutInput.value})
  // authorName.textContent = nameInput.value;
  // authorAbout.textContent = aboutInput.value;

  profileForm.close();
  
}

// function editImageForm (e) {
//   e.preventDefault();
//   const card = new Card(
//     titleInput.value, 
//     srcInput.value, 
//     '.element-template', 
//     imageForm.open()
//     );

//     section.addItem(card.getCard());
//     imageForm.close();
  

// }


imageProfileForm.addEventListener('submit', editImageForm)


editButton.addEventListener('click', editProfile);

imageEdit.addEventListener('click', editImages);

validationProfile.enableValidation()
validationImage.enableValidation()
