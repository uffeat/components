import { Base } from './base.js';
import {settings} from '../_settings.js';


/* Base class for components with shadow DOM and slots. */
class BaseSlots extends Base {
  constructor() {
    super({});
  }

  /* Adds one or more elemens to slot in this component. */
  addElement({ clear = false, slot = '' }, ...elements) {
    elements.forEach(element => {
      if (!element.classList.contains(settings.domClass)) {
        this._monkeyPatch(element)
      }
      if (this.hasSlot(slot, true)) {
        if (clear === true) {
          this.clear(slot);
        }
        element.setAttribute('slot', slot);
        this.appendChild(element);  // Note: Appends to 'this' (NOT 'this._root').
        element.parentComponent = this;
      }
    });
  }

  _monkeyPatch(element) {
    // Add 'removeFromParent' method to added element.
    console.log("Monkey-patching...")  //
    element.removeFromParent = () => {
      element.removeAttribute('slot');
      element.parentComponent = null;
      element.remove();
      delete object.removeFromParent;
    }
  }

  /* Removes elements added to slot. */
  clear(slot) {
    if (this.hasSlot(slot, true)) {
      this.getAddedElements(slot).forEach(element => element.removeFromParent());
    }
  }

  /* Returns elements added to slot. */
  getAddedElements(slot) {
    if (this.hasSlot(slot, true)) {
      return this.querySelectorAll(`*[slot="${slot}"]`);
    }
  }

  /* Returns array of slot names. Unnamed slot's name is ''.*/
  getSlots() {
    return [...this._root.querySelectorAll(`slot`)].map(element => element.name);
  }

  /* Checks if this component has a given slot. */
  hasSlot(slot, errorOnFalse = false) {
    const result = this.getSlots().includes(slot);
    if (errorOnFalse && !result) {
      const err = `Slot '${slot}' could not be found.`;
      throw new Error(err);
    }
    return result;
  }

}

export { BaseSlots };
