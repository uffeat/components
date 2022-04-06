import { _Base } from './_base.js';

/* 
TODO:
- Deal with icons.
*/

/* Component for navigation link. */
class JapNavLink extends _Base {
  constructor(text, { group = 'main', href, key, style = 'v1' }) {
    super({});
    if (href && key) {
      throw "Set href OR key - not both.";
    }
    if (style === 'v1') {
      this.html = `
      <style>
        @import url('https://fonts.googleapis.com/icon?family=Material+Icons');

        a {
          display: flex;
          font-family: var(--fontFamily0);
          font-size: var(--fontSizeL);
          text-decoration: none;
          color: var(--darkGray);
          transition: background-color var(--transitionTimeM), color var(--transitionTimeM);
        }
        
        a:hover {
          background-color: var(--lightGray);
        }
        
        a.selected,
        a:focus {
          color: var(--black);
          background-color: var(--mediumGray);
        }
        
        .text {
          padding: var(--paddingL);
        }
        
        .material-icons {
          font-size: 24px;
          width: 30px;
          color: pink;
        }
      </style>
     
      <a href="#">
      <span class="text"></span>
      </a>
      `;
    }
    else if (style === 'h1') {
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
      <a href="#">
        <span class="text"></span>
        <hr>
      </a>
      `;
    }
    else {
      throw `Invalid style '${style}'.`
    }
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

const componentTag = 'jap-nav-link';
customElements.get(componentTag) || customElements.define(componentTag, JapNavLink);

export { JapNavLink };
