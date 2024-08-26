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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Projects; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/swr */ \"./src/lib/swr.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n// Component to handle the description with Read More functionality\nconst ProjectDescription = (param)=>{\n    let { description } = param;\n    _s();\n    const [isExpanded, setIsExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const toggleExpand = ()=>{\n        setIsExpanded(!isExpanded);\n    };\n    const shortDescription = description.slice(0, 100); // Display first 100 characters\n    const isLong = description.length > 100;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-black dark:text-white\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"text-black dark:text-white\",\n            children: [\n                isExpanded ? description : shortDescription,\n                isLong && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: toggleExpand,\n                    className: \"text-blue-500 dark:text-blue-300 ml-2\",\n                    children: isExpanded ? \"Read Less\" : \"Read More\"\n                }, void 0, false, {\n                    fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProjectDescription, \"FPNvbbHVlWWR4LKxxNntSxiIS38=\");\n_c = ProjectDescription;\nfunction Projects() {\n    var _data_map;\n    const { data: projects } = (0,_lib_swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"/api/v1/project\");\n    const data = projects ? projects : [];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n        initial: {\n            opacity: 0\n        },\n        animate: {\n            opacity: 1\n        },\n        exit: {\n            opacity: 0\n        },\n        transition: {\n            duration: 1\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mt-20 mb-10 p-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-3xl font-bold text-black dark:text-white\",\n                    children: \"Projects\"\n                }, void 0, false, {\n                    fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-black dark:text-white mt-3 text-lg\",\n                    children: \"Here are some of my projects.\"\n                }, void 0, false, {\n                    fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10\",\n                        children: (_data_map = data.map) === null || _data_map === void 0 ? void 0 : _data_map.call(data, (project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: (project === null || project === void 0 ? void 0 : project.html_url) || \"#\",\n                                target: \"_blank\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"border-[2px] border-[#e2e3e5] dark:border-[#1a1a1c] bg-[#fafcfb] dark:bg-[#151516] hover:scale-[1.05] rounded-md cursor-pointer transition-all duration-300 shadow-2xl\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"p-3\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex justify-between items-center\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"items-center\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                        src: project === null || project === void 0 ? void 0 : project.link,\n                                                        alt: project === null || project === void 0 ? void 0 : project.name,\n                                                        width: 400,\n                                                        height: 250,\n                                                        className: \"rounded-md\"\n                                                    }, void 0, false, {\n                                                        fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                                        lineNumber: 60,\n                                                        columnNumber: 25\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"mt-2 text-base\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                className: \"font-bold text-black dark:text-white\",\n                                                                children: project === null || project === void 0 ? void 0 : project.name\n                                                            }, void 0, false, {\n                                                                fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                                                lineNumber: 68,\n                                                                columnNumber: 27\n                                                            }, this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProjectDescription, {\n                                                                description: project === null || project === void 0 ? void 0 : project.description\n                                                            }, void 0, false, {\n                                                                fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                                                lineNumber: 69,\n                                                                columnNumber: 27\n                                                            }, this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                                        lineNumber: 67,\n                                                        columnNumber: 25\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                                lineNumber: 59,\n                                                columnNumber: 23\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 19\n                                    }, this)\n                                }, index, false, {\n                                    fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 17\n                                }, this)\n                            }, index, false, {\n                                fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                lineNumber: 52,\n                                columnNumber: 15\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Projects;\nvar _c, _c1;\n$RefreshReg$(_c, \"ProjectDescription\");\n$RefreshReg$(_c1, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvamVjdHMuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDVjtBQUNFO0FBQ0Y7QUFDSTtBQUVqQyxtRUFBbUU7QUFDbkUsTUFBTUsscUJBQXFCO1FBQUMsRUFBRUMsV0FBVyxFQUFFOztJQUN6QyxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR0osK0NBQVFBLENBQUM7SUFFN0MsTUFBTUssZUFBZTtRQUNuQkQsY0FBYyxDQUFDRDtJQUNqQjtJQUVBLE1BQU1HLG1CQUFtQkosWUFBWUssS0FBSyxDQUFDLEdBQUcsTUFBTSwrQkFBK0I7SUFDbkYsTUFBTUMsU0FBU04sWUFBWU8sTUFBTSxHQUFHO0lBRXBDLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDQztZQUFFRCxXQUFVOztnQkFDVlIsYUFBYUQsY0FBY0k7Z0JBQzNCRSx3QkFDQyw4REFBQ0s7b0JBQ0NDLFNBQVNUO29CQUNUTSxXQUFVOzhCQUVUUixhQUFhLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXhDO0dBekJNRjtLQUFBQTtBQTJCUyxTQUFTYztRQWdCWEM7SUFmWCxNQUFNLEVBQUVBLE1BQU1DLFFBQVEsRUFBRSxHQUFHbEIsb0RBQUdBLENBQUM7SUFDL0IsTUFBTWlCLE9BQU9DLFdBQVdBLFdBQVcsRUFBRTtJQUVyQyxxQkFDRSw4REFBQ3JCLGlEQUFNQSxDQUFDYyxHQUFHO1FBQ1RRLFNBQVM7WUFBRUMsU0FBUztRQUFFO1FBQ3RCQyxTQUFTO1lBQUVELFNBQVM7UUFBRTtRQUN0QkUsTUFBTTtZQUFFRixTQUFTO1FBQUU7UUFDbkJHLFlBQVk7WUFBRUMsVUFBVTtRQUFFO2tCQUUxQiw0RUFBQ2I7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNhO29CQUFHYixXQUFVOzhCQUFnRDs7Ozs7OzhCQUM5RCw4REFBQ0M7b0JBQUVELFdBQVU7OEJBQTBDOzs7Ozs7OEJBQ3ZELDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0Q7d0JBQUlDLFdBQVU7bUNBQ1pLLFlBQUFBLEtBQUtTLEdBQUcsY0FBUlQsZ0NBQUFBLGVBQUFBLE1BQVcsQ0FBQ1UsU0FBU0Msc0JBQ3BCLDhEQUFDOUIsa0RBQUlBO2dDQUFDK0IsTUFBTUYsQ0FBQUEsb0JBQUFBLDhCQUFBQSxRQUFTRyxRQUFRLEtBQUk7Z0NBQWlCQyxRQUFPOzBDQUN2RCw0RUFBQ3BCO29DQUVDQyxXQUFVOzhDQUVWLDRFQUFDRDt3Q0FBSUMsV0FBVTtrREFDYiw0RUFBQ0Q7NENBQUlDLFdBQVU7c0RBQ2IsNEVBQUNEO2dEQUFJQyxXQUFVOztrRUFDYiw4REFBQ2IsbURBQUtBO3dEQUNKaUMsR0FBRyxFQUFFTCxvQkFBQUEsOEJBQUFBLFFBQVNNLElBQUk7d0RBQ2xCQyxHQUFHLEVBQUVQLG9CQUFBQSw4QkFBQUEsUUFBU1EsSUFBSTt3REFDbEJDLE9BQU87d0RBQ1BDLFFBQVE7d0RBQ1J6QixXQUFVOzs7Ozs7a0VBRVosOERBQUNEO3dEQUFJQyxXQUFVOzswRUFDYiw4REFBQ0M7Z0VBQUVELFdBQVU7MEVBQXdDZSxvQkFBQUEsOEJBQUFBLFFBQVNRLElBQUk7Ozs7OzswRUFDbEUsOERBQUNqQztnRUFBbUJDLFdBQVcsRUFBRXdCLG9CQUFBQSw4QkFBQUEsUUFBU3hCLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBZnhEeUI7Ozs7OytCQUZrQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEJ6RDtNQS9Dd0JaIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wcm9qZWN0cy5qc3g/NjllNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgc3dyIGZyb20gXCIuLi9saWIvc3dyXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy8gQ29tcG9uZW50IHRvIGhhbmRsZSB0aGUgZGVzY3JpcHRpb24gd2l0aCBSZWFkIE1vcmUgZnVuY3Rpb25hbGl0eVxyXG5jb25zdCBQcm9qZWN0RGVzY3JpcHRpb24gPSAoeyBkZXNjcmlwdGlvbiB9KSA9PiB7XHJcbiAgY29uc3QgW2lzRXhwYW5kZWQsIHNldElzRXhwYW5kZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCB0b2dnbGVFeHBhbmQgPSAoKSA9PiB7XHJcbiAgICBzZXRJc0V4cGFuZGVkKCFpc0V4cGFuZGVkKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzaG9ydERlc2NyaXB0aW9uID0gZGVzY3JpcHRpb24uc2xpY2UoMCwgMTAwKTsgLy8gRGlzcGxheSBmaXJzdCAxMDAgY2hhcmFjdGVyc1xyXG4gIGNvbnN0IGlzTG9uZyA9IGRlc2NyaXB0aW9uLmxlbmd0aCA+IDEwMDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ibGFjayBkYXJrOnRleHQtd2hpdGVcIj5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ibGFjayBkYXJrOnRleHQtd2hpdGVcIj5cclxuICAgICAgICB7aXNFeHBhbmRlZCA/IGRlc2NyaXB0aW9uIDogc2hvcnREZXNjcmlwdGlvbn1cclxuICAgICAgICB7aXNMb25nICYmIChcclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlRXhwYW5kfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNTAwIGRhcms6dGV4dC1ibHVlLTMwMCBtbC0yXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2lzRXhwYW5kZWQgPyAnUmVhZCBMZXNzJyA6ICdSZWFkIE1vcmUnfVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RzKCkge1xyXG4gIGNvbnN0IHsgZGF0YTogcHJvamVjdHMgfSA9IHN3cihcIi9hcGkvdjEvcHJvamVjdFwiKTtcclxuICBjb25zdCBkYXRhID0gcHJvamVjdHMgPyBwcm9qZWN0cyA6IFtdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG1vdGlvbi5kaXZcclxuICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XHJcbiAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxyXG4gICAgICBleGl0PXt7IG9wYWNpdHk6IDAgfX1cclxuICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMSB9fVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIwIG1iLTEwIHAtNFwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1ibGFjayBkYXJrOnRleHQtd2hpdGVcIj5Qcm9qZWN0czwvaDE+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ibGFjayBkYXJrOnRleHQtd2hpdGUgbXQtMyB0ZXh0LWxnXCI+SGVyZSBhcmUgc29tZSBvZiBteSBwcm9qZWN0cy48L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgZ2FwLTQgbXQtMTBcIj5cclxuICAgICAgICAgICAge2RhdGEubWFwPy4oKHByb2plY3QsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvamVjdD8uaHRtbF91cmwgfHwgXCIjXCJ9IGtleT17aW5kZXh9IHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItWzJweF0gYm9yZGVyLVsjZTJlM2U1XSBkYXJrOmJvcmRlci1bIzFhMWExY10gYmctWyNmYWZjZmJdIGRhcms6YmctWyMxNTE1MTZdIGhvdmVyOnNjYWxlLVsxLjA1XSByb3VuZGVkLW1kIGN1cnNvci1wb2ludGVyIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBzaGFkb3ctMnhsXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9qZWN0Py5saW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17cHJvamVjdD8ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NDAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjUwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIgdGV4dC1iYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtYmxhY2sgZGFyazp0ZXh0LXdoaXRlXCI+e3Byb2plY3Q/Lm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9qZWN0RGVzY3JpcHRpb24gZGVzY3JpcHRpb249e3Byb2plY3Q/LmRlc2NyaXB0aW9ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L21vdGlvbi5kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsibW90aW9uIiwiTGluayIsIkltYWdlIiwic3dyIiwidXNlU3RhdGUiLCJQcm9qZWN0RGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbiIsImlzRXhwYW5kZWQiLCJzZXRJc0V4cGFuZGVkIiwidG9nZ2xlRXhwYW5kIiwic2hvcnREZXNjcmlwdGlvbiIsInNsaWNlIiwiaXNMb25nIiwibGVuZ3RoIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJQcm9qZWN0cyIsImRhdGEiLCJwcm9qZWN0cyIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsImV4aXQiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJoMSIsIm1hcCIsInByb2plY3QiLCJpbmRleCIsImhyZWYiLCJodG1sX3VybCIsInRhcmdldCIsInNyYyIsImxpbmsiLCJhbHQiLCJuYW1lIiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/projects.jsx\n"));

/***/ })

});