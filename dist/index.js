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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.toPascalCase = void 0;\n/**\n * テキストをパスカルケースにする\n */\nconst toPascalCase = (text) => {\n    const words = text.match(/[a-z]+/gi);\n    if (!words)\n        return \"\";\n    return words\n        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())\n        .join(\"\");\n};\nexports.toPascalCase = toPascalCase;\n/**\n * 要素を取得する\n */\nconst getElement = (selector) => document.querySelector(selector);\n/**\n * テキストを挿入する\n */\nconst insertText = (element) => (text) => {\n    const p = document.createElement(\"p\");\n    p.textContent = text;\n    element.appendChild(p);\n    return text;\n};\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const container = getElement(\"#container\");\n    if (container !== null) {\n        [\"foo\", \"bar\", \"Baz\", \"qux\", \"piyo piyo\"]\n            .map(exports.toPascalCase)\n            .map(insertText(container));\n    }\n});\n\n\n//# sourceURL=webpack://hands-on-refactoring-with-typescript/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"](0, __webpack_exports__);
/******/ 	
/******/ })()
;