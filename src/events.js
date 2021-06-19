const main = (() => {
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

export default main;
