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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ClienteSelect; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction ClienteSelect() {\n    _s();\n    const [isLoading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [clientes, setClientes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"https://anypoint.mulesoft.com/mocking/api/v1/sources/exchange/assets/754f50e8-20d8-4223-bbdc-56d50131d0ae/recursos-psa/1.0.0/m/api/recursos\").then((res)=>res.json()).then((data)=>{\n            setClientes(data);\n            console.log(clientes);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n        children: clientes.map((cliente)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                children: cliente.Nombre\n            }, void 0, false, {\n                fileName: \"/Users/mateo/Documents/GitHub/Tribu_2/pages/moduloSoporte/clienteSelect.tsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/mateo/Documents/GitHub/Tribu_2/pages/moduloSoporte/clienteSelect.tsx\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, this);\n}\n_s(ClienteSelect, \"JZR1Fh+Prgy1bb8w08h4JDtIr4c=\");\n_c = ClienteSelect;\nvar _c;\n$RefreshReg$(_c, \"ClienteSelect\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb2R1bG9Tb3BvcnRlL2NsaWVudGVTZWxlY3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQTRDO0FBSTdCLFNBQVNFLGdCQUFnQjs7SUFFcEMsTUFBTSxDQUFDQyxXQUFXQyxXQUFXLEdBQUdILCtDQUFRQSxDQUFDLEtBQUs7SUFFOUMsTUFBTSxDQUFDSSxVQUFVQyxZQUFZLEdBQXFDTCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRTdFRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2RPLE1BQU0sK0lBQ0hDLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJLElBQ3RCRixJQUFJLENBQUMsQ0FBQ0csT0FBUztZQUNkTCxZQUFZSztZQUVaQyxRQUFRQyxHQUFHLENBQUNSO1FBQ2Q7SUFDSixHQUFHLEVBQUU7SUFJTCxxQkFDSSw4REFBQ1M7a0JBQ0VULFNBQVNVLEdBQUcsQ0FBQyxDQUFDQyx3QkFDYiw4REFBQ0M7MEJBQVFELFFBQVFFLE1BQU07Ozs7Ozs7Ozs7O0FBSS9CLENBQUM7R0F6Qm1CaEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW9kdWxvU29wb3J0ZS9jbGllbnRlU2VsZWN0LnRzeD8xMDYxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENsaWVudGVzUHJvcGVydGllcyB9IGZyb20gXCIuL3R5cGVzXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2xpZW50ZVNlbGVjdCgpIHtcblxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgICBjb25zdCBbY2xpZW50ZXMsIHNldENsaWVudGVzXTogW0FycmF5PENsaWVudGVzUHJvcGVydGllcz4gLGFueV0gPSB1c2VTdGF0ZShbXSlcbiAgICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgZmV0Y2goXCJodHRwczovL2FueXBvaW50Lm11bGVzb2Z0LmNvbS9tb2NraW5nL2FwaS92MS9zb3VyY2VzL2V4Y2hhbmdlL2Fzc2V0cy83NTRmNTBlOC0yMGQ4LTQyMjMtYmJkYy01NmQ1MDEzMWQwYWUvcmVjdXJzb3MtcHNhLzEuMC4wL20vYXBpL3JlY3Vyc29zXCIpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgc2V0Q2xpZW50ZXMoZGF0YSlcblxuICAgICAgICAgIGNvbnNvbGUubG9nKGNsaWVudGVzKVxuICAgICAgICB9KVxuICAgIH0sIFtdKVxuICBcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlbGVjdD5cbiAgICAgICAgICB7Y2xpZW50ZXMubWFwKChjbGllbnRlKSA9PiAoIFxuICAgICAgICAgICAgPG9wdGlvbj57Y2xpZW50ZS5Ob21icmV9PC9vcHRpb24+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgKVxuICAgIH0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDbGllbnRlU2VsZWN0IiwiaXNMb2FkaW5nIiwic2V0TG9hZGluZyIsImNsaWVudGVzIiwic2V0Q2xpZW50ZXMiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzZWxlY3QiLCJtYXAiLCJjbGllbnRlIiwib3B0aW9uIiwiTm9tYnJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/moduloSoporte/clienteSelect.tsx\n"));

/***/ })

});