class Component extends HTMLElement {
  constructor() {
    super()
    this._root = this.attachShadow({ mode: 'open' })
  }

  /* Returns html. */
  get html() {
    return this._root.innerHTML
  }

  /* Sets html. */
  set html(html) {
    while (this._root.firstChild) {
      this._root.firstChild.remove()
    }
    this._root.innerHTML = html || ''  // To avoid showing 'undefined'.
  }

  /* Adds a component to slot in this component. */
  addComponent(component, slot = '') {
    if (!this._root.querySelector(`slot[name="${slot}"]`)) {
      throw new Error(`Slot '${slot}' could not be found.`)
    }
    component.slot = slot
    this.appendChild(component)  
  }

  removeComponent(component) {
    if (!this.querySelectorAll('*').includes(component)) {
      throw new Error(`Attempted to remove non-added component.`);
    }
    component.removeAttribute('slot')
    component.remove()
  }

  /* Removes component added to slot. */
  clear(slot) {
    this.getComponents(slot).forEach(component => this.removeComponent(component))
  }

  /* Returns components added to slot. */
  getComponents(slot) {
    const slotElement = this._root.querySelector(`slot[name="${slot}"]`)
    if (!slotElement) {
      throw new Error(`Slot '${slot}' could not be found.`)
    }
    return slotElement.assignedElements()
  }

  /* Returns array of slot names. Unnamed slot's name is ''.*/
  getSlots() {
    return [...this._root.querySelectorAll(`slot`)].map(element => element.name)
  }

  /* Hides component */
  hide() {
    this.style.display = 'none'
  }

  /* Shows component */
  show() {
    this.style.display = 'initial'
  }
}

export { Component };
