import { _Base } from './_jap-base.js';


/* Component for select input with option for multi-select */
class JapInputSelect extends _Base {
  constructor() {
    super({});
    this.html = `
    <style>
    @import url('https://fonts.googleapis.com/icon?family=Material+Icons');

    
      input.anvil-component, 
      textarea.anvil-component, 
      .anvil-component select, 
      .anvil-datepicker input {
        font-size: 16px;
        line-height: 1.5;
        border-radius: 0;
        background-color: transparent;
        color: rgba(0,0,0,0.87);
        box-shadow: none;
      }

      .anvil-dropdown {
        font-size: 16px;
      }

      .anvil-component select {
        font-size: inherit;
      }

      input.anvil-component, 
      .anvil-component select, 
      .anvil-datepicker input {
        padding: 8px 0 4px;
        border: 0;
        border-bottom: 1px solid rgba(0,0,0,0.42);
        transition: border-bottom 0.2s, padding-bottom 0.2s;
        -moz-transition: none; /* Firefox is jumpy, so disable transitions */
      }

      textarea.anvil-component {
        padding: 4px 8px;
        border: 1px solid rgba(0,0,0,0.42);
        border-radius: 2px;
        transition: border 0.2s, padding 0.2s;
        -moz-transition: none; /* Firefox is jumpy, so disable transitions */
      }

      .anvil-dropdown select.form-control {
        -webkit-appearance: none;
        -moz-appearance: none;
        margin-top: 0px;
        padding: 8px 2em 4px 0;
        /* select elements don't obey line-height, so line height is set explicitly. */
        height: calc(1.5em + 13px); /* 8px + 4px padding + 1px border = 13px */
      }

      .anvil-dropdown {
        position: relative;
      }

      /* Select arrow styling */
      .anvil-dropdown form:before {
          content: "\25BC";
          position: absolute;
          right: 0;
          font-size: 80%;
          line-height: calc(1.8em + 8px);
          color: #555;
          pointer-events:none;
          padding: 4px 4px;
      }

      .anvil-component select, 
      .anvil-datepicker input { 
        margin-bottom: 4px; 
      }

      input.anvil-component.anvil-spacing-below-none { 
        margin-bottom: 4px; 
      }

      input.anvil-component.anvil-spacing-below-small { 
        margin-bottom: 8px; 
      }

      input.anvil-component.anvil-spacing-below-medium { 
        margin-bottom: 12px; 
      }

      input.anvil-component.anvil-spacing-below-large { 
        margin-bottom: 20px; 
      }

      input.anvil-component::-webkit-input-placeholder, 
      textarea.anvil-component::-webkit-input-placeholder {
        color: rgba(0,0,0,0.54);
      }

      input.anvil-component::-moz-placeholder, 
      textarea.anvil-component::-moz-placeholder {
        color: rgba(0,0,0,0.54);
      }

      input.anvil-component::placeholder, 
      textarea.anvil-component::placeholder  {
        color: rgba(0,0,0,0.54);
      }

      input.anvil-component:hover, 
      .anvil-component select:hover, 
      .anvil-datepicker input:hover {
        border-bottom: 2px solid rgba(0,0,0,.87);
        padding-bottom: 3px;
      }

      input.anvil-component:focus, 
      .anvil-component select:focus, 
      .anvil-datepicker input:focus {
        border-bottom: 2px solid var(--c-pri-2);
        padding-bottom: 3px;
        box-shadow: none;
      }

      input.anvil-component[disabled], 
      .anvil-component select[disabled], 
      .anvil-datepicker input[disabled] {
        border-bottom: 1px dashed #888;
        padding-bottom: 4px;
        background-color: transparent;
      }

      textarea.anvil-component:hover {
        border: 2px solid rgba(0,0,0,0.87);
        padding: 3px 7px;
      }

      textarea.anvil-component:focus {
        border: 2px solid var(--c-pri-2);
        padding: 3px 7px;
        box-shadow: none;
      }

      textarea.anvil-component[disabled] {
        border: 1px dashed #888;
        padding: 4px 8px;
        background-color: transparent;
      }
    </style>
    <label class="required valid">
      <span class="material-icons trail"></span>
      <input type="select" placeholder=" ">
      <span class="prompt">Prompt</span>
      <span class="msg"></span>
      <span class="material-icons lead"></span>
    </label>
    `;
    
  }


}

const componentTag = 'jap-input-select';
customElements.get(componentTag) || customElements.define(componentTag, JapInputSelect);

export { JapInputSelect };
