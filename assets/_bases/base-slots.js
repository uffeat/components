import { Base } from './base.js';

/* Base class for components with shadow DOM and slots. */
class _BaseSlots extends _Base {
  constructor() {
    super({});
  }

  /* Adds one or more elemens to slot in this component. */
  addElement({ clear = false, slot = '' }, ...elements) {
    elements.forEach(element => {
      if (!(component instanceof _Base)) {
        // Add 'removeFromParent' method to added element.
        element.removeFromParent = () => {
          element.removeAttribute('slot');
          element.parentComponent = null;
          element.remove();
          // TODO: Remove the 'removeFromParent' function itself.
        }
      }

      this._checkSlot(slot);
      if (clear === true) {
        this.clear(slot);
      }
      element.setAttribute('slot', slot);
      this.appendChild(element);  // Note: Appends to 'this' (NOT 'this._root').
      element.parentComponent = this;
    });
  }

  /* Removes elements added to slot. */
  clear(slot) {
    this._checkSlot(slot);
    this.getAddedElements(slot).forEach(element => element.removeFromParent());
  }

  /* Returns elements added to slot. */
  getAddedElements(slot) {
    this._checkSlot(slot);
    return this.querySelectorAll(`*[slot="${slot}"]`);
  }

  /* Returns array of slot names. Unnamed slot's name is ''.*/
  getSlots() {
    return [...this._root.querySelectorAll(`slot`)].map(element => element.name);
  }

  _checkSlot(slot) {
    // Throw exception if slot does not exist:
    if (!this.getSlots().includes(slot)) {
      throw `Slot '${slot}' could not be found.`;
    }
  }

}

export { BaseSlots };
