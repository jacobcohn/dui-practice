import yellowstone1 from './images/yellowstone/yellowstone1.png';
import yellowstone2 from './images/yellowstone/yellowstone2.png';
import yellowstone3 from './images/yellowstone/yellowstone3.png';

const main = (() => {
  const array = [
    [
      'Yellowstone',
      [
        [yellowstone1, ['Lucas Gao', 'https://unsplash.com/@cestlucas']],
        [yellowstone2, ['Dan Meyers', 'https://unsplash.com/@dmey503']],
        [yellowstone3, ['Ashley Knedler', 'https://unsplash.com/@ashkned']],
      ],
    ],
  ];

  return { array };
})();

export default main;
