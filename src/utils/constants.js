

export const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

export const page = document.querySelector('.page');


export const editButton = page.querySelector('.profile__edit');

export const nameInput = document.querySelector('input[name="name"]');
export const aboutInput = document.querySelector('input[name="about"]');
export const profileEditForm = document.forms.editProfile;
export const imageProfileForm = document.forms.imageProfile;
export const profileAvatarForm = document.forms.avatarUpdate;
export const editAvatar = document.querySelector('.profile__avatar')

export const imageEdit = page.querySelector('.profile__add');



