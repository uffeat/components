import { _Base } from './_jap-base.js.js';
import { getCssVar } from '../utils/style-utils.js';

/* Component for Google icons */
class JapImg extends _Base {
  #size;
  constructor() {
    super({});
    this.html = `
    <style>
      img {padding: 4px;}
    </style>
    <img>
    `;
    this._getElements();
  }

  _getElements() {
    this._imgElement = this._root.querySelector('img');
  }

  _setDefaults() {
    this.size = 36;
  }

  get src() {
    return this.#size;
  }

  /* Sets img src. */
  set src(url) {
    this._imgElement.src = url;
  }
  
  get size() {
    return this.#size;
  }

  /* Sets img width in px. */
  set size(size) {
    this._imgElement.style.width = `${size}px`;
  }

}

const componentTag = 'jap-img';
customElements.get(componentTag) || customElements.define(componentTag, JapImg);

export { JapImg };
