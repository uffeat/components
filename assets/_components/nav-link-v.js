import { settings } from '../_settings.js'
import { Base } from '../_bases/base.js'

/* 
TODO:
- Deal with icons.
*/

/* Component for vertical navigation link. */
class NavLinkV extends Base {
  constructor({ href, text }) {
    super({});
    this.html = `
    <style>
      a {
        display: block;
        color: black;
        font-family: var(--fontFamily);
        font-size: 16px;
        text-decoration: none;
        padding: 8px 16px;
        transition: background-color 200ms, color 200ms;
      }

      a:hover,
      a:focus, 
      a.selected {
        background-color: lightGray !important;
        color: var(--themeColor);
      }

    </style>
    <a href="#" class="text"></a>
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

const componentTag = `${settings.prefix}-nav-link-v`;
customElements.get(componentTag) || customElements.define(componentTag, NavLinkV);

export { NavLinkV };
