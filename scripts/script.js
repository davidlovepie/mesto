let page = document.querySelector('.page');
let popup = page.querySelector('.popup');
let profileInformation = page.querySelector('.profile__information');
let editButton = page.querySelector('.profile__edit');
let closeButton = page.querySelector('.popup__close-button');
let authorName = document.querySelector('.profile__author');
let authorAbout = document.querySelector('.profile__about');
let name = document.querySelector('.popup__author_name');
let about = document.querySelector('.popup__author_about');
let submit = page.querySelector('.popup__submit');
// let likeButtonOn = page.querySelector('.elements__like-button_disabled');

function openPopup() {
  popup.classList.add('popup_opened');
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', openPopup);


closeButton.addEventListener('click', closePopup);

function editProfile() {

  name.value = authorName.textContent;
  about.value = authorAbout.textContent;

}

submit.addEventListener('click', () => {

  authorName.textContent = name.value;
  authorAbout.textContent = about.value;

  closePopup();

})
editProfile();

// function likeOn () {
//   let likeButtonOn = page.querySelector('.elements__like-button_disabled');
//   likeButtonOn.setAttribute('style', 'background-image: url(../../../../images/likeactive.png);');
// } 

// likeButtonOn.addEventListener('click', likeOn)  



// let likeOn = page.querySelectorAll('.elements__like-button_disabled');
// for (var i=0; i < likeOn.length; i++) {
//   likeOn[i].setAttribute('style', 'background-image: url(../../../../images/likeactive.png);');

// }

// likeButtonOn.addEventListener('click', likeOn)



