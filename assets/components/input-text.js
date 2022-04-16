import { settings } from '../setings.js'
import { Component } from '../base/component.js';

/* Component text input */
class InputText extends Component {
  constructor({value}) {
    super();
    this.html = `
    <style>
      :host {
        --fontSize: 16px;
        position: relative;
        min-width: 280px;
      }
      
      label {
        display: flex;
        flex-direction: row-reverse;
        justify-content: flex-end;
        align-items: center;
        background-color: var(--white);
      }
      
      input {
        width: 100%;
        font-family: var(--fontFamily);
        border-style: solid;
        border-width: 2px;
        border-radius: 6px;
        border-color: var(--mediumGray);
        caret-color: var(--themeColor);
      }
      
      input:focus {
        border-color: var(--themeColor);
        outline: none;
      }
      
      .prompt {
        position: absolute;
        font-family: var(--fontFamily);
        transition: top 200ms;
      }
      
      /* Prompt as placeholder */
      input:placeholder-shown ~ .prompt {
        color: var(--mediumGray);
        margin-left: 4px;
      }

      input,
      input:placeholder-shown ~ .prompt {
        font-size: var(--fontSize);
        padding: calc(0.5*var(--fontSize)) 10px;
      }

      /* Prompt as superscript */
        input:not(:placeholder-shown) ~ .prompt {
        background-color: inherit;
        font-size: calc(0.8*var(--fontSize));
        color: var(--themeColor);
        left: 16px;
        top: calc(-0.75*var(--fontSize) + 0.4*var(--fontSize));
        padding: 0 6px;
      }
      
      label.required input:placeholder-shown ~ .prompt::after {
        content: "*";
      }

      .msg {
        position: absolute;
        font-family: var(--fontFamily);
        font-size: calc(0.8*var(--fontSize));
        color: var(--darkGray);
        left: 12px;
        bottom: calc(-1.5*var(--fontSize) + 0.4*var(--fontSize));
      }

      label.required input:placeholder-shown ~ .msg::before {
        content: "*Required";
      }
    </style>
    <label class="required valid">
      <input type="text" placeholder=" ">
      <span class="prompt">Prompt</span>
      <span class="msg"></span>
    </label>
    `
    // HTML elements:
    this._inputElement = this._root.querySelector('input')
    // Events:
    this._inputElement.addEventListener('change', this._changeHandler.bind(this))
    // Args:
    this.value = value;
  }

  get value() {
    return this._inputElement.value;
  }

  set value(value) {
    this._inputElement.value = value;
  }

  _changeHandler(event) {
    
  }

}

const componentTag = `${settings.prefix}-input-text`;
customElements.get(componentTag) || customElements.define(componentTag, InputText);

export { InputText };






