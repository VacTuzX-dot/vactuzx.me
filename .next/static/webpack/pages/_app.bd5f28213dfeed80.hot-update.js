"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/static/Header.jsx":
/*!******************************************!*\
  !*** ./src/components/static/Header.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_darkToggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/darkToggle */ \"./src/lib/darkToggle.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config */ \"./config.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Header() {\n    var _this = this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_lib_darkToggle__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(), 2), colorTheme = ref[0], setTheme = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), open = ref1[0], setOpen = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), width = ref2[0], setWidth = ref2[1];\n    var updateWidth = function() {\n        setWidth(window.innerWidth);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        window.addEventListener(\"resize\", updateWidth);\n        updateWidth();\n        if (width > 640) {\n            setOpen(false);\n        } else {\n            setOpen(true);\n        }\n        return function() {\n            return window.removeEventListener(\"resize\", updateWidth);\n        };\n    }, [\n        width\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"p-4 fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black/90 shadow-lg\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex justify-between items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center space-x-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"/\",\n                            className: \"text-2xl font-bold text-gray-800 dark:text-gray-100\",\n                            children: (_config__WEBPACK_IMPORTED_MODULE_4___default().title)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Coding Project\\\\WORKSTATION\\\\Portfolio\\\\src\\\\components\\\\static\\\\Header.jsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"text-white bg-indigo dark:bg-indigo/75 w-10 p-1 rounded-md translation duration-300\",\n                            onClick: function() {\n                                return setTheme(colorTheme);\n                            },\n                            children: colorTheme === \"light\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"fa-solid fa-sun-bright\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Coding Project\\\\WORKSTATION\\\\Portfolio\\\\src\\\\components\\\\static\\\\Header.jsx\",\n                                lineNumber: 42,\n                                columnNumber: 15\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"fas fa-moon\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Coding Project\\\\WORKSTATION\\\\Portfolio\\\\src\\\\components\\\\static\\\\Header.jsx\",\n                                lineNumber: 44,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Coding Project\\\\WORKSTATION\\\\Portfolio\\\\src\\\\components\\\\static\\\\Header.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Coding Project\\\\WORKSTATION\\\\Portfolio\\\\src\\\\components\\\\static\\\\Header.jsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"space-x-7 hidden sm:flex\",\n                    children: _config__WEBPACK_IMPORTED_MODULE_4___default().titles.map(function(title, index) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                            href: title.url.toLowerCase(),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \" text-lg font-light translation duration-300 \".concat(router.pathname === title.url ? \"text-indigo\" : \"text-black/75 hover:text-indigo dark:text-white/50 dark:hover:text-white\", \" \"),\n                                children: title.title\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Coding Project\\\\WORKSTATION\\\\Portfolio\\\\src\\\\components\\\\static\\\\Header.jsx\",\n                                lineNumber: 51,\n                                columnNumber: 15\n                            }, _this)\n                        }, index, false, {\n                            fileName: \"D:\\\\Coding Project\\\\WORKSTATION\\\\Portfolio\\\\src\\\\components\\\\static\\\\Header.jsx\",\n                            lineNumber: 50,\n                            columnNumber: 13\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"D:\\\\Coding Project\\\\WORKSTATION\\\\Portfolio\\\\src\\\\components\\\\static\\\\Header.jsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-indigo dark:bg-indigo/75 font-medium p-2 w-32 translation duration-300 hover:bg-indigo/60 rounded-md text-white\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"https://discord.com/users/\" + (_config__WEBPACK_IMPORTED_MODULE_4___default().discord.id),\n                            target: \"_blank\",\n                            children: \"Contact\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Coding Project\\\\WORKSTATION\\\\Portfolio\\\\src\\\\components\\\\static\\\\Header.jsx\",\n                            lineNumber: 66,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Coding Project\\\\WORKSTATION\\\\Portfolio\\\\src\\\\components\\\\static\\\\Header.jsx\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Coding Project\\\\WORKSTATION\\\\Portfolio\\\\src\\\\components\\\\static\\\\Header.jsx\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, this),\n                open ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"border-[1px] border-[#e2e3e5] dark:border-[#1a1a1c] bg-[#fafcfb] dark:bg-[#151516] w-full mx-auto h-16 px-10 py-2 flex justify-between text-gray-font left-0 fixed bottom-0 shadow-lg z-40 border-t border-gray-99\",\n                    children: _config__WEBPACK_IMPORTED_MODULE_4___default().titles.map(function(title, index) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                            href: title.url.toLowerCase(),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"px-2 py-1 cursor-pointer hover:bg-back/25 dark:text-white text-black dark:hover:bg-indigo/25 text-sm rounded-md font-light flex flex-col items-center text-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                            className: \"w-8 p-1 fa-regular \" + title.icon\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Coding Project\\\\WORKSTATION\\\\Portfolio\\\\src\\\\components\\\\static\\\\Header.jsx\",\n                                            lineNumber: 81,\n                                            columnNumber: 21\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"mx-1 font-roboto\",\n                                            children: title.title\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Coding Project\\\\WORKSTATION\\\\Portfolio\\\\src\\\\components\\\\static\\\\Header.jsx\",\n                                            lineNumber: 82,\n                                            columnNumber: 21\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Coding Project\\\\WORKSTATION\\\\Portfolio\\\\src\\\\components\\\\static\\\\Header.jsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 19\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Coding Project\\\\WORKSTATION\\\\Portfolio\\\\src\\\\components\\\\static\\\\Header.jsx\",\n                                lineNumber: 79,\n                                columnNumber: 17\n                            }, _this)\n                        }, index, false, {\n                            fileName: \"D:\\\\Coding Project\\\\WORKSTATION\\\\Portfolio\\\\src\\\\components\\\\static\\\\Header.jsx\",\n                            lineNumber: 78,\n                            columnNumber: 15\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"D:\\\\Coding Project\\\\WORKSTATION\\\\Portfolio\\\\src\\\\components\\\\static\\\\Header.jsx\",\n                    lineNumber: 76,\n                    columnNumber: 11\n                }, this) : null\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Coding Project\\\\WORKSTATION\\\\Portfolio\\\\src\\\\components\\\\static\\\\Header.jsx\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Coding Project\\\\WORKSTATION\\\\Portfolio\\\\src\\\\components\\\\static\\\\Header.jsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"tHQYj7aQtzhSc+88s63OP6A21f4=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxvSEFBb0g7a0NBQ3BJLDRFQUFDRSxHQUFDOzRCQUNBQyxJQUFJLEVBQUUsNEJBQTJCLEdBQUluQiwyREFBaUI7NEJBQ3REZ0MsTUFBTSxFQUFDLFFBQVE7c0NBQ2hCLFNBRUQ7Ozs7O2dDQUFJOzs7Ozs0QkFDRzs7Ozs7d0JBQ0w7Z0JBRUwxQixJQUFJLGlCQUNILDhEQUFDVyxLQUFHO29CQUFDRCxTQUFTLEVBQUMsb05BQXFOOzhCQUNqT2hCLHlEQUFpQixDQUFDLFNBQUNvQixLQUFLLEVBQUVNLEtBQUs7NkNBQzlCLDhEQUFDekIsa0RBQUk7NEJBQUNrQixJQUFJLEVBQUVDLEtBQUssQ0FBQ08sR0FBRyxDQUFDQyxXQUFXLEVBQUU7c0NBQ2pDLDRFQUFDVixHQUFDOzBDQUNBLDRFQUFDZSxNQUFJO29DQUFDakIsU0FBUyxFQUFDLG1LQUFxSzs7c0RBQ25MLDhEQUFDTyxHQUFDOzRDQUFDUCxTQUFTLEVBQUUscUJBQXFCLEdBQUdJLEtBQUssQ0FBQ2MsSUFBSTs7Ozs7aURBQU07c0RBQ3RELDhEQUFDRCxNQUFJOzRDQUFDakIsU0FBUyxFQUFDLGtCQUFrQjtzREFBRUksS0FBSyxDQUFDQSxLQUFLOzs7OztpREFBUTs7Ozs7O3lDQUNsRDs7Ozs7cUNBQ0w7MkJBTm9DTSxLQUFLOzs7O2lDQU94QztxQkFDUixDQUFDOzs7Ozt3QkFDRSxHQUNKLElBQUk7Ozs7OztnQkFDSjs7Ozs7WUFDRixDQUNOO0FBQ0osQ0FBQztHQXRGdUJ4QixNQUFNOztRQUNiSCxrREFBUzs7O0FBREZHLEtBQUFBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc3RhdGljL0hlYWRlci5qc3g/YjIzYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGFya1RoZW1lIGZyb20gXCIuLi8uLi9saWIvZGFya1RvZ2dsZVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgY29uZmlnIGZyb20gXCIuLi8uLi8uLi9jb25maWdcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IFtjb2xvclRoZW1lLCBzZXRUaGVtZV0gPSBkYXJrVGhlbWUoKTtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFt3aWR0aCwgc2V0V2lkdGhdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgdXBkYXRlV2lkdGggPSAoKSA9PiB7XHJcbiAgICBzZXRXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdXBkYXRlV2lkdGgpO1xyXG4gICAgdXBkYXRlV2lkdGgoKTtcclxuICAgIGlmICh3aWR0aCA+IDY0MCkge1xyXG4gICAgICBzZXRPcGVuKGZhbHNlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldE9wZW4odHJ1ZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdXBkYXRlV2lkdGgpO1xyXG4gIH0sIFt3aWR0aF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG5hdiBjbGFzc05hbWU9XCJwLTQgZml4ZWQgdG9wLTAgbGVmdC0wIHJpZ2h0LTAgei01MCBiZy13aGl0ZSBkYXJrOmJnLWJsYWNrLzkwIHNoYWRvdy1sZ1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC00XCI+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBocmVmPVwiL1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LWdyYXktODAwIGRhcms6dGV4dC1ncmF5LTEwMFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtjb25maWcudGl0bGV9XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgYmctaW5kaWdvIGRhcms6YmctaW5kaWdvLzc1IHctMTAgcC0xIHJvdW5kZWQtbWQgdHJhbnNsYXRpb24gZHVyYXRpb24tMzAwXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VGhlbWUoY29sb3JUaGVtZSl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtjb2xvclRoZW1lID09PSBcImxpZ2h0XCIgPyAoXHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtc3VuLWJyaWdodFwiPjwvaT5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtbW9vblwiPjwvaT5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteC03IGhpZGRlbiBzbTpmbGV4XCI+XHJcbiAgICAgICAgICB7Y29uZmlnLnRpdGxlcy5tYXAoKHRpdGxlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8TGluayBocmVmPXt0aXRsZS51cmwudG9Mb3dlckNhc2UoKX0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCB0ZXh0LWxnIGZvbnQtbGlnaHQgdHJhbnNsYXRpb24gZHVyYXRpb24tMzAwICR7XHJcbiAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gdGl0bGUudXJsXHJcbiAgICAgICAgICAgICAgICAgICAgPyBcInRleHQtaW5kaWdvXCJcclxuICAgICAgICAgICAgICAgICAgICA6IFwidGV4dC1ibGFjay83NSBob3Zlcjp0ZXh0LWluZGlnbyBkYXJrOnRleHQtd2hpdGUvNTAgZGFyazpob3Zlcjp0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAgIH0gYH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7dGl0bGUudGl0bGV9XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1pbmRpZ28gZGFyazpiZy1pbmRpZ28vNzUgZm9udC1tZWRpdW0gcC0yIHctMzIgdHJhbnNsYXRpb24gZHVyYXRpb24tMzAwIGhvdmVyOmJnLWluZGlnby82MCByb3VuZGVkLW1kIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBocmVmPXtgaHR0cHM6Ly9kaXNjb3JkLmNvbS91c2Vycy9gICsgY29uZmlnLmRpc2NvcmQuaWR9XHJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIENvbnRhY3RcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHtvcGVuID8gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItWzFweF0gYm9yZGVyLVsjZTJlM2U1XSBkYXJrOmJvcmRlci1bIzFhMWExY10gIGJnLVsjZmFmY2ZiXSBkYXJrOmJnLVsjMTUxNTE2XSB3LWZ1bGwgbXgtYXV0byBoLTE2IHB4LTEwIHB5LTIgZmxleCBqdXN0aWZ5LWJldHdlZW4gdGV4dC1ncmF5LWZvbnQgbGVmdC0wIGZpeGVkIGJvdHRvbS0wIHNoYWRvdy1sZyB6LTQwIGJvcmRlci10IGJvcmRlci1ncmF5LTk5XCI+XHJcbiAgICAgICAgICAgIHtjb25maWcudGl0bGVzLm1hcCgodGl0bGUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17dGl0bGUudXJsLnRvTG93ZXJDYXNlKCl9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB4LTIgcHktMSBjdXJzb3ItcG9pbnRlciBob3ZlcjpiZy1iYWNrLzI1IGRhcms6dGV4dC13aGl0ZSB0ZXh0LWJsYWNrIGRhcms6aG92ZXI6YmctaW5kaWdvLzI1ICB0ZXh0LXNtIHJvdW5kZWQtbWQgZm9udC1saWdodCAgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e1widy04IHAtMSBmYS1yZWd1bGFyIFwiICsgdGl0bGUuaWNvbn0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm14LTEgZm9udC1yb2JvdG9cIj57dGl0bGUudGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmF2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImRhcmtUaGVtZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiY29uZmlnIiwiTGluayIsIkhlYWRlciIsInJvdXRlciIsImNvbG9yVGhlbWUiLCJzZXRUaGVtZSIsIm9wZW4iLCJzZXRPcGVuIiwid2lkdGgiLCJzZXRXaWR0aCIsInVwZGF0ZVdpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibmF2IiwiY2xhc3NOYW1lIiwiZGl2IiwiYSIsImhyZWYiLCJ0aXRsZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpIiwidGl0bGVzIiwibWFwIiwiaW5kZXgiLCJ1cmwiLCJ0b0xvd2VyQ2FzZSIsInBhdGhuYW1lIiwiZGlzY29yZCIsImlkIiwidGFyZ2V0Iiwic3BhbiIsImljb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/static/Header.jsx\n"));

/***/ })

});