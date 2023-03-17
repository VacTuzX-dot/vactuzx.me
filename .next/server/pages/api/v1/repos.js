"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/v1/repos";
exports.ids = ["pages/api/v1/repos"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "(api)/./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/***/ ((module) => {

eval("\nmodule.exports = {\n    discord: {\n        id: \"942687569693528084\"\n    },\n    github: {\n        token1: \"ghp_glp5HVMRtuOmz6b\",\n        token2: \"sQrU6hpJNdqo10J2IkmuF\"\n    },\n    about: {\n        description: \"I'm a 15 years old noob developer from Ohio.I'm currently working on my own projects and learning new things.\"\n    },\n    social: {\n        github: \"https://github.com/VacTuzX-dot\",\n        instagram: \"https://instagram.com/sxu_zl/\"\n    },\n    meta: {\n        title: \"My Personal Website\",\n        description: \"Personal Website Homies\",\n        theme: \"#02060f\",\n        lang: \"en\",\n        url: \"https://kalashi.me\",\n        image: \"\"\n    },\n    title: \"VacTuzX\",\n    titles: [\n        {\n            title: \"Home\",\n            url: \"/\",\n            icon: \"fa-house\"\n        },\n        {\n            title: \"Projects\",\n            url: \"/projects\",\n            icon: \"fa-blog\"\n        },\n        {\n            title: \"Blog\",\n            url: \"/blog\",\n            icon: \"fa-code\"\n        }, \n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb25maWcuanMuanMiLCJtYXBwaW5ncyI6IkFBQUFBO0FBQUFBLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHO0lBQ2ZDLE9BQU8sRUFBRTtRQUNQQyxFQUFFLEVBQUUsb0JBQW9CO0tBQ3pCO0lBQ0RDLE1BQU0sRUFBRTtRQUNOQyxNQUFNLEVBQUUscUJBQXFCO1FBQzdCQyxNQUFNLEVBQUUsdUJBQXVCO0tBQ2hDO0lBQ0RDLEtBQUssRUFBRTtRQUNMQyxXQUFXLEVBQ1QsK0dBQStHO0tBQ2xIO0lBQ0RDLE1BQU0sRUFBRTtRQUNOTCxNQUFNLEVBQUUsZ0NBQWdDO1FBQ3hDTSxTQUFTLEVBQUUsK0JBQStCO0tBQzNDO0lBQ0RDLElBQUksRUFBRTtRQUNKQyxLQUFLLEVBQUUscUJBQXFCO1FBQzVCSixXQUFXLEVBQUUseUJBQXlCO1FBQ3RDSyxLQUFLLEVBQUUsU0FBUztRQUNoQkMsSUFBSSxFQUFFLElBQUk7UUFDVkMsR0FBRyxFQUFFLG9CQUFvQjtRQUN6QkMsS0FBSyxFQUFFLEVBQUU7S0FDVjtJQUNESixLQUFLLEVBQUUsU0FBUztJQUNoQkssTUFBTSxFQUFFO1FBQ047WUFBRUwsS0FBSyxFQUFFLE1BQU07WUFBRUcsR0FBRyxFQUFFLEdBQUc7WUFBRUcsSUFBSSxFQUFFLFVBQVU7U0FBRTtRQUM3QztZQUFFTixLQUFLLEVBQUUsVUFBVTtZQUFFRyxHQUFHLEVBQUUsV0FBVztZQUFFRyxJQUFJLEVBQUUsU0FBUztTQUFFO1FBQ3hEO1lBQUVOLEtBQUssRUFBRSxNQUFNO1lBQUVHLEdBQUcsRUFBRSxPQUFPO1lBQUVHLElBQUksRUFBRSxTQUFTO1NBQUU7S0FDakQ7Q0FDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnQvLi9jb25maWcuanM/YzJiMyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICBkaXNjb3JkOiB7XHJcbiAgICBpZDogXCI5NDI2ODc1Njk2OTM1MjgwODRcIixcclxuICB9LFxyXG4gIGdpdGh1Yjoge1xyXG4gICAgdG9rZW4xOiBcImdocF9nbHA1SFZNUnR1T216NmJcIixcclxuICAgIHRva2VuMjogXCJzUXJVNmhwSk5kcW8xMEoySWttdUZcIixcclxuICB9LFxyXG4gIGFib3V0OiB7XHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJJJ20gYSAxNSB5ZWFycyBvbGQgbm9vYiBkZXZlbG9wZXIgZnJvbSBPaGlvLkknbSBjdXJyZW50bHkgd29ya2luZyBvbiBteSBvd24gcHJvamVjdHMgYW5kIGxlYXJuaW5nIG5ldyB0aGluZ3MuXCIsXHJcbiAgfSxcclxuICBzb2NpYWw6IHtcclxuICAgIGdpdGh1YjogXCJodHRwczovL2dpdGh1Yi5jb20vVmFjVHV6WC1kb3RcIixcclxuICAgIGluc3RhZ3JhbTogXCJodHRwczovL2luc3RhZ3JhbS5jb20vc3h1X3psL1wiLFxyXG4gIH0sXHJcbiAgbWV0YToge1xyXG4gICAgdGl0bGU6IFwiTXkgUGVyc29uYWwgV2Vic2l0ZVwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiUGVyc29uYWwgV2Vic2l0ZSBIb21pZXNcIixcclxuICAgIHRoZW1lOiBcIiMwMjA2MGZcIixcclxuICAgIGxhbmc6IFwiZW5cIixcclxuICAgIHVybDogXCJodHRwczovL2thbGFzaGkubWVcIixcclxuICAgIGltYWdlOiBcIlwiLFxyXG4gIH0sXHJcbiAgdGl0bGU6IFwiVmFjVHV6WFwiLFxyXG4gIHRpdGxlczogW1xyXG4gICAgeyB0aXRsZTogXCJIb21lXCIsIHVybDogXCIvXCIsIGljb246IFwiZmEtaG91c2VcIiB9LFxyXG4gICAgeyB0aXRsZTogXCJQcm9qZWN0c1wiLCB1cmw6IFwiL3Byb2plY3RzXCIsIGljb246IFwiZmEtYmxvZ1wiIH0sXHJcbiAgICB7IHRpdGxlOiBcIkJsb2dcIiwgdXJsOiBcIi9ibG9nXCIsIGljb246IFwiZmEtY29kZVwiIH0sXHJcbiAgXSxcclxufTtcclxuIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJkaXNjb3JkIiwiaWQiLCJnaXRodWIiLCJ0b2tlbjEiLCJ0b2tlbjIiLCJhYm91dCIsImRlc2NyaXB0aW9uIiwic29jaWFsIiwiaW5zdGFncmFtIiwibWV0YSIsInRpdGxlIiwidGhlbWUiLCJsYW5nIiwidXJsIiwiaW1hZ2UiLCJ0aXRsZXMiLCJpY29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./config.js\n");

/***/ }),

