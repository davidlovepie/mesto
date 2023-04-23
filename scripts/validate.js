

// //Показыввает ошибку
// function showInputError(formElement, inputElement, obj) {
//   const errorElement = formElement.querySelector(`.${inputElement.name}-error`);
//   inputElement.classList.add(obj.inputErrorClass);
//   errorElement.textContent = inputElement.validationMessage;
//   errorElement.classList.add(obj.errorClass);
// };
// //Убирает ошибку
// function hideInputError(formElement, inputElement, obj) {
//   const errorElement = formElement.querySelector(`.${inputElement.name}-error`);
//   inputElement.classList.remove(obj.inputErrorClass);
//   errorElement.classList.remove(obj.errorClass);
//   errorElement.textContent = '';
// };
// //Проверяет инпуты на валидность
// function checkInputValidity(formElement, inputElement, obj, inputList) {
//   const formSubmitButton = formElement.querySelector(obj.submitButtonSelector);

//   if (inputElement.validity.valid) {
//     hideInputError(formElement, inputElement, obj);
//     setSubmitButtonState(setIsValid(inputList), formSubmitButton, obj.inactiveButtonClass);


//   } else {

//     showInputError(formElement, inputElement, obj);
//     setSubmitButtonState(setIsValid(inputList), formSubmitButton, obj.inactiveButtonClass);

//   }
// };
// // Вешает слушатели на инпуты(перебирает из списка всех инпутов)
// function setEventListeners(formElement, inputList, obj) {
//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener('input', function () {
//      checkInputValidity(formElement, inputElement, obj, inputList); 

//     });
//   });
// };
// // Из всех форм находит инпуты и вешает на них setEventListeners
// function enableValidation(obj) {

// const formList = Array.from(document.querySelectorAll(obj.formSelector));
// formList.forEach((formElement) => {
//   const inputList = Array.from(formElement.querySelectorAll(obj.inputSelector))

//   setEventListeners(formElement, inputList, obj)

// })


// }; 
// // Проверяет на валидность инпуты, если хотябы 1 инпут не валиден => false
// function setIsValid(buttons) {
//   return buttons.every((input) => {
//     return input.validity.valid;
//   })
// }

// // enableValidation()
// // Если инпуты валидны то кнопка черная
// function setSubmitButtonState(isFormValid, button, inactiveButtonClass) {
//   if (isFormValid) {
 
//     button.removeAttribute('disabled');
//     button.classList.remove(inactiveButtonClass);
//   } else {

//     button.setAttribute('disabled', true);
//     button.classList.add(inactiveButtonClass);

//     }

// }



// // Вызываем функцию и в нем объект

// enableValidation({
//   formSelector: '.popup__form',
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.popup__submit',
//   inactiveButtonClass: 'popup__submit_disabled',
//   inputErrorClass: 'popup__input_type_error',
//   errorClass: 'popup__input-error_active'
// }); 


