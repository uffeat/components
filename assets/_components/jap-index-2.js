import { _BaseSlots } from './_jap-base-slots.js';

/* 
TODO:

*/

/* Implements index component with responsive grid layout. */
class JapIndex2 extends _BaseSlots  {
  constructor() {
    super({});

  }
  
}

const componentTag = 'jap-index-2';
customElements.get(componentTag) || customElements.define(componentTag, JapIndex2);

export { JapIndex2 };
