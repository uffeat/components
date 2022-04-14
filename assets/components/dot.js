import { settings } from '../settings.js'
import { Component } from '../base/component.js';

/* Component for simple filled circle. */
class Dot extends Component {
  #size;
  constructor() {
    super()
    //<link rel="stylesheet" href="assets/components/dot.css">
    this.html = `
    
    <span></span>
    `
    this._dotElement = this._root.querySelector('span')
  }

  /* Returns dot color. */
  get color() {
    return this._dotElement.style.backgroundColor
  }

  /* Sets dot color. */
  set color(color) {
    this._dotElement.style.backgroundColor = color
  }

  /* Returns dot size. */
  get size() {
    return this.#size
  }

  /* Sets dot size. */
  set size(size) {
    this.#size = size;
    this._dotElement.style.width = size
    this._dotElement.style.height = size
  }

}

const componentTag = `${settings.prefix}-dot`
customElements.get(componentTag) || customElements.define(componentTag, Dot)

export { Dot };
