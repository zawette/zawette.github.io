self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _asyncToGenerator; }
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./src/components/Acomplishments/Acomplishments.js":
/*!*********************************************************!*\
  !*** ./src/components/Acomplishments/Acomplishments.js ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var C_CODING_portfolio_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_CODING_portfolio_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_CODING_portfolio_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_CODING_portfolio_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AcomplishmentsStyles */ "./src/components/Acomplishments/AcomplishmentsStyles.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\CODING\\portfolio\\src\\components\\Acomplishments\\Acomplishments.js",
    _this = undefined,
    _s = $RefreshSig$();





var Acomplishments = function Acomplishments(_ref) {
  _s();

  var blogPostsCount = _ref.blogPostsCount;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),
      githubProjects = _useState[0],
      setGithubProjects = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),
      npmPackages = _useState2[0],
      setNpmPackages = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    fetch('https://api.github.com/users/zawette/repos?per_page=100').then(function (response) {
      return response.json();
    }).then(function (data) {
      return setGithubProjects(data.length);
    })["catch"](function (error) {
      return console.error('Error fetching GitHub projects:', error);
    });
    fetch('https://api.npms.io/v2/search?q=maintainer:zawette').then(function (response) {
      return response.json();
    }).then(function (data) {
      return setNpmPackages(data.total);
    })["catch"](function (error) {
      return console.error('Error fetching NPM packages:', error);
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_4__.Section, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_4__.SectionTitle, {
      children: "Achievements"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_5__.Boxes, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_5__.Box, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_5__.BoxNum, {
          children: "".concat(githubProjects, "+")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_5__.BoxText, {
          children: "Open Source Projects"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_5__.Box, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_5__.BoxNum, {
          children: "".concat(npmPackages, "+")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_5__.BoxText, {
          children: "NPM Packages"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_5__.Box, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_5__.BoxNum, {
          children: "".concat(blogPostsCount, "+")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_5__.BoxText, {
          children: "Blog posts"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_4__.SectionDivider, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, _this);
};

_s(Acomplishments, "6EDhg1gVlA9IbhDpvgKMo0urK3w=");

_c = Acomplishments;
function getStaticProps() {
  return _getStaticProps.apply(this, arguments);
}

function _getStaticProps() {
  _getStaticProps = (0,C_CODING_portfolio_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_CODING_portfolio_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
    var blogPostsDirectory, files, blogPostsCount;
    return C_CODING_portfolio_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            blogPostsDirectory = 'Portfolio/public/blogPosts'; // Adjust path as per your project structure

            _context.next = 3;
            return fs.readdir(blogPostsDirectory);

          case 3:
            files = _context.sent;
            blogPostsCount = files.filter(function (file) {
              return file.endsWith('.md');
            }).length;
            return _context.abrupt("return", {
              props: {
                blogPostsCount: blogPostsCount
              }
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getStaticProps.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = (Acomplishments);

var _c;

$RefreshReg$(_c, "Acomplishments");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Fjb21wbGlzaG1lbnRzL0Fjb21wbGlzaG1lbnRzLmpzIl0sIm5hbWVzIjpbIkFjb21wbGlzaG1lbnRzIiwiYmxvZ1Bvc3RzQ291bnQiLCJ1c2VTdGF0ZSIsImdpdGh1YlByb2plY3RzIiwic2V0R2l0aHViUHJvamVjdHMiLCJucG1QYWNrYWdlcyIsInNldE5wbVBhY2thZ2VzIiwidXNlRWZmZWN0IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImxlbmd0aCIsImVycm9yIiwiY29uc29sZSIsInRvdGFsIiwiZ2V0U3RhdGljUHJvcHMiLCJibG9nUG9zdHNEaXJlY3RvcnkiLCJmcyIsInJlYWRkaXIiLCJmaWxlcyIsImZpbHRlciIsImZpbGUiLCJlbmRzV2l0aCIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLE9BQXdCO0FBQUE7O0FBQUEsTUFBckJDLGNBQXFCLFFBQXJCQSxjQUFxQjs7QUFBQSxrQkFDREMsK0NBQVEsQ0FBQyxDQUFELENBRFA7QUFBQSxNQUN0Q0MsY0FEc0M7QUFBQSxNQUN0QkMsaUJBRHNCOztBQUFBLG1CQUVQRiwrQ0FBUSxDQUFDLENBQUQs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eC40N2M2NTlkMWZiMTg5NTNlNjI2NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFNlY3Rpb24sIFNlY3Rpb25EaXZpZGVyLCBTZWN0aW9uVGl0bGUgfSBmcm9tICcuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50cyc7XG5pbXBvcnQgeyBCb3gsIEJveGVzLCBCb3hOdW0sIEJveFRleHQgfSBmcm9tICcuL0Fjb21wbGlzaG1lbnRzU3R5bGVzJztcblxuY29uc3QgQWNvbXBsaXNobWVudHMgPSAoeyBibG9nUG9zdHNDb3VudCB9KSA9PiB7XG4gIGNvbnN0IFtnaXRodWJQcm9qZWN0cywgc2V0R2l0aHViUHJvamVjdHNdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtucG1QYWNrYWdlcywgc2V0TnBtUGFja2FnZXNdID0gdXNlU3RhdGUoMCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy96YXdldHRlL3JlcG9zP3Blcl9wYWdlPTEwMCcpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHNldEdpdGh1YlByb2plY3RzKGRhdGEubGVuZ3RoKSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBHaXRIdWIgcHJvamVjdHM6JywgZXJyb3IpKTtcblxuICAgIGZldGNoKCdodHRwczovL2FwaS5ucG1zLmlvL3YyL3NlYXJjaD9xPW1haW50YWluZXI6emF3ZXR0ZScpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHNldE5wbVBhY2thZ2VzKGRhdGEudG90YWwpKVxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIE5QTSBwYWNrYWdlczonLCBlcnJvcikpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U2VjdGlvbj5cbiAgICAgIDxTZWN0aW9uVGl0bGU+QWNoaWV2ZW1lbnRzPC9TZWN0aW9uVGl0bGU+XG4gICAgICA8Qm94ZXM+XG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgPEJveE51bT57YCR7Z2l0aHViUHJvamVjdHN9K2B9PC9Cb3hOdW0+XG4gICAgICAgICAgPEJveFRleHQ+T3BlbiBTb3VyY2UgUHJvamVjdHM8L0JveFRleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94PlxuICAgICAgICAgIDxCb3hOdW0+e2Ake25wbVBhY2thZ2VzfStgfTwvQm94TnVtPlxuICAgICAgICAgIDxCb3hUZXh0Pk5QTSBQYWNrYWdlczwvQm94VGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgPEJveE51bT57YCR7YmxvZ1Bvc3RzQ291bnR9K2B9PC9Cb3hOdW0+XG4gICAgICAgICAgPEJveFRleHQ+QmxvZyBwb3N0czwvQm94VGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveGVzPlxuICAgICAgPFNlY3Rpb25EaXZpZGVyLz5cbiAgICA8L1NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IGJsb2dQb3N0c0RpcmVjdG9yeSA9ICdQb3J0Zm9saW8vcHVibGljL2Jsb2dQb3N0cyc7IC8vIEFkanVzdCBwYXRoIGFzIHBlciB5b3VyIHByb2plY3Qgc3RydWN0dXJlXG4gIGNvbnN0IGZpbGVzID0gYXdhaXQgZnMucmVhZGRpcihibG9nUG9zdHNEaXJlY3RvcnkpO1xuICBjb25zdCBibG9nUG9zdHNDb3VudCA9IGZpbGVzLmZpbHRlcihmaWxlID0+IGZpbGUuZW5kc1dpdGgoJy5tZCcpKS5sZW5ndGg7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgYmxvZ1Bvc3RzQ291bnQsXG4gICAgfSxcbiAgfTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBBY29tcGxpc2htZW50czsiXSwic291cmNlUm9vdCI6IiJ9