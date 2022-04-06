import { settings } from '../_settings.js'

/* Base class for components with or without shadow DOM and no slots. */
class Base extends HTMLElement {
  constructor({ name, shadow = true }) {
    super();
    this.classList.add(`${settings.prefix}-component`);
    this.name = name;
    this.parentComponent = null;
    if (shadow) {
      this._root = this.attachShadow({
        mode: 'open',
        // delegatesFocus: true
      });
    }
    else {
      this._root = this;
    }
  }

  _getHtmlFromTemplateId(templateId) {
    const template = document.getElementById(templateId);
    const clone = template.content.cloneNode(true);
    this._root.appendChild(clone);
  }

  /* Returns component's html. */
  get html() {
    return this._root.innerHTML;
  }

  /* Sets component's html. */
  set html(html) {
    // Clear this._root so that any child elements's event listeners are removed (to avoid memory leak):
    while (this._root.firstChild) {
      this._root.removeChild(this._root.firstChild);
    }
    this._root.innerHTML = html || '';  // Falsy html results in empty html (and not e.g., 'undefined').
  }

  /* Hides component */
  hide() {
    this.style.display = 'none';
  }

  /* Shows component */
  show() {
    this.style.display = 'initial';
  }

}

export { Base };
