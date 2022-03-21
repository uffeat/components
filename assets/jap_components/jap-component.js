import { JapBase } from './_jap-base.js';

/* Component for text input */
class JapComponent extends JapBase {
  #size;
  constructor() {
    super({});
  }

}

const componentTag = 'jap-component';
customElements.get(componentTag) || customElements.define(componentTag, JapComponent);

export { JapComponent };
