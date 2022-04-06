import createElement from './vdom/createElement';

const vApp = createElement('div', {
  attrs: {
    id: 'app',
  },
  children: [
    'Hello world', // represents TextNode
    createElement('img', {
      attrs: {
        src: 'https://media.giphy.com/media/cuPm4p4pClZVC/giphy.gif',
      },
    }),  // represents ElementNode
  ],
}); // represents ElementNode

console.log(vApp);
