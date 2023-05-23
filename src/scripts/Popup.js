  export default class Popup {
    constructor(selector){
      this.popup = document.querySelector(selector);
      this.closeButton = this.popup.querySelector('.popup__close-button');
    }
  
    open() {
  
    this.popup.classList.add('popup_opened');
      

     }
  
    close() {

    this.popup.classList.remove('popup_opened');


     }
  
     _handleEscClose = (evt) => {
        if (evt.key === 'Escape') {

          this.close()

        }
      }

    _closePopupOverlay = (evt) => {
        if (evt.target === evt.currentTarget) {
          this.close()
        }

      }


    setEventListeners() {
        
    this.popup.addEventListener('mousedown', this._closePopupOverlay);
    document.addEventListener('keydown', this._handleEscClose);

    this.closeButton.addEventListener('click', this.close.bind(this));

    }

}

  
  