import * as components from '../../components.js';

const log = console.log;

// Index:
const index = new components.Index1();
index.logo = 'assets/_test/logo.svg';
index.title = 'Components';
document.getElementById('app').appendChild(index);

const dot1 = new components.Dot();
index.addComponent(dot1, { slot: 'main' });

const dot2 = new components.Dot();
index.addComponent(dot2, { slot: 'main' });


const link1 = new components.Link({text: "Link 1", style: 'v1'});
index.addComponent(link1, { slot: 'side' });

const link2 = new components.Link({text: "Link 2", style: 'v1'});
index.addComponent(link2, { slot: 'side' });



const link4 = new components.Link({text: "Link 4", style: 'h1'});
index.addComponent(link4, { slot: 'top' });

const link5 = new components.Link({text: "Link 5", style: 'h1'});
index.addComponent(link5, { slot: 'top' });

const link6 = new components.Link({text: "Link 6", style: 'h1'});
index.addComponent(link6, { slot: 'top' });





