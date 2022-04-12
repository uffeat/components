import { _Base } from './_jap-base.js';


/* Component for number input with format options */
class JapInputNumber extends _Base {
  constructor() {
    super({});
    this.html = `
    <style>
    @import url('https://fonts.googleapis.com/icon?family=Material+Icons');

    input[type="number"] {
      text-align: right;
    }
    
    
    input[type="number"].step::after {
      content: " ";
    }
    
    
    /* Chrome, Safari, Edge, Opera */
    input[type="number"]:not(.step)::-webkit-outer-spin-button,
    input[type="number"]:not(.step)::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    
    /* Firefox */
    input[type="number"]:not(.step) {
      -moz-appearance: textfield;
    }
    </style>
    <label class="required valid">
      <span class="material-icons trail"></span>
      <input type="number" placeholder=" ">
      <span class="prompt">Prompt</span>
      <span class="msg"></span>
      <span class="material-icons lead"></span>
    </label>
    `;
    
  }


}

const componentTag = 'jap-input-number';
customElements.get(componentTag) || customElements.define(componentTag, JapInputNumber);

export { JapInputNumber };
