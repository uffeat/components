import { _BaseSlots } from './_base-slots.js';

/* 
TODO:
- Deal with icons.
*/

/* Component for navigation link. */
class JapNavLinkH1Drop extends _BaseSlots {
  constructor(text, { drop, group = 'main', href, key }) {
    super({});
    if (href && key) {
      throw "Set href OR key - not both.";
    }
    this._drop = drop;
    this.html = `
      <style>
        @import url('https://fonts.googleapis.com/icon?family=Material+Icons');

        :host {
          --paddingH: 8px;
          --hrBorderWidth: 2px;
          --transitionTime: 400ms;
          position: relative; 
        }

        a {
          display: flex;
          justify-content: center;
          align-items: center;
          column-gap: 2px;
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

        a:active hr {
          transition: transform var(--transitionTime) ease-out;
          transform: scaleX(1);
        }

        a.selected hr,
        a:focus hr {
          transform: scaleX(1);
        }

        .drop {
          position: absolute; 
          display: none;
          top: 100%; 
          left: 0; 
          min-width: 100%;
          background-color: var(--white);
          z-index: var(----zIndexDrop); 
          box-shadow: var(--boxShadow2);
          opacity: 0;
        }

        .drop.right-align {
          left: -100%;
        }

        a:hover .drop,
        a:focus .drop {
          display: initial;
          opacity: 1;
        }

        .drop:active {
          display: none !important;
          opacity: 0 !important;
        }

      </style>
        <a href="#">
          <span class="text"></span>
          <span class="icon material-icons">expand_more</span>
          <div class="drop">
            <hr>
            <slot></slot>
          </div>
        </a>
        
      `;

    this._aElement = this._root.querySelector('a');
    this._textElement = this._root.querySelector('.text');
    this._dropElement = this._root.querySelector('.drop');
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

  /*
  addComponent({ clear = false, slot = '' }, ...components) {
    super.addComponent({ clear, slot }, ...components);
    components.forEach(component => {
      component.addEventListener('click', event => {
        this.closeDrop();
      })
    });
  }
  */

  /*
  closeDrop() {
    this._dropElement.classList.add('closed');
  }
  */

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

const componentTag = 'jap-nav-link-h1-drop';
customElements.get(componentTag) || customElements.define(componentTag, JapNavLinkH1Drop);

export { JapNavLinkH1Drop };
