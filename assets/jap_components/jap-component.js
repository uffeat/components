import { _Base } from './_jap-base.js';

/* Component for text input */
class JapComponent extends _Base {
  #size;
  constructor() {
    super({});
  }

}

const componentTag = 'jap-component';
customElements.get(componentTag) || customElements.define(componentTag, JapComponent);

export { JapComponent };
