import { JapBase } from './_jap-base.js';

/* 
TODO:
- Implement two callbacks: 'ok' and 'cancel'; perhaps later, implement as returned a promise.

*/

/* Implements a minimal frame component intended for use as a "flat dialog". */
class JapFrame0 extends JapBase  {
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

const componentTag = 'jap-frame-0';
customElements.get(componentTag) || customElements.define(componentTag, JapFrame0);

export { JapFrame0 };
