function showInputError(formElement, inputElement, errorMessage) {
  const errorElement = formElement.querySelector(`.${inputElement.name}-error`);
  inputElement.classList.add('popup__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__input-error_active');
};

function hideInputError(formElement, inputElement) {
  const errorElement = formElement.querySelector(`.${inputElement.name}-error`);
  inputElement.classList.remove('popup__input_type_error');
  errorElement.classList.remove('popup__input-error_active');
  errorElement.textContent = '';
};

function checkInputValidity(formElement, inputElement, obj, inputList) {
  const formSubmitButton = formElement.querySelector(obj.submitButtonSelector);

  if (inputElement.validity.valid) {
    hideInputError(formElement, inputElement);
    setSubmitButtonState(setIsValid(inputList), formSubmitButton);


  } else {

    showInputError(formElement, inputElement, inputElement.validationMessage);
    setSubmitButtonState(setIsValid(inputList), formSubmitButton);

  }
};

function setEventListeners(formElement, inputList, obj) {
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
     checkInputValidity(formElement, inputElement, obj, inputList); 
    });
  });
};

function enableValidation(obj) {
//   const formList = Array.from(document.querySelectorAll('.popup__form')); 
//   formList.forEach((formElement) => {
//   formElement.addEventListener('submit', (evt) => {
//     evt.preventDefault();
//   })
    
//     setEventListeners(formElement);
// })



const formList = Array.from(document.querySelectorAll(obj.formSelector));
formList.forEach((formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(obj.inputSelector))

  setEventListeners(formElement, inputList, obj)

})


}; 

function setIsValid(buttons) {
  return buttons.every((input) => {
    return input.validity.valid;
  })
}

// enableValidation()

function setSubmitButtonState(isFormValid, addButton) {
  if (isFormValid) {
 
    addButton.removeAttribute('disabled');
    addButton.classList.remove('popup__submit_disabled');
  } else {

    addButton.setAttribute('disabled', true);
    addButton.classList.add('popup__submit_disabled');
  }
}


enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: '.popup__submit_disabled',
  inputErrorClass: '.popup__input_type_error',
  errorClass: '.popup__input-error_active'
}); 
