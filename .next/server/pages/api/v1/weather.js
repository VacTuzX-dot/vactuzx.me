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
exports.id = "pages/api/v1/weather";
exports.ids = ["pages/api/v1/weather"];
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

/***/ "(api)/./src/pages/api/v1/weather.jsx":
/*!**************************************!*\
  !*** ./src/pages/api/v1/weather.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../config */ \"(api)/./config.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function handler(req, res) {\n    const url = \"https://api.openweathermap.org/data/2.5/\";\n    const key = \"aee9368ab4b3e538bec75d39005eccf3\";\n    const cityName = \"chiang mai\";\n    const { data  } = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`);\n    try {\n        return res.json({\n            status: true,\n            data: data\n        });\n    } catch (err) {\n        return res.json({\n            status: false,\n            data: err.message\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3YxL3dlYXRoZXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBQ2M7QUFFekIsZUFBZUUsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUU1QyxNQUFNQyxHQUFHLEdBQUcsMENBQTBDO0lBQ3RELE1BQU1DLEdBQUcsR0FBRyxrQ0FBa0M7SUFDOUMsTUFBTUMsUUFBUSxHQUFHLFlBQVk7SUFDN0IsTUFBTSxFQUFDQyxJQUFJLEdBQUMsR0FBRyxNQUFNUixnREFBUyxDQUFDLENBQUMsRUFBRUssR0FBRyxDQUFDLFVBQVUsRUFBRUUsUUFBUSxDQUFDLE9BQU8sRUFBRUQsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFFL0YsSUFBSTtRQUVELE9BQU9GLEdBQUcsQ0FBQ00sSUFBSSxDQUFDO1lBQ1hDLE1BQU0sRUFBRSxJQUFJO1lBQ1pILElBQUksRUFBRUEsSUFBSTtTQUNiLENBQUM7SUFDTixFQUNBLE9BQU9JLEdBQUcsRUFBRTtRQUVSLE9BQU9SLEdBQUcsQ0FBQ00sSUFBSSxDQUFDO1lBQ1pDLE1BQU0sRUFBRSxLQUFLO1lBQ2JILElBQUksRUFBRUksR0FBRyxDQUFDQyxPQUFPO1NBQ3BCLENBQUM7SUFDTixDQUFDO0FBR0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250Ly4vc3JjL3BhZ2VzL2FwaS92MS93ZWF0aGVyLmpzeD85YmIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vLi4vLi4vLi4vY29uZmlnJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuIFxyXG4gICAgY29uc3QgdXJsID0gJ2h0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS8nO1xyXG4gICAgY29uc3Qga2V5ID0gJ2FlZTkzNjhhYjRiM2U1MzhiZWM3NWQzOTAwNWVjY2YzJztcclxuICAgIGNvbnN0IGNpdHlOYW1lID0gJ2NoaWFuZyBtYWknO1xyXG4gICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgYXhpb3MuZ2V0KGAke3VybH13ZWF0aGVyP3E9JHtjaXR5TmFtZX0mYXBwaWQ9JHtrZXl9JnVuaXRzPW1ldHJpYyZsYW5nPXRyYCkgXHJcbiAgIFxyXG4gICAgdHJ5IHtcclxuXHJcbiAgICAgICByZXR1cm4gcmVzLmpzb24oe1xyXG4gICAgICAgICAgICBzdGF0dXM6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiByZXMuanNvbih7XHJcbiAgICAgICAgICAgIHN0YXR1czogZmFsc2UsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5tZXNzYWdlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG59Il0sIm5hbWVzIjpbImF4aW9zIiwiY29uZmlnIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInVybCIsImtleSIsImNpdHlOYW1lIiwiZGF0YSIsImdldCIsImpzb24iLCJzdGF0dXMiLCJlcnIiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/v1/weather.jsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/v1/weather.jsx"));
module.exports = __webpack_exports__;

})();