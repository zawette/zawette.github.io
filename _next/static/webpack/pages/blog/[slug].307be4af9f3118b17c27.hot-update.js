self["webpackHotUpdate_N_E"]("pages/blog/[slug]",{

/***/ "./src/pages/blog/[slug].js":
/*!**********************************!*\
  !*** ./src/pages/blog/[slug].js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; },
/* harmony export */   "default": function() { return /* binding */ PostPage; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_markdown_with_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-markdown/with-html */ "./node_modules/react-markdown/with-html.js");
/* harmony import */ var react_markdown_with_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_markdown_with_html__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-syntax-highlighter */ "./node_modules/react-syntax-highlighter/dist/esm/index.js");
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-syntax-highlighter/dist/cjs/styles/prism */ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/index.js");
/* harmony import */ var _components_Blog_Post_PostStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Blog/Post/PostStyles */ "./src/components/Blog/Post/PostStyles.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\CODING\\portfolio\\src\\pages\\blog\\[slug].js",
    _this = undefined;







var CodeBlock = function CodeBlock(_ref) {
  var language = _ref.language,
      value = _ref.value;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_4__.Prism, {
    style: react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_5__.materialOceanic,
    language: language,
    children: value
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, _this);
};

_c = CodeBlock;

var _StyledDiv = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__.default)("div").withConfig({
  displayName: "slug___StyledDiv",
  componentId: "p3t8be-0"
})(["", ""], _components_Blog_Post_PostStyles__WEBPACK_IMPORTED_MODULE_3__.GlobalPostCss);

var __N_SSG = true;
function PostPage(_ref2) {
  var date = _ref2.frontmatter.date,
      slug = _ref2.slug,
      content = _ref2.content;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_StyledDiv, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        passHref: true,
        href: "/blog",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Blog_Post_PostStyles__WEBPACK_IMPORTED_MODULE_3__.PostPreviousBtn, {
          children: "Go Back"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
        style: {
          width: "75rem",
          opacity: "0.1",
          margin: "2rem 0"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "post",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "post-date",
          children: ["Posted on ", date]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "post-body",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_markdown_with_html__WEBPACK_IMPORTED_MODULE_2___default()), {
            escapeHtml: false,
            source: content,
            renderers: {
              code: CodeBlock
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)
  }, void 0, false);
}
_c2 = PostPage;

var _c, _c2;

