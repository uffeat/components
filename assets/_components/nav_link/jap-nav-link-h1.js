import { _Base } from '../_bases/_base.js';

/* 
TODO:
- Deal with icons.
*/

/* Component for navigation link. */
class JapNavLinkH1 extends _Base {
  constructor(text, { group = 'main', href, key }) {
    super({});
    if (href && key) {
      throw "Set href OR key - not both.";
    }
    this.html = `
      <style>
        @import url('https://fonts.googleapis.com/icon?family=Material+Icons');

        :host {
          --paddingH: 8px;
          --hrBorderWidth: 2px;
          --transitionTime: 200ms;
        }

        a {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          font-family: var(--fontFamily0);
          font-size: var(--fontSizeL);
          text-decoration: none;
          white-space: nowrap;
          color: var(--white);
          padding: 0 var(--paddingH);          
          transition: background-color var(--transitionTime);
        }
        
        a:hover {
          background-color: var(--themeColor);
        }
        
        hr {
          height: 0;
          background-color: var(--white);
          border: var(--hrBorderWidth) solid var(--white);
          margin-top: calc(-1*var(--hrBorderWidth));
          transform: scaleX(0);
        }

        a:active ~ hr {
          transition: transform var(--transitionTime) ease-out;
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
    if (key) {
      this.group = group;
      this.key = key;
      this._aElement.addEventListener('click', this._navHandler.bind(this));
    }
    if (href) {
      this._aElement.href = href;
    }

  }

  _navHandler(event) {
    const navEvent = new CustomEvent('nav', {
      bubbles: true,
      detail: {
        key: null,
      },
    });
    navEvent.detail.key = this.key;
    this.dispatchEvent(navEvent);
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

const componentTag = 'jap-nav-link-h1';
customElements.get(componentTag) || customElements.define(componentTag, JapNavLinkH1);

export { JapNavLinkH1 };
