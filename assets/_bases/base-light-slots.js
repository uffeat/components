import { Base } from './base.js';

/* Base class for components with slots and without shadow DOM. */
class _BaseLightSlots extends _Base {
  constructor() {
    super({shadow: false});
  }

  /* Adds component to slot. */
  addComponent(component, slot) {
    // Throw exception if component does not inherit from JapBase or JapBaseLight:
    if (!(component instanceof _Base)) {
      throw `'${component}' must be a subclass of _Base.`;
    }
    this._getSlotElement(slot).appendChild(component);
    component.parentComponent = this;
  }

  /* Removes components added to slot. */
  clear(slot) {
    this.getComponents(slot).forEach(component => this.removeComponent(component));
  }

  /* Returns components added to slot. */
  getComponents(slot, names=false) {
    const components =  [...this._getSlotElement(slot).children].filter(component => component instanceof _Base);
    return names ? components.map(element => element.name) : components;
  }

  removeComponent(component) {
    // Throw exception if component is not a child of this component:
    if (component.parentComponent !== this) {
      throw `'${component}' has not been added to '${this}'.`;
    }
    component.parentComponent = null;
    component.remove();
  }

  _getSlotElement(slot) {
    const slotElements = this._slotElements.filter(element => element.name === slot);
    if (slotElements.length === 0) {
      throw `Slot '${slot}' could not be found.`;
    }
    if (slotElements.length > 1) {
      throw `Duplicate slot name '${slot}'.`;
    }
    return slotElements[0];
  }

}

export { BaseLightSlots };