import createDropDownMenu from './createDropDownMenu';

/*
Things that I need to do:
- initiate
- when a menuItem is clicked
- sources button is clicked
 */

const dropDownMenu = (() => {
  const dropDownMenuDiv = document.getElementById('dropDownMenuDiv');

  const menuItems = [
    ['Nature', ['Yellowstone', 'Grand Canyon', 'Lake Tahoe']],
    ['Cities', ['New York', 'Los Angeles', 'Chicago', 'San Francisco']],
    ['Pets', ['Dogs', 'Cats', 'Fish']],
  ];

  const initiate = () => {
    dropDownMenuDiv.appendChild(createDropDownMenu.initiate(menuItems));
  };

  return { initiate };
})();

const imageSlider = (() => {
  const changeImageSliderTitle = (title) => {
    const imageSliderTitle = document.getElementById('imageSliderTitleContent');
    imageSliderTitle.textContent = title;
  };

  const addEventListenerToMenuItem = (menuItem) => {
    menuItem.addEventListener('click', () => {
      changeImageSliderTitle(menuItem.value);
      // changeImageSlider(menuItem.value);
    });
  };

  const findAndCallFunctionForAllMenuItems = () => {
    const allMenuItems = document.querySelectorAll('.menuItemDiv');
    allMenuItems.forEach((menuItem) => addEventListenerToMenuItem(menuItem));
  };

  const initiate = () => {
    findAndCallFunctionForAllMenuItems();
  };

  return { initiate };
})();

const main = (() => {
  const initiate = () => {
    dropDownMenu.initiate();
    imageSlider.initiate();
  };

  return { initiate };
})();

main.initiate();
