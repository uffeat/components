import * as components from './components.js';

const log = console.log;

// Frame:
const japIndex = new components.JapIndex1();
japIndex.logo = 'assets/images/logo.svg';
japIndex.title = 'Jap Components';
document.getElementById('app').appendChild(japIndex);

// Nav links:
const introNavLink = new components.JapNavLink("Introduction", {key: 'intro'});
const galleryNavLink = new components.JapNavLink("Gallery", {key: 'gallery'});

japIndex.addComponent(
  {slot: 'side'},
  introNavLink, 
  galleryNavLink,
);












