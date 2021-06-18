const main = (() => {
  const createMenuTitle = (menuTitle) => {
    const menuTitleDiv = document.createElement('div');
    menuTitleDiv.classList.toggle('menuTitleDiv');

    const menuTitleContent = document.createElement('h1');
    menuTitleContent.classList.toggle('menuTitleContent');
    menuTitleContent.textContent = menuTitle;
    menuTitleDiv.appendChild(menuTitleContent);

    return menuTitleDiv;
  };

  const createOneMenuItem = (menuItemName) => {
    const menuItemDiv = document.createElement('div');
    menuItemDiv.classList.toggle('menuItemDiv');

    const menuItemContent = document.createElement('h2');
    menuItemContent.classList.toggle('menuItemContent');
    menuItemContent.textContent = menuItemName;
    menuItemDiv.appendChild(menuItemContent);

    return menuItemDiv;
  };

  const createMenuItems = (menuItems) => {
    const menuItemsDiv = document.createElement('div');
    menuItemsDiv.classList.toggle('menuItemsDiv');

    menuItems.forEach((menuItemName) => {
      menuItemsDiv.appendChild(createOneMenuItem(menuItemName));
    });

    return menuItemsDiv;
  };

  const menuContainer = document.createElement('div');
  menuContainer.id = 'menuContainer';

  const createMenuOption = (menuOption) => {
    const menuOptionDiv = document.createElement('div');
    menuOptionDiv.classList.toggle('menuOptionDiv');
    menuOptionDiv.appendChild(createMenuTitle(menuOption[0]));
    menuOptionDiv.appendChild(createMenuItems(menuOption[1]));
    menuContainer.appendChild(menuOptionDiv);
  };

  const initiate = (allMenuOptions) => {
    allMenuOptions.forEach((menuOption) => {
      createMenuOption(menuOption);
    });

    return menuContainer;
  };

  return { initiate };
})();

export default main;
