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
    lineNumber: 20,
    columnNumber: 5
  }, _this);
};

_c = CodeBlock;

var LinkRenderer = function LinkRenderer(_ref2) {
  var href = _ref2.href,
      children = _ref2.children;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Blog_Post_PostStyles__WEBPACK_IMPORTED_MODULE_3__.StyledLink, {
    href: href,
    passHref: true,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, _this);
};

_c2 = LinkRenderer;

var HeadingRenderer = function HeadingRenderer(props) {
  switch (props.level) {
    case 1:
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Blog_Post_PostStyles__WEBPACK_IMPORTED_MODULE_3__.StyledHeader1, {
        children: props.children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 14
      }, _this);

    case 2:
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Blog_Post_PostStyles__WEBPACK_IMPORTED_MODULE_3__.StyledHeader2, {
        children: props.children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 14
      }, _this);

    case 3:
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Blog_Post_PostStyles__WEBPACK_IMPORTED_MODULE_3__.StyledHeader3, {
        children: props.children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 14
      }, _this);

    default:
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Blog_Post_PostStyles__WEBPACK_IMPORTED_MODULE_3__.StyledHeader3, {
        children: props.children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 14
      }, _this);
  }
};

_c3 = HeadingRenderer;

var _StyledDiv = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__.default)("div").withConfig({
  displayName: "slug___StyledDiv",
  componentId: "p3t8be-0"
})(["", ""], _components_Blog_Post_PostStyles__WEBPACK_IMPORTED_MODULE_3__.GlobalPostCss);

