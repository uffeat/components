import { _Base } from './_jap-base.js';


/* Component for text input */
class JapInputText extends _Base {
  constructor() {
    super({});
    /* prompt, msg, and lead_icon placed after input to enable sibling selection with respect to input.
    To preserve the right placement of lead_icon and trail_icon the flex-direction of label is row-reverse
    (and justify-content: flex-end). */
    this.html = `
    <style>
    
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

  _getElements() {
    
  }

  _setEvents() {
    
  }
}

const componentTag = 'jap-input-text';
customElements.get(componentTag) || customElements.define(componentTag, JapInputText);

export { JapInputText };
