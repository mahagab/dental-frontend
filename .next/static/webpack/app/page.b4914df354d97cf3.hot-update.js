"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [pacientes, setPacientes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchPacientes();\n    }, []);\n    const fetchPacientes = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:3001/pacientes\");\n            setPacientes(response.data);\n        } catch (error) {\n            console.error(\"Erro ao buscar pacientes:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-1/4 h-screen bg-gray-200 p-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-xl font-bold mb-4\",\n                        children: \"Pacientes\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gabri\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\dental-crud\\\\frontend\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: pacientes.map((paciente)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"mb-2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    href: \"/paciente/\".concat(paciente.id),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-blue-500 cursor-pointer\",\n                                        children: paciente.nome\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\gabri\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\dental-crud\\\\frontend\\\\src\\\\app\\\\page.js\",\n                                        lineNumber: 31,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\gabri\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\dental-crud\\\\frontend\\\\src\\\\app\\\\page.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 15\n                                }, this)\n                            }, paciente.id, false, {\n                                fileName: \"C:\\\\Users\\\\gabri\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\dental-crud\\\\frontend\\\\src\\\\app\\\\page.js\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gabri\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\dental-crud\\\\frontend\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\gabri\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\dental-crud\\\\frontend\\\\src\\\\app\\\\page.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-3/4 p-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl font-bold mb-4\",\n                        children: \"Bem-vindo ao Dashboard de Pacientes\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gabri\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\dental-crud\\\\frontend\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Selecione um paciente no menu \\xe0 esquerda para ver os detalhes.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gabri\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\dental-crud\\\\frontend\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\gabri\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\dental-crud\\\\frontend\\\\src\\\\app\\\\page.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\gabri\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\dental-crud\\\\frontend\\\\src\\\\app\\\\page.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"nhvayZi9cTmZEbJjHKOgj1AOQHY=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUU0QztBQUNsQjtBQUNHO0FBRWQsU0FBU0k7O0lBQ3RCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHTiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRTdDQyxnREFBU0EsQ0FBQztRQUNSTTtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1BLGlCQUFpQjtRQUNyQixJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNTiw2Q0FBS0EsQ0FBQ08sR0FBRyxDQUFDO1lBQ2pDSCxhQUFhRSxTQUFTRSxJQUFJO1FBQzVCLEVBQUUsT0FBT0MsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsNkJBQTZCQTtRQUM3QztJQUNGO0lBRUEscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFHRCxXQUFVO2tDQUF5Qjs7Ozs7O2tDQUN2Qyw4REFBQ0U7a0NBQ0VYLFVBQVVZLEdBQUcsQ0FBQ0MsQ0FBQUEseUJBQ2IsOERBQUNDO2dDQUFxQkwsV0FBVTswQ0FDOUIsNEVBQUNYLGlEQUFJQTtvQ0FBQ2lCLE1BQU0sYUFBeUIsT0FBWkYsU0FBU0csRUFBRTs4Q0FDbEMsNEVBQUNDO3dDQUFLUixXQUFVO2tEQUFnQ0ksU0FBU0ssSUFBSTs7Ozs7Ozs7Ozs7K0JBRnhETCxTQUFTRyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OzBCQVExQiw4REFBQ1I7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDVTt3QkFBR1YsV0FBVTtrQ0FBMEI7Ozs7OztrQ0FDeEMsOERBQUNXO2tDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLWDtHQXJDd0JyQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UuanM/MmIzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbcGFjaWVudGVzLCBzZXRQYWNpZW50ZXNdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hQYWNpZW50ZXMoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGZldGNoUGFjaWVudGVzID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL3BhY2llbnRlcycpO1xuICAgICAgc2V0UGFjaWVudGVzKHJlc3BvbnNlLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGFvIGJ1c2NhciBwYWNpZW50ZXM6JywgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvNCBoLXNjcmVlbiBiZy1ncmF5LTIwMCBwLTRcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIG1iLTRcIj5QYWNpZW50ZXM8L2gyPlxuICAgICAgICA8dWw+XG4gICAgICAgICAge3BhY2llbnRlcy5tYXAocGFjaWVudGUgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17cGFjaWVudGUuaWR9IGNsYXNzTmFtZT1cIm1iLTJcIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wYWNpZW50ZS8ke3BhY2llbnRlLmlkfWB9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDAgY3Vyc29yLXBvaW50ZXJcIj57cGFjaWVudGUubm9tZX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0zLzQgcC00XCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbWItNFwiPkJlbS12aW5kbyBhbyBEYXNoYm9hcmQgZGUgUGFjaWVudGVzPC9oMT5cbiAgICAgICAgPHA+U2VsZWNpb25lIHVtIHBhY2llbnRlIG5vIG1lbnUgw6AgZXNxdWVyZGEgcGFyYSB2ZXIgb3MgZGV0YWxoZXMuPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwiTGluayIsIkhvbWUiLCJwYWNpZW50ZXMiLCJzZXRQYWNpZW50ZXMiLCJmZXRjaFBhY2llbnRlcyIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwidWwiLCJtYXAiLCJwYWNpZW50ZSIsImxpIiwiaHJlZiIsImlkIiwic3BhbiIsIm5vbWUiLCJoMSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});