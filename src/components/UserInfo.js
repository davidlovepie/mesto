export default class UserInfo {

  constructor({ name, about }) {
    this.name = document.querySelector(name);
    this.about = document.querySelector(about);
  
  }
  
  getUserInfo = () => {
    return { 

      name: this.name.textContent,
      about: this.about.textContent
    
    }

    


  }

  setUserInfo = ({ name, about }) => {

    this.name.textContent = name;
    this.about.textContent = about;

  }
  
  
  
  }