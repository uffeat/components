var $3MH2t$swchelpers = require("@swc/helpers");

function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $e451a8223595cc61$exports = {};

$parcel$export($e451a8223595cc61$exports, "Dot", function () { return $e451a8223595cc61$export$d046b3c4a416f60d; });

const $58bdc4f45dbd7307$export$a5a6e0b888b2c992 = {
    prefix: 'jap',
    domClass: 'jap-component'
};



/* Base class for components with or without shadow DOM and no slots. */ class $e80606b0a52c3477$export$ef88aa0d34c34520 extends HTMLElement {
    _getHtmlFromTemplateId(templateId) {
        const template = document.getElementById(templateId);
        const clone = template.content.cloneNode(true);
        this._root.appendChild(clone);
    }
    /* Returns component's html. */ get html() {
        return this._root.innerHTML;
    }
    /* Sets component's html. */ set html(html) {
        // Clear this._root so that any child elements's event listeners are removed (to avoid memory leak):
        while(this._root.firstChild)this._root.firstChild.remove();
        this._root.innerHTML = html || ''; // Falsy html results in empty html (and not e.g., 'undefined').
    }
    /* Hides component */ hide() {
        this.style.display = 'none';
    }
    /* Shows component */ show() {
        this.style.display = 'initial';
    }
    constructor({ name: name , shadow: shadow = true  }){
        super();
        this.classList.add(`${$58bdc4f45dbd7307$export$a5a6e0b888b2c992.prefix}-component`);
        this.name = name;
        this.parent = null;
        if (shadow) this._root = this.attachShadow({
            mode: 'open'
        });
        else this._root = this;
    }
}


var _size = /*#__PURE__*/ new WeakMap();
/* Component for simple filled circle. */ class $e451a8223595cc61$export$d046b3c4a416f60d extends $e80606b0a52c3477$export$ef88aa0d34c34520 {
    get backgroundColor() {
        return this._dotElement.style.backgroundColor;
    }
    set backgroundColor(color) {
        this._dotElement.style.backgroundColor = color;
    }
    get size() {
        return $3MH2t$swchelpers.classPrivateFieldGet(this, _size);
    }
    /* Sets dot size in px (and adjusts border-width and font-size accordingly). */ set size(size) {
        $3MH2t$swchelpers.classPrivateFieldSet(this, _size, size);
        this._dotElement.style.width = size;
        this._dotElement.style.height = size;
    }
    constructor(){
        super({});
        $3MH2t$swchelpers.classPrivateFieldInit(this, _size, {
            writable: true,
            value: void 0
        });
        this.html = `
    <style>
      span {
        display: inline-block;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background-color: var(--themeColor);
      }
    </style>
    <span></span>
    `;
        // HTML elements:
        this._dotElement = this._root.querySelector('span');
    }
}
const $e451a8223595cc61$var$componentTag = `${$58bdc4f45dbd7307$export$a5a6e0b888b2c992.prefix}-dot`;
customElements.get($e451a8223595cc61$var$componentTag) || customElements.define($e451a8223595cc61$var$componentTag, $e451a8223595cc61$export$d046b3c4a416f60d);


var $d10e05e9849e6b3d$exports = {};

$parcel$export($d10e05e9849e6b3d$exports, "Index1", function () { return $d10e05e9849e6b3d$export$9234d5bea7aeae5f; });



/* Base class for components with shadow DOM and slots. */ class $c8315d7ca7c03428$export$235706bc030e4ac8 extends $e80606b0a52c3477$export$ef88aa0d34c34520 {
    /* Adds a component to slot in this component. */ addComponent(component, { clear: clear = false , slot: slot = ''  }) {
        if (!this._root.querySelector(`slot[name="${slot}"]`)) throw new Error(`Slot '${slot}' could not be found.`);
        if (clear === true) this.clear(slot);
        component.setAttribute('slot', slot);
        this.appendChild(component); // Note: Appends to 'this' (NOT 'this._root').
        component.parent = this;
    }
    removeComponent(component) {
        if (!this.querySelectorAll('*').includes(component)) throw new Error(`Attempted to remove non-added component.`);
        component.removeAttribute('slot');
        component.parent = null;
        component.remove();
    }
    /* Removes component added to slot. */ clear(slot) {
        this.getComponents(slot).forEach((component)=>this.removeComponent(component)
        );
    }
    /* Returns components added to slot. */ getComponents(slot) {
        const slotElement = this._root.querySelector(`slot[name="${slot}"]`);
        if (!slotElement) throw new Error(`Slot '${slot}' could not be found.`);
        return slotElement.assignedElements();
    // return this.querySelectorAll(`*[slot="${slot}"]`);
    }
    /* Returns array of slot names. Unnamed slot's name is ''.*/ getSlots() {
        return [
            ...this._root.querySelectorAll(`slot`)
        ].map((element)=>element.name
        );
    }
    constructor(){
        super({});
    }
}


