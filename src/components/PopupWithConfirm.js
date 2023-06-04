import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {

constructor(selector,submitter) {

 super(selector);
 this.submitter = submitter
 this.form = this.popup.querySelector('.popup__form')
}
getCard(cardElement){
  this.cardElement = cardElement;
}
getId(id) {
  this.id = id;
}

setEventListeners() {

  super.setEventListeners();

  this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.submitter(this.id, this.cardElement) 
  });


}

}