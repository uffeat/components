import { _Base } from '../_bases/_base.js';
import { _NavLinkPlugin } from './_nav-link-plugin.js';

/* 
TODO:
- Deal with icons.
*/

/* Component for navigation link. */
class JapNavLinkV1 extends _Base {
  constructor(text, { group = 'main', href, key}) {
    super({});
    
      this.html = `
      <style>
        @import url('https://fonts.googleapis.com/icon?family=Material+Icons');

        a {
          display: flex;
          font-family: var(--fontFamily0);
          font-size: var(--fontSizeL);
          text-decoration: none;
          color: var(--darkGray);
          transition: background-color var(--transitionTimeM), color var(--transitionTimeM);
        }
        
        a:hover {
          background-color: var(--lightGray);
        }
        
        a.selected,
        a:focus {
          color: var(--black);
          background-color: var(--mediumGray);
        }
        
        .text {
          padding: var(--paddingL);
        }
        
        .material-icons {
          font-size: 24px;
          width: 30px;
          color: pink;
        }
      </style>
      <a href="#">
        <span class="text"></span>
      </a>
      `;
    this._nav_link_plug_in = new _NavLinkPlugin(this, {group, href, key});
    this.text = text || '';
  }

}

const componentTag = 'jap-nav-link-v1';
customElements.get(componentTag) || customElements.define(componentTag, JapNavLinkV1);

export { JapNavLinkV1 };
