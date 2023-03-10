let page = document.querySelector('.page');
let popup = page.querySelector('.popup');
let content = page.querySelector('.content');
let profile = content.querySelector('.profile');
let profileInformation = profile.querySelector('.profile__information');
let editButton = profileInformation.querySelector('.profile__edit');
let closeButton = popup.querySelector('.popup__close-button');
// let likeButtonOn = page.querySelector('.elements__like-button_disabled');

function openPopup () {
  let popup = page.querySelector('.popup');
  popup.classList.add('popup_opened');
}

function closePopup () {
  let popup = page.querySelector('.popup');
  popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', openPopup)


closeButton.addEventListener('click', closePopup)




function editProfile() {
  let authorName = document.querySelector('.profile__author');
  let authorAbout = document.querySelector('.profile__about');
  let name = document.querySelector('.popup__author-name');
  let about = document.querySelector('.popup__author-about');
  
  name.value = authorName.textContent;
  about.value = authorAbout.textContent;


 
 
}
editProfile();

let submit = page.querySelector('.popup__submit');

submit.addEventListener('click', ()=> {
  let authorName = document.querySelector('.profile__author');
  let authorAbout = document.querySelector('.profile__about');

  let name = document.querySelector('.popup__author-name');
  let about = document.querySelector('.popup__author-about');

  authorName.textContent = name.value;
  authorAbout.textContent = about.value;
 
  closePopup()

})


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



