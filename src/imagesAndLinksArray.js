import yellowstone1 from './images/yellowstone/yellowstone1.png';
import yellowstone2 from './images/yellowstone/yellowstone2.png';
import yellowstone3 from './images/yellowstone/yellowstone3.png';
import yellowstone4 from './images/yellowstone/yellowstone4.png';

const main = (() => {
  const array = [
    [
      'Yellowstone',
      [
        [
          yellowstone1,
          ['Nicolasintravel', 'https://unsplash.com/@nicolasintravel38'],
        ],
        [yellowstone2, ['Lucas Gao', 'https://unsplash.com/@cestlucas']],
        [yellowstone3, ['Dan Meyers', 'https://unsplash.com/@dmey503']],
        [yellowstone4, ['Ashley Knedler', 'https://unsplash.com/@ashkned']],
      ],
    ],
  ];

  return { array };
})();

export default main;
