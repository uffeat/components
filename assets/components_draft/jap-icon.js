import { _Base } from './_jap-base.js.js.js';
import { getCssVar } from '../utils/style-utils.js';

/* Component for Google icons */
class JapIcon extends _Base {
  #hoverColor;
  #size;
  constructor(icon) {
    super({});
    this.html = `
    <style>
      @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
      span {padding: 4px;}
    </style>
    <span class="material-icons"></span>
    `;
    this._getElements();
    this._setDefaults();
    this.icon = icon;
  }

  _getElements() {
    this._spanElement = this._root.querySelector('span');
    this._styleElement = this._root.querySelector('style');
  }

  _setDefaults() {
    this.color = getCssVar('themeColor');
    this.size = 36;
  }

  get hoverColor() {
    return this.#hoverColor;
  }

  set hoverColor(color) {
    this.#hoverColor = color;
    this._styleElement.insertAdjacentHTML('beforeend', `span:hover {color: ${color} !important;}`)

  }
  
  get color() {
    return this._spanElement.style.color;
  }

  set color(color) {
    this._spanElement.style.color = color;
  }

  get icon() {
    return this._spanElement.textContent;
  }

  set icon(icon) {
    this._spanElement.textContent = icon;
  }

  get size() {
    return this.#size;
  }

  /* Sets icon font-size in px. */
  set size(size) {
    this._spanElement.style.fontSize = `${size}px`;
  }

}

const componentTag = 'jap-icon';
customElements.get(componentTag) || customElements.define(componentTag, JapIcon);

export { JapIcon };
