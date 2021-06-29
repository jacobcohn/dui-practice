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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/createDropDownMenu.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/createDropDownMenu.css ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"#menuContainer {\\n  width: 100%;\\n  height: 100%;\\n  background: lightgray;\\n  display: flex;\\n  flex-direction: row;\\n}\\n\\n.menuTitleDiv {\\n  width: 150px;\\n  height: 100%;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.menuTitleContent {\\n  font-size: 30px;\\n  margin: 0px;\\n  cursor: default;\\n}\\n\\n.menuItemsDiv {\\n  position: absolute;\\n  width: 150px;\\n}\\n\\n.visible {\\n  display: default;\\n}\\n\\n.notVisible {\\n  display: none;\\n}\\n\\n.menuItemDiv {\\n  width: 150px;\\n  height: 50px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.menuItemDiv:hover {\\n  background: lightgray;\\n}\\n\\n.menuItemContent {\\n  font-size: 20px;\\n  height: 20px;\\n  cursor: default;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://dui-practice/./src/createDropDownMenu.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/createImageSlider.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/createImageSlider.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"#imageSliderContent {\\n  width: 100%;\\n  height: 100%;\\n  display: flex;\\n  overflow: hidden;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://dui-practice/./src/createImageSlider.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://dui-practice/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/createDropDownMenu.css":
/*!************************************!*\
  !*** ./src/createDropDownMenu.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_createDropDownMenu_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./createDropDownMenu.css */ \"./node_modules/css-loader/dist/cjs.js!./src/createDropDownMenu.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_createDropDownMenu_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_createDropDownMenu_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://dui-practice/./src/createDropDownMenu.css?");

/***/ }),

/***/ "./src/createImageSlider.css":
/*!***********************************!*\
  !*** ./src/createImageSlider.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_createImageSlider_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./createImageSlider.css */ \"./node_modules/css-loader/dist/cjs.js!./src/createImageSlider.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_createImageSlider_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_createImageSlider_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://dui-practice/./src/createImageSlider.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://dui-practice/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/createDropDownMenu.js":
/*!***********************************!*\
  !*** ./src/createDropDownMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createDropDownMenu_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createDropDownMenu.css */ \"./src/createDropDownMenu.css\");\n\n\nconst dom = (() => {\n  const createMenuTitle = (menuTitle) => {\n    const menuTitleDiv = document.createElement('div');\n    menuTitleDiv.classList.toggle('menuTitleDiv');\n\n    const menuTitleContent = document.createElement('h1');\n    menuTitleContent.classList.toggle('menuTitleContent');\n    menuTitleContent.textContent = menuTitle;\n    menuTitleDiv.appendChild(menuTitleContent);\n\n    return menuTitleDiv;\n  };\n\n  const createOneMenuItem = (menuItemName) => {\n    const menuItemDiv = document.createElement('div');\n    menuItemDiv.classList.toggle('menuItemDiv');\n    menuItemDiv.value = menuItemName;\n\n    const menuItemContent = document.createElement('h2');\n    menuItemContent.classList.toggle('menuItemContent');\n    menuItemContent.textContent = menuItemName;\n    menuItemDiv.appendChild(menuItemContent);\n\n    return menuItemDiv;\n  };\n\n  const createMenuItems = (menuItems) => {\n    const menuItemsDiv = document.createElement('div');\n    menuItemsDiv.classList.toggle('menuItemsDiv');\n    menuItemsDiv.classList.toggle('notVisible');\n\n    menuItems.forEach((menuItemName) => {\n      menuItemsDiv.appendChild(createOneMenuItem(menuItemName));\n    });\n\n    return menuItemsDiv;\n  };\n\n  const menuContainer = document.createElement('div');\n  menuContainer.id = 'menuContainer';\n\n  const createOneMenuOption = (menuOption) => {\n    const menuOptionDiv = document.createElement('div');\n    menuOptionDiv.classList.toggle('menuOptionDiv');\n    menuOptionDiv.appendChild(createMenuTitle(menuOption[0]));\n    menuOptionDiv.appendChild(createMenuItems(menuOption[1]));\n    menuContainer.appendChild(menuOptionDiv);\n  };\n\n  const createMenuOptions = (menuOptions) => {\n    menuOptions.forEach((menuOption) => createOneMenuOption(menuOption));\n  };\n\n  const initiate = (allMenuOptions) => {\n    createMenuOptions(allMenuOptions);\n\n    return menuContainer;\n  };\n\n  return { initiate };\n})();\n\nconst logic = (() => {\n  const addHoverEffect = (menuOption) => {\n    const hoverEffectFunction = (e) => {\n      if (e.target !== menuOption) return;\n      const menuItemsDiv = menuOption.querySelector('.menuItemsDiv');\n      menuItemsDiv.classList.toggle('visible');\n      menuItemsDiv.classList.toggle('notVisible');\n    };\n\n    menuOption.addEventListener('mouseenter', (e) => hoverEffectFunction(e));\n    menuOption.addEventListener('mouseleave', (e) => hoverEffectFunction(e));\n  };\n\n  const findAndCallFunctionForAllMenuOptions = (menuContainer) => {\n    const allMenuOptions = menuContainer.querySelectorAll('.menuOptionDiv');\n    allMenuOptions.forEach((menuOption) => addHoverEffect(menuOption));\n  };\n\n  const initiate = (menuContainer) => {\n    findAndCallFunctionForAllMenuOptions(menuContainer);\n  };\n\n  return { initiate };\n})();\n\nconst main = (() => {\n  const initiate = (allMenuOptions) => {\n    const menuContainer = dom.initiate(allMenuOptions);\n    logic.initiate(menuContainer);\n\n    return menuContainer;\n  };\n\n  return { initiate };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);\n\n\n//# sourceURL=webpack://dui-practice/./src/createDropDownMenu.js?");

