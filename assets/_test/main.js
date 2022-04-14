import * as components from '../../components.js';

const log = console.log;

const eApp = document.getElementById('app')

/*
// Index:
const index = new components.Index1();
index.logo = 'assets/_test/logo.svg';
index.title = 'Components';
eApp.appendChild(index);
*/

const dot1 = new components.Dot()
//index.addComponent(dot1, { slot: 'main' });
eApp.appendChild(dot1)

/*
const dot2 = new components.Dot();
index.addComponent(dot2, { slot: 'main' });

const navLinkV1 = new components.NavLinkV({text: "V1"});
index.addComponent(navLinkV1, { slot: 'side' });

const navLinkV2 = new components.NavLinkV({text: "V2"});
index.addComponent(navLinkV2, { slot: 'side' });

const navLinkH1 = new components.NavLinkH({text: "H1"});
index.addComponent(navLinkH1, { slot: 'top' });

const navLinkH2 = new components.NavLinkH({text: "H2"});
index.addComponent(navLinkH2, { slot: 'top' });
*/

