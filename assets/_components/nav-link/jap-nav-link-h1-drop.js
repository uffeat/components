import { _BaseSlots } from '../_bases/_base-slots.js';

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
          height: 100%;
        }

        a {
          display: flex;
          justify-content: center;
          align-items: center;
          column-gap: 2px;
          height: inherit;
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

        .drop {
          position: absolute; 
          top: 100%; 
          left: 0; 
          min-width: 100%;
          width: max-content;
          background-color: var(--white);
          z-index: var(----zIndexDrop); 
          box-shadow: var(--boxShadow2);
          opacity: 0;
          transition: opacity var(--transitionTime);
        }

        .drop.right-align {
          left: -100%;
        }

        .drop.peak,
        .drop.open {
          opacity: 1;
        }
        
        hr {
          height: 0;
          background-color: var(--white);
          border: var(--hrBorderWidth) solid var(--white);
          margin-top: calc(-1*var(--hrBorderWidth));
          transform: scaleX(0);
        }

        .drop.open hr {
          transition: transform var(--transitionTime) ease-out;
          transform: scaleX(1) !important;
        }
      </style>
        <a href="#">
          <span class="text"></span>
          <span class="icon material-icons">expand_more</span>
        </a>
        <div class="drop">
          <hr>
          <slot></slot>
        </div>
      `;

    this._aElement = this._root.querySelector('a');
    this._textElement = this._root.querySelector('.text');
    this._dropElement = this._root.querySelector('.drop');
    this.text = text || '';
    // Nav events:
    if (key) {
      this.group = group;
      this.key = key;
      this._aElement.addEventListener('click', this._navHandler.bind(this));
    }
    else if (href) {
      this._aElement.href = href;
    }
    // Visual events:
    this._aElement.addEventListener('mouseenter', this._peakDrop.bind(this));
    this.addEventListener('mouseleave', this._unPeakDrop.bind(this));
    this._aElement.addEventListener('click', this.toggleDrop.bind(this));
    this.addEventListener('blur', this.closeDrop.bind(this));
  }

  addComponent({ clear = false, slot = '' }, ...components) {
    super.addComponent({ clear, slot }, ...components);
    components.forEach(component => {
      component.addEventListener('click', event => {
        this.closeDrop();
      })
    });
  }
  
  _unPeakDrop() {
    this._dropElement.classList.remove('peak');
  }

  _peakDrop() {
    this._dropElement.classList.add('peak');
  }
  
  closeDrop() {
    this._dropElement.classList.remove('peak');
    this._dropElement.classList.remove('open');
  }

  openDrop() {
    this._dropElement.classList.add('open');
  }

  toggleDrop() {
    if (this._dropElement.classList.contains('open')) {
      this.closeDrop();
    }
    else {
      this.openDrop();
    }
  }
  
  _navHandler() {
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
