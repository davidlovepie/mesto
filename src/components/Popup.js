  export default class Popup {
    constructor(selector){
      this.popup = document.querySelector(selector);
      this.closeButton = this.popup.querySelector('.popup__close-button');
    }
  
      open() {
  
       this.popup.classList.add('popup_opened');
       document.addEventListener('keydown', this._handleEscClose);

     }
  
      close() {

       this.popup.classList.remove('popup_opened');
       document.removeEventListener('keydown', this._handleEscClose);

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
      

      this.closeButton.addEventListener('click', this.close.bind(this));

    }

}

  
  