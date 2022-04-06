

/*  */
class StylePlugin  {
  #component;
  constructor(component) {
    this.#component = component;
    // Defaults:
    this.applyGlobalCssVars('fontFamily', 'themeColor', 'themeColorAccent')
  }

  applyGlobalCssVars(...cssVars) {
    cssVars.forEach(name => {
      const value = window.getComputedStyle(document.documentElement).getPropertyValue(`--${name}`)
      if (value) {
        this.setComponentCssVar(name, value)
      }
    });
  }

  getComponentCssVar(name) {
    return window.getComputedStyle(this).getPropertyValue(`--${name}`);
  }

  setComponentCssVar(name, value) {
    this.#component.style.setProperty(`--${name}`, value)
  }

}


export { StylePlugin };