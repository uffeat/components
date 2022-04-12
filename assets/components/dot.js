import { settings } from '../settings.js'
import { Base } from '../bases/base.js';

/* Component for simple filled circle. */
class Dot extends Base {
  #size;
  constructor() {
    super({});
    this.html = `
    <style>
      span {
        display: inline-block;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background-color: var(--themeColor);
      }
    </style>
    <span></span>
    `;
    // HTML elements:
    this._dotElement = this._root.querySelector('span');
  }

  get backgroundColor() {
    return this._dotElement.style.backgroundColor;
  }

  set backgroundColor(color) {
    this._dotElement.style.backgroundColor = color;
  }


  get size() {
    return this.#size;
  }

  /* Sets dot size in px (and adjusts border-width and font-size accordingly). */
  set size(size) {
    this.#size = size;
    this._dotElement.style.width = size;
    this._dotElement.style.height = size;
  }

}

const componentTag = `${settings.prefix}-dot`;
customElements.get(componentTag) || customElements.define(componentTag, Dot);

export { Dot };
