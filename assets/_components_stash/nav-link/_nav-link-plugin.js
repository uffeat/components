

// TODO: Replace with inheritance

/*  */
class _NavLinkPlugin  {
  constructor(component, {group, href, key}) {
    this._component = component;
    if (href && key) {
      throw "Set href OR key - not both.";
    }
    this._component._aElement = this._component._root.querySelector('a');
    this._component._textElement = this._component._root.querySelector('.text');
    
    if (key) {
      this._component.group = group;
      this._component.key = key;
      this._component._aElement.addEventListener('click', this._navHandler.bind(this));
    }
    if (href) {
      this._component._aElement.href = href;
    }
    this._component.select = this.select;
    this._component.deselect = this.deselect;
  }

  _navHandler(event) {
    const navEvent = new CustomEvent('nav', {
      bubbles: true,
      detail: {
        key: null,
      },
    });
    navEvent.detail.key = this._component.key;
    this._component.dispatchEvent(navEvent);
  }

  /* Styles nav link as selected. */
  select() {
    this._aElement.classList.add('selected')
  }

  /* Styles nav link as unselected. */
  deselect() {
    this._aElement.classList.remove('selected')
  }

}


export { _NavLinkPlugin };