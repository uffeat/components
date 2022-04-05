import * as components from '../../components.js';

const log = console.log;

// Index:
const index = new components.Index1();
index.logo = 'assets/_test/logo.svg';
//index.title = 'Jap Components';
document.getElementById('root').appendChild(index);

const dot1 = new components.Dot();

index.addElement({ closePanel: false, clear: true, slot: 'main' }, dot1);

log(index.headerColor);

index.themeColor = 'orange';






/*
// Side nav links:
const dotNavLink = new components.JapNavLinkV1("Dot", { key: 'dot' });
const buttonNavLink = new components.JapNavLinkV1("Button", { key: 'button' });
const inputTextNavLink = new components.JapNavLinkV1("Text input", { key: 'input-text' });

index.addComponent(
  { slot: 'side' },
  dotNavLink,
  buttonNavLink,
  inputTextNavLink,
);


// Top nav links:
const moreNavLink = new components.JapNavLinkH1Drop("More", {});
const userNavLink = new components.JapNavLinkH1("User", { key: 'user' });
const settingsNavLink = new components.JapNavLinkH1("Settings", { key: 'setting' });

japIndex.addComponent(
  { slot: 'top' },
  moreNavLink,
  userNavLink,
  settingsNavLink,
);


// Top sub-nav links:
const exploreNavLink = new components.JapNavLinkV1("Explore", { key: 'explore' });
const mindNavLink = new components.JapNavLinkV1("Loose your mind", { key: 'mind' });

moreNavLink.addComponent(
  { slot: '' },
  exploreNavLink,
  mindNavLink
);



// Dot
const dot1 = new components.Dot();

// Button:
const button1 = new components.JapButton({ text: "Button 1" });

// Input text:
const inputText1 = new components.JapInputText({});


// Nav:
japIndex.addEventListener('nav', event => {
  switch (event.target.key) {
    case 'dot':
      index.addElement({ closePanel: false, clear: true, slot: 'main' }, dot1);
      break;
    case 'button':
      japIndex.addComponent({ clear: true, slot: 'main' }, button1);
      break;
      case 'input-text':
        japIndex.addComponent({ clear: true, slot: 'main' }, inputText1);
        break;
    default:
      console.log(event.target.key);
  }
});

//console.log(getProperties(japIndex, {onlyMethods: true}));

*/













