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
    prefix: 'x'
};


class $9761af99d9013dd5$export$16fa2f45be04daa8 extends HTMLElement {
    /* Returns html. */ get html() {
        return this._root.innerHTML;
    }
    /* Sets html. */ set html(html) {
        while(this._root.firstChild)this._root.firstChild.remove();
        this._root.innerHTML = html || '' // To avoid showing 'undefined'.
        ;
    }
    /* Adds a component to slot in this component. */ addComponent(component, slot = '') {
        if (!this._root.querySelector(`slot[name="${slot}"]`)) throw new Error(`Slot '${slot}' could not be found.`);
        component.slot = slot;
        this.appendChild(component);
    }
    removeComponent(component) {
        if (!this.querySelectorAll('*').includes(component)) throw new Error(`Attempted to remove non-added component.`);
        component.removeAttribute('slot');
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
    }
    /* Returns array of slot names. Unnamed slot's name is ''.*/ getSlots() {
        return [
            ...this._root.querySelectorAll(`slot`)
        ].map((element)=>element.name
        );
    }
    /* Hides component */ hide() {
        this.style.display = 'none';
    }
    /* Shows component */ show() {
        this.style.display = 'initial';
    }
    constructor(){
        super();
        this._root = this.attachShadow({
            mode: 'open'
        });
    }
}


var _size = /*#__PURE__*/ new WeakMap();
/* Component for simple filled circle. */ class $e451a8223595cc61$export$d046b3c4a416f60d extends $9761af99d9013dd5$export$16fa2f45be04daa8 {
    /* Returns dot color. */ get color() {
        return this._dotElement.style.backgroundColor;
    }
    /* Sets dot color. */ set color(color) {
        this._dotElement.style.backgroundColor = color;
    }
    /* Returns dot size. */ get size() {
        return $3MH2t$swchelpers.classPrivateFieldGet(this, _size);
    }
    /* Sets dot size. */ set size(size) {
        $3MH2t$swchelpers.classPrivateFieldSet(this, _size, size);
        this._dotElement.style.width = size;
        this._dotElement.style.height = size;
    }
    constructor(){
        super();
        $3MH2t$swchelpers.classPrivateFieldInit(this, _size, {
            writable: true,
            value: void 0
        });
        this.html = `
    <link rel="stylesheet" href="assets/components/dot.css">
    <span></span>
    `;
        this._dotElement = this._root.querySelector('span');
    }
}
const $e451a8223595cc61$var$componentTag = `${$58bdc4f45dbd7307$export$a5a6e0b888b2c992.prefix}-dot`;
customElements.get($e451a8223595cc61$var$componentTag) || customElements.define($e451a8223595cc61$var$componentTag, $e451a8223595cc61$export$d046b3c4a416f60d);


$parcel$exportWildcard(module.exports, $e451a8223595cc61$exports);


//# sourceMappingURL=main.js.map
