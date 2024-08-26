"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projects",{

/***/ "./src/pages/projects.jsx":
/*!********************************!*\
  !*** ./src/pages/projects.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Projects; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/swr */ \"./src/lib/swr.jsx\");\n\n\n\n\n\nfunction Projects() {\n    var _data_map;\n    const { data: projects } = (0,_lib_swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"/api/v1/project\");\n    const data = projects ? projects : [];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n        initial: {\n            opacity: 0\n        },\n        animate: {\n            opacity: 1\n        },\n        exit: {\n            opacity: 0\n        },\n        transition: {\n            duration: 1\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \" mt-20 mb-10 p-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-3xl font-bold  text-black dark:text-white\",\n                    children: \"Projects\"\n                }, void 0, false, {\n                    fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \" text-black dark:text-white mt-3 text-lg\",\n                    children: \"Here are some of my projects.\"\n                }, void 0, false, {\n                    fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10\",\n                        children: (_data_map = data.map) === null || _data_map === void 0 ? void 0 : _data_map.call(data, (project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: (project === null || project === void 0 ? void 0 : project.html_url) || \"#\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"border-[2px] border-[#e2e3e5] dark:border-[#1a1a1c]   bg-[#fafcfb] dark:bg-[#151516] hover:scale-[1.05] rounded-md  cursor-pointer transition-all duration-300 shadow-2xl \",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"p-3\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex justify-between items-center\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \" items-center \",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                        src: project === null || project === void 0 ? void 0 : project.link,\n                                                        alt: project === null || project === void 0 ? void 0 : project.name,\n                                                        width: 500,\n                                                        height: 250,\n                                                        className: \"rounded-md\"\n                                                    }, void 0, false, {\n                                                        fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                                        lineNumber: 33,\n                                                        columnNumber: 25\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"mt-2 text-base\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                className: \"font-bold text-black dark:text-white\",\n                                                                children: project === null || project === void 0 ? void 0 : project.name\n                                                            }, void 0, false, {\n                                                                fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                                                lineNumber: 41,\n                                                                columnNumber: 27\n                                                            }, this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                className: \"text-black dark:text-white\",\n                                                                children: project === null || project === void 0 ? void 0 : project.description\n                                                            }, void 0, false, {\n                                                                fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                                                lineNumber: 44,\n                                                                columnNumber: 27\n                                                            }, this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                                        lineNumber: 40,\n                                                        columnNumber: 25\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                                lineNumber: 32,\n                                                columnNumber: 23\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                            lineNumber: 31,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                        lineNumber: 30,\n                                        columnNumber: 19\n                                    }, this)\n                                }, index, false, {\n                                    fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                    lineNumber: 26,\n                                    columnNumber: 17\n                                }, this)\n                            }, index, false, {\n                                fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                lineNumber: 25,\n                                columnNumber: 15\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n_c = Projects;\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvamVjdHMuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBd0Q7QUFDM0I7QUFDRTtBQUNGO0FBQ2QsU0FBU0s7UUFtQlhDO0lBbEJYLE1BQU0sRUFBRUEsTUFBTUMsUUFBUSxFQUFFLEdBQUdILG9EQUFHQSxDQUFDO0lBQy9CLE1BQU1FLE9BQU9DLFdBQVdBLFdBQVcsRUFBRTtJQUNyQyxxQkFDRSw4REFBQ1AsaURBQU1BLENBQUNRLEdBQUc7UUFDVEMsU0FBUztZQUFFQyxTQUFTO1FBQUU7UUFDdEJDLFNBQVM7WUFBRUQsU0FBUztRQUFFO1FBQ3RCRSxNQUFNO1lBQUVGLFNBQVM7UUFBRTtRQUNuQkcsWUFBWTtZQUFFQyxVQUFVO1FBQUU7a0JBRTFCLDRFQUFDTjtZQUFJTyxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQUdELFdBQVU7OEJBQWlEOzs7Ozs7OEJBRy9ELDhEQUFDRTtvQkFBRUYsV0FBVTs4QkFBMkM7Ozs7Ozs4QkFHeEQsOERBQUNQO29CQUFJTyxXQUFVOzhCQUNiLDRFQUFDUDt3QkFBSU8sV0FBVTttQ0FDWlQsWUFBQUEsS0FBS1ksR0FBRyxjQUFSWixnQ0FBQUEsZUFBQUEsTUFBVyxDQUFDYSxTQUFTQyxzQkFDcEIsOERBQUNsQixrREFBSUE7Z0NBQUNtQixNQUFNRixDQUFBQSxvQkFBQUEsOEJBQUFBLFFBQVNHLFFBQVEsS0FBSTswQ0FDL0IsNEVBQUNkO29DQUVDTyxXQUFVOzhDQUVWLDRFQUFDUDt3Q0FBSU8sV0FBVTtrREFDYiw0RUFBQ1A7NENBQUlPLFdBQVU7c0RBQ2IsNEVBQUNQO2dEQUFJTyxXQUFVOztrRUFDYiw4REFBQ1osbURBQUtBO3dEQUNKb0IsR0FBRyxFQUFFSixvQkFBQUEsOEJBQUFBLFFBQVNLLElBQUk7d0RBQ2xCQyxHQUFHLEVBQUVOLG9CQUFBQSw4QkFBQUEsUUFBU08sSUFBSTt3REFDbEJDLE9BQU87d0RBQ1BDLFFBQVE7d0RBQ1JiLFdBQVU7Ozs7OztrRUFFWiw4REFBQ1A7d0RBQUlPLFdBQVU7OzBFQUNiLDhEQUFDRTtnRUFBRUYsV0FBVTswRUFDVkksb0JBQUFBLDhCQUFBQSxRQUFTTyxJQUFJOzs7Ozs7MEVBRWhCLDhEQUFDVDtnRUFBRUYsV0FBVTswRUFDVkksb0JBQUFBLDhCQUFBQSxRQUFTVSxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21DQWxCMUJUOzs7OzsrQkFGa0NBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtDekQ7S0F0RHdCZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcHJvamVjdHMuanN4PzY5ZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlUHJlc2VuY2UgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgc3dyIGZyb20gXCIuLi9saWIvc3dyXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RzKCkge1xyXG4gIGNvbnN0IHsgZGF0YTogcHJvamVjdHMgfSA9IHN3cihcIi9hcGkvdjEvcHJvamVjdFwiKTtcclxuICBjb25zdCBkYXRhID0gcHJvamVjdHMgPyBwcm9qZWN0cyA6IFtdO1xyXG4gIHJldHVybiAoXHJcbiAgICA8bW90aW9uLmRpdlxyXG4gICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cclxuICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19XHJcbiAgICAgIGV4aXQ9e3sgb3BhY2l0eTogMCB9fVxyXG4gICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAxIH19XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG10LTIwIG1iLTEwIHAtNFwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgIHRleHQtYmxhY2sgZGFyazp0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICBQcm9qZWN0c1xyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiIHRleHQtYmxhY2sgZGFyazp0ZXh0LXdoaXRlIG10LTMgdGV4dC1sZ1wiPlxyXG4gICAgICAgICAgSGVyZSBhcmUgc29tZSBvZiBteSBwcm9qZWN0cy5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgZ2FwLTQgbXQtMTBcIj5cclxuICAgICAgICAgICAge2RhdGEubWFwPy4oKHByb2plY3QsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvamVjdD8uaHRtbF91cmwgfHwgXCIjXCJ9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItWzJweF0gYm9yZGVyLVsjZTJlM2U1XSBkYXJrOmJvcmRlci1bIzFhMWExY10gICBiZy1bI2ZhZmNmYl0gZGFyazpiZy1bIzE1MTUxNl0gaG92ZXI6c2NhbGUtWzEuMDVdIHJvdW5kZWQtbWQgIGN1cnNvci1wb2ludGVyIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBzaGFkb3ctMnhsIFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGl0ZW1zLWNlbnRlciBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9qZWN0Py5saW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17cHJvamVjdD8ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjUwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIgdGV4dC1iYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtYmxhY2sgZGFyazp0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvamVjdD8ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ibGFjayBkYXJrOnRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0Py5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbW90aW9uLmRpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJtb3Rpb24iLCJBbmltYXRlUHJlc2VuY2UiLCJMaW5rIiwiSW1hZ2UiLCJzd3IiLCJQcm9qZWN0cyIsImRhdGEiLCJwcm9qZWN0cyIsImRpdiIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsImV4aXQiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJjbGFzc05hbWUiLCJoMSIsInAiLCJtYXAiLCJwcm9qZWN0IiwiaW5kZXgiLCJocmVmIiwiaHRtbF91cmwiLCJzcmMiLCJsaW5rIiwiYWx0IiwibmFtZSIsIndpZHRoIiwiaGVpZ2h0IiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/projects.jsx\n"));

/***/ })

});