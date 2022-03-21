import { JapBase } from './jap-base.js';
import { JapBaseLight } from './jap-base-light.js';

/* Base class for Jap components with shadow DOM and slots. */
class JapBaseSlots extends JapBase {
  constructor() {
    super({});
  }

  /* Adds component to slot in this component. */
  addComponent({ clear = false, slot = '' }, ...components) {
    components.forEach(component => {
      // Throw exception if component does not inherit from JapBase or JapBaseLight:
      if (!(component instanceof JapBase) && !(component instanceof JapBaseLight)) {
        throw `'${component}' must be a subclass of JapBase or JapBaseLight.`;
      }
      this._checkSlot(slot);
      if (clear === true) {
        this.clear(slot);
      }
      component.setAttribute('slot', slot);
      this.appendChild(component);  // Note: Appends to 'this' (NOT 'this._root').
      component.parentComponent = this;
    });
  }

  /* Removes components added to slot. */
  clear(slot) {
    this._checkSlot(slot);
    this.getComponents(slot).forEach(component => this.removeComponent(component));
  }

  /* Returns components added to slot'. */
  getComponents(slot) {
    this._checkSlot(slot);
    return this.querySelectorAll(`*[slot="${slot}"]`);
  }

  /* Returns array of slot names. Unnamed slot's name is ''.*/
  getSlots() {
    return [...this._root.querySelectorAll(`slot`)].map(element => element.name);
  }

  removeComponent(component) {
    // Throw exception if component is not a child of this component:
    if (component.parentComponent !== this) {
      throw `'${component}' has not been added to '${this}'.`;
    }
    component.removeAttribute('slot');
    component.parentComponent = null;
    component.remove();
  }

  _checkSlot(slot) {
    // Throw exception if slot does not exist:
    if (!this.getSlots().includes(slot)) {
      throw `Slot '${slot}' could not be found.`;
    }
  }

}

export { JapBaseSlots };
