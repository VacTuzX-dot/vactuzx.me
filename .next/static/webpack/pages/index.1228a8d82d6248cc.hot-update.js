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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Teach; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/swr */ \"./src/lib/swr.jsx\");\n\n\n\n\nfunction Teach() {\n    const { data: tech } = (0,_lib_swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"/api/v1/teach\");\n    const data = tech ? tech : [];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-16\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-2xl font-bold flex items-center dark:text-white  \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-10 h-10  rounded-full items-center flex justify-center mr-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"fas fa-book text-indigo text-3xl\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\vactuzx.me\\\\src\\\\components\\\\global\\\\skills.jsx\",\n                            lineNumber: 12,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"F:\\\\vactuzx.me\\\\src\\\\components\\\\global\\\\skills.jsx\",\n                        lineNumber: 11,\n                        columnNumber: 9\n                    }, this),\n                    \"Languages and Tools\"\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\vactuzx.me\\\\src\\\\components\\\\global\\\\skills.jsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex mt-5 flex-wrap\",\n                children: data ? data.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full cursor-pointer transition-all duration-300 hover:scale-[1.05] md:w-1/2 lg:w-1/3 mt-2 pr-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                            initial: {\n                                opacity: 0\n                            },\n                            animate: {\n                                opacity: 1\n                            },\n                            exit: {\n                                opacity: 0\n                            },\n                            transition: {\n                                duration: 0.5\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"border-[2px] border-[#e2e3e5] dark:border-[#1a1a1c]  bg-[#fafcfb] dark:bg-[#151516] shadow-lg rounded-lg p-2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-between items-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            className: \"w-8 h-8 rounded-sm mr-4\",\n                                            src: item.src,\n                                            alt: item.name,\n                                            width: 30,\n                                            height: 30\n                                        }, void 0, false, {\n                                            fileName: \"F:\\\\vactuzx.me\\\\src\\\\components\\\\global\\\\skills.jsx\",\n                                            lineNumber: 32,\n                                            columnNumber: 21\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-md  justify-end\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"font-bold text-black dark:text-white\",\n                                                children: item.name\n                                            }, void 0, false, {\n                                                fileName: \"F:\\\\vactuzx.me\\\\src\\\\components\\\\global\\\\skills.jsx\",\n                                                lineNumber: 40,\n                                                columnNumber: 23\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"F:\\\\vactuzx.me\\\\src\\\\components\\\\global\\\\skills.jsx\",\n                                            lineNumber: 39,\n                                            columnNumber: 21\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"F:\\\\vactuzx.me\\\\src\\\\components\\\\global\\\\skills.jsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"F:\\\\vactuzx.me\\\\src\\\\components\\\\global\\\\skills.jsx\",\n                                lineNumber: 30,\n                                columnNumber: 17\n                            }, this)\n                        }, index, false, {\n                            fileName: \"F:\\\\vactuzx.me\\\\src\\\\components\\\\global\\\\skills.jsx\",\n                            lineNumber: 23,\n                            columnNumber: 15\n                        }, this)\n                    }, index, false, {\n                        fileName: \"F:\\\\vactuzx.me\\\\src\\\\components\\\\global\\\\skills.jsx\",\n                        lineNumber: 19,\n                        columnNumber: 13\n                    }, this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)\n            }, void 0, false, {\n                fileName: \"F:\\\\vactuzx.me\\\\src\\\\components\\\\global\\\\skills.jsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\vactuzx.me\\\\src\\\\components\\\\global\\\\skills.jsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n_c = Teach;\nvar _c;\n$RefreshReg$(_c, \"Teach\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9nbG9iYWwvc2tpbGxzLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF3RDtBQUN6QjtBQUNDO0FBQ2pCLFNBQVNJO0lBQ3RCLE1BQU0sRUFBRUMsTUFBTUMsSUFBSSxFQUFFLEdBQUdILG9EQUFHQSxDQUFDO0lBQzNCLE1BQU1FLE9BQU9DLE9BQU9BLE9BQU8sRUFBRTtJQUU3QixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNDOzRCQUFFRCxXQUFVOzs7Ozs7Ozs7OztvQkFDVDs7Ozs7OzswQkFHUiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1pILE9BQ0NBLEtBQUtLLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDZCw4REFBQ0w7d0JBQ0NDLFdBQVU7a0NBR1YsNEVBQUNSLGlEQUFNQSxDQUFDTyxHQUFHOzRCQUNUTSxTQUFTO2dDQUFFQyxTQUFTOzRCQUFFOzRCQUN0QkMsU0FBUztnQ0FBRUQsU0FBUzs0QkFBRTs0QkFDdEJFLE1BQU07Z0NBQUVGLFNBQVM7NEJBQUU7NEJBRW5CRyxZQUFZO2dDQUFFQyxVQUFVOzRCQUFJO3NDQUU1Qiw0RUFBQ1g7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNEO29DQUFJQyxXQUFVOztzREFDYiw4REFBQ04sbURBQUtBOzRDQUNKTSxXQUFVOzRDQUNWVyxLQUFLUixLQUFLUSxHQUFHOzRDQUNiQyxLQUFLVCxLQUFLVSxJQUFJOzRDQUNkQyxPQUFPOzRDQUNQQyxRQUFROzs7Ozs7c0RBRVYsOERBQUNoQjs0Q0FBSUMsV0FBVTtzREFDYiw0RUFBQ2dCO2dEQUFFaEIsV0FBVTswREFDVkcsS0FBS1UsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQkFkYlQ7Ozs7O3VCQU5GQTs7Ozs4Q0E2QlQ7Ozs7Ozs7Ozs7OztBQUtWO0tBbkR3QlIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZ2xvYmFsL3NraWxscy5qc3g/NTQ0NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBzd3IgZnJvbSBcIi4uLy4uL2xpYi9zd3JcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlYWNoKCkge1xuICBjb25zdCB7IGRhdGE6IHRlY2ggfSA9IHN3cihcIi9hcGkvdjEvdGVhY2hcIik7XG4gIGNvbnN0IGRhdGEgPSB0ZWNoID8gdGVjaCA6IFtdO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xNlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgZmxleCBpdGVtcy1jZW50ZXIgZGFyazp0ZXh0LXdoaXRlICBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgIHJvdW5kZWQtZnVsbCBpdGVtcy1jZW50ZXIgZmxleCBqdXN0aWZ5LWNlbnRlciBtci0yXCI+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJvb2sgdGV4dC1pbmRpZ28gdGV4dC0zeGxcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgTGFuZ3VhZ2VzIGFuZCBUb29sc1xuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbXQtNSBmbGV4LXdyYXBcIj5cbiAgICAgICAge2RhdGEgPyAoXG4gICAgICAgICAgZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBjdXJzb3ItcG9pbnRlciB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgaG92ZXI6c2NhbGUtWzEuMDVdIG1kOnctMS8yIGxnOnctMS8zIG10LTIgcHItM1wiXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19XG4gICAgICAgICAgICAgICAgZXhpdD17eyBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjUgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLVsycHhdIGJvcmRlci1bI2UyZTNlNV0gZGFyazpib3JkZXItWyMxYTFhMWNdICBiZy1bI2ZhZmNmYl0gZGFyazpiZy1bIzE1MTUxNl0gc2hhZG93LWxnIHJvdW5kZWQtbGcgcC0yXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTggaC04IHJvdW5kZWQtc20gbXItNFwiXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtpdGVtLnNyY31cbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzB9XG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXszMH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LW1kICBqdXN0aWZ5LWVuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWJsYWNrIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpXG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPD48Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIm1vdGlvbiIsIkFuaW1hdGVQcmVzZW5jZSIsIkltYWdlIiwic3dyIiwiVGVhY2giLCJkYXRhIiwidGVjaCIsImRpdiIsImNsYXNzTmFtZSIsImkiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJleGl0IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwic3JjIiwiYWx0IiwibmFtZSIsIndpZHRoIiwiaGVpZ2h0IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/global/skills.jsx\n"));

/***/ })

});