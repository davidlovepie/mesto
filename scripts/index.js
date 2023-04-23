const page = document.querySelector('.page');
const popupGeneral = page.querySelector('.popup');
const closeButtons = page.querySelectorAll('.popup__close-button');
const popups = page.querySelectorAll('.popup');

const profileInformation = page.querySelector('.profile__information');
const editButton = page.querySelector('.profile__edit');
const authorName = document.querySelector('.profile__author');
const authorAbout = document.querySelector('.profile__about');
const nameInput = document.querySelector('input[name="nameInput"]');
const aboutInput = document.querySelector('input[name="aboutInput"]');
const profileEditForm = document.forms.editProfile;
const imageProfileForm = document.forms.imageProfile;
const imageEnlargePopup = page.querySelector('.popup_type_enlarge');
const popupEnlarge = imageEnlargePopup.querySelector('.popup__image');
const popupTitle = imageEnlargePopup.querySelector('.popup__title');
const profileEdit = page.querySelector('.popup_type_profile');
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
// Открытие попап
function openPopup(popup) {
  popup.classList.add('popup_opened');
  popup.addEventListener('mousedown', closePopupOverlay);
  document.addEventListener('keydown', closePopupEsc);
} 

const closePopupOverlay = (evt) => {
  if (evt.target === evt.currentTarget) {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened)
  }

}

const closePopupEsc = (evt) => {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened)
  }
}




// Это поп ап профиля
function editProfile() {
  openPopup(profileEdit);
  nameInput.value = authorName.textContent;
  aboutInput.value = authorAbout.textContent;
 
}



function closePopup(popup) {
  popup.classList.remove('popup_opened');
  popup.removeEventListener('mousedown', closePopupOverlay);
  document.removeEventListener('keydown', closePopupEsc);
  }



function editImages() {
  openPopup(imageAddPopup);

  validationImage.disableButton()

}


function renderCard(cardElement){

  elementsList.prepend(cardElement);
}






// Лайки активируются
function toggleLike(button){

  button.classList.toggle('elements__like-button_active');

}





profileEditForm.addEventListener('submit', (e) => {
  e.preventDefault();
  authorName.textContent = nameInput.value;
  authorAbout.textContent = aboutInput.value;

  closePopup(profileEdit);

})

imageProfileForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const card = new Card(
    titleInput.value, 
    srcInput.value, 
    '.element-template', 
    openPopup
    );

   renderCard(card.getCard());
   resetModalForm()
  closePopup(imageAddPopup);
  

})

function resetModalForm(){
  titleInput.value = '';
  srcInput.value = '';

}

// Использовал универсальную функцию, нужно повторить функции 

initialCards.forEach(function (obj) {
   const card = new Card(obj.name, obj.link, '.element-template', openPopup);

renderCard(card.getCard());

})

closeButtons.forEach(button => {
  const buttonsPopup = button.closest('.popup'); // нашли родителя с нужным классом
  button.addEventListener('click', () => closePopup(buttonsPopup)); // закрыли попап
});  


editButton.addEventListener('click', editProfile);

imageEdit.addEventListener('click', editImages);

validationProfile.enableValidation()
validationImage.enableValidation()

// const obj = {
//   name: 'Девид',
//   age: 28,
//   surname: 'Фан'
// }
// console.log(obj.name)


// function dance(a, b){

//   const cardElement = a + b;

//   return cardElement;

// }

// const c = dance(2, 2);

// console.log(c)


// function bag(useFirst, useSecond, useThird) {
//   console.log(useSecond, useFirst, useThird)

// }
// bag(1,2,)



/*const object = {
name: 'Tom',
id: 'Jerry'
}
console.log(object)
console.log(`${object.id}-error`)*/