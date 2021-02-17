import appendElement from './library';
import tabs from './tabs';

function loadTab(tab) {
  document.getElementById('tab-content').innerHTML = '';
  tabs[tab]();
}

appendElement('h1', 'content', 'Life Resto');
appendElement('ul', 'content', null, [['id', 'tab-list']]);
appendElement('li', 'tab-list', 'Home', null, (node) => {
  node.addEventListener('click', () => { loadTab('home'); });
});
appendElement('li', 'tab-list', 'Menu', null, (node) => {
  node.addEventListener('click', () => { loadTab('menu'); });
});
appendElement('li', 'tab-list', 'Contact us', null, (node) => {
  node.addEventListener('click', () => { loadTab('contact'); });
});
appendElement('div', 'content', null, [['id', 'tab-content']]);
loadTab('home');