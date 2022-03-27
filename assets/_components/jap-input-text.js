import { _Base } from '../_bases/_base.js';


/* Component for text input */
class JapInputText extends _Base {
  constructor({}) {
    super({});
    /* Syles notes:
    - prompt, msg, and lead_icon placed after input to enable sibling selection with respect to input.
    - To preserve correct position of lead_icon and trail_icon the flex-direction of label is row-reverse
      (and justify-content: flex-end).
    - label has 'required' class + input empty -> '*'-prefix for placeholder prompt and message text '*Required'.
    - Not validation per se (only invalid marking). Validation in component code. */
    this.html = `
    <style>
      @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
      
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
        left: 16px;
        top: calc(-0.75*var(--fontSize) + 0.4*var(--fontSize));
        padding: 0 6px;
      }
      
      label.required input:placeholder-shown ~ .prompt::after {
        content: "*";
      }

      .msg {
        position: absolute;
        font-family: var(--fontFamily0);
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
    `;
  }

}

const componentTag = 'jap-input-text';
customElements.get(componentTag) || customElements.define(componentTag, JapInputText);

export { JapInputText };
