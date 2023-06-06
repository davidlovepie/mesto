export class FormValidator {
  constructor(obj, formElement) {
    this.obj = obj;
    this.formElement = formElement;
    this.inputList = Array.from(this.formElement.querySelectorAll(this.obj.inputSelector))
    this.formSubmitButton = this.formElement.querySelector(this.obj.submitButtonSelector);

  }

  getInputErrorReset = () => {

    this.inputList.forEach((inputElement) => {

      this._hideInputError(inputElement);

    });

    this.formElement.reset()


  }

  // showMeHowClassWorks = ()=>{
  //   console.log('Вот так!')
  //   console.log(this.formElement)
  //   console.log(this.formSubmitButton)
  // }

  disableButton = () => {

    this.formSubmitButton.setAttribute('disabled', true);
    this.formSubmitButton.classList.add(this.obj.inactiveButtonClass);

  }

  _setIsValid = () => {

    return this.inputList.every((input) => {
      return input.validity.valid;
    })

  }

  _setSubmitButtonState = () => {

    if (this._setIsValid()) {

      this.formSubmitButton.removeAttribute('disabled');
      this.formSubmitButton.classList.remove(this.obj.inactiveButtonClass);
    } else {

      this.disableButton()

    }

  }

  _showInputError = (inputElement) => {

    const errorElement = this.formElement.querySelector(`.${inputElement.name}-error`);
    inputElement.classList.add(this.obj.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this.obj.errorClass);

  }

  _hideInputError = (inputElement) => {

    const errorElement = this.formElement.querySelector(`.${inputElement.name}-error`);
    inputElement.classList.remove(this.obj.inputErrorClass);
    errorElement.classList.remove(this.obj.errorClass);
    errorElement.textContent = '';

  };


  _checkInputValidity = (inputElement) => {

    if (inputElement.validity.valid) {
      this._hideInputError(inputElement);
      this._setSubmitButtonState();


    } else {

      this._showInputError(inputElement);
      this._setSubmitButtonState();

    }

  }

  _setEventListeners = () => {

    this.inputList.forEach((inputElement) => {

      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);

      })
    });
  }

  enableValidation = () => {

    this._setEventListeners()

  }

}