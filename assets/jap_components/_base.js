/* Base class for Jap components with shadow DOM and no slots. */
class _Base extends HTMLElement {
  constructor({ name = 'no-name' }) {
    super();
    this.name = name;
    this.parentComponent = null;
    this._root = this.attachShadow({ mode: 'open' });
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

  /* Hides component */
  hide() {
    this.style.diaplay = 'none';
  }

  removeFromParent() {
    // Throw exception if component has no parent component:
    if (!this.parentComponent) {
      throw `'${this}' has no parent component.`;
    }
    this.parentComponent.removeComponent(this);
  }

  /* Shows component */
  show() {
    this.style.diaplay = 'initial';
  }

}

export { _Base };
