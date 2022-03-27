import { settings } from '../_setings.js'
import { _Base } from '../_bases/_base.js';

/* Component for button with ripple effect */
class Button extends _Base {
  constructor({text}) {
    super({});
    this.html = `
    <style>
      input[type="button"],
      input[type="submit"],
      input[type="reset"],
      button {
        overflow: hidden;
        background-color: var(--themeColor);
        color: var(--white);
        font-size: 16px;
        text-transform: uppercase;
        padding: 12px 18px;
        border: none;
        border-radius: 2px;
        box-shadow: var(--boxShadow0);
        outline: none;
      }

      input[type="button"]:hover,
      input[type="submit"]:hover,
      input[type="reset"]:hover,
      button:hover {
        background-color: var(--themeColorDark);
      }

      button {
        /* Enable position absolute for span ripple element for JapButton: */
        position: relative;
        cursor: pointer;
        transition: background 400ms;
      }

      span.ripple {
        position: absolute;
        background-color: rgba(255, 255, 255, 0.7);
        /* Make ripples circular: */
        border-radius: 50%;
        /* Ensure that each ripple emerges from nothing: */
        transform: scale(0);
        animation: rippleEffect 600ms linear;
        /* top, left, width, and height are set from code. */
      }

      @keyframes rippleEffect {
        from {
          transform: scale(0);
          opacity: 1;
        }
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
    </style>
    <button></button>
    `;
    // HTML elements:
    this._buttonElement = this._root.querySelector('button');
    // Events:
    this._buttonElement.addEventListener('click', this._createRipple.bind(this));
    // Args:
    this.text = text;
  }

  get text() {
    return this._buttonElement.textContent;
  }

  set text(text) {
    this._buttonElement.textContent = text;
  }

  _createRipple(event) {
    const oldRippleElement = this._root.querySelector('span.ripple');
    if (oldRippleElement) {
      oldRippleElement.remove();
    }
    const rippleElement = document.createElement('span');
    rippleElement.classList.add("ripple")
    // Set rippleElement size (ripple diameter):
    const size = Math.max(this._buttonElement.clientWidth, this._buttonElement.clientHeight);
    rippleElement.style.width = rippleElement.style.height = `${size}px`;
    // Position rippleElement:
    rippleElement.style.left = `${event.clientX - this._buttonElement.offsetLeft - size/2}px`;
    rippleElement.style.top = `${event.clientY - this._buttonElement.offsetTop - size/2}px`;
    this._buttonElement.appendChild(rippleElement)
  }

}

const componentTag = `${settings.prefix}-button`;
customElements.get(componentTag) || customElements.define(componentTag, Button);

export { Button };






