"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/moduloSoporte/ticketCreate",{

/***/ "./pages/moduloSoporte/clienteSelect.tsx":
/*!***********************************************!*\
  !*** ./pages/moduloSoporte/clienteSelect.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ClienteSelect; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction ClienteSelect() {\n    _s();\n    const [clientes, setClientes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    fetch(\"https://anypoint.mulesoft.com/mocking/api/v1/sources/exchange/assets/754f50e8-20d8-4223-bbdc-56d50131d0ae/recursos-psa/1.0.0/m/api/recursos\").then((result)=>result.json()).then((output)=>{\n        console.log(output);\n        setClientes(output);\n    }).catch((err)=>console.error(err));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n        children: clientes.map((cliente)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                children: cliente.Nombre\n            }, void 0, false, {\n                fileName: \"/Users/mateo/Documents/GitHub/Tribu_2/pages/moduloSoporte/clienteSelect.tsx\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/mateo/Documents/GitHub/Tribu_2/pages/moduloSoporte/clienteSelect.tsx\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, this);\n}\n_s(ClienteSelect, \"THlYWgy5K9lWq5MaHlDjm9/xvA8=\");\n_c = ClienteSelect;\nvar _c;\n$RefreshReg$(_c, \"ClienteSelect\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb2R1bG9Tb3BvcnRlL2NsaWVudGVTZWxlY3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQWlDO0FBSWxCLFNBQVNDLGdCQUFnQjs7SUFFcEMsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQXFDSCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRTdFSSxNQUFNLCtJQUNMQyxJQUFJLENBQUNDLENBQUFBLFNBQVVBLE9BQU9DLElBQUksSUFDMUJGLElBQUksQ0FBQyxDQUFDRyxTQUFXO1FBRWhCQyxRQUFRQyxHQUFHLENBQUNGO1FBQ1pMLFlBQVlLO0lBRWQsR0FBR0csS0FBSyxDQUFDQyxDQUFBQSxNQUFPSCxRQUFRSSxLQUFLLENBQUNEO0lBRzlCLHFCQUNJLDhEQUFDRTtrQkFDRVosU0FBU2EsR0FBRyxDQUFDLENBQUNDLHdCQUNiLDhEQUFDQzswQkFBUUQsUUFBUUUsTUFBTTs7Ozs7Ozs7Ozs7QUFJL0IsQ0FBQztHQXJCbUJqQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9tb2R1bG9Tb3BvcnRlL2NsaWVudGVTZWxlY3QudHN4PzEwNjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENsaWVudGVzUHJvcGVydGllcyB9IGZyb20gXCIuL3R5cGVzXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2xpZW50ZVNlbGVjdCgpIHtcblxuICAgIGNvbnN0IFtjbGllbnRlcywgc2V0Q2xpZW50ZXNdOiBbQXJyYXk8Q2xpZW50ZXNQcm9wZXJ0aWVzPiAsYW55XSA9IHVzZVN0YXRlKFtdKVxuXG4gICAgZmV0Y2goJ2h0dHBzOi8vYW55cG9pbnQubXVsZXNvZnQuY29tL21vY2tpbmcvYXBpL3YxL3NvdXJjZXMvZXhjaGFuZ2UvYXNzZXRzLzc1NGY1MGU4LTIwZDgtNDIyMy1iYmRjLTU2ZDUwMTMxZDBhZS9yZWN1cnNvcy1wc2EvMS4wLjAvbS9hcGkvcmVjdXJzb3MnKVxuICAgIC50aGVuKHJlc3VsdCA9PiByZXN1bHQuanNvbigpKVxuICAgIC50aGVuKChvdXRwdXQpID0+IHtcbiAgICAgIFxuICAgICAgY29uc29sZS5sb2cob3V0cHV0KTtcbiAgICAgIHNldENsaWVudGVzKG91dHB1dCk7XG5cbiAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlbGVjdD5cbiAgICAgICAgICB7Y2xpZW50ZXMubWFwKChjbGllbnRlKSA9PiAoIFxuICAgICAgICAgICAgPG9wdGlvbj57Y2xpZW50ZS5Ob21icmV9PC9vcHRpb24+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgKVxuICAgIH0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJDbGllbnRlU2VsZWN0IiwiY2xpZW50ZXMiLCJzZXRDbGllbnRlcyIsImZldGNoIiwidGhlbiIsInJlc3VsdCIsImpzb24iLCJvdXRwdXQiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnIiLCJlcnJvciIsInNlbGVjdCIsIm1hcCIsImNsaWVudGUiLCJvcHRpb24iLCJOb21icmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/moduloSoporte/clienteSelect.tsx\n"));

/***/ })

});