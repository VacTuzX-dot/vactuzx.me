"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog",{

/***/ "./src/pages/blog.jsx":
/*!****************************!*\
  !*** ./src/pages/blog.jsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Blog; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Blog() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex h-screen items-center justify-center py-2\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: \"flex flex-col items-center justify-center w-full flex-1 px-20 text-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-6xl font-bold text-black dark:text-white\",\n                    children: \"Coming Soon\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Coding Project\\\\WORKSTATION\\\\Portfolio\\\\src\\\\pages\\\\blog.jsx\",\n                    lineNumber: 7,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"bg-indigo mt-0 translation duration-300 text-white px-8 py-3 rounded-md hover:bg-indigo/80\",\n                    onClick: function() {\n                        return router.back();\n                    },\n                    children: \"Go Back\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Coding Project\\\\WORKSTATION\\\\Portfolio\\\\src\\\\pages\\\\blog.jsx\",\n                    lineNumber: 10,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Coding Project\\\\WORKSTATION\\\\Portfolio\\\\src\\\\pages\\\\blog.jsx\",\n            lineNumber: 6,\n            columnNumber: 3\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Coding Project\\\\WORKSTATION\\\\Portfolio\\\\src\\\\pages\\\\blog.jsx\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n_s(Blog, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Blog;\nvar _c;\n$RefreshReg$(_c, \"Blog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYmxvZy5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBd0M7QUFDekIsU0FBU0MsSUFBSSxHQUFHOztJQUM3QixJQUFNQyxNQUFNLEdBQUdGLHNEQUFTLEVBQUU7SUFDMUIscUJBQ0UsOERBQUNHLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLGdEQUFnRDtrQkFDakUsNEVBQUNDLE1BQUk7WUFBQ0QsU0FBUyxFQUFDLDJFQUEyRTs7OEJBQ3pGLDhEQUFDRSxJQUFFO29CQUFDRixTQUFTLEVBQUMsK0NBQStDOzhCQUFDLGFBRTlEOzs7Ozt3QkFBSzs4QkFDTCw4REFBQ0csUUFBTTtvQkFDTEgsU0FBUyxFQUFDLDRGQUE0RjtvQkFDdEdJLE9BQU8sRUFBRTsrQkFBTU4sTUFBTSxDQUFDTyxJQUFJLEVBQUU7cUJBQUE7OEJBQzdCLFNBRUQ7Ozs7O3dCQUFTOzs7Ozs7Z0JBQ0o7Ozs7O1lBQ0gsQ0FFRjtBQUNKLENBQUM7R0FsQnVCUixJQUFJOztRQUNYRCxrREFBUzs7O0FBREZDLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Jsb2cuanN4PzdiMjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2coKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBoLXNjcmVlbiBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHktMlwiPlxyXG4gIDxtYWluIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctZnVsbCBmbGV4LTEgcHgtMjAgdGV4dC1jZW50ZXJcIj5cclxuICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTZ4bCBmb250LWJvbGQgdGV4dC1ibGFjayBkYXJrOnRleHQtd2hpdGVcIj5cclxuICAgICAgQ29taW5nIFNvb25cclxuICAgIDwvaDE+XHJcbiAgICA8YnV0dG9uXHJcbiAgICAgIGNsYXNzTmFtZT1cImJnLWluZGlnbyBtdC0wIHRyYW5zbGF0aW9uIGR1cmF0aW9uLTMwMCB0ZXh0LXdoaXRlIHB4LTggcHktMyByb3VuZGVkLW1kIGhvdmVyOmJnLWluZGlnby84MFwiXHJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5iYWNrKCl9XHJcbiAgICA+XHJcbiAgICAgIEdvIEJhY2tcclxuICAgIDwvYnV0dG9uPlxyXG4gIDwvbWFpbj5cclxuPC9kaXY+XHJcblxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIkJsb2ciLCJyb3V0ZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIiwiYmFjayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/blog.jsx\n"));

/***/ })

});