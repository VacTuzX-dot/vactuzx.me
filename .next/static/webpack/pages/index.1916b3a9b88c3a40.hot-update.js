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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Teach; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/swr */ \"./src/lib/swr.jsx\");\n\n\n\n\nfunction Teach() {\n    const { data: tech } = (0,_lib_swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"/api/v1/teach\");\n    const data = tech ? tech : [];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-16\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-2xl font-bold flex items-center dark:text-white relative z-10\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-10 h-10 rounded-full items-center flex justify-center mr-2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                    className: \"fas fa-book text-indigo text-3xl\"\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\vactuzx.me\\\\src\\\\components\\\\global\\\\skills.jsx\",\n                                    lineNumber: 13,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"F:\\\\vactuzx.me\\\\src\\\\components\\\\global\\\\skills.jsx\",\n                                lineNumber: 12,\n                                columnNumber: 11\n                            }, this),\n                            \"Languages and Tools\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"F:\\\\vactuzx.me\\\\src\\\\components\\\\global\\\\skills.jsx\",\n                        lineNumber: 11,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-3xl text-gray-300 dark:text-gray-300 font-light absolute top-0 left-9 z-0\",\n                        children: \"Languages and Tools\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\vactuzx.me\\\\src\\\\components\\\\global\\\\skills.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\vactuzx.me\\\\src\\\\components\\\\global\\\\skills.jsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex mt-5 flex-wrap\",\n                children: data ? data.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full cursor-pointer transition-all duration-300 hover:scale-[1.05] md:w-1/2 lg:w-1/3 mt-2 pr-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                            initial: {\n                                opacity: 0\n                            },\n                            animate: {\n                                opacity: 1\n                            },\n                            exit: {\n                                opacity: 0\n                            },\n                            transition: {\n                                duration: 0.5\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"border-[2px] border-[#e2e3e5] dark:border-[#1a1a1c]  bg-[#fafcfb] dark:bg-[#151516] shadow-lg rounded-lg p-2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-between items-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            className: \"w-8 h-8 rounded-sm mr-4\",\n                                            src: item.src,\n                                            alt: item.name,\n                                            width: 30,\n                                            height: 30\n                                        }, void 0, false, {\n                                            fileName: \"F:\\\\vactuzx.me\\\\src\\\\components\\\\global\\\\skills.jsx\",\n                                            lineNumber: 38,\n                                            columnNumber: 21\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-md  justify-end\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"font-bold text-black dark:text-white\",\n                                                children: item.name\n                                            }, void 0, false, {\n                                                fileName: \"F:\\\\vactuzx.me\\\\src\\\\components\\\\global\\\\skills.jsx\",\n                                                lineNumber: 46,\n                                                columnNumber: 23\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"F:\\\\vactuzx.me\\\\src\\\\components\\\\global\\\\skills.jsx\",\n                                            lineNumber: 45,\n                                            columnNumber: 21\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"F:\\\\vactuzx.me\\\\src\\\\components\\\\global\\\\skills.jsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"F:\\\\vactuzx.me\\\\src\\\\components\\\\global\\\\skills.jsx\",\n                                lineNumber: 36,\n                                columnNumber: 17\n                            }, this)\n                        }, index, false, {\n                            fileName: \"F:\\\\vactuzx.me\\\\src\\\\components\\\\global\\\\skills.jsx\",\n                            lineNumber: 29,\n                            columnNumber: 15\n                        }, this)\n                    }, index, false, {\n                        fileName: \"F:\\\\vactuzx.me\\\\src\\\\components\\\\global\\\\skills.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 13\n                    }, this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)\n            }, void 0, false, {\n                fileName: \"F:\\\\vactuzx.me\\\\src\\\\components\\\\global\\\\skills.jsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\vactuzx.me\\\\src\\\\components\\\\global\\\\skills.jsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n_c = Teach;\nvar _c;\n$RefreshReg$(_c, \"Teach\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9nbG9iYWwvc2tpbGxzLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF3RDtBQUN6QjtBQUNDO0FBQ2pCLFNBQVNJO0lBQ3RCLE1BQU0sRUFBRUMsTUFBTUMsSUFBSSxFQUFFLEdBQUdILG9EQUFHQSxDQUFDO0lBQzNCLE1BQU1FLE9BQU9DLE9BQU9BLE9BQU8sRUFBRTtJQUU3QixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ0M7b0NBQUVELFdBQVU7Ozs7Ozs7Ozs7OzRCQUNUOzs7Ozs7O2tDQUdSLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FBaUY7Ozs7Ozs7Ozs7OzswQkFLbEcsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNaSCxPQUNDQSxLQUFLSyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2QsOERBQUNMO3dCQUNDQyxXQUFVO2tDQUdWLDRFQUFDUixpREFBTUEsQ0FBQ08sR0FBRzs0QkFDVE0sU0FBUztnQ0FBRUMsU0FBUzs0QkFBRTs0QkFDdEJDLFNBQVM7Z0NBQUVELFNBQVM7NEJBQUU7NEJBQ3RCRSxNQUFNO2dDQUFFRixTQUFTOzRCQUFFOzRCQUVuQkcsWUFBWTtnQ0FBRUMsVUFBVTs0QkFBSTtzQ0FFNUIsNEVBQUNYO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDRDtvQ0FBSUMsV0FBVTs7c0RBQ2IsOERBQUNOLG1EQUFLQTs0Q0FDSk0sV0FBVTs0Q0FDVlcsS0FBS1IsS0FBS1EsR0FBRzs0Q0FDYkMsS0FBS1QsS0FBS1UsSUFBSTs0Q0FDZEMsT0FBTzs0Q0FDUEMsUUFBUTs7Ozs7O3NEQUVWLDhEQUFDaEI7NENBQUlDLFdBQVU7c0RBQ2IsNEVBQUNnQjtnREFBRWhCLFdBQVU7MERBQ1ZHLEtBQUtVLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkJBZGJUOzs7Ozt1QkFORkE7Ozs7OENBNkJUOzs7Ozs7Ozs7Ozs7QUFLVjtLQXpEd0JSIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2dsb2JhbC9za2lsbHMuanN4PzU0NDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlUHJlc2VuY2UgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgc3dyIGZyb20gXCIuLi8uLi9saWIvc3dyXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZWFjaCgpIHtcbiAgY29uc3QgeyBkYXRhOiB0ZWNoIH0gPSBzd3IoXCIvYXBpL3YxL3RlYWNoXCIpO1xuICBjb25zdCBkYXRhID0gdGVjaCA/IHRlY2ggOiBbXTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTZcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgZmxleCBpdGVtcy1jZW50ZXIgZGFyazp0ZXh0LXdoaXRlIHJlbGF0aXZlIHotMTBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAgaC0xMCByb3VuZGVkLWZ1bGwgaXRlbXMtY2VudGVyIGZsZXgganVzdGlmeS1jZW50ZXIgbXItMlwiPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJvb2sgdGV4dC1pbmRpZ28gdGV4dC0zeGxcIj48L2k+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgTGFuZ3VhZ2VzIGFuZCBUb29sc1xuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCB0ZXh0LWdyYXktMzAwIGRhcms6dGV4dC1ncmF5LTMwMCBmb250LWxpZ2h0IGFic29sdXRlIHRvcC0wIGxlZnQtOSB6LTBcIj5cbiAgICAgICAgICBMYW5ndWFnZXMgYW5kIFRvb2xzXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtdC01IGZsZXgtd3JhcFwiPlxuICAgICAgICB7ZGF0YSA/IChcbiAgICAgICAgICBkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGN1cnNvci1wb2ludGVyIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBob3ZlcjpzY2FsZS1bMS4wNV0gbWQ6dy0xLzIgbGc6dy0xLzMgbXQtMiBwci0zXCJcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX1cbiAgICAgICAgICAgICAgICBleGl0PXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItWzJweF0gYm9yZGVyLVsjZTJlM2U1XSBkYXJrOmJvcmRlci1bIzFhMWExY10gIGJnLVsjZmFmY2ZiXSBkYXJrOmJnLVsjMTUxNTE2XSBzaGFkb3ctbGcgcm91bmRlZC1sZyBwLTJcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctOCBoLTggcm91bmRlZC1zbSBtci00XCJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2l0ZW0uc3JjfVxuICAgICAgICAgICAgICAgICAgICAgIGFsdD17aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszMH1cbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezMwfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbWQgIGp1c3RpZnktZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtYmxhY2sgZGFyazp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSlcbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8PjwvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsibW90aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwiSW1hZ2UiLCJzd3IiLCJUZWFjaCIsImRhdGEiLCJ0ZWNoIiwiZGl2IiwiY2xhc3NOYW1lIiwiaSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsImV4aXQiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJzcmMiLCJhbHQiLCJuYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/global/skills.jsx\n"));

/***/ })

});