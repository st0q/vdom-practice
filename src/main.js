import createElement from './vdom/createElement';
import render from './vdom/render';
import mount from './vdom/mount';
import diff from './vdom/diff';

const createVApp = (count) => createElement('div', {
  attrs: {
    id: 'app',
    dataCount: count, // we use the count here
  },
  children: [
    'The current count is: ',
    String(count), // and here
    createElement('img', {
      attrs: {
        src: 'https://media.giphy.com/media/cuPm4p4pClZVC/giphy.gif',
      },
    }),
  ],
});

let count = 0;
let vApp = createVApp(count);
const $app = render(vApp);
let $rootEl = mount($app, document.getElementById('app'));

setInterval(() => {
  count++;
  const vNewApp = createVApp(count)
  const patch = diff(vApp, vNewApp);

  // we might replace the whole $rootEl,
  // so we want the patch will return the new $rootEl
  $rootEl = patch($rootEl);

  vApp = vNewApp;
}, 1000);
