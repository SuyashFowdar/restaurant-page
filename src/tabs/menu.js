import appendElement from '../library';

function menu() {
  appendElement('h2', 'tab-content', 'Menu');
  appendElement('ul', 'tab-content', null, [['id', 'menu-list']]);
  appendElement('li', 'menu-list', 'Italian');
  appendElement('li', 'menu-list', 'Chinese');
  appendElement('li', 'menu-list', 'Indian');
}

export default menu;
