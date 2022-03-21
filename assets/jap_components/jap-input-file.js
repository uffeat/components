import { JapBase } from './_jap-base.js';


/* Component for file input */
class JapInputFile extends JapBase {
  constructor() {
    super({});
    
  }


}

const componentTag = 'jap-input-file';
customElements.get(componentTag) || customElements.define(componentTag, JapInputFile);

export { JapInputFile };
