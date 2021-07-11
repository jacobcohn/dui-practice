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
import losAngeles1 from './images/losAngeles/losAngeles1.png';
import losAngeles2 from './images/losAngeles/losAngeles2.png';
import losAngeles3 from './images/losAngeles/losAngeles3.png';
import chicago1 from './images/chicago/chicago1.png';
import chicago2 from './images/chicago/chicago2.png';
import chicago3 from './images/chicago/chicago3.png';
import chicago4 from './images/chicago/chicago4.png';
import sanFrancisco1 from './images/sanFrancisco/sanFrancisco1.png';
import sanFrancisco2 from './images/sanFrancisco/sanFrancisco2.png';
import sanFrancisco3 from './images/sanFrancisco/sanFrancisco3.png';
import sanFrancisco4 from './images/sanFrancisco/sanFrancisco4.png';
import dogs1 from './images/dogs/dogs1.png';
import dogs2 from './images/dogs/dogs2.png';
import dogs3 from './images/dogs/dogs3.png';
import dogs4 from './images/dogs/dogs4.png';
import dogs5 from './images/dogs/dogs5.png';
import cats1 from './images/cats/cats1.png';
import cats2 from './images/cats/cats2.png';
import cats3 from './images/cats/cats3.png';
import fish1 from './images/fish/fish1.png';
import fish2 from './images/fish/fish2.png';
import fish3 from './images/fish/fish3.png';
import fish4 from './images/fish/fish4.png';

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
    [
      'Los Angeles',
      [
        [losAngeles1, ['Dillon Shook', 'https://unsplash.com/@dillonjshook']],
        [losAngeles2, ['Joseph Ngabo', 'https://unsplash.com/@jngabo']],
        [losAngeles3, ['Juliana Malta', 'https://unsplash.com/@julianamalta']],
      ],
    ],
    [
      'Chicago',
      [
        [chicago1, ['Max Bender', 'https://unsplash.com/@maxwbender']],
        [chicago2, ['Sawyer Bengston', 'https://unsplash.com/@sawyerbengtson']],
        [chicago3, ['Neal Kharawala', 'https://unsplash.com/@nealk']],
        [chicago4, ['Andrew Seaman', 'https://unsplash.com/@amseaman']],
      ],
    ],
    [
      'San Francisco',
      [
        [sanFrancisco1, ['Joonyeop Baek', 'https://unsplash.com/@jybaek']],
        [sanFrancisco2, ['Aaron Kato', 'https://unsplash.com/@aaronkato']],
        [sanFrancisco3, ['Ragnar Vorel', 'https://unsplash.com/@sonuba']],
        [sanFrancisco4, ['Jose Rago', 'https://unsplash.com/@ragojose']],
      ],
    ],
    [
      'Dogs',
      [
        [dogs1, ['James Barker', 'https://unsplash.com/@barkernotbaker']],
        [dogs2, ['Alvan Nee', 'https://unsplash.com/@alvannee']],
        [dogs3, ['Anoir Chafik', 'https://unsplash.com/@anoirchafik']],
        [dogs4, ['Jenny Marvin', 'https://unsplash.com/@jennymarvin']],
        [dogs5, ['Rebekah Howell', 'https://unsplash.com/@rebekahhowell00']],
      ],
    ],
    [
      'Cats',
      [
        [cats1, ['Daria Shatova', 'https://unsplash.com/@dariasha911']],
        [cats2, ['Lloyd Henneman', 'https://unsplash.com/@lloydhenneman']],
        [cats3, ['Raquel Pedrotti', 'https://unsplash.com/@raquelpedrotti']],
      ],
    ],
    [
      'Fish',
      [
        [fish1, ['Rachel Hisko', 'https://unsplash.com/@rachelhisko']],
        [fish2, ['David Clode', 'https://unsplash.com/@davidclode']],
        [fish3, ['Worachat Sodsri', 'https://unsplash.com/@worachatsodsri']],
        [fish4, ['Katherine McAdoo', 'https://unsplash.com/@ohaikatherine']],
      ],
    ],
  ];

  return { array };
})();

export default main;
