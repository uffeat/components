import * as components from './components.js';

const log = console.log;

// Frame:
const japFrame1 = components.japFrame1;
document.getElementById('root').appendChild(japFrame1);

// Nav links:
const introNavLink = new components.JapNavLink("Introduction", {key: 'intro'});
const galleryNavLink = new components.JapNavLink("Gallery", {key: 'gallery'});

japFrame1.addComponent(
  {slot: 'side'},
  introNavLink, 
  galleryNavLink,
);












