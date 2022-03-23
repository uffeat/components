import { _Base } from './_jap-base.js';



/*  */
class JapForm extends _Base {
  constructor() {
    super({});
    this.html = `
    
    <header>
      <h3 class="title">Title</h3>
      <img src="../images/logo.svg">
    </header>
    <section class="body">Body</section>
    <footer>
      <button class="true">True<button>
      <button class="false">True<button>
    </footer>
    `;
    this._getElements();
    this._setDefaults();
    this._setEvents();
    
  }

  _getElements() {
    this._trueButtonElement = this._root.querySelector('button.true');
    this._falseButtonElement = this._root.querySelector('button.false');
  }


  _setEvents() {
    const updatedEvent = new CustomEvent('updated', {
      detail: {
        data: null,
      },
    });
  }

  pushData(data) {
    this.#data = data
    for (const key in data) {
      const dataElementsWithKey = this.root.querySelectorAll(`*[name="${key}"]`);
      [...dataElementsWithKey].forEach(element => {
        element.value = data[key];
      });
    }
  }

  pullData(deepCopy = false) {
    if (deepCopy) {
      this.inputData = JSON.parse(JSON.stringify(this.#data));  // deep copy.
    }
    else {
      this.inputData = Object.assign({}, this.#data);  // shallow copy.
    }
    const dataElements = this.root.querySelectorAll(`*[name]`);
    [...dataElements].forEach(element => {
      this.inputData[element.name] = element.value;
    });
    return this.inputData;
  }

  renderData(data) {
    this.#data = data;
    for (const key in data) {
      const labelElem = document.createElement('LABEL');
      const inputElem = document.createElement('INPUT');
      inputElem.name = key;
      inputElem.value = this.#data[key];
      labelElem.appendChild(inputElem);
      this.root.appendChild(labelElem);
    }
  }

}

const componentTag = 'jap-form';
customElements.get(componentTag) || customElements.define(componentTag, JapForm);

export { JapForm };
