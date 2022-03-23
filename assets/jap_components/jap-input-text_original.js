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
        --labelPaddingLeft: 32px;
        --inputPaddingV: 12px;
        --inputPaddingH: 8px;
        --promptHeight: 20px;
        --msgHeight: 20px;
        --inputFontSize: 16px;
        --iconWidth: 48px;
      }
      
      label {
        margin-top: calc(8px + 0.5 * var(--promptHeight));
        margin-bottom: calc(8px + var(--msgHeight));
        padding-left: var(--labelPaddingLeft);
        position: relative;
        display: flex;
        flex-direction: row-reverse;
        justify-content: flex-end;
        align-items: center;
        background-color: var(--white);
      }
      
      
      .material-icons {
        font-size: calc(1.6 * var(--inputFontSize));
        width: var(--iconWidth);
      }
      
      .material-icons.lead {
        color: var(--mediumGray);
      }
      
      input:focus ~ .material-icons.lead {
        color: var(--themeColor);
      }
      
      input {
        width: 320px;
        font-family: var(--fontFamily0);
        font-size: var(--inputFontSize);
        padding: var(--inputPaddingV) var(--inputPaddingH);
        border-style: solid;
        border-width: 2px;
        border-radius: 6px;
        border-color: var(--mediumGray);
        caret-color: var(--themeColor);
        padding-right: calc(4px + var(--iconWidth));
      }
      
      input:focus {
        border-color: var(--themeColor);
        outline: none;
      }
      
      .prompt {
        font-family: var(--fontFamily0);
        position: absolute;
        color: var(--mediumGray);
        transition: top 200ms;
      }
      
      input:not(:placeholder-shown) ~ .prompt {
        background-color: inherit;
        font-size: calc(0.9 * var(--inputFontSize));
        color: var(--themeColor);
        
        top: calc(-0.5 * var(--promptHeight));  /**/
        
        left: calc(
          var(--labelPaddingLeft) +
          var(--iconWidth) +
          var(--inputPaddingH) + 8px
        );
        padding: 0 8px;
        height: var(--promptHeight);
        line-height: var(--promptHeight);
      }
      
      input:placeholder-shown ~ .prompt {
        font-size: var(--inputFontSize);
        top: var(--inputPaddingV);
        left: calc(
          var(--labelPaddingLeft) +
            var(--iconWidth) +
            var(--inputPaddingH) + 4px
        );
      }
      
      /**/
      .material-icons.trail {
        text-align: center;
        color: green;
        margin-left: calc(-1 * var(--iconWidth));
        z-index: 2;
      }
      
      .msg {
        position: absolute;
        height: var(--msgHeight);
        line-height: var(--msgHeight);
        left: calc(
          var(--labelPaddingLeft) +
          var(--iconWidth) +
          var(--inputPaddingH) + 4px
        );
        bottom: calc(-1 * var(--msgHeight) - 4px);
        font-family: var(--fontFamily0);
        font-size: 12px;  /**/
        color: var(--darkGray);
      }
      
      
      label.required input:placeholder-shown ~ .prompt::after {
        content: "*";
      }
      
      label.required input:placeholder-shown ~ .msg::before {
        content: "*Required";
      }
      
      /* Styling for 'invalid' and 'valid'. */
      /* label has 'invalid' class -> input border, label text (high and low) + leading icon turn red. */
      /* label has has 'valid' class -> leading icon turns green. */
      /* Not 'validation' per se (only marking). Validation in component code. */
      label.invalid input:not(:placeholder-shown) ~ .prompt {
        color: red;
      }
      
      label.invalid input {
        border-color: red;
      }
      
      label.invalid .material-icons.lead,
      label.invalid .material-icons.trail,
      label.invalid .msg {
        color: red;
      }
      
      label.valid .material-icons.trail {
        color: green;
      }
      
      label.valid .material-icons.trail::after {
        content: "done";
      }
    </style>
    <label class="required valid">
      <span class="material-icons trail"></span>
      <input type="text" placeholder=" ">
      <span class="prompt">Prompt</span>
      <span class="msg"></span>
      <span class="material-icons lead"></span>
    </label>
    `;
  }

}

const componentTag = 'jap-input-text';
customElements.get(componentTag) || customElements.define(componentTag, JapInputText);

export { JapInputText };
