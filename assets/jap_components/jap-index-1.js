import { JapBaseSlots } from './jap-base-slots.js';


/* Implements frame component with left slide panel. */
class JapIndex1 extends JapBaseSlots {
  constructor() {
    super({});
    this.html = `
    <style>
    @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
    
    :host {
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
      color: var(--white);
      background-color: var(--themeColorDark);
      padding: 0 32px;
      box-shadow: var(--boxShadow0);
    }
    
    button.toggle {
      display: flex;
      align-items: center;
      font-size: 32px;
      background-color: transparent;
      color: var(--white);
      padding: 0 8px;
      border: none;
      transition: background-color var(--transitionTimeM);
    }
    
    button.toggle:hover {
      height: 100%;
      background-color: var(--themeColor);
    }

    a.home {
      display: flex;
      align-items: center;
      height: 100%;
      color: inherit;
      text-decoration: none;
      padding: 0 8px;
      transition: background-color var(--transitionTimeM);
    }

    /*
    a.home:hover {
      background-color: var(--themeColor);
    }
    */
    
    .logo {
      height: 60%;
      margin: 0 4px 0 0;
    }
    
    .title {
      font-family: var(--fontFamily0);
      font-size: var(--fontSizeXL);
      font-weight: var(--fontWeightL);
      padding: 0;
      margin: 0 0 0 4px;
    }
    
    .top {
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
      background-color: var(--white);
      box-shadow: var(--boxShadow2);
      transition: transform var(--sideTransitionTime) ease-out;
    }
    
    .side.closed {
      transform: translateX(-100%);
    }
    
    .side-top {
      display: flex;
      justify-content: flex-end;
    }
    
    button.close {
      font-size: 20px;
      color: var(--mediumGray);
      background-color: transparent;
      padding: 8px;
      border: none;
      margin-top: 8px;
      transition: color 2000ms;
    }
    
    button.close:hover {
      color: var(--DarkGray);
    }
    
    .side-body {
      padding-top: 16px;
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
        <button class="material-icons toggle">menu</button>
        <a href="#" class="home">
          <img src="#" class="logo">
          <h2 class="title">Japstack</h2>
        </a>
        <div class="top">
          <slot name="top"></slot>
        </div>
      </header>
      <div class="side">
        <div class="side-top">
          <button class="material-icons close">close</button>
        </div>
        <div class="side-body">
          <slot name="side"></slot>
        </div>
      </div>
      <main class="close">
        <slot name="main"></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    <div>
    `;
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

}

const componentTag = 'jap-index-1';
customElements.get(componentTag) || customElements.define(componentTag, JapIndex1);


export { JapIndex1 };
