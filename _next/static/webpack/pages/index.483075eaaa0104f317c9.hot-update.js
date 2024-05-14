self["webpackHotUpdate_N_E"]("pages/index",{

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
    var _path;

    var blogPostsPath, files, blogPostsCount;
    return C_CODING_portfolio_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            blogPostsPath = ["public", "blogPosts"];
            files = fs.readdirSync((_path = path).join.apply(_path, blogPostsPath));
            blogPostsCount = files.filter(function (file) {
              return file.endsWith('.md');
            }).length;
            return _context.abrupt("return", {
              props: {
                blogPostsCount: blogPostsCount
              }
            });

          case 4:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWNvbXBsaXNobWVudHMvQWNvbXBsaXNobWVudHMuanMiXSwibmFtZXMiOlsiQWNvbXBsaXNobWVudHMiLCJibG9nUG9zdHNDb3VudCIsInVzZVN0YXRlIiwiZ2l0aHViUHJvamVjdHMiLCJzZXRHaXRodWJQcm9qZWN0cyIsIm5wbVBhY2thZ2VzIiwic2V0TnBtUGFja2FnZXMiLCJ1c2VFZmZlY3QiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwibGVuZ3RoIiwiZXJyb3IiLCJjb25zb2xlIiwidG90YWwiLCJnZXRTdGF0aWNQcm9wcyIsImJsb2dQb3N0c1BhdGgiLCJmaWxlcyIsImZzIiwicmVhZGRpclN5bmMiLCJwYXRoIiwiam9pbiIsImZpbHRlciIsImZpbGUiLCJlbmRzV2l0aCIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBOztBQUVBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsT0FBd0I7QUFBQTs7QUFBQSxNQUFyQkMsY0FBcUIsUUFBckJBLGNBQXFCOztBQUFBLGtCQUNEQywrQ0FBUSxDQUFDLENBQUQsQ0FEUDtBQUFBLE1BQ3RDQyxjQURzQztBQUFBLE1BQ3RCQyxpQkFEc0I7O0FBQUEsbUJBRVBGLCtDQUFRLENBQUMsQ0FBRCxDQUZEO0FBQUEsTUFFdENHLFdBRnNDO0FBQUEsTUFFekJDLGNBRnlCOztBQUk3Q0Msa0RBQVMsQ0FBQyxZQUFNO0FBQ2RDLFNBQUssQ0FBQyx5REFBRCxDQUFMLENBQ0dDLElBREgsQ0FDUSxVQUFBQyxRQUFRO0FBQUEsYUFBSUEsUUFBUSxDQUFDQyxJQUFULEVBQUo7QUFBQSxLQURoQixFQUVHRixJQUZILENBRVEsVUFBQUcsSUFBSTtBQUFBLGFBQUlSLGlCQUFpQixDQUFDUSxJQUFJLENBQUNDLE1BQU4sQ0FBckI7QUFBQSxLQUZaLFdBR1MsVUFBQUMsS0FBSztBQUFBLGFBQUlDLE9BQU8sQ0FBQ0QsS0FBUixDQUFjLGlDQUFkLEVBQWlEQSxLQUFqRCxDQUFKO0FBQUEsS0FIZDtBQUtBTixTQUFLLENBQUMsb0RBQUQsQ0FBTCxDQUNHQyxJQURILENBQ1EsVUFBQUMsUUFBUTtBQUFBLGFBQUlBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFKO0FBQUEsS0FEaEIsRUFFR0YsSUFGSCxDQUVRLFVBQUFHLElBQUk7QUFBQSxhQUFJTixjQUFjLENBQUNNLElBQUksQ0FBQ0ksS0FBTixDQUFsQjtBQUFBLEtBRlosV0FHUyxVQUFBRixLQUFLO0FBQUEsYUFBSUMsT0FBTyxDQUFDRCxLQUFSLENBQWMsOEJBQWQsRUFBOENBLEtBQTlDLENBQUo7QUFBQSxLQUhkO0FBSUQsR0FWUSxFQVVOLEVBVk0sQ0FBVDtBQVlBLHNCQUNFLDhEQUFDLDZEQUFEO0FBQUEsNEJBQ0UsOERBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLDhEQUFDLHdEQUFEO0FBQUEsOEJBQ0UsOERBQUMsc0RBQUQ7QUFBQSxnQ0FDRSw4REFBQyx5REFBRDtBQUFBLDhCQUFZWCxjQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLDhEQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBS0UsOERBQUMsc0RBQUQ7QUFBQSxnQ0FDRSw4REFBQyx5REFBRDtBQUFBLDhCQUFZRSxXQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLDhEQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGLGVBU0UsOERBQUMsc0RBQUQ7QUFBQSxnQ0FDRSw4REFBQyx5REFBRDtBQUFBLDhCQUFZSixjQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLDhEQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBZ0JFLDhEQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFvQkQsQ0FwQ0Q7O0dBQU1ELGM7O0tBQUFBLGM7QUFzQ0MsU0FBZWlCLGNBQXRCO0FBQUE7QUFBQTs7OzRQQUFPO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNDQyx5QkFERCxHQUNpQixDQUFDLFFBQUQsRUFBVyxXQUFYLENBRGpCO0FBRUNDLGlCQUZELEdBRVNDLEVBQUUsQ0FBQ0MsV0FBSCxDQUFlLFNBQUFDLElBQUksRUFBQ0MsSUFBTCxjQUFhTCxhQUFiLENBQWYsQ0FGVDtBQUdDakIsMEJBSEQsR0FHa0JrQixLQUFLLENBQUNLLE1BQU4sQ0FBYSxVQUFBQyxJQUFJO0FBQUEscUJBQUlBLElBQUksQ0FBQ0MsUUFBTCxDQUFjLEtBQWQsQ0FBSjtBQUFBLGFBQWpCLEVBQTJDYixNQUg3RDtBQUFBLDZDQUtFO0FBQ0xjLG1CQUFLLEVBQUU7QUFDTDFCLDhCQUFjLEVBQWRBO0FBREs7QUFERixhQUxGOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUFhUCwrREFBZUQsY0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40ODMwNzVlYWFhMDEwNGYzMTdjOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFNlY3Rpb24sIFNlY3Rpb25EaXZpZGVyLCBTZWN0aW9uVGl0bGUgfSBmcm9tICcuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50cyc7XG5pbXBvcnQgeyBCb3gsIEJveGVzLCBCb3hOdW0sIEJveFRleHQgfSBmcm9tICcuL0Fjb21wbGlzaG1lbnRzU3R5bGVzJztcblxuY29uc3QgQWNvbXBsaXNobWVudHMgPSAoeyBibG9nUG9zdHNDb3VudCB9KSA9PiB7XG4gIGNvbnN0IFtnaXRodWJQcm9qZWN0cywgc2V0R2l0aHViUHJvamVjdHNdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtucG1QYWNrYWdlcywgc2V0TnBtUGFja2FnZXNdID0gdXNlU3RhdGUoMCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy96YXdldHRlL3JlcG9zP3Blcl9wYWdlPTEwMCcpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHNldEdpdGh1YlByb2plY3RzKGRhdGEubGVuZ3RoKSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBHaXRIdWIgcHJvamVjdHM6JywgZXJyb3IpKTtcblxuICAgIGZldGNoKCdodHRwczovL2FwaS5ucG1zLmlvL3YyL3NlYXJjaD9xPW1haW50YWluZXI6emF3ZXR0ZScpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHNldE5wbVBhY2thZ2VzKGRhdGEudG90YWwpKVxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIE5QTSBwYWNrYWdlczonLCBlcnJvcikpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U2VjdGlvbj5cbiAgICAgIDxTZWN0aW9uVGl0bGU+QWNoaWV2ZW1lbnRzPC9TZWN0aW9uVGl0bGU+XG4gICAgICA8Qm94ZXM+XG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgPEJveE51bT57YCR7Z2l0aHViUHJvamVjdHN9K2B9PC9Cb3hOdW0+XG4gICAgICAgICAgPEJveFRleHQ+T3BlbiBTb3VyY2UgUHJvamVjdHM8L0JveFRleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94PlxuICAgICAgICAgIDxCb3hOdW0+e2Ake25wbVBhY2thZ2VzfStgfTwvQm94TnVtPlxuICAgICAgICAgIDxCb3hUZXh0Pk5QTSBQYWNrYWdlczwvQm94VGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgPEJveE51bT57YCR7YmxvZ1Bvc3RzQ291bnR9K2B9PC9Cb3hOdW0+XG4gICAgICAgICAgPEJveFRleHQ+QmxvZyBwb3N0czwvQm94VGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveGVzPlxuICAgICAgPFNlY3Rpb25EaXZpZGVyLz5cbiAgICA8L1NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IGJsb2dQb3N0c1BhdGggPSBbXCJwdWJsaWNcIiwgXCJibG9nUG9zdHNcIl07XG4gIGNvbnN0IGZpbGVzID0gZnMucmVhZGRpclN5bmMocGF0aC5qb2luKC4uLmJsb2dQb3N0c1BhdGgpKTtcbiAgY29uc3QgYmxvZ1Bvc3RzQ291bnQgPSBmaWxlcy5maWx0ZXIoZmlsZSA9PiBmaWxlLmVuZHNXaXRoKCcubWQnKSkubGVuZ3RoO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGJsb2dQb3N0c0NvdW50LFxuICAgIH0sXG4gIH07XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgQWNvbXBsaXNobWVudHM7Il0sInNvdXJjZVJvb3QiOiIifQ==