let page = document.querySelector('.page');
let popup = page.querySelector('.popup');
let closeButtons = page.querySelectorAll('.popup__close-button');
const popups = page.querySelectorAll('.popup');

let profileInformation = page.querySelector('.profile__information');
let editButton = page.querySelector('.profile__edit');
let authorName = document.querySelector('.profile__author');
let authorAbout = document.querySelector('.profile__about');
let nameInput = document.querySelector('input[name="nameInput"]');
let aboutInput = document.querySelector('input[name="aboutInput"]');
const profileEditForm = document.forms.editProfile;
const imageProfileForm = document.forms.imageProfile;
const imageEnlargePopup = page.querySelector('.popup_type_enlarge');
const popupEnlarge = imageEnlargePopup.querySelector('.popup__image');
const popupTitle = imageEnlargePopup.querySelector('.popup__title');

const editImage = page.querySelector('.profile__add');
const imageAddPopup = page.querySelector('.popup_type_images')
const imageAddPopupButton = imageAddPopup.querySelector('.popup__submit');

const titleInput = document.querySelector('input[name="titleInput"]');
const srcInput = document.querySelector('input[name="srcInput"]');

const elementsList = document.querySelector('.elements__list');
const elementTemplate = document.querySelector('.element-template').content;



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

// Это поп ап профиля
function editProfile() {
  popup.classList.add('popup_opened');
  nameInput.value = authorName.textContent;
  aboutInput.value = authorAbout.textContent;
}



function closeAllPopups() {
  popups.forEach((item) => {
    item.classList.remove('popup_opened');
  })
}


function editImages() {
  imageAddPopup.classList.add('popup_opened');

}


// добавление картинок
function addImage(argumentOne, argumentTwo) {
  const cardElement = elementTemplate.cloneNode(true);

  const elementTitle = cardElement.querySelector('.elements__title');
  const elementImage =  cardElement.querySelector('.elements__image');

// увеличить картинки, передаем из темплейта в попап   
  elementImage.addEventListener('click', () => {
    
    imageEnlargePopup.classList.add('popup_opened');
    popupTitle.textContent = elementTitle.textContent;
   
    popupEnlarge.src = elementImage.src;
  });

  

  elementTitle.textContent = argumentOne;
  elementImage.src = argumentTwo;

  const buttonLike = cardElement.querySelector('.elements__like-button');
  const buttonDelete = cardElement.querySelector('.elements__delete');

  buttonDelete.addEventListener('click', removeImage);
  
  buttonLike.addEventListener('click', () => {
    toggleLike(buttonLike);
  });
  
  elementsList.prepend(cardElement);
}
// Удалить карточку через родителя
function removeImage () {
  const child = document.querySelector('.elements__delete');
  const parent = child.closest('.elements__item');
  parent.remove()
}


// Лайки активируются
function toggleLike(button){

  button.classList.toggle('elements__like-button_active');

}

closeButtons.forEach((item) => {
  item.addEventListener('click', closeAllPopups);

}
)

profileEditForm.addEventListener('submit', (e) => {
  e.preventDefault();
  authorName.textContent = nameInput.value;
  authorAbout.textContent = aboutInput.value;

  closeAllPopups();

})

imageProfileForm.addEventListener('submit', (e) => {
  e.preventDefault();

  closeAllPopups();

})

// Использовал универсальную функцию, нужно повторить функции 

initialCards.forEach(function (element) {
 addImage(element.name, element.link);
    


})

editButton.addEventListener('click', editProfile);

editImage.addEventListener('click', editImages);

imageAddPopupButton.addEventListener('click', () => {
  addImage(titleInput.value, srcInput.value);
});










