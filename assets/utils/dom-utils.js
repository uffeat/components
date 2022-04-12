/* Collection of DOM-related utility functions. */

/* Removes child elements from element. */
const removeChildren = element => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  // element.innerHTML = '' would keep child elements's event listeners (risk of memory leak).
}

export { removeChildren };