/* Implements index component with left slide panel. */ class $d10e05e9849e6b3d$export$9234d5bea7aeae5f extends $c8315d7ca7c03428$export$235706bc030e4ac8 {
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
        if (this._sideElement.classList.contains('closed')) this.openPanel();
        else this.closePanel();
    }
    // TODO: Somehow activate from the component's 'focus component state'.
    linkFocusHandler(event) {
        const selected = 42;
        const siblings = this.querySelectorAll(`a[slot=${component.slot}]`);
        siblings.forEach((component)=>component.deselect()
        );
        selected.select();
    }
    constructor(){
        super({});
        this.html = `
    <style>    
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
        <slot name="side" class="close"></slot>
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
        this._sideCloseElements.forEach((element)=>{
            element.addEventListener('click', (event)=>{
                this.closePanel();
            });
        });
        this._sideToggleElements.forEach((element)=>{
            element.addEventListener('click', (event)=>{
                this.togglePanel();
            });
        });
    }
}
const $d10e05e9849e6b3d$var$componentTag = `${$58bdc4f45dbd7307$export$a5a6e0b888b2c992.prefix}-index-1`;
customElements.get($d10e05e9849e6b3d$var$componentTag) || customElements.define($d10e05e9849e6b3d$var$componentTag, $d10e05e9849e6b3d$export$9234d5bea7aeae5f);


var $337c35668a7f8fab$exports = {};

$parcel$export($337c35668a7f8fab$exports, "NavLinkH", function () { return $337c35668a7f8fab$export$957adc081a34e282; });


/* 
TODO:
- Deal with icons.
*/ /* Component horizontal navigation links. */ class $337c35668a7f8fab$export$957adc081a34e282 extends $e80606b0a52c3477$export$ef88aa0d34c34520 {
    get text() {
        return this._aElement.textContent;
    }
    set text(text) {
        this._aElement.textContent = text;
    }
    /* Styles nav link as selected. */ select() {
        this._aElement.classList.add('selected');
    }
    /* Styles nav link as unselected. */ deselect() {
        this._aElement.classList.remove('selected');
    }
    constructor({ href: href , text: text  }){
        super({});
        this.html = `
    <style>
      a {
        font-family: var(--fontFamily);
        font-size: 16px;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        white-space: nowrap;
        color: white;
        padding: 0 8px;          
        transition: background-color 200ms;
      }
      
      a:hover {
        background-color: var(--themeColorAccent);
      }
      
      hr {
        height: 0;
        background-color: white;
        border: 2px solid white;
        margin-top: -2px;
        transform: scaleX(0);
      }

      a:active ~ hr {
        transition: transform 200ms ease-out;
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
        if (href) this._aElement.href = href;
    }
}
const $337c35668a7f8fab$var$componentTag = `${$58bdc4f45dbd7307$export$a5a6e0b888b2c992.prefix}-nav-link-h`;
customElements.get($337c35668a7f8fab$var$componentTag) || customElements.define($337c35668a7f8fab$var$componentTag, $337c35668a7f8fab$export$957adc081a34e282);


var $475bf3fc1913b991$exports = {};

$parcel$export($475bf3fc1913b991$exports, "NavLinkV", function () { return $475bf3fc1913b991$export$59f68a89639c28df; });


/* 
TODO:
- Deal with icons.
*/ /* Component for vertical navigation link. */ class $475bf3fc1913b991$export$59f68a89639c28df extends $e80606b0a52c3477$export$ef88aa0d34c34520 {
    get text() {
        return this._aElement.textContent;
    }
    set text(text) {
        this._aElement.textContent = text;
    }
    /* Styles nav link as selected. */ select() {
        this._aElement.classList.add('selected');
    }
    /* Styles nav link as unselected. */ deselect() {
        this._aElement.classList.remove('selected');
    }
    constructor({ href: href , text: text  }){
        super({});
        this.html = `
    <style>
      a {
        display: block;
        color: black;
        font-family: var(--fontFamily);
        font-size: 16px;
        text-decoration: none;
        padding: 8px 16px;
        transition: background-color 200ms, color 200ms;
      }

      a:hover,
      a:focus, 
      a.selected {
        background-color: lightGray !important;
        color: var(--themeColor);
      }

    </style>
    <a href="#" class="text"></a>
    `;
        this._aElement = this._root.querySelector('a');
        this._textElement = this._root.querySelector('.text');
        this.text = text || '';
        if (href) this._aElement.href = href;
    }
}
const $475bf3fc1913b991$var$componentTag = `${$58bdc4f45dbd7307$export$a5a6e0b888b2c992.prefix}-nav-link-v`;
customElements.get($475bf3fc1913b991$var$componentTag) || customElements.define($475bf3fc1913b991$var$componentTag, $475bf3fc1913b991$export$59f68a89639c28df);


$parcel$exportWildcard(module.exports, $e451a8223595cc61$exports);
$parcel$exportWildcard(module.exports, $d10e05e9849e6b3d$exports);
$parcel$exportWildcard(module.exports, $337c35668a7f8fab$exports);
$parcel$exportWildcard(module.exports, $475bf3fc1913b991$exports);


//# sourceMappingURL=main.js.map
