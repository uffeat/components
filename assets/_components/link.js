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
    this.classList.add(style);
    this.html = `
      <style>
        :host {
          --fontFamily: 'Verdana', sans-serif;
          --themeColor: darkBlue;
          --themeColorAccent: blue;
        }

        :host(.v1) {
          --paddingH: 8px;
          --hrBorderWidth: 2px;
          --transitionTime: 200ms;
        }

        :host(.v1) a {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          font-family: var(--fontFamily);
          font-size: 16px;
          text-decoration: none;
          white-space: nowrap;
          color: white;
          padding: 0 var(--paddingH);          
          transition: background-color var(--transitionTime);
        }
        
        :host(.v1) a:hover {
          background-color: var(--themeColorAccent);
        }
        
        :host(.v1) hr {
          height: 0;
          background-color: white;
          border: var(--hrBorderWidth) solid white;
          margin-top: calc(-1*var(--hrBorderWidth));
          transform: scaleX(0);
        }

        :host(.v1) a:active ~ hr {
          transition: transform var(--transitionTime) ease-out;
          transform: scaleX(1);
        }

        :host(.v1) a.selected ~ hr,
        :host(.v1) a:focus ~ hr {
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