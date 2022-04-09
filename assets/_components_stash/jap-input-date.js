import { _Base } from './_jap-base.js';


/* Component for date input */
class JapInputDate extends _Base {
  constructor() {
    super({});
    
  }


}

const componentTag = 'jap-input-date';
customElements.get(componentTag) || customElements.define(componentTag, JapInputDate);

export { JapInputDate };
