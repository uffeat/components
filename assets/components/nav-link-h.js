import { settings } from '../settings.js'
import { Base } from '../bases/base.js'

/* 
TODO:
- Deal with icons.
*/

/* Component horizontal navigation links. */
class NavLinkH extends Base {
  constructor({ href, text }) {
    super({});
    this.html = `
    <style>
      a {
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
      
      a:hover {
        background-color: var(--themeColorAccent);
      }
      
      hr {
        height: 0;
        background-color: white;
        border: 2px solid white;
        margin-top: -2px;
        transform: scaleX(0);
      }

      a:active ~ hr {
        transition: transform 200ms ease-out;
        transform: scaleX(1);
      }

      a.selected ~ hr,
      a:focus ~ hr {
        transform: scaleX(1);
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

const componentTag = `${settings.prefix}-nav-link-h`;
customElements.get(componentTag) || customElements.define(componentTag, NavLinkH);

export { NavLinkH };