var __N_SSG = true;
function PostPage(_ref3) {
  var date = _ref3.frontmatter.date,
      slug = _ref3.slug,
      content = _ref3.content;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_StyledDiv, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        passHref: true,
        href: "/blog",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Blog_Post_PostStyles__WEBPACK_IMPORTED_MODULE_3__.PostPreviousBtn, {
          children: "Go Back"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
        style: {
          width: "50%",
          opacity: "0.1",
          margin: "2rem 0"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "post",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "post-date",
          children: ["Posted on ", date]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "post-body",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_markdown_with_html__WEBPACK_IMPORTED_MODULE_2___default()), {
            escapeHtml: false,
            source: content,
            renderers: {
              code: CodeBlock,
              paragraph: _components_Blog_Post_PostStyles__WEBPACK_IMPORTED_MODULE_3__.StyledParagraph,
              heading: HeadingRenderer,
              link: LinkRenderer
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this)
  }, void 0, false);
}
_c4 = PostPage;

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "CodeBlock");
$RefreshReg$(_c2, "LinkRenderer");
$RefreshReg$(_c3, "HeadingRenderer");
$RefreshReg$(_c4, "PostPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Jsb2cvW3NsdWddLmpzIl0sIm5hbWVzIjpbIkNvZGVCbG9jayIsImxhbmd1YWdlIiwidmFsdWUiLCJtYXRlcmlhbE9jZWFuaWMiLCJMaW5rUmVuZGVyZXIiLCJocmVmIiwiY2hpbGRyZW4iLCJIZWFkaW5nUmVuZGVyZXIiLCJwcm9wcyIsImxldmVsIiwiR2xvYmFsUG9zdENzcyIsIlBvc3RQYWdlIiwiZGF0ZSIsImZyb250bWF0dGVyIiwic2x1ZyIsImNvbnRlbnQiLCJ3aWR0aCIsIm9wYWNpdHkiLCJtYXJnaW4iLCJjb2RlIiwicGFyYWdyYXBoIiwiU3R5bGVkUGFyYWdyYXBoIiwiaGVhZGluZyIsImxpbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFVQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUF5QjtBQUFBLE1BQXRCQyxRQUFzQixRQUF0QkEsUUFBc0I7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFDekMsc0JBQ0UsOERBQUMsMkRBQUQ7QUFBbUIsU0FBSyxFQUFFQywyRkFBMUI7QUFBMkMsWUFBUSxFQUFFRixRQUFyRDtBQUFBLGNBQ0dDO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBS0QsQ0FORDs7S0FBTUYsUzs7QUFRTixJQUFNSSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxRQUF3QjtBQUFBLE1BQXJCQyxJQUFxQixTQUFyQkEsSUFBcUI7QUFBQSxNQUFmQyxRQUFlLFNBQWZBLFFBQWU7QUFDM0Msc0JBQ0UsOERBQUMsd0VBQUQ7QUFBWSxRQUFJLEVBQUVELElBQWxCO0FBQXdCLFlBQVEsTUFBaEM7QUFBQSxjQUNHQztBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUtELENBTkQ7O01BQU1GLFk7O0FBUU4sSUFBTUcsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQVM7QUFDL0IsVUFBT0EsS0FBSyxDQUFDQyxLQUFiO0FBQ0UsU0FBSyxDQUFMO0FBQ0UsMEJBQU8sOERBQUMsMkVBQUQ7QUFBQSxrQkFBZ0JELEtBQUssQ0FBQ0Y7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQOztBQUNGLFNBQUssQ0FBTDtBQUNFLDBCQUFPLDhEQUFDLDJFQUFEO0FBQUEsa0JBQWdCRSxLQUFLLENBQUNGO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDs7QUFDRixTQUFLLENBQUw7QUFDRSwwQkFBTyw4REFBQywyRUFBRDtBQUFBLGtCQUFnQkUsS0FBSyxDQUFDRjtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7O0FBQ0Y7QUFDRSwwQkFBTyw4REFBQywyRUFBRDtBQUFBLGtCQUFnQkUsS0FBSyxDQUFDRjtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFSSjtBQVVELENBWEQ7O01BQU1DLGU7Ozs7O2FBZ0JVRywyRTs7O0FBSEQsU0FBU0MsUUFBVCxRQUE0RDtBQUFBLE1BQXpCQyxJQUF5QixTQUF4Q0MsV0FBd0MsQ0FBekJELElBQXlCO0FBQUEsTUFBakJFLElBQWlCLFNBQWpCQSxJQUFpQjtBQUFBLE1BQVhDLE9BQVcsU0FBWEEsT0FBVztBQUN6RSxzQkFDRTtBQUFBLDJCQUNFO0FBQUEsOEJBQ0UsOERBQUMsa0RBQUQ7QUFBTSxnQkFBUSxNQUFkO0FBQWUsWUFBSSxFQUFDLE9BQXBCO0FBQUEsK0JBQ0UsOERBQUMsNkVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRTtBQUFJLGFBQUssRUFBRTtBQUFFQyxlQUFLLEVBQUUsS0FBVDtBQUFnQkMsaUJBQU8sRUFBRSxLQUF6QjtBQUFnQ0MsZ0JBQU0sRUFBRTtBQUF4QztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixlQUtFO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDLFdBQWY7QUFBQSxtQ0FBc0NOLElBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUssbUJBQVMsRUFBQyxXQUFmO0FBQUEsaUNBQ0UsOERBQUMsaUVBQUQ7QUFDRSxzQkFBVSxFQUFFLEtBRGQ7QUFFRSxrQkFBTSxFQUFFRyxPQUZWO0FBR0UscUJBQVMsRUFBRTtBQUFFSSxrQkFBSSxFQUFFbkIsU0FBUjtBQUFtQm9CLHVCQUFTLEVBQUNDLDZFQUE3QjtBQUE2Q0MscUJBQU8sRUFBQ2YsZUFBckQ7QUFBc0VnQixrQkFBSSxFQUFDbkI7QUFBM0U7QUFIYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQW9CRDtNQXJCdUJPLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZy9bc2x1Z10uNzJiZGQxMzY1OGUyNTA1NTE3NjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tIFwiZnNcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IG1hdHRlciBmcm9tIFwiZ3JheS1tYXR0ZXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd24vd2l0aC1odG1sXCI7XHJcbmltcG9ydCB7IFByaXNtIGFzIFN5bnRheEhpZ2hsaWdodGVyIH0gZnJvbSBcInJlYWN0LXN5bnRheC1oaWdobGlnaHRlclwiO1xyXG5pbXBvcnQgeyBtYXRlcmlhbE9jZWFuaWMgfSBmcm9tIFwicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL2Rpc3QvY2pzL3N0eWxlcy9wcmlzbVwiO1xyXG5pbXBvcnQge1xyXG4gIEdsb2JhbFBvc3RDc3MsXHJcbiAgUG9zdFByZXZpb3VzQnRuLFxyXG4gIFN0eWxlZEhlYWRlcjEsXHJcbiAgU3R5bGVkSGVhZGVyMixcclxuICBTdHlsZWRIZWFkZXIzLFxyXG4gIFN0eWxlZFBhcmFncmFwaCxcclxuICBTdHlsZWRMaW5rXHJcbn0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQmxvZy9Qb3N0L1Bvc3RTdHlsZXNcIjtcclxuXHJcbmNvbnN0IENvZGVCbG9jayA9ICh7IGxhbmd1YWdlLCB2YWx1ZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTeW50YXhIaWdobGlnaHRlciBzdHlsZT17bWF0ZXJpYWxPY2VhbmljfSBsYW5ndWFnZT17bGFuZ3VhZ2V9PlxyXG4gICAgICB7dmFsdWV9XHJcbiAgICA8L1N5bnRheEhpZ2hsaWdodGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBMaW5rUmVuZGVyZXIgPSAoeyBocmVmLCBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWRMaW5rIGhyZWY9e2hyZWZ9IHBhc3NIcmVmPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1N0eWxlZExpbms+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IEhlYWRpbmdSZW5kZXJlciA9IChwcm9wcyk9PntcclxuICBzd2l0Y2gocHJvcHMubGV2ZWwpe1xyXG4gICAgY2FzZSAxOlxyXG4gICAgICByZXR1cm4gPFN0eWxlZEhlYWRlcjE+e3Byb3BzLmNoaWxkcmVufTwvU3R5bGVkSGVhZGVyMT47XHJcbiAgICBjYXNlIDI6XHJcbiAgICAgIHJldHVybiA8U3R5bGVkSGVhZGVyMj57cHJvcHMuY2hpbGRyZW59PC9TdHlsZWRIZWFkZXIyPjtcclxuICAgIGNhc2UgMzpcclxuICAgICAgcmV0dXJuIDxTdHlsZWRIZWFkZXIzPntwcm9wcy5jaGlsZHJlbn08L1N0eWxlZEhlYWRlcjM+O1xyXG4gICAgZGVmYXVsdDogXHJcbiAgICAgIHJldHVybiA8U3R5bGVkSGVhZGVyMz57cHJvcHMuY2hpbGRyZW59PC9TdHlsZWRIZWFkZXIzPjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RQYWdlKHsgZnJvbnRtYXR0ZXI6IHsgZGF0ZSB9LCBzbHVnLCBjb250ZW50IH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjc3M9e0dsb2JhbFBvc3RDc3N9PlxyXG4gICAgICAgIDxMaW5rIHBhc3NIcmVmIGhyZWY9XCIvYmxvZ1wiPlxyXG4gICAgICAgICAgPFBvc3RQcmV2aW91c0J0bj5HbyBCYWNrPC9Qb3N0UHJldmlvdXNCdG4+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxociBzdHlsZT17eyB3aWR0aDogXCI1MCVcIiwgb3BhY2l0eTogXCIwLjFcIiwgbWFyZ2luOiBcIjJyZW0gMFwiIH19IC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtZGF0ZVwiPlBvc3RlZCBvbiB7ZGF0ZX08L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1ib2R5XCI+XHJcbiAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duXHJcbiAgICAgICAgICAgICAgZXNjYXBlSHRtbD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgc291cmNlPXtjb250ZW50fVxyXG4gICAgICAgICAgICAgIHJlbmRlcmVycz17eyBjb2RlOiBDb2RlQmxvY2ssIHBhcmFncmFwaDpTdHlsZWRQYXJhZ3JhcGgsaGVhZGluZzpIZWFkaW5nUmVuZGVyZXIsIGxpbms6TGlua1JlbmRlcmVyIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgY29uc3QgYmxvZ1Bvc3RzUGF0aCA9IFtcInB1YmxpY1wiLCBcImJsb2dQb3N0c1wiXTtcclxuICBjb25zdCBmaWxlcyA9IGZzLnJlYWRkaXJTeW5jKHBhdGguam9pbiguLi5ibG9nUG9zdHNQYXRoKSk7XHJcblxyXG4gIGNvbnN0IHBhdGhzID0gZmlsZXMubWFwKChmaWxlbmFtZSkgPT4gKHtcclxuICAgIHBhcmFtczoge1xyXG4gICAgICBzbHVnOiBmaWxlbmFtZS5yZXBsYWNlKFwiLm1kXCIsIFwiXCIpLFxyXG4gICAgfSxcclxuICB9KSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRocyxcclxuICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXM6IHsgc2x1ZyB9IH0pIHtcclxuICBjb25zdCBibG9nUG9zdHNQYXRoID0gW1wicHVibGljXCIsIFwiYmxvZ1Bvc3RzXCJdO1xyXG4gIGNvbnN0IG1hcmtkb3duV2l0aE1ldGEgPSBmcy5yZWFkRmlsZVN5bmMoXHJcbiAgICBwYXRoLmpvaW4oLi4uYmxvZ1Bvc3RzUGF0aCwgc2x1ZyArIFwiLm1kXCIpLFxyXG4gICAgXCJ1dGYtOFwiXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgeyBkYXRhOiBmcm9udG1hdHRlciwgY29udGVudCB9ID0gbWF0dGVyKG1hcmtkb3duV2l0aE1ldGEpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgZnJvbnRtYXR0ZXIsXHJcbiAgICAgIHNsdWcsXHJcbiAgICAgIGNvbnRlbnQsXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==