import { settings } from '../settings.js'
import { Component } from '../base/component.js';

/* 
TODO:
- Deal with icons.
*/

/* Component navigation links. */
class Navlink extends Component {
  constructor({ href, text }) {
    super();
    this.html = `
    <style>
    :host([horizontal]) a {
        font-family: var(--fontFamily);
        font-size: 16px;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        white-space: nowrap;
        color: white;
        padding: 0 8px;          
        transition: background-color 200ms;
      }
      
      :host([horizontal]) a:hover {
        background-color: var(--themeColorAccent);
      }
      
      :host([horizontal]) hr {
        height: 0;
        background-color: white;
        border: 2px solid white;
        margin-top: -2px;
        transform: scaleX(0);
      }

      :host([horizontal]) a:active ~ hr {
        transition: transform 200ms ease-out;
        transform: scaleX(1);
      }

      :host([horizontal]) a.selected ~ hr,
      :host([horizontal]) a:focus ~ hr {
        transform: scaleX(1);
      }

      :host([vertical]) a {
        display: block;
        color: black;
        font-family: var(--fontFamily);
        font-size: 16px;
        text-decoration: none;
        padding: 8px 16px;
        transition: background-color 200ms, color 200ms;
      }

      :host([vertical]) a:hover,
      :host([vertical]) a:focus, 
      :host([vertical]) a.selected {
        background-color: lightGray !important;
        color: var(--themeColor);
      }

      :host([vertical])  hr {
        display: none;
      }
    </style>
    <a href="#" class="text"></a>
    <hr>
    `;
    this._aElement = this._root.querySelector('a');
    this._textElement = this._root.querySelector('.text');
    this.text = text || '';
    if (href) {
      this._aElement.href = href;
    }
  }

  get text() {
    return this._aElement.textContent;
  }

  set text(text) {
    this._aElement.textContent = text;
  }

  /* Styles nav link as selected. */
  select() {
    this._aElement.classList.add('selected')
  }

  /* Styles nav link as unselected. */
  deselect() {
    this._aElement.classList.remove('selected')
  }
}

const componentTag = `${settings.prefix}-navlink`;
customElements.get(componentTag) || customElements.define(componentTag, Navlink);

export { Navlink };
