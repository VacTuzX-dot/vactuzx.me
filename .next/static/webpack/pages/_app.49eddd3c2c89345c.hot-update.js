/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/dotenv/config.js":
/*!***************************************!*\
  !*** ./node_modules/dotenv/config.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n(function () {\n  (__webpack_require__(/*! ./lib/main */ \"./node_modules/dotenv/lib/main.js\").config)(\n    Object.assign(\n      {},\n      __webpack_require__(/*! ./lib/env-options */ \"./node_modules/dotenv/lib/env-options.js\"),\n      __webpack_require__(/*! ./lib/cli-options */ \"./node_modules/dotenv/lib/cli-options.js\")(process.argv)\n    )\n  )\n})()\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvZG90ZW52L2NvbmZpZy5qcyIsIm1hcHBpbmdzIjoiO0FBQUE7QUFDQSxFQUFFLG1GQUE0QjtBQUM5QjtBQUNBLFFBQVE7QUFDUixNQUFNLG1CQUFPLENBQUMsbUVBQW1CO0FBQ2pDLE1BQU0sbUJBQU8sQ0FBQyxtRUFBbUIsRUFBRSxPQUFPO0FBQzFDO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9kb3RlbnYvY29uZmlnLmpzPzgwMzIiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcbiAgcmVxdWlyZSgnLi9saWIvbWFpbicpLmNvbmZpZyhcbiAgICBPYmplY3QuYXNzaWduKFxuICAgICAge30sXG4gICAgICByZXF1aXJlKCcuL2xpYi9lbnYtb3B0aW9ucycpLFxuICAgICAgcmVxdWlyZSgnLi9saWIvY2xpLW9wdGlvbnMnKShwcm9jZXNzLmFyZ3YpXG4gICAgKVxuICApXG59KSgpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/dotenv/config.js\n"));

/***/ }),

/***/ "./node_modules/dotenv/lib/cli-options.js":
/*!************************************************!*\
  !*** ./node_modules/dotenv/lib/cli-options.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("const re = /^dotenv_config_(encoding|path|debug|override|DOTENV_KEY)=(.+)$/\n\nmodule.exports = function optionMatcher (args) {\n  return args.reduce(function (acc, cur) {\n    const matches = cur.match(re)\n    if (matches) {\n      acc[matches[1]] = matches[2]\n    }\n    return acc\n  }, {})\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvZG90ZW52L2xpYi9jbGktb3B0aW9ucy5qcyIsIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsSUFBSTtBQUNQIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9kb3RlbnYvbGliL2NsaS1vcHRpb25zLmpzPzZkYjYiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcmUgPSAvXmRvdGVudl9jb25maWdfKGVuY29kaW5nfHBhdGh8ZGVidWd8b3ZlcnJpZGV8RE9URU5WX0tFWSk9KC4rKSQvXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gb3B0aW9uTWF0Y2hlciAoYXJncykge1xuICByZXR1cm4gYXJncy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgY3VyKSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9IGN1ci5tYXRjaChyZSlcbiAgICBpZiAobWF0Y2hlcykge1xuICAgICAgYWNjW21hdGNoZXNbMV1dID0gbWF0Y2hlc1syXVxuICAgIH1cbiAgICByZXR1cm4gYWNjXG4gIH0sIHt9KVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/dotenv/lib/cli-options.js\n"));

/***/ }),

