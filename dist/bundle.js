/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/createDropDownMenu.js":
/*!***********************************!*\
  !*** ./src/createDropDownMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst main = (() => {\n  const createMenuTitle = (menuTitle) => {\n    const menuTitleDiv = document.createElement('div');\n    menuTitleDiv.classList.toggle('menuTitleDiv');\n\n    const menuTitleContent = document.createElement('h1');\n    menuTitleContent.classList.toggle('menuTitleContent');\n    menuTitleContent.textContent = menuTitle;\n    menuTitleDiv.appendChild(menuTitleContent);\n\n    return menuTitleDiv;\n  };\n\n  const createOneMenuItem = (menuItemName) => {\n    const menuItemDiv = document.createElement('div');\n    menuItemDiv.classList.toggle('menuItemDiv');\n\n    const menuItemContent = document.createElement('h2');\n    menuItemContent.classList.toggle('menuItemContent');\n    menuItemContent.textContent = menuItemName;\n    menuItemDiv.appendChild(menuItemContent);\n\n    return menuItemDiv;\n  };\n\n  const createMenuItems = (menuItems) => {\n    const menuItemsDiv = document.createElement('div');\n    menuItemsDiv.classList.toggle('menuItemsDiv');\n\n    menuItems.forEach((menuItemName) => {\n      menuItemsDiv.appendChild(createOneMenuItem(menuItemName));\n    });\n\n    return menuItemsDiv;\n  };\n\n  const menuContainer = document.createElement('div');\n  menuContainer.id = 'menuContainer';\n\n  const createMenuOption = (menuOption) => {\n    const menuOptionDiv = document.createElement('div');\n    menuOptionDiv.classList.toggle('menuOptionDiv');\n    menuOptionDiv.appendChild(createMenuTitle(menuOption[0]));\n    menuOptionDiv.appendChild(createMenuItems(menuOption[1]));\n    menuContainer.appendChild(menuOptionDiv);\n  };\n\n  const initiate = (allMenuOptions) => {\n    allMenuOptions.forEach((menuOption) => {\n      createMenuOption(menuOption);\n    });\n\n    return menuContainer;\n  };\n\n  return { initiate };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);\n\n\n//# sourceURL=webpack://dui-practice/./src/createDropDownMenu.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createDropDownMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createDropDownMenu */ \"./src/createDropDownMenu.js\");\n\n\n/*\nThings that I need to do:\n- initiate\n- when a menuItem is clicked\n- sources button is clicked\n\n */\n\nconst main = (() => {\n  const dropDownMenuDiv = document.getElementById('dropDownMenuDiv');\n\n  const menuItems = [\n    ['Nature', ['Yellowstone', 'Grand Canyon', 'Lake Tahoe']],\n    ['Cities', ['New York', 'Los Angeles', 'Chicago', 'San Francisco']],\n    ['Pets', ['Dogs', 'Cats', 'Fish']],\n  ];\n\n  const initiate = () => {\n    dropDownMenuDiv.appendChild(_createDropDownMenu__WEBPACK_IMPORTED_MODULE_0__.default.initiate(menuItems));\n  };\n\n  return { initiate };\n})();\n\nmain.initiate();\n\n\n//# sourceURL=webpack://dui-practice/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;