import yellowstone1 from './images/yellowstone/yellowstone1.png';
import yellowstone2 from './images/yellowstone/yellowstone2.png';
import yellowstone3 from './images/yellowstone/yellowstone3.png';
import grandCanyon1 from './images/grandCanyon/grandCanyon1.png';
import grandCanyon2 from './images/grandCanyon/grandCanyon2.png';
import grandCanyon3 from './images/grandCanyon/grandCanyon3.png';
import grandCanyon4 from './images/grandCanyon/grandCanyon4.png';
import lakeTahoe1 from './images/lakeTahoe/lakeTahoe1.png';
import lakeTahoe2 from './images/lakeTahoe/lakeTahoe2.png';
import lakeTahoe3 from './images/lakeTahoe/lakeTahoe3.png';
import lakeTahoe4 from './images/lakeTahoe/lakeTahoe4.png';
import newYork1 from './images/newYork/newYork1.png';
import newYork2 from './images/newYork/newYork2.png';
import newYork3 from './images/newYork/newYork3.png';
import newYork4 from './images/newYork/newYork4.png';
import newYork5 from './images/newYork/newYork5.png';

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
    [
      'Grand Canyon',
      [
        [grandCanyon1, ['Alan Carrillo', 'https://unsplash.com/@acarrillo46']],
        [grandCanyon2, ['Gert Boers', 'https://unsplash.com/@geboers']],
        [grandCanyon3, ['Ammeer Basheer', 'https://unsplash.com/@24ameer']],
        [grandCanyon4, ['Gilly', 'https://unsplash.com/@gillyberlin']],
      ],
    ],
    [
      'Lake Tahoe',
      [
        [lakeTahoe1, ['Parth Thakker', 'https://unsplash.com/@thakkerparth16']],
        [lakeTahoe2, ['Mick Haupt', 'https://unsplash.com/@rocinante_11']],
        [lakeTahoe3, ['Mert Kahveci', 'https://unsplash.com/@mertkahveci']],
        [lakeTahoe4, ['Meritt Thomas', 'https://unsplash.com/@merittthomas']],
      ],
    ],
    [
      'New York',
      [
        [newYork1, ['Luca Bravo', 'https://unsplash.com/@lucabravo']],
        [newYork2, ['Oliver Niblett', 'https://unsplash.com/@ojnibl']],
        [newYork3, ['Andre Benz', 'https://unsplash.com/@trapnation']],
        [newYork4, ['Redd', 'https://unsplash.com/@reddalec']],
        [newYork5, ['Jose Oh', 'https://unsplash.com/@joseoh']],
      ],
    ],
    // [
    //   'placeholder',
    //   [
    //     [placeholder1, ['', '']],
    //     [placeholder2, ['', '']],
    //     [placeholder3, ['', '']],
    //     [placeholder4, ['', '']],
    //   ],
    // ],
  ];

  return { array };
})();

export default main;