/***/ }),

/***/ "./src/createImageSlider.js":
/*!**********************************!*\
  !*** ./src/createImageSlider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./src/elements.js\");\n/* harmony import */ var _createImageSlider_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createImageSlider.css */ \"./src/createImageSlider.css\");\n\n\n\n/*\n  find the correct array \n  two things: imageSliderContent and creditLink\n*/\n\nconst initialDom = (() => {\n  const clearImageSliderContainer = () => {\n    while (_elements__WEBPACK_IMPORTED_MODULE_0__.default.imageSliderContainer.firstChild) {\n      _elements__WEBPACK_IMPORTED_MODULE_0__.default.imageSliderContainer.removeChild(\n        _elements__WEBPACK_IMPORTED_MODULE_0__.default.imageSliderContainer.firstChild,\n      );\n    }\n  };\n\n  const addImageSliderContent = () => {\n    const imageSliderContent = document.createElement('div');\n    imageSliderContent.id = 'imageSliderContent';\n    _elements__WEBPACK_IMPORTED_MODULE_0__.default.imageSliderContainer.appendChild(imageSliderContent);\n  };\n\n  const addImagesToImageSliderContent = (specificArray) => {\n    const imageSliderContent = document.getElementById('imageSliderContent');\n\n    const addOneImage = (imageSrc, idName) => {\n      const image = document.createElement('img');\n      image.src = imageSrc;\n      image.id = idName;\n      imageSliderContent.appendChild(image);\n    };\n\n    const addEachImage = (array) => {\n      array.forEach((imageSrc) => {\n        const image = document.createElement('img');\n        image.src = imageSrc;\n        imageSliderContent.appendChild(image);\n      });\n    };\n\n    const imagesArray = specificArray.map((array) => array[0]);\n    addOneImage(imagesArray[imagesArray.length - 1], 'lastImageClone');\n    addEachImage(imagesArray);\n    addOneImage(imagesArray[0], 'firstImageClone');\n  };\n\n  const initiate = (specificArray) => {\n    clearImageSliderContainer();\n    addImageSliderContent();\n    addImagesToImageSliderContent(specificArray);\n  };\n\n  return { initiate };\n})();\n\nconst main = (() => {\n  const findSpecificArrayWithTitle = (title) => {\n    const finalArray = _elements__WEBPACK_IMPORTED_MODULE_0__.default.imagesAndLinksArray.find(\n      (array) => array[0] === title,\n    );\n    return finalArray[1];\n  };\n\n  const initiate = (title) => {\n    const specificArray = findSpecificArrayWithTitle(title);\n    initialDom.initiate(specificArray);\n  };\n\n  return { initiate };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);\n\n// import elements from './elements';\n// import './createImageSlider.css';\n\n// /*\n//   find the correct array\n//   two things: imageSliderContent and creditLink\n// */\n\n// const initialDom = (() => {\n//   const imageSliderContent = document.createElement('div');\n//   imageSliderContent.id = 'imageSliderContent';\n\n//   const clearImageSliderContainer = () => {\n//     while (elements.imageSliderContainer.firstChild) {\n//       elements.imageSliderContainer.removeChild(\n//         elements.imageSliderContainer.firstChild,\n//       );\n//     }\n//     while (imageSliderContent.firstChild) {\n//       imageSliderContent.removeChild(imageSliderContent.firstChild);\n//     }\n//   };\n\n//   const appendImageSliderContent = () => {\n//     elements.imageSliderContainer.appendChild(imageSliderContent);\n//   };\n\n//   const addImagesToImageSliderContent = (specificArray) => {\n//     const addOneImage = (imageSrc, idName) => {\n//       const image = document.createElement('img');\n//       image.src = imageSrc;\n//       image.id = idName;\n//       imageSliderContent.appendChild(image);\n//     };\n\n//     const addEachImage = (array) => {\n//       array.forEach((imageSrc) => {\n//         const image = document.createElement('img');\n//         image.src = imageSrc;\n//         imageSliderContent.appendChild(image);\n//       });\n//     };\n\n//     const imagesArray = specificArray.map((array) => array[0]);\n//     addOneImage(imagesArray[imagesArray.length - 1], 'lastImageClone');\n//     addEachImage(imagesArray);\n//     addOneImage(imagesArray[0], 'firstImageClone');\n//   };\n\n//   const initiate = (specificArray) => {\n//     clearImageSliderContainer();\n//     appendImageSliderContent();\n//     addImagesToImageSliderContent(specificArray);\n//   };\n\n//   return { initiate };\n// })();\n\n// const main = (() => {\n//   const findSpecificArrayWithTitle = (title) => {\n//     const finalArray = elements.imagesAndLinksArray.find(\n//       (array) => array[0] === title,\n//     );\n//     return finalArray[1];\n//   };\n\n//   const initiate = (title) => {\n//     const specificArray = findSpecificArrayWithTitle(title);\n//     initialDom.initiate(specificArray);\n//   };\n\n//   return { initiate };\n// })();\n\n// export default main;\n\n\n//# sourceURL=webpack://dui-practice/./src/createImageSlider.js?");

