import { _Base } from './_jap-base.js';


/* Component for file input */
class JapInputFile extends _Base {
  constructor() {
    super({});
    
  }


}

const componentTag = 'jap-input-file';
customElements.get(componentTag) || customElements.define(componentTag, JapInputFile);

export { JapInputFile };
