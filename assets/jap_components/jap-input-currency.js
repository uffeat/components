import { JapBase } from './_jap-base.js';


/* Component for currency input with internationalization options */
class JapInputCurrency extends JapBase {
  constructor() {
    super({});
    
  }


}

const componentTag = 'jap-input-currency';
customElements.get(componentTag) || customElements.define(componentTag, JapInputCurrency);

export { JapInputCurrency };
