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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Projects; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/swr */ \"./src/lib/swr.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n// Component to handle the description with Read More functionality\nconst ProjectDescription = (param)=>{\n    let { description } = param;\n    _s();\n    const [isExpanded, setIsExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const toggleExpand = ()=>{\n        setIsExpanded(!isExpanded);\n    };\n    const maxLength = 100;\n    const isLong = description.length > maxLength;\n    const shortDescription = isLong ? \"\".concat(description.slice(0, maxLength), \"...\") : description;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-black dark:text-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card-content \".concat(isExpanded ? \"expanded\" : \"\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-black dark:text-white\",\n                    children: isExpanded ? description : shortDescription\n                }, void 0, false, {\n                    fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            isLong && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: toggleExpand,\n                className: \"text-blue-500 dark:text-blue-300 mt-2\",\n                children: isExpanded ? \"Read Less\" : \"Read More\"\n            }, void 0, false, {\n                fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProjectDescription, \"FPNvbbHVlWWR4LKxxNntSxiIS38=\");\n_c = ProjectDescription;\nfunction Projects() {\n    var _data_map;\n    const { data: projects } = (0,_lib_swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"/api/v1/project\");\n    const data = projects ? projects : [];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n        initial: {\n            opacity: 0\n        },\n        animate: {\n            opacity: 1\n        },\n        exit: {\n            opacity: 0\n        },\n        transition: {\n            duration: 1\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mt-20 mb-10 p-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-3xl font-bold text-black dark:text-white\",\n                    children: \"Projects\"\n                }, void 0, false, {\n                    fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-black dark:text-white mt-3 text-lg\",\n                    children: \"Here are some of my projects.\"\n                }, void 0, false, {\n                    fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10\",\n                        children: (_data_map = data.map) === null || _data_map === void 0 ? void 0 : _data_map.call(data, (project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"border-[2px] border-[#e2e3e5] dark:border-[#1a1a1c] bg-[#fafcfb] dark:bg-[#151516] hover:scale-[1.05] rounded-md transition-all duration-300 shadow-2xl\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: (project === null || project === void 0 ? void 0 : project.html_url) || \"#\",\n                                        target: \"_blank\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                src: project === null || project === void 0 ? void 0 : project.link,\n                                                alt: project === null || project === void 0 ? void 0 : project.name,\n                                                width: 400,\n                                                height: 250,\n                                                className: \"rounded-md cursor-pointer\"\n                                            }, void 0, false, {\n                                                fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                                lineNumber: 67,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                            lineNumber: 66,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"p-3\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex justify-between items-center\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"items-center\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"mt-2 text-base\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                            className: \"font-bold text-black dark:text-white\",\n                                                            children: project === null || project === void 0 ? void 0 : project.name\n                                                        }, void 0, false, {\n                                                            fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                                            lineNumber: 80,\n                                                            columnNumber: 25\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProjectDescription, {\n                                                            description: project === null || project === void 0 ? void 0 : project.description\n                                                        }, void 0, false, {\n                                                            fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                                            lineNumber: 83,\n                                                            columnNumber: 25\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                                    lineNumber: 79,\n                                                    columnNumber: 23\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                                lineNumber: 78,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                            lineNumber: 77,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, index, true, {\n                                fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                lineNumber: 61,\n                                columnNumber: 15\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n            lineNumber: 51,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Projects;\nvar _c, _c1;\n$RefreshReg$(_c, \"ProjectDescription\");\n$RefreshReg$(_c1, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvamVjdHMuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDVjtBQUNFO0FBQ0Y7QUFDSTtBQUVqQyxtRUFBbUU7QUFDbkUsTUFBTUsscUJBQXFCO1FBQUMsRUFBRUMsV0FBVyxFQUFFOztJQUN6QyxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR0osK0NBQVFBLENBQUM7SUFFN0MsTUFBTUssZUFBZTtRQUNuQkQsY0FBYyxDQUFDRDtJQUNqQjtJQUVBLE1BQU1HLFlBQVk7SUFDbEIsTUFBTUMsU0FBU0wsWUFBWU0sTUFBTSxHQUFHRjtJQUNwQyxNQUFNRyxtQkFBbUJGLFNBQ3JCLEdBQW1DLE9BQWhDTCxZQUFZUSxLQUFLLENBQUMsR0FBR0osWUFBVyxTQUNuQ0o7SUFFSixxQkFDRSw4REFBQ1M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFXLGdCQUE2QyxPQUE3QlQsYUFBYSxhQUFhOzBCQUN4RCw0RUFBQ1U7b0JBQUVELFdBQVU7OEJBQ1ZULGFBQWFELGNBQWNPOzs7Ozs7Ozs7OztZQUcvQkYsd0JBQ0MsOERBQUNPO2dCQUNDQyxTQUFTVjtnQkFDVE8sV0FBVTswQkFFVFQsYUFBYSxjQUFjOzs7Ozs7Ozs7Ozs7QUFLdEM7R0E5Qk1GO0tBQUFBO0FBZ0NTLFNBQVNlO1FBb0JYQztJQW5CWCxNQUFNLEVBQUVBLE1BQU1DLFFBQVEsRUFBRSxHQUFHbkIsb0RBQUdBLENBQUM7SUFDL0IsTUFBTWtCLE9BQU9DLFdBQVdBLFdBQVcsRUFBRTtJQUVyQyxxQkFDRSw4REFBQ3RCLGlEQUFNQSxDQUFDZSxHQUFHO1FBQ1RRLFNBQVM7WUFBRUMsU0FBUztRQUFFO1FBQ3RCQyxTQUFTO1lBQUVELFNBQVM7UUFBRTtRQUN0QkUsTUFBTTtZQUFFRixTQUFTO1FBQUU7UUFDbkJHLFlBQVk7WUFBRUMsVUFBVTtRQUFFO2tCQUUxQiw0RUFBQ2I7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNhO29CQUFHYixXQUFVOzhCQUFnRDs7Ozs7OzhCQUc5RCw4REFBQ0M7b0JBQUVELFdBQVU7OEJBQTBDOzs7Ozs7OEJBR3ZELDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0Q7d0JBQUlDLFdBQVU7bUNBQ1pLLFlBQUFBLEtBQUtTLEdBQUcsY0FBUlQsZ0NBQUFBLGVBQUFBLE1BQVcsQ0FBQ1UsU0FBU0Msc0JBQ3BCLDhEQUFDakI7Z0NBRUNDLFdBQVU7O2tEQUVWLDhEQUFDZixrREFBSUE7d0NBQUNnQyxNQUFNRixDQUFBQSxvQkFBQUEsOEJBQUFBLFFBQVNHLFFBQVEsS0FBSTt3Q0FBS0MsUUFBTztrREFDM0MsNEVBQUNDO3NEQUNDLDRFQUFDbEMsbURBQUtBO2dEQUNKbUMsR0FBRyxFQUFFTixvQkFBQUEsOEJBQUFBLFFBQVNPLElBQUk7Z0RBQ2xCQyxHQUFHLEVBQUVSLG9CQUFBQSw4QkFBQUEsUUFBU1MsSUFBSTtnREFDbEJDLE9BQU87Z0RBQ1BDLFFBQVE7Z0RBQ1IxQixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7O2tEQUloQiw4REFBQ0Q7d0NBQUlDLFdBQVU7a0RBQ2IsNEVBQUNEOzRDQUFJQyxXQUFVO3NEQUNiLDRFQUFDRDtnREFBSUMsV0FBVTswREFDYiw0RUFBQ0Q7b0RBQUlDLFdBQVU7O3NFQUNiLDhEQUFDQzs0REFBRUQsV0FBVTtzRUFDVmUsb0JBQUFBLDhCQUFBQSxRQUFTUyxJQUFJOzs7Ozs7c0VBRWhCLDhEQUFDbkM7NERBQ0NDLFdBQVcsRUFBRXlCLG9CQUFBQSw4QkFBQUEsUUFBU3pCLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0JBdEJ0QzBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1DckI7TUF6RHdCWiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcHJvamVjdHMuanN4PzY5ZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHN3ciBmcm9tIFwiLi4vbGliL3N3clwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy8gQ29tcG9uZW50IHRvIGhhbmRsZSB0aGUgZGVzY3JpcHRpb24gd2l0aCBSZWFkIE1vcmUgZnVuY3Rpb25hbGl0eVxyXG5jb25zdCBQcm9qZWN0RGVzY3JpcHRpb24gPSAoeyBkZXNjcmlwdGlvbiB9KSA9PiB7XHJcbiAgY29uc3QgW2lzRXhwYW5kZWQsIHNldElzRXhwYW5kZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCB0b2dnbGVFeHBhbmQgPSAoKSA9PiB7XHJcbiAgICBzZXRJc0V4cGFuZGVkKCFpc0V4cGFuZGVkKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBtYXhMZW5ndGggPSAxMDA7XHJcbiAgY29uc3QgaXNMb25nID0gZGVzY3JpcHRpb24ubGVuZ3RoID4gbWF4TGVuZ3RoO1xyXG4gIGNvbnN0IHNob3J0RGVzY3JpcHRpb24gPSBpc0xvbmdcclxuICAgID8gYCR7ZGVzY3JpcHRpb24uc2xpY2UoMCwgbWF4TGVuZ3RoKX0uLi5gXHJcbiAgICA6IGRlc2NyaXB0aW9uO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrIGRhcms6dGV4dC13aGl0ZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGNhcmQtY29udGVudCAke2lzRXhwYW5kZWQgPyBcImV4cGFuZGVkXCIgOiBcIlwifWB9PlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmxhY2sgZGFyazp0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICB7aXNFeHBhbmRlZCA/IGRlc2NyaXB0aW9uIDogc2hvcnREZXNjcmlwdGlvbn1cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7aXNMb25nICYmIChcclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVFeHBhbmR9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNTAwIGRhcms6dGV4dC1ibHVlLTMwMCBtdC0yXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICB7aXNFeHBhbmRlZCA/IFwiUmVhZCBMZXNzXCIgOiBcIlJlYWQgTW9yZVwifVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RzKCkge1xyXG4gIGNvbnN0IHsgZGF0YTogcHJvamVjdHMgfSA9IHN3cihcIi9hcGkvdjEvcHJvamVjdFwiKTtcclxuICBjb25zdCBkYXRhID0gcHJvamVjdHMgPyBwcm9qZWN0cyA6IFtdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG1vdGlvbi5kaXZcclxuICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XHJcbiAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxyXG4gICAgICBleGl0PXt7IG9wYWNpdHk6IDAgfX1cclxuICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMSB9fVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIwIG1iLTEwIHAtNFwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1ibGFjayBkYXJrOnRleHQtd2hpdGVcIj5cclxuICAgICAgICAgIFByb2plY3RzXHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrIGRhcms6dGV4dC13aGl0ZSBtdC0zIHRleHQtbGdcIj5cclxuICAgICAgICAgIEhlcmUgYXJlIHNvbWUgb2YgbXkgcHJvamVjdHMuXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdhcC00IG10LTEwXCI+XHJcbiAgICAgICAgICAgIHtkYXRhLm1hcD8uKChwcm9qZWN0LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItWzJweF0gYm9yZGVyLVsjZTJlM2U1XSBkYXJrOmJvcmRlci1bIzFhMWExY10gYmctWyNmYWZjZmJdIGRhcms6YmctWyMxNTE1MTZdIGhvdmVyOnNjYWxlLVsxLjA1XSByb3VuZGVkLW1kIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBzaGFkb3ctMnhsXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtwcm9qZWN0Py5odG1sX3VybCB8fCBcIiNcIn0gdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9qZWN0Py5saW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PXtwcm9qZWN0Py5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezQwMH1cclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjUwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1tZCBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTNcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yIHRleHQtYmFzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1ibGFjayBkYXJrOnRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvamVjdD8ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvamVjdERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3Byb2plY3Q/LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9tb3Rpb24uZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIm1vdGlvbiIsIkxpbmsiLCJJbWFnZSIsInN3ciIsInVzZVN0YXRlIiwiUHJvamVjdERlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb24iLCJpc0V4cGFuZGVkIiwic2V0SXNFeHBhbmRlZCIsInRvZ2dsZUV4cGFuZCIsIm1heExlbmd0aCIsImlzTG9uZyIsImxlbmd0aCIsInNob3J0RGVzY3JpcHRpb24iLCJzbGljZSIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJidXR0b24iLCJvbkNsaWNrIiwiUHJvamVjdHMiLCJkYXRhIiwicHJvamVjdHMiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJleGl0IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiaDEiLCJtYXAiLCJwcm9qZWN0IiwiaW5kZXgiLCJocmVmIiwiaHRtbF91cmwiLCJ0YXJnZXQiLCJhIiwic3JjIiwibGluayIsImFsdCIsIm5hbWUiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/projects.jsx\n"));

/***/ })

});