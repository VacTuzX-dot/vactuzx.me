"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/global/skills.jsx":
/*!******************************************!*\
  !*** ./src/components/global/skills.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Teach; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/swr */ \"./src/lib/swr.jsx\");\n\n\n\n\nfunction Teach() {\n    var _this = this;\n    var ref = (0,_lib_swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"/api/v1/teach\"), tech = ref.data;\n    var data = tech ? tech : [];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mt-16 sm:px-4 sm:mt-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-2xl font-bold flex items-center dark:text-white\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-10 h-10 rounded-full items-center flex justify-center mr-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"fas fa-book text-indigo text-3xl\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Coding Project\\\\WORKSTATION\\\\Portfolio\\\\src\\\\components\\\\global\\\\skills.jsx\",\n                                lineNumber: 13,\n                                columnNumber: 9\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Coding Project\\\\WORKSTATION\\\\Portfolio\\\\src\\\\components\\\\global\\\\skills.jsx\",\n                            lineNumber: 12,\n                            columnNumber: 7\n                        }, this),\n                        \"Technologies I use\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Coding Project\\\\WORKSTATION\\\\Portfolio\\\\src\\\\components\\\\global\\\\skills.jsx\",\n                    lineNumber: 11,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex mt-5 flex-wrap\",\n                    children: data ? data.map(function(item, index) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full cursor-pointer transition-all duration-200 hover:shadow-md hover:scale-[1.02] md:w-1/2 lg:w-1/3 mt-2 pr-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                                initial: {\n                                    opacity: 0\n                                },\n                                animate: {\n                                    opacity: 1\n                                },\n                                exit: {\n                                    opacity: 0\n                                },\n                                transition: {\n                                    duration: 0.5\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"border-[1px] border-[#e2e3e5] dark:border-[#1a1a1c] bg-[#fafcfb] dark:bg-[#151516] shadow-lg rounded-lg p-2\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex justify-between items-center\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                className: \"w-8 h-8 rounded-md mr-4\",\n                                                src: item.src,\n                                                alt: item.name,\n                                                width: 30,\n                                                height: 30\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Coding Project\\\\WORKSTATION\\\\Portfolio\\\\src\\\\components\\\\global\\\\skills.jsx\",\n                                                lineNumber: 33,\n                                                columnNumber: 19\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"text-sm justify-end\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"font-bold text-black dark:text-white\",\n                                                    children: item.name\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Coding Project\\\\WORKSTATION\\\\Portfolio\\\\src\\\\components\\\\global\\\\skills.jsx\",\n                                                    lineNumber: 41,\n                                                    columnNumber: 21\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Coding Project\\\\WORKSTATION\\\\Portfolio\\\\src\\\\components\\\\global\\\\skills.jsx\",\n                                                lineNumber: 40,\n                                                columnNumber: 19\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Coding Project\\\\WORKSTATION\\\\Portfolio\\\\src\\\\components\\\\global\\\\skills.jsx\",\n                                        lineNumber: 32,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Coding Project\\\\WORKSTATION\\\\Portfolio\\\\src\\\\components\\\\global\\\\skills.jsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 15\n                                }, _this)\n                            }, index, false, {\n                                fileName: \"D:\\\\Coding Project\\\\WORKSTATION\\\\Portfolio\\\\src\\\\components\\\\global\\\\skills.jsx\",\n                                lineNumber: 24,\n                                columnNumber: 13\n                            }, _this)\n                        }, index, false, {\n                            fileName: \"D:\\\\Coding Project\\\\WORKSTATION\\\\Portfolio\\\\src\\\\components\\\\global\\\\skills.jsx\",\n                            lineNumber: 20,\n                            columnNumber: 11\n                        }, _this);\n                    }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Coding Project\\\\WORKSTATION\\\\Portfolio\\\\src\\\\components\\\\global\\\\skills.jsx\",\n                    lineNumber: 17,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Coding Project\\\\WORKSTATION\\\\Portfolio\\\\src\\\\components\\\\global\\\\skills.jsx\",\n            lineNumber: 10,\n            columnNumber: 3\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Coding Project\\\\WORKSTATION\\\\Portfolio\\\\src\\\\components\\\\global\\\\skills.jsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n_c = Teach;\nvar _c;\n$RefreshReg$(_c, \"Teach\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9nbG9iYWwvc2tpbGxzLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBd0Q7QUFDekI7QUFDQztBQUNqQixTQUFTSSxLQUFLLEdBQUc7O0lBQzlCLElBQXVCRCxHQUFvQixHQUFwQkEsb0RBQUcsQ0FBQyxlQUFlLENBQUMsRUFBbkNFLElBQVUsR0FBS0YsR0FBb0IsQ0FBbkNFLElBQUk7SUFDWixJQUFNQSxJQUFJLEdBQUdDLElBQUksR0FBR0EsSUFBSSxHQUFHLEVBQUU7SUFFN0IscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLGVBQWU7a0JBQ2hDLDRFQUFDRCxLQUFHO1lBQUNDLFNBQVMsRUFBQyx1QkFBdUI7OzhCQUNwQyw4REFBQ0QsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLHNEQUFzRDs7c0NBQ25FLDhEQUFDRCxLQUFHOzRCQUFDQyxTQUFTLEVBQUMsOERBQThEO3NDQUMzRSw0RUFBQ0MsR0FBQztnQ0FBQ0QsU0FBUyxFQUFDLGtDQUFrQzs7Ozs7b0NBQUc7Ozs7O2dDQUM5Qzt3QkFBQSxvQkFFUjs7Ozs7O3dCQUFNOzhCQUNOLDhEQUFDRCxLQUFHO29CQUFDQyxTQUFTLEVBQUMscUJBQXFCOzhCQUNqQ0gsSUFBSSxHQUNIQSxJQUFJLENBQUNLLEdBQUcsQ0FBQyxTQUFDQyxJQUFJLEVBQUVDLEtBQUs7NkNBQ25CLDhEQUFDTCxLQUFHOzRCQUNGQyxTQUFTLEVBQUMsa0hBQWtIO3NDQUc1SCw0RUFBQ1IscURBQVU7Z0NBQ1RhLE9BQU8sRUFBRTtvQ0FBRUMsT0FBTyxFQUFFLENBQUM7aUNBQUU7Z0NBQ3ZCQyxPQUFPLEVBQUU7b0NBQUVELE9BQU8sRUFBRSxDQUFDO2lDQUFFO2dDQUN2QkUsSUFBSSxFQUFFO29DQUFFRixPQUFPLEVBQUUsQ0FBQztpQ0FBRTtnQ0FFcEJHLFVBQVUsRUFBRTtvQ0FBRUMsUUFBUSxFQUFFLEdBQUc7aUNBQUU7MENBRTdCLDRFQUFDWCxLQUFHO29DQUFDQyxTQUFTLEVBQUMsNkdBQTZHOzhDQUMxSCw0RUFBQ0QsS0FBRzt3Q0FBQ0MsU0FBUyxFQUFDLG1DQUFtQzs7MERBQ2hELDhEQUFDTixtREFBSztnREFDSk0sU0FBUyxFQUFDLHlCQUF5QjtnREFDbkNXLEdBQUcsRUFBRVIsSUFBSSxDQUFDUSxHQUFHO2dEQUNiQyxHQUFHLEVBQUVULElBQUksQ0FBQ1UsSUFBSTtnREFDZEMsS0FBSyxFQUFFLEVBQUU7Z0RBQ1RDLE1BQU0sRUFBRSxFQUFFOzs7OztxREFDVjswREFDRiw4REFBQ2hCLEtBQUc7Z0RBQUNDLFNBQVMsRUFBQyxxQkFBcUI7MERBQ2xDLDRFQUFDZ0IsR0FBQztvREFBQ2hCLFNBQVMsRUFBQyxzQ0FBc0M7OERBQ2hERyxJQUFJLENBQUNVLElBQUk7Ozs7O3lEQUNSOzs7OztxREFDQTs7Ozs7OzZDQUNGOzs7Ozt5Q0FDRjsrQkFsQkRULEtBQUs7Ozs7cUNBbUJDOzJCQXpCUkEsS0FBSzs7OztpQ0EwQk47cUJBQ1AsQ0FBQyxpQkFFRiw2SUFBSzs7Ozs7d0JBRUg7Ozs7OztnQkFDRjs7Ozs7WUFDRixDQUVGO0FBQ0osQ0FBQztBQXREdUJSLEtBQUFBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZ2xvYmFsL3NraWxscy5qc3g/NTQ0NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgc3dyIGZyb20gXCIuLi8uLi9saWIvc3dyXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlYWNoKCkge1xyXG4gIGNvbnN0IHsgZGF0YTogdGVjaCB9ID0gc3dyKFwiL2FwaS92MS90ZWFjaFwiKTtcclxuICBjb25zdCBkYXRhID0gdGVjaCA/IHRlY2ggOiBbXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxyXG4gIDxkaXYgY2xhc3NOYW1lPVwibXQtMTYgc206cHgtNCBzbTptdC00XCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBmbGV4IGl0ZW1zLWNlbnRlciBkYXJrOnRleHQtd2hpdGVcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgcm91bmRlZC1mdWxsIGl0ZW1zLWNlbnRlciBmbGV4IGp1c3RpZnktY2VudGVyIG1yLTJcIj5cclxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYm9vayB0ZXh0LWluZGlnbyB0ZXh0LTN4bFwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBUZWNobm9sb2dpZXMgSSB1c2VcclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG10LTUgZmxleC13cmFwXCI+XHJcbiAgICAgIHtkYXRhID8gKFxyXG4gICAgICAgIGRhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgY3Vyc29yLXBvaW50ZXIgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMjAwIGhvdmVyOnNoYWRvdy1tZCBob3ZlcjpzY2FsZS1bMS4wMl0gbWQ6dy0xLzIgbGc6dy0xLzMgbXQtMiBwci0yXCJcclxuICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cclxuICAgICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX1cclxuICAgICAgICAgICAgICBleGl0PXt7IG9wYWNpdHk6IDAgfX1cclxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItWzFweF0gYm9yZGVyLVsjZTJlM2U1XSBkYXJrOmJvcmRlci1bIzFhMWExY10gYmctWyNmYWZjZmJdIGRhcms6YmctWyMxNTE1MTZdIHNoYWRvdy1sZyByb3VuZGVkLWxnIHAtMlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy04IGgtOCByb3VuZGVkLW1kIG1yLTRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17aXRlbS5zcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PXtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezMwfVxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17MzB9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSBqdXN0aWZ5LWVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWJsYWNrIGRhcms6dGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpXHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPD48Lz5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsibW90aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwiSW1hZ2UiLCJzd3IiLCJUZWFjaCIsImRhdGEiLCJ0ZWNoIiwiZGl2IiwiY2xhc3NOYW1lIiwiaSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsImV4aXQiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJzcmMiLCJhbHQiLCJuYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/global/skills.jsx\n"));

/***/ })

});