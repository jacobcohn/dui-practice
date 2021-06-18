import createDropDownMenu from './createDropDownMenu';

/*
Things that I need to do:
- initiate
- when a menuItem is clicked
- sources button is clicked

 */

const main = (() => {
  const menuItems = [
    ['Nature', ['Yellowstone', 'Grand Canyon', 'Lake Tahoe']],
    ['Cities', ['New York', 'Los Angeles', 'Chicago', 'San Francisco']],
    ['Pets', ['Dogs', 'Cats', 'Fish']],
  ];

  const initiate = () => {
    createDropDownMenu(menuItems); // eventually change to createDropDownMenu.something(menuItems)
  };

  return { initiate };
})();

main.initiate();