/***/ "./node_modules/dotenv/lib/env-options.js":
/*!************************************************!*\
  !*** ./node_modules/dotenv/lib/env-options.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n// ../config.js accepts options via environment variables\nconst options = {}\n\nif (process.env.DOTENV_CONFIG_ENCODING != null) {\n  options.encoding = process.env.DOTENV_CONFIG_ENCODING\n}\n\nif (process.env.DOTENV_CONFIG_PATH != null) {\n  options.path = process.env.DOTENV_CONFIG_PATH\n}\n\nif (process.env.DOTENV_CONFIG_DEBUG != null) {\n  options.debug = process.env.DOTENV_CONFIG_DEBUG\n}\n\nif (process.env.DOTENV_CONFIG_OVERRIDE != null) {\n  options.override = process.env.DOTENV_CONFIG_OVERRIDE\n}\n\nif (process.env.DOTENV_CONFIG_DOTENV_KEY != null) {\n  options.DOTENV_KEY = process.env.DOTENV_CONFIG_DOTENV_KEY\n}\n\nmodule.exports = options\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvZG90ZW52L2xpYi9lbnYtb3B0aW9ucy5qcyIsIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQSxJQUFJLE9BQU87QUFDWCxxQkFBcUIsT0FBTztBQUM1Qjs7QUFFQSxJQUFJLE9BQU87QUFDWCxpQkFBaUIsT0FBTztBQUN4Qjs7QUFFQSxJQUFJLE9BQU87QUFDWCxrQkFBa0IsT0FBTztBQUN6Qjs7QUFFQSxJQUFJLE9BQU87QUFDWCxxQkFBcUIsT0FBTztBQUM1Qjs7QUFFQSxJQUFJLE9BQU87QUFDWCx1QkFBdUIsT0FBTztBQUM5Qjs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZG90ZW52L2xpYi9lbnYtb3B0aW9ucy5qcz9mOGU5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIC4uL2NvbmZpZy5qcyBhY2NlcHRzIG9wdGlvbnMgdmlhIGVudmlyb25tZW50IHZhcmlhYmxlc1xuY29uc3Qgb3B0aW9ucyA9IHt9XG5cbmlmIChwcm9jZXNzLmVudi5ET1RFTlZfQ09ORklHX0VOQ09ESU5HICE9IG51bGwpIHtcbiAgb3B0aW9ucy5lbmNvZGluZyA9IHByb2Nlc3MuZW52LkRPVEVOVl9DT05GSUdfRU5DT0RJTkdcbn1cblxuaWYgKHByb2Nlc3MuZW52LkRPVEVOVl9DT05GSUdfUEFUSCAhPSBudWxsKSB7XG4gIG9wdGlvbnMucGF0aCA9IHByb2Nlc3MuZW52LkRPVEVOVl9DT05GSUdfUEFUSFxufVxuXG5pZiAocHJvY2Vzcy5lbnYuRE9URU5WX0NPTkZJR19ERUJVRyAhPSBudWxsKSB7XG4gIG9wdGlvbnMuZGVidWcgPSBwcm9jZXNzLmVudi5ET1RFTlZfQ09ORklHX0RFQlVHXG59XG5cbmlmIChwcm9jZXNzLmVudi5ET1RFTlZfQ09ORklHX09WRVJSSURFICE9IG51bGwpIHtcbiAgb3B0aW9ucy5vdmVycmlkZSA9IHByb2Nlc3MuZW52LkRPVEVOVl9DT05GSUdfT1ZFUlJJREVcbn1cblxuaWYgKHByb2Nlc3MuZW52LkRPVEVOVl9DT05GSUdfRE9URU5WX0tFWSAhPSBudWxsKSB7XG4gIG9wdGlvbnMuRE9URU5WX0tFWSA9IHByb2Nlc3MuZW52LkRPVEVOVl9DT05GSUdfRE9URU5WX0tFWVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG9wdGlvbnNcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/dotenv/lib/env-options.js\n"));

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n__webpack_require__(/*! dotenv/config */ \"./node_modules/dotenv/config.js\");\n(__webpack_require__(/*! dotenv */ \"./node_modules/dotenv/lib/main.js\").config)();\nmodule.exports = {\n    discord: {\n        id: \"942687569693528084\"\n    },\n    github: {\n        token1: process.env.GITHUB_TOKEN1,\n        token2: process.env.GITHUB_TOKEN2\n    },\n    about: {\n        description: \"My name is Taweesak Numma, and I'm a 17-year-old developer based in Chiang Mai. I'm excited about exploring my coding skills through personal projects and constantly striving to improve my knowledge.\"\n    },\n    social: {\n        github: \"https://github.com/VacTuzX-dot\",\n        instagram: \"https://www.instagram.com/v4lk.yrieq_1sf3sb.o8lixw/\",\n        facebook: \"https://www.facebook.com/vactuz/\"\n    },\n    meta: {\n        title: \"My Personal Website\",\n        description: \"Personal Website Homies\",\n        theme: \"#02060f\",\n        lang: \"en\",\n        url: \"https://vactuzx-me.vercel.app/\",\n        image: \"https://i.imgur.com/OlsRnlF.jpeg\"\n    },\n    title: \"VacTuzX\",\n    titles: [\n        {\n            title: \"Home\",\n            url: \"/\",\n            icon: \"fa-house\"\n        },\n        {\n            title: \"Projects\",\n            url: \"/projects\",\n            icon: \"fa-blog\"\n        },\n        {\n            title: \"Blog\",\n            url: \"/blog\",\n            icon: \"fa-code\"\n        }\n    ]\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7b0JBQU8sc0RBQWU7QUFDdEJBLCtFQUF3QjtBQUN4QkUsT0FBT0MsT0FBTyxHQUFHO0lBQ2ZDLFNBQVM7UUFDUEMsSUFBSTtJQUNOO0lBQ0FDLFFBQVE7UUFDTkMsUUFBUUMsT0FBT0EsQ0FBQ0MsR0FBRyxDQUFDQyxhQUFhO1FBQ2pDQyxRQUFRSCxPQUFPQSxDQUFDQyxHQUFHLENBQUNHLGFBQWE7SUFDbkM7SUFDQUMsT0FBTztRQUNMQyxhQUNFO0lBQ0o7SUFDQUMsUUFBUTtRQUNOVCxRQUFRO1FBQ1JVLFdBQVc7UUFDWEMsVUFBVTtJQUNaO0lBQ0FDLE1BQU07UUFDSkMsT0FBTztRQUNQTCxhQUFhO1FBQ2JNLE9BQU87UUFDUEMsTUFBTTtRQUNOQyxLQUFLO1FBQ0xDLE9BQU87SUFDVDtJQUNBSixPQUFPO0lBQ1BLLFFBQVE7UUFDTjtZQUFFTCxPQUFPO1lBQVFHLEtBQUs7WUFBS0csTUFBTTtRQUFXO1FBQzVDO1lBQUVOLE9BQU87WUFBWUcsS0FBSztZQUFhRyxNQUFNO1FBQVU7UUFDdkQ7WUFBRU4sT0FBTztZQUFRRyxLQUFLO1lBQVNHLE1BQU07UUFBVTtLQUNoRDtBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbmZpZy5qcz9jMmIzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcImRvdGVudi9jb25maWdcIjtcbnJlcXVpcmUoXCJkb3RlbnZcIikuY29uZmlnKCk7XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZGlzY29yZDoge1xuICAgIGlkOiBcIjk0MjY4NzU2OTY5MzUyODA4NFwiLFxuICB9LFxuICBnaXRodWI6IHtcbiAgICB0b2tlbjE6IHByb2Nlc3MuZW52LkdJVEhVQl9UT0tFTjEsXG4gICAgdG9rZW4yOiBwcm9jZXNzLmVudi5HSVRIVUJfVE9LRU4yLFxuICB9LFxuICBhYm91dDoge1xuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJNeSBuYW1lIGlzIFRhd2Vlc2FrIE51bW1hLCBhbmQgSSdtIGEgMTcteWVhci1vbGQgZGV2ZWxvcGVyIGJhc2VkIGluIENoaWFuZyBNYWkuIEknbSBleGNpdGVkIGFib3V0IGV4cGxvcmluZyBteSBjb2Rpbmcgc2tpbGxzIHRocm91Z2ggcGVyc29uYWwgcHJvamVjdHMgYW5kIGNvbnN0YW50bHkgc3RyaXZpbmcgdG8gaW1wcm92ZSBteSBrbm93bGVkZ2UuXCIsXG4gIH0sXG4gIHNvY2lhbDoge1xuICAgIGdpdGh1YjogXCJodHRwczovL2dpdGh1Yi5jb20vVmFjVHV6WC1kb3RcIixcbiAgICBpbnN0YWdyYW06IFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS92NGxrLnlyaWVxXzFzZjNzYi5vOGxpeHcvXCIsXG4gICAgZmFjZWJvb2s6IFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3ZhY3R1ei9cIixcbiAgfSxcbiAgbWV0YToge1xuICAgIHRpdGxlOiBcIk15IFBlcnNvbmFsIFdlYnNpdGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQZXJzb25hbCBXZWJzaXRlIEhvbWllc1wiLFxuICAgIHRoZW1lOiBcIiMwMjA2MGZcIixcbiAgICBsYW5nOiBcImVuXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vdmFjdHV6eC1tZS52ZXJjZWwuYXBwL1wiLFxuICAgIGltYWdlOiBcImh0dHBzOi8vaS5pbWd1ci5jb20vT2xzUm5sRi5qcGVnXCIsXG4gIH0sXG4gIHRpdGxlOiBcIlZhY1R1elhcIixcbiAgdGl0bGVzOiBbXG4gICAgeyB0aXRsZTogXCJIb21lXCIsIHVybDogXCIvXCIsIGljb246IFwiZmEtaG91c2VcIiB9LFxuICAgIHsgdGl0bGU6IFwiUHJvamVjdHNcIiwgdXJsOiBcIi9wcm9qZWN0c1wiLCBpY29uOiBcImZhLWJsb2dcIiB9LFxuICAgIHsgdGl0bGU6IFwiQmxvZ1wiLCB1cmw6IFwiL2Jsb2dcIiwgaWNvbjogXCJmYS1jb2RlXCIgfSxcbiAgXSxcbn07XG4iXSwibmFtZXMiOlsicmVxdWlyZSIsImNvbmZpZyIsIm1vZHVsZSIsImV4cG9ydHMiLCJkaXNjb3JkIiwiaWQiLCJnaXRodWIiLCJ0b2tlbjEiLCJwcm9jZXNzIiwiZW52IiwiR0lUSFVCX1RPS0VOMSIsInRva2VuMiIsIkdJVEhVQl9UT0tFTjIiLCJhYm91dCIsImRlc2NyaXB0aW9uIiwic29jaWFsIiwiaW5zdGFncmFtIiwiZmFjZWJvb2siLCJtZXRhIiwidGl0bGUiLCJ0aGVtZSIsImxhbmciLCJ1cmwiLCJpbWFnZSIsInRpdGxlcyIsImljb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./config.js\n"));

/***/ })

});