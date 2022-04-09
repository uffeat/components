import { settings } from '../_settings.js'
import { Base } from '../_bases/base.js'
import { StylePlugin } from '../_plugins/style-plugin.js'

/* 
TODO:
- Deal with icons.
*/

/* Component for hyper link. */
class Link extends Base {
  constructor({ href, style, text }) {
    super({});
    //this.classList.add(style);
    this.html = `
      <style>
        :host {
          --fontFamily: 'Verdana', sans-serif;
          --themeColor: darkBlue;
          --themeColorAccent: blue;
        }

        a {
          font-family: var(--fontFamily);
          font-size: 16px;
          text-decoration: none;
        }

        hr {
          display: none;
        }

        :host(.v1) a {
          display: block;
          color: black;
          padding: 8px 16px;
          transition: background-color 200ms, color 200ms;
        }

        :host(.v1) a:hover,
        :host(.v1) a:focus, 
        :host(.v1) a.selected {
          background-color: lightGray !important;
          color: var(--themeColor);
        }

        :host(.h1) a {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          white-space: nowrap;
          color: white;
          padding: 0 8px;          
          transition: background-color 200ms;
        }
        
        :host(.h1) a:hover {
          background-color: var(--themeColorAccent);
        }
        
        :host(.h1) hr {
          height: 0;
          background-color: white;
          border: 2px solid white;
          margin-top: -2px;
          transform: scaleX(0);
        }

        :host(.h1) a:active ~ hr {
          transition: transform 200ms ease-out;
          transform: scaleX(1);
        }

        :host(.h1) a.selected ~ hr,
        :host(.h1) a:focus ~ hr {
          transform: scaleX(1);
        }
      </style>
      <a href="#" class="text"></a>
      <hr>
    `;
    new StylePlugin(this)
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

const componentTag = `${settings.prefix}-link`;
customElements.get(componentTag) || customElements.define(componentTag, Link);

export { Link };
