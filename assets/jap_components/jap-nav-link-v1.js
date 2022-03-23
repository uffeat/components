import { JapBase } from './_base.js';

/* 
TODO:
- Deal with icons.
*/

/* Component for navigation link. */
class JapNavLinkV1 extends JapBase {
  constructor(text, { group = 'main', href, key}) {
    super({});
    if (href && key) {
      throw "Set href OR key - not both.";
    }
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
    this._aElement = this._root.querySelector('a');
    this._textElement = this._root.querySelector('.text');
    this.text = text || '';
    if (key) {
      this.group = group;
      this.key = key;
      this._aElement.addEventListener('click', this._clickHandler.bind(this));
    }
    if (href) {
      this._aElement.href = href;
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
    this._aElement.classList.add('selected')
  }

  /* Styles nav link as unselected. */
  deselect() {
    this._aElement.classList.remove('selected')
  }
}

const componentTag = 'jap-nav-link-v1';
customElements.get(componentTag) || customElements.define(componentTag, JapNavLinkV1);

export { JapNavLinkV1 };
