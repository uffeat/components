import { JapBase } from './_jap-base.js';

/* 
TODO:

*/

/* Implements frame component with responsive grid layout. */
class JapFrame2 extends JapBase  {
  constructor() {
    super({});

  }
  
}

const componentTag = 'jap-frame-2';
customElements.get(componentTag) || customElements.define(componentTag, JapFrame2);

export { JapFrame2 };
