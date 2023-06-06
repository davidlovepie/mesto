import { Card } from "./Card";

export default class Section {
  constructor({renderer}, selector){

    this.renderer = renderer;
    this.elementsList = document.querySelector(selector);
  }

  renderCards = (array) => {

    array.reverse().forEach( (obj)=> {       
     
      this.addItem(this.renderer(obj));
   
   })

  }

  addItem = (cardElement)=> {

    this.elementsList.prepend(cardElement);
    
  }

}