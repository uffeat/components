import { _Base } from './_base.js';
/*
Usage example:
const japPlot1 = new components.JapPlot();
japFrame1.addComponent({slot: 'main'}, japPlot1);
*/

/*
TODO:
- ensure one-time addition of <script src="./assets/libs/plotly.js"></script> to document head.

*/

/* Component for plots */
class JapPlot extends _Base {
  #size;
  constructor() {
    super({shadow: false});
    Plotly.newPlot( this, [{
      x: [1, 2, 3, 4, 5],
      y: [1, 2, 4, 8, 16] }], {
      margin: { t: 0 } } );
  }

}

const componentTag = 'jap-plot';
customElements.get(componentTag) || customElements.define(componentTag, JapPlot);

export { JapPlot };
