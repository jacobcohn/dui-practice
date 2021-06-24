import createDropDownMenu from './createDropDownMenu';
// import imagesAndLinks from './imagesAndLinksArray';

const dropDownMenu = (() => {
  const initiate = () => {
    const dropDownMenuDiv = document.getElementById('dropDownMenuDiv');

    const menuItems = [
      ['Nature', ['Yellowstone', 'Grand Canyon', 'Lake Tahoe']],
      ['Cities', ['New York', 'Los Angeles', 'Chicago', 'San Francisco']],
      ['Pets', ['Dogs', 'Cats', 'Fish']],
    ];

    dropDownMenuDiv.appendChild(createDropDownMenu.initiate(menuItems));
  };

  return { initiate };
})();

const imageSlider = (() => {
  const createImageSliderRequirements = () => {
    // code here
  };

  const imageSliderFunctions = (arrayName) => {
    const changeImageSliderTitle = (title) => {
      const imageSliderTitle = document.getElementById(
        'imageSliderTitleContent',
      );
      imageSliderTitle.textContent = title;
    };

    changeImageSliderTitle(arrayName);
    // changeImageSlider(arrayName);
  };

  const findAndCallFunctionForAllMenuItems = () => {
    const allMenuItems = document.querySelectorAll('.menuItemDiv');
    allMenuItems.forEach((menuItem) => {
      menuItem.addEventListener('click', () => {
        imageSliderFunctions(menuItem.value);
      });
    });
  };

  const initiate = () => {
    createImageSliderRequirements();
    findAndCallFunctionForAllMenuItems();
    // imageSliderFunctions(YellowStone);
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
