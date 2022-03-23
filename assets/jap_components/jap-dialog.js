import { _Base } from './_jap-base.js';

/* 
TODO:

*/

/* Component for customizable modal. */
class JapDialog extends _Base {
  constructor() {
    super({});
    this.html = `
    <header>
      <h2 class="title"></h2>
      <button class="material-icons cancel">close</button>
    </header>
    <section>
      <!--
    <slot></slot>
      -->
      
    </section>
    <footer>
      <button class="ok">Ok</button>
      <button class="cancel">Cancel</button>
    </footer>
    `;
  }
}

const componentTag = 'jap-dialog';
customElements.get(componentTag) || customElements.define(componentTag, JapDialog);

export { JapDialog };