/***/ "(api)/./src/pages/api/v1/repos.jsx":
/*!************************************!*\
  !*** ./src/pages/api/v1/repos.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../config */ \"(api)/./config.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function handler(req, res) {\n    var token = (_config__WEBPACK_IMPORTED_MODULE_1___default().github.token1) + (_config__WEBPACK_IMPORTED_MODULE_1___default().github.token2);\n    const { data  } = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://api.github.com/users/vactuzx-dot/repos`, {\n        headers: {\n            Authorization: `token ${token}`\n        }\n    });\n    try {\n        return res.json({\n            status: true,\n            data: data\n        });\n    } catch (err) {\n        return res.json({\n            status: false,\n            data: err.message\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3YxL3JlcG9zLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQjtBQUNjO0FBRXpCLGVBQWVFLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDNUMsSUFBSUMsS0FBSyxHQUFHSiw4REFBb0IsR0FBQ0EsOERBQW9CO0lBRXJELE1BQU0sRUFBQ1EsSUFBSSxHQUFDLEdBQUcsTUFBTVQsZ0RBQVMsQ0FBQyxDQUFDLDhDQUE4QyxDQUFDLEVBQUM7UUFDNUVXLE9BQU8sRUFBRTtZQUNMQyxhQUFhLEVBQUUsQ0FBQyxNQUFNLEVBQUVQLEtBQUssQ0FBQyxDQUFDO1NBQ2xDO0tBQ0osQ0FBQztJQUVGLElBQUk7UUFFRCxPQUFPRCxHQUFHLENBQUNTLElBQUksQ0FBQztZQUNYQyxNQUFNLEVBQUUsSUFBSTtZQUNaTCxJQUFJLEVBQUVBLElBQUk7U0FDYixDQUFDO0lBQ04sRUFDQSxPQUFPTSxHQUFHLEVBQUU7UUFFUixPQUFPWCxHQUFHLENBQUNTLElBQUksQ0FBQztZQUNaQyxNQUFNLEVBQUUsS0FBSztZQUNiTCxJQUFJLEVBQUVNLEdBQUcsQ0FBQ0MsT0FBTztTQUNwQixDQUFDO0lBQ04sQ0FBQztBQUdMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL3NyYy9wYWdlcy9hcGkvdjEvcmVwb3MuanN4P2RkOWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi8uLi8uLi8uLi9jb25maWcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gICAgdmFyIHRva2VuID0gY29uZmlnLmdpdGh1Yi50b2tlbjErY29uZmlnLmdpdGh1Yi50b2tlbjJcclxuXHJcbiAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvdmFjdHV6eC1kb3QvcmVwb3NgLHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGB0b2tlbiAke3Rva2VufWAsXHJcbiAgICAgICAgfVxyXG4gICAgfSkgXHJcbiAgIFxyXG4gICAgdHJ5IHtcclxuXHJcbiAgICAgICByZXR1cm4gcmVzLmpzb24oe1xyXG4gICAgICAgICAgICBzdGF0dXM6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiByZXMuanNvbih7XHJcbiAgICAgICAgICAgIHN0YXR1czogZmFsc2UsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5tZXNzYWdlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG59Il0sIm5hbWVzIjpbImF4aW9zIiwiY29uZmlnIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInRva2VuIiwiZ2l0aHViIiwidG9rZW4xIiwidG9rZW4yIiwiZGF0YSIsImdldCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwianNvbiIsInN0YXR1cyIsImVyciIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/v1/repos.jsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/v1/repos.jsx"));
module.exports = __webpack_exports__;

})();