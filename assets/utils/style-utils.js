/* Collection of CSS-related utility functions. */

/* Returns value of global CSS var ('var' specified without '--)' */
const getCssVar = cssVar => {
 return window.getComputedStyle(document.documentElement).getPropertyValue(`--${cssVar}`);
}

/* Sets value of global CSS var ('var' specified without '--). Creates the CSS var if it does't exist. */
const setCssVar = (cssVar, value) => {
  document.documentElement.style.setProperty(`--${cssVar}`, value);
  // Global CSS vars penetrate shadow DOM.
}

export { getCssVar, setCssVar };
  
