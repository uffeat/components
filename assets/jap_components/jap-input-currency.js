import { _Base } from './_jap-base.js';


/* Component for currency input with internationalization options */
class JapInputCurrency extends _Base {
  constructor() {
    super({});
    
  }


}

const componentTag = 'jap-input-currency';
customElements.get(componentTag) || customElements.define(componentTag, JapInputCurrency);

export { JapInputCurrency };
