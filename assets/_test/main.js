import * as components from '../../components.js';

const log = console.log;

// Index:
const index = new components.Index1();
index.logo = 'assets/_test/logo.svg';
index.title = 'Jap Components';
document.getElementById('root').appendChild(index);


index.themeColor = 'orange';
index.themeColorAccent = 'yellow';

const dot1 = new components.Dot();
index.addElement({ slot: 'main' }, dot1);

const dot2 = new components.Dot();
index.addElement({ slot: 'main' }, dot2);


const link1 = document.createElement('A');
link1.textContent = "Link 1";
index.addElement({ slot: 'side' }, link1);




