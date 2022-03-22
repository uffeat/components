import { JapBase } from './jap-base.js';

/* 
TODO:
- Deal with icons.
*/

/* Component for navigation link. */
class JapNavLinkH1 extends JapBase {
  constructor(text, { drop = false, group = 'main', href, key }) {
    super({});
    if (href && key) {
      throw "Set href OR key - not both.";
    }
    this._drop = drop
    this.html = `
      <style>
        @import url('https://fonts.googleapis.com/icon?family=Material+Icons');

        :host {
          --paddingH: 8px;
          --hrBorderWidth: 2px;
          --transitionTime: 200ms;
        }

        a {
          display: inline-flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          height: 100%;
          font-family: var(--fontFamily0);
          font-size: var(--fontSizeL);
          text-decoration: none;
          white-space: nowrap;
          color: var(--white);
          padding: 0 var(--paddingH);
          margin 0;
          transition: background-color var(--transitionTime);
        }
        
        a.selected,
        a:focus {
          background-color: var(--themeColor);
        }

        .text {
          margin: auto 0;
        }
        
        a hr {
          width: calc(100% + var(--paddingH) + 4px);
          height: 0;
          background-color: var(--white);
          border: var(--hrBorderWidth) solid var(--white);
          margin: 0 0 calc(-1*var(--hrBorderWidth)) 0;
          transform: scaleX(0);
        }

        a:hover hr {
          transition: transform var(--transitionTime) ease-out;
          transform: scaleX(1);
        }

        a.selected hr,
        a:focus hr {
          transform: scaleX(1);
        }
      </style>
      <div style="position: relative; height: 100%;">
        <a href="#">
          <span class="text"></span>
          <hr>
        </a>



        <div style="position: absolute; top: 120px; left: -250px; background-color: red; z-index: 30; font-size: 80px">
          stuff
        </div>



      </div>
      `;

    this._linkElement = this._root.querySelector('a');
    this._textElement = this._root.querySelector('.text');
    this.text = text || '';
    if (key) {
      this.group = group;
      this.key = key;
      this._linkElement.addEventListener('click', this._clickHandler.bind(this));
    }
    if (href) {
      this._linkElement.href = href;
    }

  }

  _clickHandler(event) {
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
    return this._textElement.textContent;
  }

  set text(text) {
    this._textElement.textContent = text;
  }

  /* Styles nav link as selected. */
  select() {
    this._linkElement.classList.add('selected')
  }

  /* Styles nav link as unselected. */
  deselect() {
    this._linkElement.classList.remove('selected')
  }
}

const componentTag = 'jap-nav-link-h1';
customElements.get(componentTag) || customElements.define(componentTag, JapNavLinkH1);

export { JapNavLinkH1 };
