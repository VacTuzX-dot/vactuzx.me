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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Projects; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/swr */ \"./src/lib/swr.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n// Component to handle the description with Read More functionality\nconst ProjectDescription = (param)=>{\n    let { description } = param;\n    _s();\n    const [isExpanded, setIsExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const toggleExpand = ()=>{\n        setIsExpanded(!isExpanded);\n    };\n    const maxLength = 100;\n    const isLong = description.length > maxLength;\n    const shortDescription = isLong ? \"\".concat(description.slice(0, maxLength), \"...\") : description;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-black dark:text-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card-content \".concat(isExpanded ? \"expanded\" : \"\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-black dark:text-white\",\n                    children: isExpanded ? description : shortDescription\n                }, void 0, false, {\n                    fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            isLong && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: toggleExpand,\n                className: \"text-blue-500 dark:text-blue-300 mt-2\",\n                children: isExpanded ? \"Read Less\" : \"Read More\"\n            }, void 0, false, {\n                fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProjectDescription, \"FPNvbbHVlWWR4LKxxNntSxiIS38=\");\n_c = ProjectDescription;\nfunction Projects() {\n    var _data_map, _data_map1;\n    const { data: projects } = (0,_lib_swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"/api/v1/project\");\n    const data = projects ? projects : [];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n        initial: {\n            opacity: 0\n        },\n        animate: {\n            opacity: 1\n        },\n        exit: {\n            opacity: 0\n        },\n        transition: {\n            duration: 1\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" mt-20 mb-10 p-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-3xl font-bold  text-black dark:text-white\",\n                        children: \"Projects\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \" text-black dark:text-white mt-3 text-lg\",\n                        children: \"Here are some of my projects.\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10\",\n                            children: (_data_map = data.map) === null || _data_map === void 0 ? void 0 : _data_map.call(data, (project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: (project === null || project === void 0 ? void 0 : project.html_url) || \"#\",\n                                    target: \"_blank\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"border-[2px] border-[#e2e3e5] dark:border-[#1a1a1c]   bg-[#fafcfb] dark:bg-[#151516] hover:scale-[1.05] rounded-md  cursor-pointer transition-all duration-300 shadow-2xl \",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"p-3\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex justify-between items-center\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \" items-center \",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                            src: project === null || project === void 0 ? void 0 : project.link,\n                                                            alt: project === null || project === void 0 ? void 0 : project.name,\n                                                            width: 400,\n                                                            height: 250,\n                                                            className: \"rounded-md\"\n                                                        }, void 0, false, {\n                                                            fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                                            lineNumber: 68,\n                                                            columnNumber: 21\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: \"mt-2 text-base\",\n                                                            children: [\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                    className: \"font-bold text-black dark:text-white\",\n                                                                    children: project === null || project === void 0 ? void 0 : project.name\n                                                                }, void 0, false, {\n                                                                    fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                                                    lineNumber: 76,\n                                                                    columnNumber: 23\n                                                                }, this),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                    className: \"text-black dark:text-white\",\n                                                                    children: project === null || project === void 0 ? void 0 : project.description\n                                                                }, void 0, false, {\n                                                                    fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                                                    lineNumber: 79,\n                                                                    columnNumber: 23\n                                                                }, this)\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                                            lineNumber: 75,\n                                                            columnNumber: 21\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                                    lineNumber: 67,\n                                                    columnNumber: 19\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                                lineNumber: 66,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                            lineNumber: 65,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, index, false, {\n                                        fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 13\n                                    }, this)\n                                }, index, false, {\n                                    fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 11\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                            lineNumber: 58,\n                            columnNumber: 7\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                lineNumber: 50,\n                columnNumber: 6\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-20 mb-10 p-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-3xl font-bold text-black dark:text-white\",\n                        children: \"Projects\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-black dark:text-white mt-3 text-lg\",\n                        children: \"Here are some of my projects.\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10\",\n                            children: (_data_map1 = data.map) === null || _data_map1 === void 0 ? void 0 : _data_map1.call(data, (project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"border-[2px] border-[#e2e3e5] dark:border-[#1a1a1c] bg-[#fafcfb] dark:bg-[#151516] hover:scale-[1.05] rounded-md transition-all duration-300 shadow-2xl\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            href: (project === null || project === void 0 ? void 0 : project.html_url) || \"#\",\n                                            target: \"_blank\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                src: project === null || project === void 0 ? void 0 : project.link,\n                                                alt: project === null || project === void 0 ? void 0 : project.name,\n                                                width: 400,\n                                                height: 250,\n                                                className: \"rounded-md cursor-pointer\"\n                                            }, void 0, false, {\n                                                fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                                lineNumber: 107,\n                                                columnNumber: 19\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                            lineNumber: 106,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"p-3\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex justify-between items-center\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"items-center\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"mt-2 text-base\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                className: \"font-bold text-black dark:text-white\",\n                                                                children: project === null || project === void 0 ? void 0 : project.name\n                                                            }, void 0, false, {\n                                                                fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                                                lineNumber: 119,\n                                                                columnNumber: 25\n                                                            }, this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProjectDescription, {\n                                                                description: project === null || project === void 0 ? void 0 : project.description\n                                                            }, void 0, false, {\n                                                                fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                                                lineNumber: 122,\n                                                                columnNumber: 25\n                                                            }, this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                                        lineNumber: 118,\n                                                        columnNumber: 23\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                                    lineNumber: 117,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                                lineNumber: 116,\n                                                columnNumber: 19\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                            lineNumber: 115,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                                    lineNumber: 102,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                            lineNumber: 100,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\vactuzx.me\\\\src\\\\pages\\\\projects.jsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Projects;\nvar _c, _c1;\n$RefreshReg$(_c, \"ProjectDescription\");\n$RefreshReg$(_c1, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHLGNBQVJULGlDQUFBQSxnQkFBQUEsTUFBVyxDQUFDVSxTQUFTQyxzQkFDcEIsOERBQUNqQjtvQ0FFQ0MsV0FBVTs7c0RBRVYsOERBQUNmLGtEQUFJQTs0Q0FBQ2dDLE1BQU1GLENBQUFBLG9CQUFBQSw4QkFBQUEsUUFBU0csUUFBUSxLQUFJOzRDQUFLQyxRQUFPO3NEQUMzQyw0RUFBQ2pDLG1EQUFLQTtnREFDSmtDLEdBQUcsRUFBRUwsb0JBQUFBLDhCQUFBQSxRQUFTTSxJQUFJO2dEQUNsQkMsR0FBRyxFQUFFUCxvQkFBQUEsOEJBQUFBLFFBQVNRLElBQUk7Z0RBQ2xCQyxPQUFPO2dEQUNQQyxRQUFRO2dEQUNSekIsV0FBVTs7Ozs7Ozs7Ozs7c0RBR2QsOERBQUNEOzRDQUFJQyxXQUFVO3NEQUNiLDRFQUFDRDtnREFBSUMsV0FBVTswREFDYiw0RUFBQ0Q7b0RBQUlDLFdBQVU7OERBQ2IsNEVBQUNEO3dEQUFJQyxXQUFVOzswRUFDYiw4REFBQ0M7Z0VBQUVELFdBQVU7MEVBQ1ZlLG9CQUFBQSw4QkFBQUEsUUFBU1EsSUFBSTs7Ozs7OzBFQUVoQiw4REFBQ2xDO2dFQUNDQyxXQUFXLEVBQUV5QixvQkFBQUEsOEJBQUFBLFFBQVN6QixXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21DQXBCdEMwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUNyQjtNQWhHd0JaIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wcm9qZWN0cy5qc3g/NjllNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgc3dyIGZyb20gXCIuLi9saWIvc3dyXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vLyBDb21wb25lbnQgdG8gaGFuZGxlIHRoZSBkZXNjcmlwdGlvbiB3aXRoIFJlYWQgTW9yZSBmdW5jdGlvbmFsaXR5XHJcbmNvbnN0IFByb2plY3REZXNjcmlwdGlvbiA9ICh7IGRlc2NyaXB0aW9uIH0pID0+IHtcclxuICBjb25zdCBbaXNFeHBhbmRlZCwgc2V0SXNFeHBhbmRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZUV4cGFuZCA9ICgpID0+IHtcclxuICAgIHNldElzRXhwYW5kZWQoIWlzRXhwYW5kZWQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG1heExlbmd0aCA9IDEwMDtcclxuICBjb25zdCBpc0xvbmcgPSBkZXNjcmlwdGlvbi5sZW5ndGggPiBtYXhMZW5ndGg7XHJcbiAgY29uc3Qgc2hvcnREZXNjcmlwdGlvbiA9IGlzTG9uZ1xyXG4gICAgPyBgJHtkZXNjcmlwdGlvbi5zbGljZSgwLCBtYXhMZW5ndGgpfS4uLmBcclxuICAgIDogZGVzY3JpcHRpb247XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYmxhY2sgZGFyazp0ZXh0LXdoaXRlXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY2FyZC1jb250ZW50ICR7aXNFeHBhbmRlZCA/IFwiZXhwYW5kZWRcIiA6IFwiXCJ9YH0+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ibGFjayBkYXJrOnRleHQtd2hpdGVcIj5cclxuICAgICAgICAgIHtpc0V4cGFuZGVkID8gZGVzY3JpcHRpb24gOiBzaG9ydERlc2NyaXB0aW9ufVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtpc0xvbmcgJiYgKFxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUV4cGFuZH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDAgZGFyazp0ZXh0LWJsdWUtMzAwIG10LTJcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtpc0V4cGFuZGVkID8gXCJSZWFkIExlc3NcIiA6IFwiUmVhZCBNb3JlXCJ9XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdHMoKSB7XHJcbiAgY29uc3QgeyBkYXRhOiBwcm9qZWN0cyB9ID0gc3dyKFwiL2FwaS92MS9wcm9qZWN0XCIpO1xyXG4gIGNvbnN0IGRhdGEgPSBwcm9qZWN0cyA/IHByb2plY3RzIDogW107XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bW90aW9uLmRpdlxyXG4gICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cclxuICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19XHJcbiAgICAgIGV4aXQ9e3sgb3BhY2l0eTogMCB9fVxyXG4gICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAxIH19XHJcbiAgICA+PGRpdiBjbGFzc05hbWU9XCIgbXQtMjAgbWItMTAgcC00XCI+XHJcbiAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkICB0ZXh0LWJsYWNrIGRhcms6dGV4dC13aGl0ZVwiPlxyXG4gICAgICBQcm9qZWN0c1xyXG4gICAgPC9oMT5cclxuICAgIDxwIGNsYXNzTmFtZT1cIiB0ZXh0LWJsYWNrIGRhcms6dGV4dC13aGl0ZSBtdC0zIHRleHQtbGdcIj5cclxuICAgICAgSGVyZSBhcmUgc29tZSBvZiBteSBwcm9qZWN0cy5cclxuICAgIDwvcD5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgZ2FwLTQgbXQtMTBcIj5cclxuICAgICAgICB7ZGF0YS5tYXA/LigocHJvamVjdCwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb2plY3Q/Lmh0bWxfdXJsIHx8IFwiI1wifSBrZXk9e2luZGV4fSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLVsycHhdIGJvcmRlci1bI2UyZTNlNV0gZGFyazpib3JkZXItWyMxYTFhMWNdICAgYmctWyNmYWZjZmJdIGRhcms6YmctWyMxNTE1MTZdIGhvdmVyOnNjYWxlLVsxLjA1XSByb3VuZGVkLW1kICBjdXJzb3ItcG9pbnRlciB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgc2hhZG93LTJ4bCBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGl0ZW1zLWNlbnRlciBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17cHJvamVjdD8ubGlua31cclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD17cHJvamVjdD8ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs0MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezI1MH1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yIHRleHQtYmFzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtYmxhY2sgZGFyazp0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0Py5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ibGFjayBkYXJrOnRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb2plY3Q/LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yMCBtYi0xMCBwLTRcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtYmxhY2sgZGFyazp0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICBQcm9qZWN0c1xyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ibGFjayBkYXJrOnRleHQtd2hpdGUgbXQtMyB0ZXh0LWxnXCI+XHJcbiAgICAgICAgICBIZXJlIGFyZSBzb21lIG9mIG15IHByb2plY3RzLlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBnYXAtNCBtdC0xMFwiPlxyXG4gICAgICAgICAgICB7ZGF0YS5tYXA/LigocHJvamVjdCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLVsycHhdIGJvcmRlci1bI2UyZTNlNV0gZGFyazpib3JkZXItWyMxYTFhMWNdIGJnLVsjZmFmY2ZiXSBkYXJrOmJnLVsjMTUxNTE2XSBob3ZlcjpzY2FsZS1bMS4wNV0gcm91bmRlZC1tZCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgc2hhZG93LTJ4bFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvamVjdD8uaHRtbF91cmwgfHwgXCIjXCJ9IHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2plY3Q/Lmxpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PXtwcm9qZWN0Py5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXs0MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyNTB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1tZCBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIgdGV4dC1iYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWJsYWNrIGRhcms6dGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0Py5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9qZWN0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17cHJvamVjdD8uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L21vdGlvbi5kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsibW90aW9uIiwiTGluayIsIkltYWdlIiwic3dyIiwidXNlU3RhdGUiLCJQcm9qZWN0RGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbiIsImlzRXhwYW5kZWQiLCJzZXRJc0V4cGFuZGVkIiwidG9nZ2xlRXhwYW5kIiwibWF4TGVuZ3RoIiwiaXNMb25nIiwibGVuZ3RoIiwic2hvcnREZXNjcmlwdGlvbiIsInNsaWNlIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJQcm9qZWN0cyIsImRhdGEiLCJwcm9qZWN0cyIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsImV4aXQiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJoMSIsIm1hcCIsInByb2plY3QiLCJpbmRleCIsImhyZWYiLCJodG1sX3VybCIsInRhcmdldCIsInNyYyIsImxpbmsiLCJhbHQiLCJuYW1lIiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/projects.jsx\n"));

/***/ })

});