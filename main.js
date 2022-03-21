import * as components from './components.js';

const log = console.log;

// Index:
const japIndex = new components.JapIndex1();
japIndex.logo = 'assets/images/logo.svg';
japIndex.title = 'Jap Components';
document.getElementById('app').appendChild(japIndex);

// Side nav links:
const introNavLink = new components.JapNavLink("Introduction", {key: 'intro'});
const galleryNavLink = new components.JapNavLink("Gallery", {key: 'gallery'});

japIndex.addComponent(
  {slot: 'side'},
  introNavLink, 
  galleryNavLink,
);

// Top nav links:
const userNavLink = new components.JapNavLink("User", {key: 'user', style: 'h2'});
const settingsNavLink = new components.JapNavLink("Settings", {key: 'setting', style: 'h2'});

japIndex.addComponent(
  {slot: 'top'},
  userNavLink, 
  settingsNavLink,
);












