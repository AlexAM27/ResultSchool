import * as Utils from './utils';

export default class Donate {

    constructor(selectorForm, selectorList) {
        this.formElement = document.querySelector(selectorForm);
        this.listElement = document.querySelector(selectorList);
    }

    render() {
        this.addBtn = this.formElement.querySelector('.donate-form__submit-button');
        this.addBtn.addEventListener('click', this.#createDonate.bind(this));
    }

    #createDonate(event) {
        event.preventDefault();
        const donateAmount = this.formElement.querySelector('.donate-form__donate-input').value;
        if(donateAmount) {
            this.#updateSum(donateAmount);
            const newListElement = this.#createDonateListElement(donateAmount, new Date());
            this.listElement.append(newListElement);
        }
            
    }

    #updateSum(amount) {
        const sumElement = this.formElement.querySelector('#total-amount');
        let newSum = Utils.getNumericAmount(sumElement.innerText) + Number(amount);
        sumElement.innerText = newSum + '$';
    }

    #createDonateListElement(sum, date) {
        const newSum = document.createElement('b');
        newSum.textContent = `${sum}$`;
      
        const newDonate = document.createElement('div');
        newDonate.className = 'donate-item';
        newDonate.textContent = `${Utils.formatDate(date)} - `;
        newDonate.append(newSum);
      
        return newDonate;
      }


}