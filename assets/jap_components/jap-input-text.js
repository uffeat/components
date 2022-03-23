import { _Base } from './_base.js';


/* Component for text input */
class JapInputText extends _Base {
  constructor({}) {
    super({});
    /* prompt, msg, and lead_icon placed after input to enable sibling selection with respect to input.
    To preserve the right placement of lead_icon and trail_icon the flex-direction of label is row-reverse
    (and justify-content: flex-end). */

   
    /* label has 'required' class + input empty -> '*'-prefix label text (high and low) + message = '*Required'. */
    /* Not 'validation' per se (no invalid marking). Validation in component code. */


    this.html = `
    <style>
      @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
      
      :host {
        --fontSize: 16px;
        position: relative;
      }
      
      label {
        display: flex;
        flex-direction: row-reverse;
        justify-content: flex-end;
        align-items: center;
        background-color: var(--white);
        
      }
      
      input {
        min-width: 320px;
        font-family: var(--fontFamily0);
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
        font-family: var(--fontFamily0);
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
        top: calc(-0.75*var(--fontSize) + 0.4*var(--fontSize));
        left: 16px;
        padding: 0 6px;
      }
      
      label.required input:placeholder-shown ~ .prompt::after {
        content: "*";
      }
      
  
    </style>
    <label class="required valid">
      
      <input type="text" placeholder=" ">
      <span class="prompt">Prompt</span>
      
    </label>
    `;
  }

}

const componentTag = 'jap-input-text';
customElements.get(componentTag) || customElements.define(componentTag, JapInputText);

export { JapInputText };
