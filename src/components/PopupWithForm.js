import Popup from "../components/Popup.js";

export default class PopupWithForm extends Popup {

constructor(selector, submitter) {
    super(selector);
    this.submitter = submitter;
    this.inputList = Array.from(this.popup.querySelectorAll('input'))
    this.form = this.popup.querySelector('.popup__form')
}


    _getInputValues = ()=> {

        const inputValues = {};

        this.inputList.forEach((inputElement)=>{
        inputValues[inputElement.name] = inputElement.value;
    })

        return inputValues;

    }

    setEventListeners() {

        super.setEventListeners();

        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.submitter(this._getInputValues())
        });


    }


    close() {

        super.close();

        this.form.reset();


}

}


// Если метод setEventListeners() в дочернем классе PopupWithForm возвращает undefined, 
// то это означает, что метод setEventListeners() в родительском классе Popup 
// тоже возвращает undefined. В данном коде метод setEventListeners() в 
// родительском классе определен корректно, поэтому проблема, скорее всего, 
// в вызове метода setEventListeners() в дочернем классе. 

// Может быть, вы просто забыли вызвать метод setEventListeners() 
// у экземпляра класса PopupWithForm. Например:

// const popupWithForm = new PopupWithForm('.popup', handleFormSubmit);
 
// popupWithForm.setEventListeners();
 

// Если это не решает проблему, проверьте, что в конструкторе 
// дочернего класса PopupWithForm правильно передаются аргументы 
// в конструктор родительского класса Popup. Если selector передан 
// неправильно, то this.popup будет равен null, и метод setEventListeners() 
// в родительском классе вернет undefined.