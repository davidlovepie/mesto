export default class UserInfo {

  constructor({ name, about }) {
    this.name = document.querySelector(name);
    this.about = document.querySelector(about);
    this.avatar = document.querySelector('.profile__avatar-update')
  }
  
  updateAvatar = ({ avatar }) => {

    this.avatar.src = avatar;

  }

  getUserInfo = () => {
    return { 

      name: this.name.textContent,
      about: this.about.textContent
    
    }
  }

  getUserId = () => {

    return this._id;

  }
  
  setUserInfo = ({ name, about, _id }) => {

    this.name.textContent = name;
    this.about.textContent = about;
    this._id = _id;
  }
  
  
  
  }