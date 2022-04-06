import * as components from '../../components.js';

const log = console.log;

// Index:
const index = new components.Index1();
index.logo = 'assets/_test/logo.svg';
index.title = 'Components';
document.getElementById('app').appendChild(index);

const dot1 = new components.Dot();
index.addElement({ slot: 'main' }, dot1);

const dot2 = new components.Dot();
index.addElement({ slot: 'main' }, dot2);


const link1 = document.createElement('A');
link1.textContent = "Link 1";
link1.addEventListener('click', event => log("Clicked"))
index.addElement({ slot: 'side' }, link1);

const link2 = document.createElement('A');
link2.textContent = "Link 2";
index.addElement({ slot: 'side' }, link2);

const link3 = document.createElement('A');
link3.textContent = "Link 3";
index.addElement({ slot: 'side' }, link3);


const link4 = document.createElement('A');
link4.textContent = "Link 4";
link4.addEventListener('click', event => log("Clicked"))
index.addElement({ slot: 'top' }, link4);

const link5 = document.createElement('A');
link5.textContent = "Link 5";
index.addElement({ slot: 'top' }, link5);

const link6 = document.createElement('A');
link6.textContent = "Link 6";
index.addElement({ slot: 'top' }, link6);




