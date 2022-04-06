import { settings } from '../_settings.js'
import { BaseSlots } from '../_bases/base-slots.js';
import { StylePlugin } from '../_plugins/style-plugin.js'


/* Implements index component with left slide panel. */
class Index1 extends BaseSlots {
  constructor() {
    super({});
    this.html = `
    <style>    
    :host {
      --fontFamily: 'Verdana', sans-serif;
      --themeColor: darkBlue;
      --themeColorAccent: blue;
      --headerHeight: 70px;
      --sideWidth: 300px;
      --sideTransitionTime: 400ms;
    }

    .page {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      overflow: hidden;
    }
    
    header {
      position: sticky;
      top: 0;
      height: var(--headerHeight);
      display: flex;
      align-items: center;
      color: white;
      background-color: var(--themeColor);
      padding: 0 32px;
      box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    }
    
    .menu {
      height: 100%;
      display: flex;
      align-items: center;
      font-size: 32px;
      background-color: transparent;
      color: white;
      padding: 0 8px;
      border: none;
      transition: background-color 400ms;
    }
    
    .menu:hover {
      background-color: var(--themeColorAccent);
    }

    .menu > svg {
      width: 32px;
      height: 32px;
    }

    .menu > svg > path {
      fill: white;
      stroke: transparent;
    }

    a.home {
      display: flex;
      align-items: center;
      height: 100%;
      color: inherit;
      text-decoration: none;
      padding: 0 8px;
      transition: background-color 400ms;
    }

    /*
    a.home:hover {
      background-color: var(--themeColorAccent);
    }
    */
    
    .logo {
      height: 60%;
      margin: 0 4px 0 0;
    }
    
    .title {
      font-family: var(--fontFamily);
      font-size: 24px;
      font-weight: 600;
      padding: 0;
      margin: 0 0 0 4px;
    }
    
    slot[name="top"] {
      height: 100%;
      margin-left: auto;
      display: flex;
      justify-content: flex-end;
    }
    
    main {
      flex-grow: 1;
      padding: 48px 32px;
      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap: 16px;
    }
    
    footer {
      display: flex;
      justify-content: center;
    }
    
    .side {
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      width: var(--sideWidth);
      z-index: 10;
      display: flex;
      flex-direction: column;
      row-gap: 16px;
      background-color: white;
      box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
      transition: transform var(--sideTransitionTime) ease-out;
    }
    
    .side.closed {
      transform: translateX(-100%);
    }
    
    button.close {
      align-self: flex-end;
      background-color: transparent;
      padding: 8px;
      border: none;
      margin-top: 8px;
    }

    button.close > svg {
      width: 24px;
      height: 24px;
    }

    button.close > svg > path {
      fill: darkGray;
      stroke: transparent;
      transition: fill 400ms;
    }

    button.close:hover > svg > path {
      fill: dimGray;
    }
    
    slot[name="side"] {
      display: flex;
      flex-direction: column;
    }

    @media (min-width: 600px) {
      .side {
        top: var(--headerHeight);
      }
    
      main {
        margin-left: var(--sideWidth);
        transition: margin-left var(--sideTransitionTime) ease-out;
      }
    
      .side.closed~main {
        margin-left: 0;
      }
    }
    </style>
    <div class="page">
      <header>
        <a class="menu toggle">
          <svg viewBox="0 0 24 24">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
          </svg>
        </a>
        <a href="#" class="home">
          <img src="" alt="" class="logo">
          <h2 class="title">Title</h2>
        </a>
        <slot name="top" class="top close"></slot>
      </header>
      <div class="side">
        <button class="close">
          <svg viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
          </svg>
        </button>        
        <slot name="side"></slot>
      </div>
      <main class="close">
        <slot name="main"></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    <div>
    `;
    new StylePlugin(this)
    // HTML elements:
    this._logoElement = this._root.querySelector('.logo');
    this._titleElement = this._root.querySelector('.title');

    this._sideElement = this._root.querySelector('.side');

    this._sideCloseElements = this._root.querySelectorAll('.close');
    this._sideToggleElements = this._root.querySelectorAll('.toggle');

    // Events:
    this._sideCloseElements.forEach(element => {
      element.addEventListener('click', event => {
        this.closePanel();
      });
    });

    this._sideToggleElements.forEach(element => {
      element.addEventListener('click', event => {
        this.togglePanel();
      });
    });
  }

  get logo() {
    return this._logoElement.src;
  }

  set logo(url) {
    this._logoElement.src = url;
  }

  get title() {
    return this._titleElement.textContent;
  }

  set title(text) {
    this._titleElement.textContent = text;
  }

  closePanel() {
    this._sideElement.classList.add('closed');
  }

  openPanel() {
    this._sideElement.classList.remove('closed');
  }

  togglePanel() {
    if (this._sideElement.classList.contains('closed')) {
      this.openPanel();
    }
    else {
      this.closePanel();
    }
  }

  addComponent(component, { clear = false, slot = 'main' }) {
    /*
    if (slot === 'side') {
      component.addEventListener('click', event => {
        this.querySelectorAll(`a[slot=${component.slot}]`).forEach(component => component.deselect());
        component.select();
        this.closePanel();
      });
    }
    */

    super.addComponent(component, { clear, slot })
  }

}

const componentTag = `${settings.prefix}-index-1`;
customElements.get(componentTag) || customElements.define(componentTag, Index1);


export { Index1 };
