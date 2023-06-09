import './index.css';

import { Card } from '../components/Card.js';

import { FormValidator } from '../components/FormValidator.js';

import Section from '../components/Section.js';

import PopupWithForm from '../components/PopupWithForm.js';

import PopupWithImage from '../components/PopupWithImage.js';

import UserInfo from '../components/UserInfo.js';

import { popupProfileOpenButton, nameInput, aboutInput, profileEditForm, imageProfileForm, imageEdit, config, avatarEditBtutton, profileAvatarForm } from '../utils/constants.js';

import PopupWithConfirm from '../components/PopupWithConfirm.js';

import { Api } from '../components/Api.js';

const validationProfile = new FormValidator(config, profileEditForm)

const validationImage = new FormValidator(config, imageProfileForm)

const validationAvatar = new FormValidator(config, profileAvatarForm)

const enlargeImage = new PopupWithImage('.popup_type_enlarge');

enlargeImage.setEventListeners();

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-66',
  headers: {
    authorization: '3ed8239e-8734-4aff-9406-f23bc2058906',
    'Content-Type': 'application/json'
  }

}); 

const cardsContainer = new Section({
  renderer: createCard
}, '.elements__list')



const profileForm = new PopupWithForm('.popup_type_profile', handleProfileFormSubmit);

profileForm.setEventListeners();


const imageForm = new PopupWithForm('.popup_type_images', editImageForm);

imageForm.setEventListeners();


const profileInfo = new UserInfo({ name: '.profile__author', about: '.profile__about' });

const confirmForm = new PopupWithConfirm('.popup_type_delete', handleConfirmFormSubmit);

confirmForm.setEventListeners();

const newAvatar = new PopupWithForm('.popup_type_update-avatar', handleAvatarSubmit)

newAvatar.setEventListeners()

function openConfirmForm(id, itemElement) {
    confirmForm.getId(id)
    confirmForm.getItem(itemElement)
    confirmForm.open()
}

function createCard(obj) {

  const card = new Card(obj.name, obj.link, obj.likes, obj._id, obj.owner._id, profileInfo.getUserId(), handleLike, handleDeleteLike, '.element-template', handleCardClick, openConfirmForm);

  return card.getCard()

}
// Сабмит формы
function editImageForm(inputs, button) {

  api.postCard(inputs)
  .then((result) => {

    const card = createCard(result);

    cardsContainer.addItem(card);

    imageForm.close();
  })
  
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
  })
  .finally(()=>{
    button.textContent = 'Создать'
    }); 

}

function editProfileAvatar() {

  newAvatar.open();


}

function handleCardClick(elementTitle, elementImage) {
  enlargeImage.open(elementTitle, elementImage)
}

    // const parent = this.buttonDelete.closest('.elements__item');
    // parent.remove();


function handleConfirmFormSubmit(id, cardElement) {

api.deleteCard(id)
.then((result) => {
  cardElement.remove()
  confirmForm.close()

})
.catch((err) => {
  console.log(err, 'delete error'); // выведем ошибку в консоль
}); 

  
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




function handleProfileFormSubmit(inputs, button) {

  api.editProfileInfo(inputs)
  .then((result) => {
   profileInfo.setUserInfo(result)
   profileForm.close();
  })
  
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
  })
  
  .finally(()=>{
    button.textContent = 'Сохранить'
    }); 

}



avatarEditBtutton.addEventListener('click', editProfileAvatar);

popupProfileOpenButton.addEventListener('click', editProfile);

imageEdit.addEventListener('click', editImages);

validationProfile.enableValidation()
validationImage.enableValidation()
validationAvatar.enableValidation()

  Promise.all([
    api.getInitialCards(),
    api.getProfileInfo(),
  ])
  .then(([resultInitial, resultInformation]) => {
    profileInfo.setUserInfo(resultInformation)
    cardsContainer.renderCards(resultInitial)
    profileInfo.updateAvatar(resultInformation)
  })
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
  });
  
  function handleLike(id) {
    return api.addLike(id)
      .then((result) => {
        return result
        
      })
      .catch((err) => {
         console.log(err); // выведем ошибку в консоль
       });
  }

  function handleDeleteLike(id) {
    return api.deleteLike(id)
      .then((result) => {
       return result
      })
      .catch((err) => {
         console.log(err); // выведем ошибку в консоль
       });
  }

  function handleAvatarSubmit(avatar, button) {

  api.editProfileAvatar(avatar)
  .then((result) => {
    profileInfo.updateAvatar(result)
    newAvatar.close();
   })
   .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    })
  .finally(() => {
    button.textContent = 'Сохранить'
    })
   }


 