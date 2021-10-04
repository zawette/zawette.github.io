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
    lineNumber: 19,
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
          lineNumber: 30,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
        style: {
          width: "75rem",
          opacity: "0.1",
          margin: "2rem 0"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "post",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "post-date",
          children: ["Posted on ", date]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "post-body",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_markdown_with_html__WEBPACK_IMPORTED_MODULE_2___default()), {
            escapeHtml: false,
            source: content,
            renderers: {
              code: CodeBlock,
              paragraph: _components_Blog_Post_PostStyles__WEBPACK_IMPORTED_MODULE_3__.StyledParagraph,
              heading1: _components_Blog_Post_PostStyles__WEBPACK_IMPORTED_MODULE_3__.StyledHeader1,
              h2: _components_Blog_Post_PostStyles__WEBPACK_IMPORTED_MODULE_3__.StyledHeader2,
              h3: _components_Blog_Post_PostStyles__WEBPACK_IMPORTED_MODULE_3__.StyledHeader3
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Jsb2cvW3NsdWddLmpzIl0sIm5hbWVzIjpbIkNvZGVCbG9jayIsImxhbmd1YWdlIiwidmFsdWUiLCJtYXRlcmlhbE9jZWFuaWMiLCJHbG9iYWxQb3N0Q3NzIiwiUG9zdFBhZ2UiLCJkYXRlIiwiZnJvbnRtYXR0ZXIiLCJzbHVnIiwiY29udGVudCIsIndpZHRoIiwib3BhY2l0eSIsIm1hcmdpbiIsImNvZGUiLCJwYXJhZ3JhcGgiLCJTdHlsZWRQYXJhZ3JhcGgiLCJoZWFkaW5nMSIsIlN0eWxlZEhlYWRlcjEiLCJoMiIsIlN0eWxlZEhlYWRlcjIiLCJoMyIsIlN0eWxlZEhlYWRlcjMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFTQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUF5QjtBQUFBLE1BQXRCQyxRQUFzQixRQUF0QkEsUUFBc0I7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFDekMsc0JBQ0UsOERBQUMsMkRBQUQ7QUFBbUIsU0FBSyxFQUFFQywyRkFBMUI7QUFBMkMsWUFBUSxFQUFFRixRQUFyRDtBQUFBLGNBQ0dDO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBS0QsQ0FORDs7S0FBTUYsUzs7Ozs7YUFXVUksMkU7OztBQUhELFNBQVNDLFFBQVQsUUFBNEQ7QUFBQSxNQUF6QkMsSUFBeUIsU0FBeENDLFdBQXdDLENBQXpCRCxJQUF5QjtBQUFBLE1BQWpCRSxJQUFpQixTQUFqQkEsSUFBaUI7QUFBQSxNQUFYQyxPQUFXLFNBQVhBLE9BQVc7QUFDekUsc0JBQ0U7QUFBQSwyQkFDRTtBQUFBLDhCQUNFLDhEQUFDLGtEQUFEO0FBQU0sZ0JBQVEsTUFBZDtBQUFlLFlBQUksRUFBQyxPQUFwQjtBQUFBLCtCQUNFLDhEQUFDLDZFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBSUU7QUFBSSxhQUFLLEVBQUU7QUFBRUMsZUFBSyxFQUFFLE9BQVQ7QUFBa0JDLGlCQUFPLEVBQUUsS0FBM0I7QUFBa0NDLGdCQUFNLEVBQUU7QUFBMUM7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsZUFLRTtBQUFLLGlCQUFTLEVBQUMsTUFBZjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBQyxXQUFmO0FBQUEsbUNBQXNDTixJQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFLLG1CQUFTLEVBQUMsV0FBZjtBQUFBLGlDQUNFLDhEQUFDLGlFQUFEO0FBQ0Usc0JBQVUsRUFBRSxLQURkO0FBRUUsa0JBQU0sRUFBRUcsT0FGVjtBQUdFLHFCQUFTLEVBQUU7QUFBRUksa0JBQUksRUFBRWIsU0FBUjtBQUFtQmMsdUJBQVMsRUFBQ0MsNkVBQTdCO0FBQTZDQyxzQkFBUSxFQUFDQywyRUFBdEQ7QUFBb0VDLGdCQUFFLEVBQUNDLDJFQUF2RTtBQUFxRkMsZ0JBQUUsRUFBQ0MsMkVBQWFBO0FBQXJHO0FBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFvQkQ7TUFyQnVCaEIsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ibG9nL1tzbHVnXS4xNDM4YWViNzMyMTMzMjM5OTQzOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgbWF0dGVyIGZyb20gXCJncmF5LW1hdHRlclwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93bi93aXRoLWh0bWxcIjtcclxuaW1wb3J0IHsgUHJpc20gYXMgU3ludGF4SGlnaGxpZ2h0ZXIgfSBmcm9tIFwicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyXCI7XHJcbmltcG9ydCB7IG1hdGVyaWFsT2NlYW5pYyB9IGZyb20gXCJyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvZGlzdC9janMvc3R5bGVzL3ByaXNtXCI7XHJcbmltcG9ydCB7XHJcbiAgR2xvYmFsUG9zdENzcyxcclxuICBQb3N0UHJldmlvdXNCdG4sXHJcbiAgU3R5bGVkSGVhZGVyMSxcclxuICBTdHlsZWRIZWFkZXIyLFxyXG4gIFN0eWxlZEhlYWRlcjMsXHJcbiAgU3R5bGVkUGFyYWdyYXBoLFxyXG59IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Jsb2cvUG9zdC9Qb3N0U3R5bGVzXCI7XHJcblxyXG5jb25zdCBDb2RlQmxvY2sgPSAoeyBsYW5ndWFnZSwgdmFsdWUgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8U3ludGF4SGlnaGxpZ2h0ZXIgc3R5bGU9e21hdGVyaWFsT2NlYW5pY30gbGFuZ3VhZ2U9e2xhbmd1YWdlfT5cclxuICAgICAge3ZhbHVlfVxyXG4gICAgPC9TeW50YXhIaWdobGlnaHRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdFBhZ2UoeyBmcm9udG1hdHRlcjogeyBkYXRlIH0sIHNsdWcsIGNvbnRlbnQgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNzcz17R2xvYmFsUG9zdENzc30+XHJcbiAgICAgICAgPExpbmsgcGFzc0hyZWYgaHJlZj1cIi9ibG9nXCI+XHJcbiAgICAgICAgICA8UG9zdFByZXZpb3VzQnRuPkdvIEJhY2s8L1Bvc3RQcmV2aW91c0J0bj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPGhyIHN0eWxlPXt7IHdpZHRoOiBcIjc1cmVtXCIsIG9wYWNpdHk6IFwiMC4xXCIsIG1hcmdpbjogXCIycmVtIDBcIiB9fSAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LWRhdGVcIj5Qb3N0ZWQgb24ge2RhdGV9PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtYm9keVwiPlxyXG4gICAgICAgICAgICA8UmVhY3RNYXJrZG93blxyXG4gICAgICAgICAgICAgIGVzY2FwZUh0bWw9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIHNvdXJjZT17Y29udGVudH1cclxuICAgICAgICAgICAgICByZW5kZXJlcnM9e3sgY29kZTogQ29kZUJsb2NrLCBwYXJhZ3JhcGg6U3R5bGVkUGFyYWdyYXBoLGhlYWRpbmcxOlN0eWxlZEhlYWRlcjEsaDI6U3R5bGVkSGVhZGVyMixoMzpTdHlsZWRIZWFkZXIzIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgY29uc3QgYmxvZ1Bvc3RzUGF0aCA9IFtcInB1YmxpY1wiLCBcImJsb2dQb3N0c1wiXTtcclxuICBjb25zdCBmaWxlcyA9IGZzLnJlYWRkaXJTeW5jKHBhdGguam9pbiguLi5ibG9nUG9zdHNQYXRoKSk7XHJcblxyXG4gIGNvbnN0IHBhdGhzID0gZmlsZXMubWFwKChmaWxlbmFtZSkgPT4gKHtcclxuICAgIHBhcmFtczoge1xyXG4gICAgICBzbHVnOiBmaWxlbmFtZS5yZXBsYWNlKFwiLm1kXCIsIFwiXCIpLFxyXG4gICAgfSxcclxuICB9KSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRocyxcclxuICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXM6IHsgc2x1ZyB9IH0pIHtcclxuICBjb25zdCBibG9nUG9zdHNQYXRoID0gW1wicHVibGljXCIsIFwiYmxvZ1Bvc3RzXCJdO1xyXG4gIGNvbnN0IG1hcmtkb3duV2l0aE1ldGEgPSBmcy5yZWFkRmlsZVN5bmMoXHJcbiAgICBwYXRoLmpvaW4oLi4uYmxvZ1Bvc3RzUGF0aCwgc2x1ZyArIFwiLm1kXCIpLFxyXG4gICAgXCJ1dGYtOFwiXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgeyBkYXRhOiBmcm9udG1hdHRlciwgY29udGVudCB9ID0gbWF0dGVyKG1hcmtkb3duV2l0aE1ldGEpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgZnJvbnRtYXR0ZXIsXHJcbiAgICAgIHNsdWcsXHJcbiAgICAgIGNvbnRlbnQsXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==