$RefreshReg$(_c, "CodeBlock");
$RefreshReg$(_c2, "PostPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Jsb2cvW3NsdWddLmpzIl0sIm5hbWVzIjpbIkNvZGVCbG9jayIsImxhbmd1YWdlIiwidmFsdWUiLCJtYXRlcmlhbE9jZWFuaWMiLCJHbG9iYWxQb3N0Q3NzIiwiUG9zdFBhZ2UiLCJkYXRlIiwiZnJvbnRtYXR0ZXIiLCJzbHVnIiwiY29udGVudCIsIndpZHRoIiwib3BhY2l0eSIsIm1hcmdpbiIsImNvZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUF5QjtBQUFBLE1BQXRCQyxRQUFzQixRQUF0QkEsUUFBc0I7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFDekMsc0JBQ0UsOERBQUMsMkRBQUQ7QUFBbUIsU0FBSyxFQUFFQywyRkFBMUI7QUFBMkMsWUFBUSxFQUFFRixRQUFyRDtBQUFBLGNBQ0dDO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBS0QsQ0FORDs7S0FBTUYsUzs7Ozs7YUFXVUksMkU7OztBQUhELFNBQVNDLFFBQVQsUUFBNEQ7QUFBQSxNQUF6QkMsSUFBeUIsU0FBeENDLFdBQXdDLENBQXpCRCxJQUF5QjtBQUFBLE1BQWpCRSxJQUFpQixTQUFqQkEsSUFBaUI7QUFBQSxNQUFYQyxPQUFXLFNBQVhBLE9BQVc7QUFDekUsc0JBQ0U7QUFBQSwyQkFDRTtBQUFBLDhCQUNFLDhEQUFDLGtEQUFEO0FBQU0sZ0JBQVEsTUFBZDtBQUFlLFlBQUksRUFBQyxPQUFwQjtBQUFBLCtCQUNFLDhEQUFDLDZFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBSUU7QUFBSSxhQUFLLEVBQUU7QUFBRUMsZUFBSyxFQUFFLE9BQVQ7QUFBa0JDLGlCQUFPLEVBQUUsS0FBM0I7QUFBa0NDLGdCQUFNLEVBQUM7QUFBekM7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsZUFLRTtBQUFLLGlCQUFTLEVBQUMsTUFBZjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBQyxXQUFmO0FBQUEsbUNBQXNDTixJQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFLLG1CQUFTLEVBQUMsV0FBZjtBQUFBLGlDQUNFLDhEQUFDLGlFQUFEO0FBQ0Usc0JBQVUsRUFBRSxLQURkO0FBRUUsa0JBQU0sRUFBRUcsT0FGVjtBQUdFLHFCQUFTLEVBQUU7QUFBRUksa0JBQUksRUFBRWI7QUFBUjtBQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBb0JEO01BckJ1QkssUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ibG9nL1tzbHVnXS4zMDdiZTRhZjlmMzExOGIxN2MyNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgbWF0dGVyIGZyb20gXCJncmF5LW1hdHRlclwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93bi93aXRoLWh0bWxcIjtcclxuaW1wb3J0IHsgUHJpc20gYXMgU3ludGF4SGlnaGxpZ2h0ZXIgfSBmcm9tIFwicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyXCI7XHJcbmltcG9ydCB7IG1hdGVyaWFsT2NlYW5pYyB9IGZyb20gXCJyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvZGlzdC9janMvc3R5bGVzL3ByaXNtXCI7XHJcbmltcG9ydCB7IEdsb2JhbFBvc3RDc3MsUG9zdFByZXZpb3VzQnRuIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQmxvZy9Qb3N0L1Bvc3RTdHlsZXNcIjtcclxuXHJcbmNvbnN0IENvZGVCbG9jayA9ICh7IGxhbmd1YWdlLCB2YWx1ZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTeW50YXhIaWdobGlnaHRlciBzdHlsZT17bWF0ZXJpYWxPY2VhbmljfSBsYW5ndWFnZT17bGFuZ3VhZ2V9PlxyXG4gICAgICB7dmFsdWV9XHJcbiAgICA8L1N5bnRheEhpZ2hsaWdodGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0UGFnZSh7IGZyb250bWF0dGVyOiB7IGRhdGUgfSwgc2x1ZywgY29udGVudCB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY3NzPXtHbG9iYWxQb3N0Q3NzfT5cclxuICAgICAgICA8TGluayBwYXNzSHJlZiBocmVmPVwiL2Jsb2dcIj5cclxuICAgICAgICAgIDxQb3N0UHJldmlvdXNCdG4+R28gQmFjazwvUG9zdFByZXZpb3VzQnRuPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8aHIgc3R5bGU9e3sgd2lkdGg6IFwiNzVyZW1cIiwgb3BhY2l0eTogXCIwLjFcIiwgbWFyZ2luOlwiMnJlbSAwXCIgfX0gLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1kYXRlXCI+UG9zdGVkIG9uIHtkYXRlfTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LWJvZHlcIj5cclxuICAgICAgICAgICAgPFJlYWN0TWFya2Rvd25cclxuICAgICAgICAgICAgICBlc2NhcGVIdG1sPXtmYWxzZX1cclxuICAgICAgICAgICAgICBzb3VyY2U9e2NvbnRlbnR9XHJcbiAgICAgICAgICAgICAgcmVuZGVyZXJzPXt7IGNvZGU6IENvZGVCbG9jayB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIGNvbnN0IGJsb2dQb3N0c1BhdGggPSBbXCJwdWJsaWNcIiwgXCJibG9nUG9zdHNcIl07XHJcbiAgY29uc3QgZmlsZXMgPSBmcy5yZWFkZGlyU3luYyhwYXRoLmpvaW4oLi4uYmxvZ1Bvc3RzUGF0aCkpO1xyXG5cclxuICBjb25zdCBwYXRocyA9IGZpbGVzLm1hcCgoZmlsZW5hbWUpID0+ICh7XHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgc2x1ZzogZmlsZW5hbWUucmVwbGFjZShcIi5tZFwiLCBcIlwiKSxcclxuICAgIH0sXHJcbiAgfSkpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHMsXHJcbiAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zOiB7IHNsdWcgfSB9KSB7XHJcbiAgY29uc3QgYmxvZ1Bvc3RzUGF0aCA9IFtcInB1YmxpY1wiLCBcImJsb2dQb3N0c1wiXTtcclxuICBjb25zdCBtYXJrZG93bldpdGhNZXRhID0gZnMucmVhZEZpbGVTeW5jKFxyXG4gICAgcGF0aC5qb2luKC4uLmJsb2dQb3N0c1BhdGgsIHNsdWcgKyBcIi5tZFwiKSxcclxuICAgIFwidXRmLThcIlxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHsgZGF0YTogZnJvbnRtYXR0ZXIsIGNvbnRlbnQgfSA9IG1hdHRlcihtYXJrZG93bldpdGhNZXRhKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGZyb250bWF0dGVyLFxyXG4gICAgICBzbHVnLFxyXG4gICAgICBjb250ZW50LFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=