/***/ }),

/***/ "./src/elements.js":
/*!*************************!*\
  !*** ./src/elements.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _imagesAndLinksArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imagesAndLinksArray */ \"./src/imagesAndLinksArray.js\");\n\n\nconst createImageSliderRequirements = (() => {\n  const imageSliderContainer = document.getElementById('imageSliderContainer');\n  const creditLink = document.getElementById('creditLink');\n  const imagesAndLinksArray = _imagesAndLinksArray__WEBPACK_IMPORTED_MODULE_0__.default.array;\n  return { imageSliderContainer, creditLink, imagesAndLinksArray };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createImageSliderRequirements);\n\n\n//# sourceURL=webpack://dui-practice/./src/elements.js?");

/***/ }),

/***/ "./src/images/yellowstone/yellowstone1.png":
/*!*************************************************!*\
  !*** ./src/images/yellowstone/yellowstone1.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b7237a92a5869582776c.png\";\n\n//# sourceURL=webpack://dui-practice/./src/images/yellowstone/yellowstone1.png?");

/***/ }),

/***/ "./src/images/yellowstone/yellowstone2.png":
/*!*************************************************!*\
  !*** ./src/images/yellowstone/yellowstone2.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"103b6c5875d60783d431.png\";\n\n//# sourceURL=webpack://dui-practice/./src/images/yellowstone/yellowstone2.png?");

/***/ }),

/***/ "./src/images/yellowstone/yellowstone3.png":
/*!*************************************************!*\
  !*** ./src/images/yellowstone/yellowstone3.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"286d3d044ddaffd88470.png\";\n\n//# sourceURL=webpack://dui-practice/./src/images/yellowstone/yellowstone3.png?");

/***/ }),

