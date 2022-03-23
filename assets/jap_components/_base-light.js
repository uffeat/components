
/* Base class for jap components without shadow DOM and no slots. */
class _BaseLight extends HTMLElement {
  #html;
  constructor({name='no-name'}) {
    super();
    this.name = name;
    this.parentComponent = null;
    this._root = this;  // For alignment with JapBase.
  }

  _getHtmlFromTemplateId(templateId) {
    const template = document.getElementById(templateId);
    const clone = template.content.cloneNode(true);
    this._root.appendChild(clone);
  }

  /* Returns component's html. */
  get html() {
    return this.#html;  // this._root.innerHTML includes html from added components; this.#html is this component's "own" html.
  }

  /* Sets component's html. */
  set html(html) {
    this.#html = html;  // Component's "own" html without html from any added components.
    this._root.innerHTML = html || '';  // Falsy html results in empty html (and not e.g., 'undefined').
    this._slotElements = [...this.querySelectorAll('slot')];
  }

  removeFromParent() {
    // Throw exception if component has no parent component:
    if (!this.parentComponent) {
      throw `'${this}' has no parent component.`;
    }
    this.parentComponent.removeComponent(this);
  }

}

export { _BaseLight };
