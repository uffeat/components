/* Base class for components with or without shadow DOM and no slots. */
class Base extends HTMLElement {
  constructor({ name, shadow=true }) {
    super();
    this.name = name;
    this.parentComponent = null;
    if (shadow) {
      this._root = this.attachShadow({ mode: 'open' });
    }
    else {
      this._root = this;
    }
  }

  _getHtmlFromTemplateId(templateId) {
    const template = document.getElementById(templateId);
    const clone = template.content.cloneNode(true);
    this._root.appendChild(clone);
  }

  /* Returns component's html. */
  get html() {
    return this._root.innerHTML;
  }

  /* Sets component's html. */
  set html(html) {
    this._root.innerHTML = html || '';  // Falsy html results in empty html (and not e.g., 'undefined').
  }

  get text() {
    if (this._textElement) {
      return this._textElement.textContent;
    }
  }

  set text(text) {
    if (this._textElement) {
      this._textElement.textContent = text;
    }
  }

  getProperties() {
    const properties = [];
    const traverseChain = (obj) => {
      if (obj instanceof Base) {
        properties.push(...Object.getOwnPropertyNames(obj));
        let protoType = Object.getPrototypeOf(obj);
        traverseChain(protoType);
      }
    }
    traverseChain(this);
    return properties
  }

  /* Hides component */
  hide() {
    this.style.display = 'none';
  }

  removeFromParent() {
    // Throw exception if component has no parent component:
    if (!this.parentComponent) {
      throw `'${this}' has no parent component.`;
    }
    this.removeAttribute('slot');
    this.parentComponent = null;
    this.remove();
  }

  /* Shows component */
  show() {
    this.style.display = 'initial';
  }

}

export { Base };
