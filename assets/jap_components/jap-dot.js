import { JapBase } from './_base.js';
import { getCssVar } from '../utils/style-utils.js';

/* Component for text input */
class JapDot extends JapBase {
  #size;
  constructor() {
    super({});
    this.html = `
    <style>
      span {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        border: 0 solid transparent;
      }
    </style>
    <span></span>
    `;
    // HTML elements:
    this._dotElement = this._root.querySelector('span');
    // Defaults:
    this.backgroundColor = getCssVar('themeColor');
    this.borderColor = getCssVar('themeColorAlt');
    this.size = 48;
    this.textColor = getCssVar('black');
  }

  get backgroundColor() {
    return this._dotElement.style.backgroundColor;
  }

  set backgroundColor(color) {
    this._dotElement.style.backgroundColor = color;
  }

  get borderColor() {
    return this._dotElement.style.borderColor;
  }

  set borderColor(color) {
    this._dotElement.style.borderColor = color;
  }

  get size() {
    return this.#size;
  }

  /* Sets dot size in px (and adjusts border-width and font-size accordingly). */
  set size(size) {
    this.#size = size;
    this._dotElement.style.width = `${size}px`;
    this._dotElement.style.height = `${size}px`;
    this._dotElement.style.borderWidth = `${0.1 * size}px`;
    this._dotElement.style.fontSize = `${0.35 * size}px`;
  }

  get text() {
    return this._dotElement.textContent;
  }

  set text(text) {
    this._dotElement.textContent = text;
  }

  get textColor() {
    return this._dotElement.style.color;
  }

  set textColor(color) {
    this._dotElement.style.color = color;
  }

}

const componentTag = 'jap-dot';
customElements.get(componentTag) || customElements.define(componentTag, JapDot);

export { JapDot };
