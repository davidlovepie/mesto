export class Card {
  constructor(name, link, likes, _id, ownerId, userId, handleLike, handleDeleteLike, templateSelector, handleCardClick, openConfirmForm){
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
    this.elementLike = this.cardElement.querySelector('.elements__counter');
    this.handleCardClick = handleCardClick;
    this.likes = likes;
    this.openConfirmForm = openConfirmForm;
    this.id = _id;
    this.ownerId = ownerId;
    this.userId = userId;
    this.handleLike = handleLike;
    this.handleDeleteLike = handleDeleteLike;
  }



  _addImage = ()=> {

    if (this.ownerId != this.userId) {

      this.buttonDelete.remove();

    }   

    this.elementTitle.textContent = this.name;
    this.elementImage.src = this.link;
    this.elementImage.alt = this.name;
    this.elementLike.textContent = this.likes.length;
    this._checkLike();
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
    this.openConfirmForm(this.id, this.cardElement)

  });
}

  setEventListenerLike = ()=> {
    this.buttonLike.addEventListener('click', () => {
    // this.buttonLike.classList.toggle('elements__like-button_active');
    // if () {

    // }
      this.handleLike(this.id);
      // this.handleDeleteLike(this.id);
  });
}

  _checkLike = () => {

    if(this.likes.some(item =>item._id == this.userId)) {
      this.buttonLike.classList.add('elements__like-button_active');
    } 
// console.log(this.likes.includes(this.userId), 'IF')
// console.log(this.likes, 'likesarray')
  }

  getCard = ()=>{
    this._addImage()
    this._setListeners()
  
   return this.cardElement;

}
} 
