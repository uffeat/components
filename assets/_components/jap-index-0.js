import { _BaseSlots } from './_jap-base-slots.js';

/* 
TODO:
- Implement two callbacks: 'ok' and 'cancel'; perhaps later, implement as returned a promise.

*/

/* Implements a minimal index component intended for use as a "flat dialog". */
class JapIndex0 extends _BaseSlots  {
  constructor() {
    super({});
    this.html = `
    <style>
      h1 {
        color: cornsilk;
      }
        
      .page {
        display: flex;
        flex-direction: column;
        padding: 32px;
        min-height: 100vh;
      }
        
      main {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
      } 
    </style>
    <div class="page">
    <header anvil-slot="header">Header</header>
    <main anvil-slot="main">Main</main>
    <footer anvil-slot="footer">Naked</footer>
    <div>
    `;

  }
  
}

const componentTag = 'jap-index-0';
customElements.get(componentTag) || customElements.define(componentTag, JapIndex0);

export { JapIndex0 };
