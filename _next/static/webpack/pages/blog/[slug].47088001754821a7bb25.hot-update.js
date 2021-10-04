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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_markdown_with_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-markdown/with-html */ "./node_modules/react-markdown/with-html.js");
/* harmony import */ var react_markdown_with_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_markdown_with_html__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-syntax-highlighter */ "./node_modules/react-syntax-highlighter/dist/esm/index.js");
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-syntax-highlighter/dist/cjs/styles/prism */ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/index.js");
/* harmony import */ var _components_Blog_Post_PostStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Blog/Post/PostStyles */ "./src/components/Blog/Post/PostStyles.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
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
    lineNumber: 20,
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
          lineNumber: 31,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
        style: {
          width: "75rem",
          opacity: "0.1",
          margin: "2rem 0"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "post",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "post-date",
          children: ["Posted on ", date]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "post-body",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_markdown_with_html__WEBPACK_IMPORTED_MODULE_2___default()), {
            escapeHtml: false,
            source: content,
            renderers: {
              code: CodeBlock,
              paragraph: _components_Blog_Post_PostStyles__WEBPACK_IMPORTED_MODULE_3__.StyledParagraph,
              header1: _components_Blog_Post_PostStyles__WEBPACK_IMPORTED_MODULE_3__.StyledHeader1,
              h2: _components_Blog_Post_PostStyles__WEBPACK_IMPORTED_MODULE_3__.StyledHeader2,
              h3: _components_Blog_Post_PostStyles__WEBPACK_IMPORTED_MODULE_3__.StyledHeader3
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Jsb2cvW3NsdWddLmpzIl0sIm5hbWVzIjpbIkNvZGVCbG9jayIsImxhbmd1YWdlIiwidmFsdWUiLCJtYXRlcmlhbE9jZWFuaWMiLCJHbG9iYWxQb3N0Q3NzIiwiUG9zdFBhZ2UiLCJkYXRlIiwiZnJvbnRtYXR0ZXIiLCJzbHVnIiwiY29udGVudCIsIndpZHRoIiwib3BhY2l0eSIsIm1hcmdpbiIsImNvZGUiLCJwYXJhZ3JhcGgiLCJTdHlsZWRQYXJhZ3JhcGgiLCJoZWFkZXIxIiwiU3R5bGVkSGVhZGVyMSIsImgyIiwiU3R5bGVkSGVhZGVyMiIsImgzIiwiU3R5bGVkSGVhZGVyMyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBeUI7QUFBQSxNQUF0QkMsUUFBc0IsUUFBdEJBLFFBQXNCO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBQ3pDLHNCQUNFLDhEQUFDLDJEQUFEO0FBQW1CLFNBQUssRUFBRUMsMkZBQTFCO0FBQTJDLFlBQVEsRUFBRUYsUUFBckQ7QUFBQSxjQUNHQztBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUtELENBTkQ7O0tBQU1GLFM7Ozs7O2FBV1VJLDJFOzs7QUFIRCxTQUFTQyxRQUFULFFBQTREO0FBQUEsTUFBekJDLElBQXlCLFNBQXhDQyxXQUF3QyxDQUF6QkQsSUFBeUI7QUFBQSxNQUFqQkUsSUFBaUIsU0FBakJBLElBQWlCO0FBQUEsTUFBWEMsT0FBVyxTQUFYQSxPQUFXO0FBQ3pFLHNCQUNFO0FBQUEsMkJBQ0U7QUFBQSw4QkFDRSw4REFBQyxrREFBRDtBQUFNLGdCQUFRLE1BQWQ7QUFBZSxZQUFJLEVBQUMsT0FBcEI7QUFBQSwrQkFDRSw4REFBQyw2RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUlFO0FBQUksYUFBSyxFQUFFO0FBQUVDLGVBQUssRUFBRSxPQUFUO0FBQWtCQyxpQkFBTyxFQUFFLEtBQTNCO0FBQWtDQyxnQkFBTSxFQUFFO0FBQTFDO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLGVBS0U7QUFBSyxpQkFBUyxFQUFDLE1BQWY7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUMsV0FBZjtBQUFBLG1DQUFzQ04sSUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBSyxtQkFBUyxFQUFDLFdBQWY7QUFBQSxpQ0FDRSw4REFBQyxpRUFBRDtBQUNFLHNCQUFVLEVBQUUsS0FEZDtBQUVFLGtCQUFNLEVBQUVHLE9BRlY7QUFHRSxxQkFBUyxFQUFFO0FBQUVJLGtCQUFJLEVBQUViLFNBQVI7QUFBbUJjLHVCQUFTLEVBQUNDLDZFQUE3QjtBQUE2Q0MscUJBQU8sRUFBQ0MsMkVBQXJEO0FBQW1FQyxnQkFBRSxFQUFDQywyRUFBdEU7QUFBb0ZDLGdCQUFFLEVBQUNDLDJFQUFhQTtBQUFwRztBQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBb0JEO01BckJ1QmhCLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZy9bc2x1Z10uNDcwODgwMDE3NTQ4MjFhN2JiMjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tIFwiZnNcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IG1hdHRlciBmcm9tIFwiZ3JheS1tYXR0ZXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd24vd2l0aC1odG1sXCI7XHJcbmltcG9ydCB7IFByaXNtIGFzIFN5bnRheEhpZ2hsaWdodGVyIH0gZnJvbSBcInJlYWN0LXN5bnRheC1oaWdobGlnaHRlclwiO1xyXG5pbXBvcnQgeyBtYXRlcmlhbE9jZWFuaWMgfSBmcm9tIFwicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL2Rpc3QvY2pzL3N0eWxlcy9wcmlzbVwiO1xyXG5pbXBvcnQge1xyXG4gIEdsb2JhbFBvc3RDc3MsXHJcbiAgUG9zdFByZXZpb3VzQnRuLFxyXG4gIFN0eWxlZEhlYWRlcjEsXHJcbiAgU3R5bGVkSGVhZGVyMixcclxuICBTdHlsZWRIZWFkZXIzLFxyXG4gIFN0eWxlZFBhcmFncmFwaCxcclxufSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9CbG9nL1Bvc3QvUG9zdFN0eWxlc1wiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgQ29kZUJsb2NrID0gKHsgbGFuZ3VhZ2UsIHZhbHVlIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFN5bnRheEhpZ2hsaWdodGVyIHN0eWxlPXttYXRlcmlhbE9jZWFuaWN9IGxhbmd1YWdlPXtsYW5ndWFnZX0+XHJcbiAgICAgIHt2YWx1ZX1cclxuICAgIDwvU3ludGF4SGlnaGxpZ2h0ZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RQYWdlKHsgZnJvbnRtYXR0ZXI6IHsgZGF0ZSB9LCBzbHVnLCBjb250ZW50IH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjc3M9e0dsb2JhbFBvc3RDc3N9PlxyXG4gICAgICAgIDxMaW5rIHBhc3NIcmVmIGhyZWY9XCIvYmxvZ1wiPlxyXG4gICAgICAgICAgPFBvc3RQcmV2aW91c0J0bj5HbyBCYWNrPC9Qb3N0UHJldmlvdXNCdG4+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxociBzdHlsZT17eyB3aWR0aDogXCI3NXJlbVwiLCBvcGFjaXR5OiBcIjAuMVwiLCBtYXJnaW46IFwiMnJlbSAwXCIgfX0gLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1kYXRlXCI+UG9zdGVkIG9uIHtkYXRlfTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LWJvZHlcIj5cclxuICAgICAgICAgICAgPFJlYWN0TWFya2Rvd25cclxuICAgICAgICAgICAgICBlc2NhcGVIdG1sPXtmYWxzZX1cclxuICAgICAgICAgICAgICBzb3VyY2U9e2NvbnRlbnR9XHJcbiAgICAgICAgICAgICAgcmVuZGVyZXJzPXt7IGNvZGU6IENvZGVCbG9jaywgcGFyYWdyYXBoOlN0eWxlZFBhcmFncmFwaCxoZWFkZXIxOlN0eWxlZEhlYWRlcjEsaDI6U3R5bGVkSGVhZGVyMixoMzpTdHlsZWRIZWFkZXIzIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgY29uc3QgYmxvZ1Bvc3RzUGF0aCA9IFtcInB1YmxpY1wiLCBcImJsb2dQb3N0c1wiXTtcclxuICBjb25zdCBmaWxlcyA9IGZzLnJlYWRkaXJTeW5jKHBhdGguam9pbiguLi5ibG9nUG9zdHNQYXRoKSk7XHJcblxyXG4gIGNvbnN0IHBhdGhzID0gZmlsZXMubWFwKChmaWxlbmFtZSkgPT4gKHtcclxuICAgIHBhcmFtczoge1xyXG4gICAgICBzbHVnOiBmaWxlbmFtZS5yZXBsYWNlKFwiLm1kXCIsIFwiXCIpLFxyXG4gICAgfSxcclxuICB9KSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRocyxcclxuICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXM6IHsgc2x1ZyB9IH0pIHtcclxuICBjb25zdCBibG9nUG9zdHNQYXRoID0gW1wicHVibGljXCIsIFwiYmxvZ1Bvc3RzXCJdO1xyXG4gIGNvbnN0IG1hcmtkb3duV2l0aE1ldGEgPSBmcy5yZWFkRmlsZVN5bmMoXHJcbiAgICBwYXRoLmpvaW4oLi4uYmxvZ1Bvc3RzUGF0aCwgc2x1ZyArIFwiLm1kXCIpLFxyXG4gICAgXCJ1dGYtOFwiXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgeyBkYXRhOiBmcm9udG1hdHRlciwgY29udGVudCB9ID0gbWF0dGVyKG1hcmtkb3duV2l0aE1ldGEpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgZnJvbnRtYXR0ZXIsXHJcbiAgICAgIHNsdWcsXHJcbiAgICAgIGNvbnRlbnQsXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==