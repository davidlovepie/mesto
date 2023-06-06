import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {

constructor(selector) {

 super(selector);

 this.popupTitle = this.popup.querySelector('.popup__title');
 this.popupEnlarge = this.popup.querySelector('.popup__image');

}


  open(elementTitle, elementImage) {

    super.open()
    
    this.popupTitle.textContent = elementTitle;
   
    this.popupEnlarge.src = elementImage;
    this.popupEnlarge.alt = elementTitle;


}



}