/***/ "./src/images/yellowstone/yellowstone4.png":
/*!*************************************************!*\
  !*** ./src/images/yellowstone/yellowstone4.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"07504c43529fe1600b11.png\";\n\n//# sourceURL=webpack://dui-practice/./src/images/yellowstone/yellowstone4.png?");

/***/ }),

/***/ "./src/imagesAndLinksArray.js":
/*!************************************!*\
  !*** ./src/imagesAndLinksArray.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_yellowstone_yellowstone1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/yellowstone/yellowstone1.png */ \"./src/images/yellowstone/yellowstone1.png\");\n/* harmony import */ var _images_yellowstone_yellowstone2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/yellowstone/yellowstone2.png */ \"./src/images/yellowstone/yellowstone2.png\");\n/* harmony import */ var _images_yellowstone_yellowstone3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/yellowstone/yellowstone3.png */ \"./src/images/yellowstone/yellowstone3.png\");\n/* harmony import */ var _images_yellowstone_yellowstone4_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/yellowstone/yellowstone4.png */ \"./src/images/yellowstone/yellowstone4.png\");\n\n\n\n\n\nconst main = (() => {\n  const array = [\n    [\n      'Yellowstone',\n      [\n        [\n          _images_yellowstone_yellowstone1_png__WEBPACK_IMPORTED_MODULE_0__,\n          ['Nicolasintravel', 'https://unsplash.com/@nicolasintravel38'],\n        ],\n        [_images_yellowstone_yellowstone2_png__WEBPACK_IMPORTED_MODULE_1__, ['Lucas Gao', 'https://unsplash.com/@cestlucas']],\n        [_images_yellowstone_yellowstone3_png__WEBPACK_IMPORTED_MODULE_2__, ['Dan Meyers', 'https://unsplash.com/@dmey503']],\n        [_images_yellowstone_yellowstone4_png__WEBPACK_IMPORTED_MODULE_3__, ['Ashley Knedler', 'https://unsplash.com/@ashkned']],\n      ],\n    ],\n  ];\n\n  return { array };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);\n\n\n//# sourceURL=webpack://dui-practice/./src/imagesAndLinksArray.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createDropDownMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createDropDownMenu */ \"./src/createDropDownMenu.js\");\n/* harmony import */ var _createImageSlider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createImageSlider */ \"./src/createImageSlider.js\");\n\n\n\nconst dropDownMenu = (() => {\n  const initiate = () => {\n    const dropDownMenuDiv = document.getElementById('dropDownMenuDiv');\n\n    const menuItems = [\n      ['Nature', ['Yellowstone', 'Grand Canyon', 'Lake Tahoe']],\n      ['Cities', ['New York', 'Los Angeles', 'Chicago', 'San Francisco']],\n      ['Pets', ['Dogs', 'Cats', 'Fish']],\n    ];\n\n    dropDownMenuDiv.appendChild(_createDropDownMenu__WEBPACK_IMPORTED_MODULE_0__.default.initiate(menuItems));\n  };\n\n  return { initiate };\n})();\n\nconst imageSlider = (() => {\n  const imageSliderFunctions = (arrayName) => {\n    const changeImageSliderTitle = (title) => {\n      const imageSliderTitle = document.getElementById(\n        'imageSliderTitleContent',\n      );\n      imageSliderTitle.textContent = title;\n    };\n\n    const changeImageSliderContent = (title) => {\n      _createImageSlider__WEBPACK_IMPORTED_MODULE_1__.default.initiate(title);\n    };\n\n    changeImageSliderTitle(arrayName);\n    changeImageSliderContent(arrayName);\n  };\n\n  const findAndCallFunctionForAllMenuItems = () => {\n    const allMenuItems = document.querySelectorAll('.menuItemDiv');\n    allMenuItems.forEach((menuItem) => {\n      menuItem.addEventListener('click', () => {\n        imageSliderFunctions(menuItem.value);\n      });\n    });\n  };\n\n  const initiate = () => {\n    findAndCallFunctionForAllMenuItems();\n    // imageSliderFunctions(YellowStone);\n  };\n\n  return { initiate };\n})();\n\nconst main = (() => {\n  const initiate = () => {\n    dropDownMenu.initiate();\n    imageSlider.initiate();\n  };\n\n  return { initiate };\n})();\n\nmain.initiate();\n\n\n//# sourceURL=webpack://dui-practice/./src/index.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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