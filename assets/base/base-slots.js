import { Base } from './base.js';
import { settings } from '../settings.js';


/* Base class for components with shadow DOM and slots. */
class BaseSlots extends Base {
  constructor() {
    super({});
  }

  /* Adds a component to slot in this component. */
  addComponent(component, { clear = false, slot = '' }) {
    if (!this._root.querySelector(`slot[name="${slot}"]`)) {
      throw new Error(`Slot '${slot}' could not be found.`);
    }
    if (clear === true) {
      this.clear(slot);
    }
    component.setAttribute('slot', slot);
    this.appendChild(component);  // Note: Appends to 'this' (NOT 'this._root').
    component.parent = this;
  }

  removeComponent(component) {
    if (!this.querySelectorAll('*').includes(component)) {
      throw new Error(`Attempted to remove non-added component.`);
    }
    component.removeAttribute('slot');
    component.parent = null;
    component.remove();
  }

  /* Removes component added to slot. */
  clear(slot) {
    this.getComponents(slot).forEach(component => this.removeComponent(component));
  }

  /* Returns components added to slot. */
  getComponents(slot) {
    const slotElement = this._root.querySelector(`slot[name="${slot}"]`);
    if (!slotElement) {
      throw new Error(`Slot '${slot}' could not be found.`);
    }
    return slotElement.assignedElements();
    // return this.querySelectorAll(`*[slot="${slot}"]`);
  }

  /* Returns array of slot names. Unnamed slot's name is ''.*/
  getSlots() {
    return [...this._root.querySelectorAll(`slot`)].map(element => element.name);
  }

}

export { BaseSlots };
