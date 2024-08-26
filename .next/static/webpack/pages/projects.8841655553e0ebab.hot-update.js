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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Projects; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/swr */ \"./src/lib/swr.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n// Component to handle the description with Read More functionality\nconst ProjectDescription = (param)=>{\n    let { description } = param;\n    _s();\n    const [isExpanded, setIsExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const toggleExpand = ()=>{\n        setIsExpanded(!isExpanded);\n    };\n    const shortDescription = description.slice(0, 100); // Display first 100 characters\n    const isLong = description.length > 100;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-black dark:text-white\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"text-black dark:text-white\",\n            children: [\n                isExpanded ? description : shortDescription,\n                isLong && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: toggleExpand,\n                    className: \"text-blue-500 dark:text-blue-300 ml-2\",\n                    children: isExpanded ? \"Read Less\" : \"Read More\"\n                }, void 0, false, {\n                    fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProjectDescription, \"FPNvbbHVlWWR4LKxxNntSxiIS38=\");\n_c = ProjectDescription;\nfunction Projects() {\n    var _data_map;\n    const { data: projects } = (0,_lib_swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"/api/v1/project\");\n    const data = projects ? projects : [];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n        initial: {\n            opacity: 0\n        },\n        animate: {\n            opacity: 1\n        },\n        exit: {\n            opacity: 0\n        },\n        transition: {\n            duration: 1\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mt-20 mb-10 p-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-3xl font-bold text-black dark:text-white\",\n                    children: \"Projects\"\n                }, void 0, false, {\n                    fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-black dark:text-white mt-3 text-lg\",\n                    children: \"Here are some of my projects.\"\n                }, void 0, false, {\n                    fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10\",\n                        children: (_data_map = data.map) === null || _data_map === void 0 ? void 0 : _data_map.call(data, (project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"border-[2px] border-[#e2e3e5] dark:border-[#1a1a1c] bg-[#fafcfb] dark:bg-[#151516] hover:scale-[1.05] rounded-md cursor-pointer transition-all duration-300 shadow-2xl\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"p-3\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex justify-between items-center\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"items-center\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                        href: (project === null || project === void 0 ? void 0 : project.html_url) || \"#\",\n                                                        src: project === null || project === void 0 ? void 0 : project.link,\n                                                        alt: project === null || project === void 0 ? void 0 : project.name,\n                                                        width: 400,\n                                                        height: 250,\n                                                        className: \"rounded-md\"\n                                                    }, void 0, false, {\n                                                        fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                                        lineNumber: 64,\n                                                        columnNumber: 25\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"mt-2 text-base\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                className: \"font-bold text-black dark:text-white\",\n                                                                children: project === null || project === void 0 ? void 0 : project.name\n                                                            }, void 0, false, {\n                                                                fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                                                lineNumber: 73,\n                                                                columnNumber: 27\n                                                            }, this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProjectDescription, {\n                                                                description: project === null || project === void 0 ? void 0 : project.description\n                                                            }, void 0, false, {\n                                                                fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                                                lineNumber: 76,\n                                                                columnNumber: 27\n                                                            }, this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                                        lineNumber: 72,\n                                                        columnNumber: 25\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                                lineNumber: 63,\n                                                columnNumber: 23\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                            lineNumber: 62,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 19\n                                    }, this)\n                                }, index, false, {\n                                    fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 17\n                                }, this)\n                            }, index, false, {\n                                fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                lineNumber: 56,\n                                columnNumber: 15\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Projects;\nvar _c, _c1;\n$RefreshReg$(_c, \"ProjectDescription\");\n$RefreshReg$(_c1, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvamVjdHMuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDVjtBQUNFO0FBQ0Y7QUFDSTtBQUVqQyxtRUFBbUU7QUFDbkUsTUFBTUsscUJBQXFCO1FBQUMsRUFBRUMsV0FBVyxFQUFFOztJQUN6QyxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR0osK0NBQVFBLENBQUM7SUFFN0MsTUFBTUssZUFBZTtRQUNuQkQsY0FBYyxDQUFDRDtJQUNqQjtJQUVBLE1BQU1HLG1CQUFtQkosWUFBWUssS0FBSyxDQUFDLEdBQUcsTUFBTSwrQkFBK0I7SUFDbkYsTUFBTUMsU0FBU04sWUFBWU8sTUFBTSxHQUFHO0lBRXBDLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDQztZQUFFRCxXQUFVOztnQkFDVlIsYUFBYUQsY0FBY0k7Z0JBQzNCRSx3QkFDQyw4REFBQ0s7b0JBQ0NDLFNBQVNUO29CQUNUTSxXQUFVOzhCQUVUUixhQUFhLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXhDO0dBekJNRjtLQUFBQTtBQTJCUyxTQUFTYztRQW9CWEM7SUFuQlgsTUFBTSxFQUFFQSxNQUFNQyxRQUFRLEVBQUUsR0FBR2xCLG9EQUFHQSxDQUFDO0lBQy9CLE1BQU1pQixPQUFPQyxXQUFXQSxXQUFXLEVBQUU7SUFFckMscUJBQ0UsOERBQUNyQixpREFBTUEsQ0FBQ2MsR0FBRztRQUNUUSxTQUFTO1lBQUVDLFNBQVM7UUFBRTtRQUN0QkMsU0FBUztZQUFFRCxTQUFTO1FBQUU7UUFDdEJFLE1BQU07WUFBRUYsU0FBUztRQUFFO1FBQ25CRyxZQUFZO1lBQUVDLFVBQVU7UUFBRTtrQkFFMUIsNEVBQUNiO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDYTtvQkFBR2IsV0FBVTs4QkFBZ0Q7Ozs7Ozs4QkFHOUQsOERBQUNDO29CQUFFRCxXQUFVOzhCQUEwQzs7Ozs7OzhCQUd2RCw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNEO3dCQUFJQyxXQUFVO21DQUNaSyxZQUFBQSxLQUFLUyxHQUFHLGNBQVJULGdDQUFBQSxlQUFBQSxNQUFXLENBQUNVLFNBQVNDLHNCQUNwQiw4REFBQzlCLGtEQUFJQTswQ0FDSCw0RUFBQ2E7b0NBRUNDLFdBQVU7OENBRVYsNEVBQUNEO3dDQUFJQyxXQUFVO2tEQUNiLDRFQUFDRDs0Q0FBSUMsV0FBVTtzREFDYiw0RUFBQ0Q7Z0RBQUlDLFdBQVU7O2tFQUNiLDhEQUFDYixtREFBS0E7d0RBQ0o4QixNQUFNRixDQUFBQSxvQkFBQUEsOEJBQUFBLFFBQVNHLFFBQVEsS0FBSTt3REFDM0JDLEdBQUcsRUFBRUosb0JBQUFBLDhCQUFBQSxRQUFTSyxJQUFJO3dEQUNsQkMsR0FBRyxFQUFFTixvQkFBQUEsOEJBQUFBLFFBQVNPLElBQUk7d0RBQ2xCQyxPQUFPO3dEQUNQQyxRQUFRO3dEQUNSeEIsV0FBVTs7Ozs7O2tFQUVaLDhEQUFDRDt3REFBSUMsV0FBVTs7MEVBQ2IsOERBQUNDO2dFQUFFRCxXQUFVOzBFQUNWZSxvQkFBQUEsOEJBQUFBLFFBQVNPLElBQUk7Ozs7OzswRUFFaEIsOERBQUNoQztnRUFDQ0MsV0FBVyxFQUFFd0Isb0JBQUFBLDhCQUFBQSxRQUFTeEIsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQ0FuQnRDeUI7Ozs7OytCQUZFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQ3pCO01BeER3QloiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2plY3RzLmpzeD82OWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBzd3IgZnJvbSBcIi4uL2xpYi9zd3JcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIENvbXBvbmVudCB0byBoYW5kbGUgdGhlIGRlc2NyaXB0aW9uIHdpdGggUmVhZCBNb3JlIGZ1bmN0aW9uYWxpdHlcclxuY29uc3QgUHJvamVjdERlc2NyaXB0aW9uID0gKHsgZGVzY3JpcHRpb24gfSkgPT4ge1xyXG4gIGNvbnN0IFtpc0V4cGFuZGVkLCBzZXRJc0V4cGFuZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlRXhwYW5kID0gKCkgPT4ge1xyXG4gICAgc2V0SXNFeHBhbmRlZCghaXNFeHBhbmRlZCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2hvcnREZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uLnNsaWNlKDAsIDEwMCk7IC8vIERpc3BsYXkgZmlyc3QgMTAwIGNoYXJhY3RlcnNcclxuICBjb25zdCBpc0xvbmcgPSBkZXNjcmlwdGlvbi5sZW5ndGggPiAxMDA7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYmxhY2sgZGFyazp0ZXh0LXdoaXRlXCI+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmxhY2sgZGFyazp0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAge2lzRXhwYW5kZWQgPyBkZXNjcmlwdGlvbiA6IHNob3J0RGVzY3JpcHRpb259XHJcbiAgICAgICAge2lzTG9uZyAmJiAoXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUV4cGFuZH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTUwMCBkYXJrOnRleHQtYmx1ZS0zMDAgbWwtMlwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtpc0V4cGFuZGVkID8gXCJSZWFkIExlc3NcIiA6IFwiUmVhZCBNb3JlXCJ9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApfVxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdHMoKSB7XHJcbiAgY29uc3QgeyBkYXRhOiBwcm9qZWN0cyB9ID0gc3dyKFwiL2FwaS92MS9wcm9qZWN0XCIpO1xyXG4gIGNvbnN0IGRhdGEgPSBwcm9qZWN0cyA/IHByb2plY3RzIDogW107XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bW90aW9uLmRpdlxyXG4gICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cclxuICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19XHJcbiAgICAgIGV4aXQ9e3sgb3BhY2l0eTogMCB9fVxyXG4gICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAxIH19XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMjAgbWItMTAgcC00XCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LWJsYWNrIGRhcms6dGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgUHJvamVjdHNcclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmxhY2sgZGFyazp0ZXh0LXdoaXRlIG10LTMgdGV4dC1sZ1wiPlxyXG4gICAgICAgICAgSGVyZSBhcmUgc29tZSBvZiBteSBwcm9qZWN0cy5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgZ2FwLTQgbXQtMTBcIj5cclxuICAgICAgICAgICAge2RhdGEubWFwPy4oKHByb2plY3QsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPExpbmsga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci1bMnB4XSBib3JkZXItWyNlMmUzZTVdIGRhcms6Ym9yZGVyLVsjMWExYTFjXSBiZy1bI2ZhZmNmYl0gZGFyazpiZy1bIzE1MTUxNl0gaG92ZXI6c2NhbGUtWzEuMDVdIHJvdW5kZWQtbWQgY3Vyc29yLXBvaW50ZXIgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIHNoYWRvdy0yeGxcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtwcm9qZWN0Py5odG1sX3VybCB8fCBcIiNcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2plY3Q/Lmxpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtwcm9qZWN0Py5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs0MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyNTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMiB0ZXh0LWJhc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1ibGFjayBkYXJrOnRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0Py5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvamVjdERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17cHJvamVjdD8uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9tb3Rpb24uZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIm1vdGlvbiIsIkxpbmsiLCJJbWFnZSIsInN3ciIsInVzZVN0YXRlIiwiUHJvamVjdERlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb24iLCJpc0V4cGFuZGVkIiwic2V0SXNFeHBhbmRlZCIsInRvZ2dsZUV4cGFuZCIsInNob3J0RGVzY3JpcHRpb24iLCJzbGljZSIsImlzTG9uZyIsImxlbmd0aCIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJidXR0b24iLCJvbkNsaWNrIiwiUHJvamVjdHMiLCJkYXRhIiwicHJvamVjdHMiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJleGl0IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiaDEiLCJtYXAiLCJwcm9qZWN0IiwiaW5kZXgiLCJocmVmIiwiaHRtbF91cmwiLCJzcmMiLCJsaW5rIiwiYWx0IiwibmFtZSIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/projects.jsx\n"));

/***/ })

});