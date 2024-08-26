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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Projects; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/swr */ \"./src/lib/swr.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n// Component to handle the description with Read More functionality\nconst ProjectDescription = (param)=>{\n    let { description } = param;\n    _s();\n    const [isExpanded, setIsExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const toggleExpand = ()=>{\n        setIsExpanded(!isExpanded);\n    };\n    const maxLength = 150; // Length of the description to show initially\n    const isLong = description.length > maxLength;\n    const shortDescription = isLong ? \"\".concat(description.slice(0, maxLength), \"...\") : description;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-black dark:text-white\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"text-black dark:text-white\",\n            children: [\n                isExpanded ? description : shortDescription,\n                isLong && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: toggleExpand,\n                    className: \"text-blue-500 dark:text-blue-300 ml-2\",\n                    children: isExpanded ? \"Read Less\" : \"Read More\"\n                }, void 0, false, {\n                    fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                    lineNumber: 26,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProjectDescription, \"FPNvbbHVlWWR4LKxxNntSxiIS38=\");\n_c = ProjectDescription;\nfunction Projects() {\n    var _data_map;\n    const { data: projects } = (0,_lib_swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"/api/v1/project\");\n    const data = projects ? projects : [];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n        initial: {\n            opacity: 0\n        },\n        animate: {\n            opacity: 1\n        },\n        exit: {\n            opacity: 0\n        },\n        transition: {\n            duration: 1\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mt-20 mb-10 p-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-3xl font-bold text-black dark:text-white\",\n                    children: \"Projects\"\n                }, void 0, false, {\n                    fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-black dark:text-white mt-3 text-lg\",\n                    children: \"Here are some of my projects.\"\n                }, void 0, false, {\n                    fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10\",\n                        children: (_data_map = data.map) === null || _data_map === void 0 ? void 0 : _data_map.call(data, (project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"border-[2px] border-[#e2e3e5] dark:border-[#1a1a1c] bg-[#fafcfb] dark:bg-[#151516] hover:scale-[1.05] rounded-md  transition-all duration-300 shadow-2xl\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: (project === null || project === void 0 ? void 0 : project.html_url) || \"#\",\n                                        target: \"_blank\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            src: project === null || project === void 0 ? void 0 : project.link,\n                                            alt: project === null || project === void 0 ? void 0 : project.name,\n                                            width: 400,\n                                            height: 250,\n                                            className: \"rounded-md cursor-pointer\"\n                                        }, void 0, false, {\n                                            fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                            lineNumber: 64,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"p-3\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex justify-between items-center\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"items-center\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"mt-2 text-base\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                            className: \"font-bold text-black dark:text-white\",\n                                                            children: project === null || project === void 0 ? void 0 : project.name\n                                                        }, void 0, false, {\n                                                            fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                                            lineNumber: 76,\n                                                            columnNumber: 25\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProjectDescription, {\n                                                            description: project === null || project === void 0 ? void 0 : project.description\n                                                        }, void 0, false, {\n                                                            fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                                            lineNumber: 79,\n                                                            columnNumber: 25\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                                    lineNumber: 75,\n                                                    columnNumber: 23\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                                lineNumber: 74,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                            lineNumber: 73,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, index, true, {\n                                fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                lineNumber: 59,\n                                columnNumber: 15\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Projects;\nvar _c, _c1;\n$RefreshReg$(_c, \"ProjectDescription\");\n$RefreshReg$(_c1, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvamVjdHMuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDVjtBQUNFO0FBQ0Y7QUFDSTtBQUVqQyxtRUFBbUU7QUFDbkUsTUFBTUsscUJBQXFCO1FBQUMsRUFBRUMsV0FBVyxFQUFFOztJQUN6QyxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR0osK0NBQVFBLENBQUM7SUFFN0MsTUFBTUssZUFBZTtRQUNuQkQsY0FBYyxDQUFDRDtJQUNqQjtJQUVBLE1BQU1HLFlBQVksS0FBSyw4Q0FBOEM7SUFDckUsTUFBTUMsU0FBU0wsWUFBWU0sTUFBTSxHQUFHRjtJQUNwQyxNQUFNRyxtQkFBbUJGLFNBQ3JCLEdBQW1DLE9BQWhDTCxZQUFZUSxLQUFLLENBQUMsR0FBR0osWUFBVyxTQUNuQ0o7SUFFSixxQkFDRSw4REFBQ1M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0M7WUFBRUQsV0FBVTs7Z0JBQ1ZULGFBQWFELGNBQWNPO2dCQUMzQkYsd0JBQ0MsOERBQUNPO29CQUNDQyxTQUFTVjtvQkFDVE8sV0FBVTs4QkFFVFQsYUFBYSxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7OztBQU14QztHQTVCTUY7S0FBQUE7QUE4QlMsU0FBU2U7UUFvQlhDO0lBbkJYLE1BQU0sRUFBRUEsTUFBTUMsUUFBUSxFQUFFLEdBQUduQixvREFBR0EsQ0FBQztJQUMvQixNQUFNa0IsT0FBT0MsV0FBV0EsV0FBVyxFQUFFO0lBRXJDLHFCQUNFLDhEQUFDdEIsaURBQU1BLENBQUNlLEdBQUc7UUFDVFEsU0FBUztZQUFFQyxTQUFTO1FBQUU7UUFDdEJDLFNBQVM7WUFBRUQsU0FBUztRQUFFO1FBQ3RCRSxNQUFNO1lBQUVGLFNBQVM7UUFBRTtRQUNuQkcsWUFBWTtZQUFFQyxVQUFVO1FBQUU7a0JBRTFCLDRFQUFDYjtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ2E7b0JBQUdiLFdBQVU7OEJBQWdEOzs7Ozs7OEJBRzlELDhEQUFDQztvQkFBRUQsV0FBVTs4QkFBMEM7Ozs7Ozs4QkFHdkQsOERBQUNEO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDRDt3QkFBSUMsV0FBVTttQ0FDWkssWUFBQUEsS0FBS1MsR0FBRyxjQUFSVCxnQ0FBQUEsZUFBQUEsTUFBVyxDQUFDVSxTQUFTQyxzQkFDcEIsOERBQUNqQjtnQ0FFQ0MsV0FBVTs7a0RBRVYsOERBQUNmLGtEQUFJQTt3Q0FBQ2dDLE1BQU1GLENBQUFBLG9CQUFBQSw4QkFBQUEsUUFBU0csUUFBUSxLQUFJO3dDQUFLQyxRQUFPO2tEQUMzQyw0RUFBQ2pDLG1EQUFLQTs0Q0FDSmtDLEdBQUcsRUFBRUwsb0JBQUFBLDhCQUFBQSxRQUFTTSxJQUFJOzRDQUNsQkMsR0FBRyxFQUFFUCxvQkFBQUEsOEJBQUFBLFFBQVNRLElBQUk7NENBQ2xCQyxPQUFPOzRDQUNQQyxRQUFROzRDQUNSekIsV0FBVTs7Ozs7Ozs7Ozs7a0RBR2QsOERBQUNEO3dDQUFJQyxXQUFVO2tEQUNiLDRFQUFDRDs0Q0FBSUMsV0FBVTtzREFDYiw0RUFBQ0Q7Z0RBQUlDLFdBQVU7MERBQ2IsNEVBQUNEO29EQUFJQyxXQUFVOztzRUFDYiw4REFBQ0M7NERBQUVELFdBQVU7c0VBQ1ZlLG9CQUFBQSw4QkFBQUEsUUFBU1EsSUFBSTs7Ozs7O3NFQUVoQiw4REFBQ2xDOzREQUNDQyxXQUFXLEVBQUV5QixvQkFBQUEsOEJBQUFBLFFBQVN6QixXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytCQXBCdEMwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQ3JCO01BdkR3QloiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2plY3RzLmpzeD82OWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBzd3IgZnJvbSBcIi4uL2xpYi9zd3JcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIENvbXBvbmVudCB0byBoYW5kbGUgdGhlIGRlc2NyaXB0aW9uIHdpdGggUmVhZCBNb3JlIGZ1bmN0aW9uYWxpdHlcclxuY29uc3QgUHJvamVjdERlc2NyaXB0aW9uID0gKHsgZGVzY3JpcHRpb24gfSkgPT4ge1xyXG4gIGNvbnN0IFtpc0V4cGFuZGVkLCBzZXRJc0V4cGFuZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlRXhwYW5kID0gKCkgPT4ge1xyXG4gICAgc2V0SXNFeHBhbmRlZCghaXNFeHBhbmRlZCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbWF4TGVuZ3RoID0gMTUwOyAvLyBMZW5ndGggb2YgdGhlIGRlc2NyaXB0aW9uIHRvIHNob3cgaW5pdGlhbGx5XHJcbiAgY29uc3QgaXNMb25nID0gZGVzY3JpcHRpb24ubGVuZ3RoID4gbWF4TGVuZ3RoO1xyXG4gIGNvbnN0IHNob3J0RGVzY3JpcHRpb24gPSBpc0xvbmdcclxuICAgID8gYCR7ZGVzY3JpcHRpb24uc2xpY2UoMCwgbWF4TGVuZ3RoKX0uLi5gXHJcbiAgICA6IGRlc2NyaXB0aW9uO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrIGRhcms6dGV4dC13aGl0ZVwiPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrIGRhcms6dGV4dC13aGl0ZVwiPlxyXG4gICAgICAgIHtpc0V4cGFuZGVkID8gZGVzY3JpcHRpb24gOiBzaG9ydERlc2NyaXB0aW9ufVxyXG4gICAgICAgIHtpc0xvbmcgJiYgKFxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVFeHBhbmR9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDAgZGFyazp0ZXh0LWJsdWUtMzAwIG1sLTJcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7aXNFeHBhbmRlZCA/IFwiUmVhZCBMZXNzXCIgOiBcIlJlYWQgTW9yZVwifVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RzKCkge1xyXG4gIGNvbnN0IHsgZGF0YTogcHJvamVjdHMgfSA9IHN3cihcIi9hcGkvdjEvcHJvamVjdFwiKTtcclxuICBjb25zdCBkYXRhID0gcHJvamVjdHMgPyBwcm9qZWN0cyA6IFtdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG1vdGlvbi5kaXZcclxuICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XHJcbiAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxyXG4gICAgICBleGl0PXt7IG9wYWNpdHk6IDAgfX1cclxuICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMSB9fVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIwIG1iLTEwIHAtNFwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1ibGFjayBkYXJrOnRleHQtd2hpdGVcIj5cclxuICAgICAgICAgIFByb2plY3RzXHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrIGRhcms6dGV4dC13aGl0ZSBtdC0zIHRleHQtbGdcIj5cclxuICAgICAgICAgIEhlcmUgYXJlIHNvbWUgb2YgbXkgcHJvamVjdHMuXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdhcC00IG10LTEwXCI+XHJcbiAgICAgICAgICAgIHtkYXRhLm1hcD8uKChwcm9qZWN0LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItWzJweF0gYm9yZGVyLVsjZTJlM2U1XSBkYXJrOmJvcmRlci1bIzFhMWExY10gYmctWyNmYWZjZmJdIGRhcms6YmctWyMxNTE1MTZdIGhvdmVyOnNjYWxlLVsxLjA1XSByb3VuZGVkLW1kICB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgc2hhZG93LTJ4bFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvamVjdD8uaHRtbF91cmwgfHwgXCIjXCJ9IHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2plY3Q/Lmxpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PXtwcm9qZWN0Py5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXs0MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyNTB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1tZCBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIgdGV4dC1iYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWJsYWNrIGRhcms6dGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0Py5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9qZWN0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17cHJvamVjdD8uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L21vdGlvbi5kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsibW90aW9uIiwiTGluayIsIkltYWdlIiwic3dyIiwidXNlU3RhdGUiLCJQcm9qZWN0RGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbiIsImlzRXhwYW5kZWQiLCJzZXRJc0V4cGFuZGVkIiwidG9nZ2xlRXhwYW5kIiwibWF4TGVuZ3RoIiwiaXNMb25nIiwibGVuZ3RoIiwic2hvcnREZXNjcmlwdGlvbiIsInNsaWNlIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJQcm9qZWN0cyIsImRhdGEiLCJwcm9qZWN0cyIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsImV4aXQiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJoMSIsIm1hcCIsInByb2plY3QiLCJpbmRleCIsImhyZWYiLCJodG1sX3VybCIsInRhcmdldCIsInNyYyIsImxpbmsiLCJhbHQiLCJuYW1lIiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/projects.jsx\n"));

/***/ })

});