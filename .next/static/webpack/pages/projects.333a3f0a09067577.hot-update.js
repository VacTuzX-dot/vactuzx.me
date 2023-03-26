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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Projects; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/swr */ \"./src/lib/swr.jsx\");\n\n\n\n\n\nfunction Projects() {\n    var _this = this;\n    var ref;\n    var ref1 = (0,_lib_swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"/api/v1/project\"), projects = ref1.data;\n    var data = projects ? projects : [];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n        initial: {\n            opacity: 0\n        },\n        animate: {\n            opacity: 1\n        },\n        exit: {\n            opacity: 0\n        },\n        transition: {\n            duration: 1\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \" mt-10 mb-10 p-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-3xl font-bold text-black dark:text-white\",\n                    children: \"Projects\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Coding Project\\\\WORKSTATION\\\\Portfolio\\\\src\\\\pages\\\\projects.jsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \" text-black dark:text-white mt-3\",\n                    children: \"Here are some of my projects.\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Coding Project\\\\WORKSTATION\\\\Portfolio\\\\src\\\\pages\\\\projects.jsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10\",\n                        children: (ref = data.map) === null || ref === void 0 ? void 0 : ref.call(data, function(project, index) {\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: (project === null || project === void 0 ? void 0 : project.html_url) || \"#\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"border-[1px] border-[#e2e3e5] dark:border-[#1a1a1c] bg-[#fafcfb] dark:bg-[#151516] hover:scale-[1.02] rounded-md cursor-pointer transition-all duration-200 shadow-2xl\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"p-5\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex justify-between items-center\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \" items-center\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                        src: project === null || project === void 0 ? void 0 : project.link,\n                                                        alt: project === null || project === void 0 ? void 0 : project.name,\n                                                        width: 400,\n                                                        height: 200,\n                                                        className: \"rounded-md\"\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\Coding Project\\\\WORKSTATION\\\\Portfolio\\\\src\\\\pages\\\\projects.jsx\",\n                                                        lineNumber: 34,\n                                                        columnNumber: 23\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"text-sm mt-2\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                className: \"font-bold text-black dark:text-white\",\n                                                                children: project === null || project === void 0 ? void 0 : project.name\n                                                            }, void 0, false, {\n                                                                fileName: \"D:\\\\Coding Project\\\\WORKSTATION\\\\Portfolio\\\\src\\\\pages\\\\projects.jsx\",\n                                                                lineNumber: 42,\n                                                                columnNumber: 25\n                                                            }, _this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                className: \"text-black dark:text-white\",\n                                                                children: project === null || project === void 0 ? void 0 : project.description\n                                                            }, void 0, false, {\n                                                                fileName: \"D:\\\\Coding Project\\\\WORKSTATION\\\\Portfolio\\\\src\\\\pages\\\\projects.jsx\",\n                                                                lineNumber: 45,\n                                                                columnNumber: 25\n                                                            }, _this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"D:\\\\Coding Project\\\\WORKSTATION\\\\Portfolio\\\\src\\\\pages\\\\projects.jsx\",\n                                                        lineNumber: 41,\n                                                        columnNumber: 23\n                                                    }, _this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"D:\\\\Coding Project\\\\WORKSTATION\\\\Portfolio\\\\src\\\\pages\\\\projects.jsx\",\n                                                lineNumber: 32,\n                                                columnNumber: 21\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Coding Project\\\\WORKSTATION\\\\Portfolio\\\\src\\\\pages\\\\projects.jsx\",\n                                            lineNumber: 31,\n                                            columnNumber: 19\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Coding Project\\\\WORKSTATION\\\\Portfolio\\\\src\\\\pages\\\\projects.jsx\",\n                                        lineNumber: 30,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, index, false, {\n                                    fileName: \"D:\\\\Coding Project\\\\WORKSTATION\\\\Portfolio\\\\src\\\\pages\\\\projects.jsx\",\n                                    lineNumber: 26,\n                                    columnNumber: 15\n                                }, _this)\n                            }, index, false, {\n                                fileName: \"D:\\\\Coding Project\\\\WORKSTATION\\\\Portfolio\\\\src\\\\pages\\\\projects.jsx\",\n                                lineNumber: 25,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Coding Project\\\\WORKSTATION\\\\Portfolio\\\\src\\\\pages\\\\projects.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Coding Project\\\\WORKSTATION\\\\Portfolio\\\\src\\\\pages\\\\projects.jsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Coding Project\\\\WORKSTATION\\\\Portfolio\\\\src\\\\pages\\\\projects.jsx\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Coding Project\\\\WORKSTATION\\\\Portfolio\\\\src\\\\pages\\\\projects.jsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n_c = Projects;\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFDRTs7Ozs7d0JBQ0Y7Ozs7OztnQkFDRjs7Ozs7WUFDSyxDQUNiO0FBQ0osQ0FBQztBQXZEdUJmLEtBQUFBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2plY3RzLmpzeD82OWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHN3ciBmcm9tIFwiLi4vbGliL3N3clwiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0cygpIHtcclxuICBjb25zdCB7IGRhdGE6IHByb2plY3RzIH0gPSBzd3IoXCIvYXBpL3YxL3Byb2plY3RcIik7XHJcbiAgY29uc3QgZGF0YSA9IHByb2plY3RzID8gcHJvamVjdHMgOiBbXTtcclxuICByZXR1cm4gKFxyXG4gICAgPG1vdGlvbi5kaXZcclxuICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XHJcbiAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxyXG4gICAgICBleGl0PXt7IG9wYWNpdHk6IDAgfX1cclxuICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMSB9fVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBtdC0xMCBtYi0xMCBwLTRcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkICB0ZXh0LWJsYWNrIGRhcms6dGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgUHJvamVjdHNcclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIiB0ZXh0LWJsYWNrIGRhcms6dGV4dC13aGl0ZSBtdC0zXCI+XHJcbiAgICAgICAgICBIZXJlIGFyZSBzb21lIG9mIG15IHByb2plY3RzLlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBnYXAtNCBtdC0xMFwiPlxyXG4gICAgICAgICAgICB7ZGF0YS5tYXA/LigocHJvamVjdCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8TGluayBocmVmPXtwcm9qZWN0Py5odG1sX3VybCB8fCBcIiNcIiB9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItWzFweF0gYm9yZGVyLVsjZTJlM2U1XSBkYXJrOmJvcmRlci1bIzFhMWExY10gICBiZy1bI2ZhZmNmYl0gZGFyazpiZy1bIzE1MTUxNl0gaG92ZXI6c2NhbGUtWzEuMDJdIHJvdW5kZWQtbWQgIGN1cnNvci1wb2ludGVyIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMCBzaGFkb3ctMnhsXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNVwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2plY3Q/Lmxpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17cHJvamVjdD8ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezQwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSBtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWJsYWNrIGRhcms6dGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0Py5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmxhY2sgZGFyazp0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2plY3Q/LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9tb3Rpb24uZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6WyJtb3Rpb24iLCJBbmltYXRlUHJlc2VuY2UiLCJMaW5rIiwiSW1hZ2UiLCJzd3IiLCJQcm9qZWN0cyIsImRhdGEiLCJwcm9qZWN0cyIsImRpdiIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsImV4aXQiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJjbGFzc05hbWUiLCJoMSIsInAiLCJtYXAiLCJwcm9qZWN0IiwiaW5kZXgiLCJocmVmIiwiaHRtbF91cmwiLCJzcmMiLCJsaW5rIiwiYWx0IiwibmFtZSIsIndpZHRoIiwiaGVpZ2h0IiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/projects.jsx\n"));

/***/ })

});