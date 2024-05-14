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
            console.log("fiiiiiiiiiiiiin");
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

          case 5:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWNvbXBsaXNobWVudHMvQWNvbXBsaXNobWVudHMuanMiXSwibmFtZXMiOlsiQWNvbXBsaXNobWVudHMiLCJibG9nUG9zdHNDb3VudCIsInVzZVN0YXRlIiwiZ2l0aHViUHJvamVjdHMiLCJzZXRHaXRodWJQcm9qZWN0cyIsIm5wbVBhY2thZ2VzIiwic2V0TnBtUGFja2FnZXMiLCJ1c2VFZmZlY3QiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwibGVuZ3RoIiwiZXJyb3IiLCJjb25zb2xlIiwidG90YWwiLCJnZXRTdGF0aWNQcm9wcyIsImxvZyIsImJsb2dQb3N0c1BhdGgiLCJmaWxlcyIsImZzIiwicmVhZGRpclN5bmMiLCJwYXRoIiwiam9pbiIsImZpbHRlciIsImZpbGUiLCJlbmRzV2l0aCIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBOztBQUVBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsT0FBd0I7QUFBQTs7QUFBQSxNQUFyQkMsY0FBcUIsUUFBckJBLGNBQXFCOztBQUFBLGtCQUNEQywrQ0FBUSxDQUFDLENBQUQsQ0FEUDtBQUFBLE1BQ3RDQyxjQURzQztBQUFBLE1BQ3RCQyxpQkFEc0I7O0FBQUEsbUJBRVBGLCtDQUFRLENBQUMsQ0FBRCxDQUZEO0FBQUEsTUFFdENHLFdBRnNDO0FBQUEsTUFFekJDLGNBRnlCOztBQUk3Q0Msa0RBQVMsQ0FBQyxZQUFNO0FBQ2RDLFNBQUssQ0FBQyx5REFBRCxDQUFMLENBQ0dDLElBREgsQ0FDUSxVQUFBQyxRQUFRO0FBQUEsYUFBSUEsUUFBUSxDQUFDQyxJQUFULEVBQUo7QUFBQSxLQURoQixFQUVHRixJQUZILENBRVEsVUFBQUcsSUFBSTtBQUFBLGFBQUlSLGlCQUFpQixDQUFDUSxJQUFJLENBQUNDLE1BQU4sQ0FBckI7QUFBQSxLQUZaLFdBR1MsVUFBQUMsS0FBSztBQUFBLGFBQUlDLE9BQU8sQ0FBQ0QsS0FBUixDQUFjLGlDQUFkLEVBQWlEQSxLQUFqRCxDQUFKO0FBQUEsS0FIZDtBQUtBTixTQUFLLENBQUMsb0RBQUQsQ0FBTCxDQUNHQyxJQURILENBQ1EsVUFBQUMsUUFBUTtBQUFBLGFBQUlBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFKO0FBQUEsS0FEaEIsRUFFR0YsSUFGSCxDQUVRLFVBQUFHLElBQUk7QUFBQSxhQUFJTixjQUFjLENBQUNNLElBQUksQ0FBQ0ksS0FBTixDQUFsQjtBQUFBLEtBRlosV0FHUyxVQUFBRixLQUFLO0FBQUEsYUFBSUMsT0FBTyxDQUFDRCxLQUFSLENBQWMsOEJBQWQsRUFBOENBLEtBQTlDLENBQUo7QUFBQSxLQUhkO0FBSUQsR0FWUSxFQVVOLEVBVk0sQ0FBVDtBQVlBLHNCQUNFLDhEQUFDLDZEQUFEO0FBQUEsNEJBQ0UsOERBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLDhEQUFDLHdEQUFEO0FBQUEsOEJBQ0UsOERBQUMsc0RBQUQ7QUFBQSxnQ0FDRSw4REFBQyx5REFBRDtBQUFBLDhCQUFZWCxjQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLDhEQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBS0UsOERBQUMsc0RBQUQ7QUFBQSxnQ0FDRSw4REFBQyx5REFBRDtBQUFBLDhCQUFZRSxXQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLDhEQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGLGVBU0UsOERBQUMsc0RBQUQ7QUFBQSxnQ0FDRSw4REFBQyx5REFBRDtBQUFBLDhCQUFZSixjQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLDhEQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBZ0JFLDhEQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFvQkQsQ0FwQ0Q7O0dBQU1ELGM7O0tBQUFBLGM7QUFzQ0MsU0FBZWlCLGNBQXRCO0FBQUE7QUFBQTs7OzRQQUFPO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNMRixtQkFBTyxDQUFDRyxHQUFSLENBQVksaUJBQVo7QUFDTUMseUJBRkQsR0FFaUIsQ0FBQyxRQUFELEVBQVcsV0FBWCxDQUZqQjtBQUdDQyxpQkFIRCxHQUdTQyxFQUFFLENBQUNDLFdBQUgsQ0FBZSxTQUFBQyxJQUFJLEVBQUNDLElBQUwsY0FBYUwsYUFBYixDQUFmLENBSFQ7QUFJQ2xCLDBCQUpELEdBSWtCbUIsS0FBSyxDQUFDSyxNQUFOLENBQWEsVUFBQUMsSUFBSTtBQUFBLHFCQUFJQSxJQUFJLENBQUNDLFFBQUwsQ0FBYyxLQUFkLENBQUo7QUFBQSxhQUFqQixFQUEyQ2QsTUFKN0Q7QUFBQSw2Q0FNRTtBQUNMZSxtQkFBSyxFQUFFO0FBQ0wzQiw4QkFBYyxFQUFkQTtBQURLO0FBREYsYUFORjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBY1AsK0RBQWVELGNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmJlYzNlNDU4YmYzODkzMDgyNjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBTZWN0aW9uLCBTZWN0aW9uRGl2aWRlciwgU2VjdGlvblRpdGxlIH0gZnJvbSAnLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHMnO1xuaW1wb3J0IHsgQm94LCBCb3hlcywgQm94TnVtLCBCb3hUZXh0IH0gZnJvbSAnLi9BY29tcGxpc2htZW50c1N0eWxlcyc7XG5cbmNvbnN0IEFjb21wbGlzaG1lbnRzID0gKHsgYmxvZ1Bvc3RzQ291bnQgfSkgPT4ge1xuICBjb25zdCBbZ2l0aHViUHJvamVjdHMsIHNldEdpdGh1YlByb2plY3RzXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbbnBtUGFja2FnZXMsIHNldE5wbVBhY2thZ2VzXSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2goJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvemF3ZXR0ZS9yZXBvcz9wZXJfcGFnZT0xMDAnKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oZGF0YSA9PiBzZXRHaXRodWJQcm9qZWN0cyhkYXRhLmxlbmd0aCkpXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgR2l0SHViIHByb2plY3RzOicsIGVycm9yKSk7XG5cbiAgICBmZXRjaCgnaHR0cHM6Ly9hcGkubnBtcy5pby92Mi9zZWFyY2g/cT1tYWludGFpbmVyOnphd2V0dGUnKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oZGF0YSA9PiBzZXROcG1QYWNrYWdlcyhkYXRhLnRvdGFsKSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBOUE0gcGFja2FnZXM6JywgZXJyb3IpKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPFNlY3Rpb24+XG4gICAgICA8U2VjdGlvblRpdGxlPkFjaGlldmVtZW50czwvU2VjdGlvblRpdGxlPlxuICAgICAgPEJveGVzPlxuICAgICAgICA8Qm94PlxuICAgICAgICAgIDxCb3hOdW0+e2Ake2dpdGh1YlByb2plY3RzfStgfTwvQm94TnVtPlxuICAgICAgICAgIDxCb3hUZXh0Pk9wZW4gU291cmNlIFByb2plY3RzPC9Cb3hUZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEJveD5cbiAgICAgICAgICA8Qm94TnVtPntgJHtucG1QYWNrYWdlc30rYH08L0JveE51bT5cbiAgICAgICAgICA8Qm94VGV4dD5OUE0gUGFja2FnZXM8L0JveFRleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94PlxuICAgICAgICAgIDxCb3hOdW0+e2Ake2Jsb2dQb3N0c0NvdW50fStgfTwvQm94TnVtPlxuICAgICAgICAgIDxCb3hUZXh0PkJsb2cgcG9zdHM8L0JveFRleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3hlcz5cbiAgICAgIDxTZWN0aW9uRGl2aWRlci8+XG4gICAgPC9TZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zb2xlLmxvZyhcImZpaWlpaWlpaWlpaWlpblwiKTtcbiAgY29uc3QgYmxvZ1Bvc3RzUGF0aCA9IFtcInB1YmxpY1wiLCBcImJsb2dQb3N0c1wiXTtcbiAgY29uc3QgZmlsZXMgPSBmcy5yZWFkZGlyU3luYyhwYXRoLmpvaW4oLi4uYmxvZ1Bvc3RzUGF0aCkpO1xuICBjb25zdCBibG9nUG9zdHNDb3VudCA9IGZpbGVzLmZpbHRlcihmaWxlID0+IGZpbGUuZW5kc1dpdGgoJy5tZCcpKS5sZW5ndGg7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgYmxvZ1Bvc3RzQ291bnQsXG4gICAgfSxcbiAgfTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBBY29tcGxpc2htZW50czsiXSwic291cmNlUm9vdCI6IiJ9