import { _Base } from './jap-base.js';

/* 
TODO:
- Implement two callbacks: 'ok' and 'cancel'; perhaps later, implement as returned a promise.
*/

/* Implements a data-aware card component with header, body, and footer. */
class JapCard extends _Base  {
  constructor() {
    super({});
    this.html = `
    <style>
    
    </style>
    <header>
      <slot name="header"></slot>
    </header>
    <section>
      <slot name="body"></slot>
    </section>
    <footer>
      <slot name="footer"></slot>
    </footer>
    `;
    
  }
  
}

const componentTag = 'jap-card';
customElements.get(componentTag) || customElements.define(componentTag, JapCard);

export { JapCard };
