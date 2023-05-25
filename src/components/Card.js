export class Card {
  constructor(name, link, templateSelector, handleCardClick){
    this.name = name;
    this.link = link;
    this.elementTemplate = document.querySelector(templateSelector).content;
    this.cardElement = this.elementTemplate.querySelector('.elements__item').cloneNode(true);
    this.elementTitle = this.cardElement.querySelector('.elements__title');
    this.elementImage =  this.cardElement.querySelector('.elements__image');
    this.imageEnlargePopup = document.querySelector('.popup_type_enlarge');
    this.popupTitle = this.imageEnlargePopup.querySelector('.popup__title');
    this.popupEnlarge = this.imageEnlargePopup.querySelector('.popup__image');
    this.buttonDelete = this.cardElement.querySelector('.elements__delete');
    this.buttonLike = this.cardElement.querySelector('.elements__like-button');
    this.handleCardClick = handleCardClick;

  
  }

_addImage = ()=> {
  
 this.elementTitle.textContent = this.name;
 this.elementImage.src = this.link;
 this.elementImage.alt = this.name;

} 

_setListeners = ()=> {

  this.setEventListenerEnlarge()
  this.setEventListenerRemove()
  this.setEventListenerLike()

}

setEventListenerEnlarge = ()=> {
  this.elementImage.addEventListener('click', () => {
    
    this.handleCardClick(this.elementTitle.textContent, this.elementImage.src);

  });
}

setEventListenerRemove = ()=> {
  this.buttonDelete.addEventListener('click', () => {
    const parent = this.buttonDelete.closest('.elements__item');
    parent.remove();
  });
}

setEventListenerLike = ()=> {
  this.buttonLike.addEventListener('click', () => {
    this.buttonLike.classList.toggle('elements__like-button_active');
  });
}



getCard = ()=>{
  this._addImage()
  this._setListeners()
  
  return this.cardElement;

}
} 
