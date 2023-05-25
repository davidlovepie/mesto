import { Card } from "./Card";

export default class Section {
  constructor({items, renderer}, selector){
    this.items = items;
    this.renderer = renderer;
    this.elementsList = document.querySelector(selector);
  }

  renderCards = ()=> {

    this.items.forEach( (obj)=> {       
     
      this.addItem(this.renderer(obj));
   
   })

  }

  addItem = (cardElement)=> {

    this.elementsList.prepend(cardElement);
    
  }

}