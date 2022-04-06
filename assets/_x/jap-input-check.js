import { _Base } from './_jap-base.js';

/* Component for checkbox input */
class JapInputCheck extends _Base {
  constructor() {
    super({});
    this.html = `
    <style>
    @import url('https://fonts.googleapis.com/icon?family=Material+Icons');

    

      /* text styling */
      .checkbox > label > span {
        padding-top: 2px; /* use padding-top with .checkbox > label > input / padding-top to align box and text */
        padding-left: 4px;
      }

      /* actual checkbox styling, general */   
      .checkbox > label > input {
        /* cancel browser defaults */
        -webkit-appearance: none;
        -moz-appearance: none;
        -o-appearance: none;
        appearance: none;
        margin-top: 0px;
        height: 16px;
        width: 16px;
        border-style: solid;
        border-width: 1px;
        border-radius: 0;
        border-color: var(--c-gray);
        outline: none !important;
      }

      /* actual checkbox, non-checked */   
      .checkbox > label > input {
        background-color: transparent;
        outline: none !important;
      }
          
      /* actual checkbox, checked */
      .checkbox > label > input:checked {
        background-color: transparent;
        outline: none !important;
      }

      /* checkmark */
      .checkbox > label > input:checked + span::before {
        font-size: 16px;
        content: '\2713';
        display: block;
        text-align: center;
        color: var(--c-pri-1);
        position: absolute;
        top: 8px;
        left: 2px;
      }

      /* actual checkbox styling, hover */
      .checkbox > label > input:hover {
        border-width: 2px;
        border-color: var(--c-black);
      }

      /* actual checkbox styling, active */
      .checkbox > label > input:active {
        border-width: 2px;
        border-color: var(--c-pri-2);
      }
    </style>
    <label class="required valid">
      <span class="material-icons trail"></span>
      <input type="checkbox" placeholder=" ">
      <span class="prompt">Prompt</span>
      <span class="msg"></span>
      <span class="material-icons lead"></span>
    </label>
    `;
    
  }


}

const componentTag = 'jap-input-check';
customElements.get(componentTag) || customElements.define(componentTag, JapInputCheck);

export { JapInputCheck };
