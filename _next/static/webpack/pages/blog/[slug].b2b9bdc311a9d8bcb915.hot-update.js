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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Jsb2cvW3NsdWddLmpzIl0sIm5hbWVzIjpbIkNvZGVCbG9jayIsImxhbmd1YWdlIiwidmFsdWUiLCJtYXRlcmlhbE9jZWFuaWMiLCJMaW5rUmVuZGVyZXIiLCJocmVmIiwiY2hpbGRyZW4iLCJIZWFkaW5nUmVuZGVyZXIiLCJwcm9wcyIsImxldmVsIiwiR2xvYmFsUG9zdENzcyIsIlBvc3RQYWdlIiwiZGF0ZSIsImZyb250bWF0dGVyIiwic2x1ZyIsImNvbnRlbnQiLCJ3aWR0aCIsIm9wYWNpdHkiLCJtYXJnaW4iLCJjb2RlIiwicGFyYWdyYXBoIiwiU3R5bGVkUGFyYWdyYXBoIiwiaGVhZGluZyIsImxpbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFVQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUF5QjtBQUFBLE1BQXRCQyxRQUFzQixRQUF0QkEsUUFBc0I7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFDekMsc0JBQ0UsOERBQUMsMkRBQUQ7QUFBbUIsU0FBSyxFQUFFQywyRkFBMUI7QUFBMkMsWUFBUSxFQUFFRixRQUFyRDtBQUFBLGNBQ0dDO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBS0QsQ0FORDs7S0FBTUYsUzs7QUFRTixJQUFNSSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxRQUF3QjtBQUFBLE1BQXJCQyxJQUFxQixTQUFyQkEsSUFBcUI7QUFBQSxNQUFmQyxRQUFlLFNBQWZBLFFBQWU7QUFDM0Msc0JBQ0UsOERBQUMsd0VBQUQ7QUFBWSxRQUFJLEVBQUVELElBQWxCO0FBQXdCLFlBQVEsTUFBaEM7QUFBQSxjQUNHQztBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUtELENBTkQ7O01BQU1GLFk7O0FBUU4sSUFBTUcsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQVM7QUFDL0IsVUFBT0EsS0FBSyxDQUFDQyxLQUFiO0FBQ0UsU0FBSyxDQUFMO0FBQ0UsMEJBQU8sOERBQUMsMkVBQUQ7QUFBQSxrQkFBZ0JELEtBQUssQ0FBQ0Y7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQOztBQUNGLFNBQUssQ0FBTDtBQUNFLDBCQUFPLDhEQUFDLDJFQUFEO0FBQUEsa0JBQWdCRSxLQUFLLENBQUNGO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDs7QUFDRixTQUFLLENBQUw7QUFDRSwwQkFBTyw4REFBQywyRUFBRDtBQUFBLGtCQUFnQkUsS0FBSyxDQUFDRjtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7O0FBQ0Y7QUFDRSwwQkFBTyw4REFBQywyRUFBRDtBQUFBLGtCQUFnQkUsS0FBSyxDQUFDRjtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFSSjtBQVVELENBWEQ7O01BQU1DLGU7Ozs7O2FBZ0JVRywyRTs7O0FBSEQsU0FBU0MsUUFBVCxRQUE0RDtBQUFBLE1BQXpCQyxJQUF5QixTQUF4Q0MsV0FBd0MsQ0FBekJELElBQXlCO0FBQUEsTUFBakJFLElBQWlCLFNBQWpCQSxJQUFpQjtBQUFBLE1BQVhDLE9BQVcsU0FBWEEsT0FBVztBQUN6RSxzQkFDRTtBQUFBLDJCQUNFO0FBQUEsOEJBQ0UsOERBQUMsa0RBQUQ7QUFBTSxnQkFBUSxNQUFkO0FBQWUsWUFBSSxFQUFDLE9BQXBCO0FBQUEsK0JBQ0UsOERBQUMsNkVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRTtBQUFJLGFBQUssRUFBRTtBQUFFQyxlQUFLLEVBQUUsS0FBVDtBQUFnQkMsaUJBQU8sRUFBRSxLQUF6QjtBQUFnQ0MsZ0JBQU0sRUFBRTtBQUF4QztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixlQUtFO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDLFdBQWY7QUFBQSxtQ0FBc0NOLElBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUssbUJBQVMsRUFBQyxXQUFmO0FBQUEsaUNBQ0UsOERBQUMsaUVBQUQ7QUFDRSxzQkFBVSxFQUFFLEtBRGQ7QUFFRSxrQkFBTSxFQUFFRyxPQUZWO0FBR0UscUJBQVMsRUFBRTtBQUFFSSxrQkFBSSxFQUFFbkIsU0FBUjtBQUFtQm9CLHVCQUFTLEVBQUNDLDZFQUE3QjtBQUE2Q0MscUJBQU8sRUFBQ2YsZUFBckQ7QUFBc0VnQixrQkFBSSxFQUFDbkI7QUFBM0U7QUFIYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQW9CRDtNQXJCdUJPLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZy9bc2x1Z10uYjJiOWJkYzMxMWE5ZDhiY2I5MTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tIFwiZnNcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IG1hdHRlciBmcm9tIFwiZ3JheS1tYXR0ZXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd24vd2l0aC1odG1sXCI7XHJcbmltcG9ydCB7IFByaXNtIGFzIFN5bnRheEhpZ2hsaWdodGVyIH0gZnJvbSBcInJlYWN0LXN5bnRheC1oaWdobGlnaHRlclwiO1xyXG5pbXBvcnQgeyBtYXRlcmlhbE9jZWFuaWMgfSBmcm9tIFwicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL2Rpc3QvY2pzL3N0eWxlcy9wcmlzbVwiO1xyXG5pbXBvcnQge1xyXG4gIEdsb2JhbFBvc3RDc3MsXHJcbiAgUG9zdFByZXZpb3VzQnRuLFxyXG4gIFN0eWxlZEhlYWRlcjEsXHJcbiAgU3R5bGVkSGVhZGVyMixcclxuICBTdHlsZWRIZWFkZXIzLFxyXG4gIFN0eWxlZFBhcmFncmFwaCxcclxuICBTdHlsZWRMaW5rLFxyXG59IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Jsb2cvUG9zdC9Qb3N0U3R5bGVzXCI7XHJcblxyXG5jb25zdCBDb2RlQmxvY2sgPSAoeyBsYW5ndWFnZSwgdmFsdWUgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8U3ludGF4SGlnaGxpZ2h0ZXIgc3R5bGU9e21hdGVyaWFsT2NlYW5pY30gbGFuZ3VhZ2U9e2xhbmd1YWdlfT5cclxuICAgICAge3ZhbHVlfVxyXG4gICAgPC9TeW50YXhIaWdobGlnaHRlcj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgTGlua1JlbmRlcmVyID0gKHsgaHJlZiwgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVkTGluayBocmVmPXtocmVmfSBwYXNzSHJlZj5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9TdHlsZWRMaW5rPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBIZWFkaW5nUmVuZGVyZXIgPSAocHJvcHMpPT57XHJcbiAgc3dpdGNoKHByb3BzLmxldmVsKXtcclxuICAgIGNhc2UgMTpcclxuICAgICAgcmV0dXJuIDxTdHlsZWRIZWFkZXIxPntwcm9wcy5jaGlsZHJlbn08L1N0eWxlZEhlYWRlcjE+O1xyXG4gICAgY2FzZSAyOlxyXG4gICAgICByZXR1cm4gPFN0eWxlZEhlYWRlcjI+e3Byb3BzLmNoaWxkcmVufTwvU3R5bGVkSGVhZGVyMj47XHJcbiAgICBjYXNlIDM6XHJcbiAgICAgIHJldHVybiA8U3R5bGVkSGVhZGVyMz57cHJvcHMuY2hpbGRyZW59PC9TdHlsZWRIZWFkZXIzPjtcclxuICAgIGRlZmF1bHQ6IFxyXG4gICAgICByZXR1cm4gPFN0eWxlZEhlYWRlcjM+e3Byb3BzLmNoaWxkcmVufTwvU3R5bGVkSGVhZGVyMz47XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0UGFnZSh7IGZyb250bWF0dGVyOiB7IGRhdGUgfSwgc2x1ZywgY29udGVudCB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY3NzPXtHbG9iYWxQb3N0Q3NzfT5cclxuICAgICAgICA8TGluayBwYXNzSHJlZiBocmVmPVwiL2Jsb2dcIj5cclxuICAgICAgICAgIDxQb3N0UHJldmlvdXNCdG4+R28gQmFjazwvUG9zdFByZXZpb3VzQnRuPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8aHIgc3R5bGU9e3sgd2lkdGg6IFwiNTAlXCIsIG9wYWNpdHk6IFwiMC4xXCIsIG1hcmdpbjogXCIycmVtIDBcIiB9fSAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LWRhdGVcIj5Qb3N0ZWQgb24ge2RhdGV9PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtYm9keVwiPlxyXG4gICAgICAgICAgICA8UmVhY3RNYXJrZG93blxyXG4gICAgICAgICAgICAgIGVzY2FwZUh0bWw9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIHNvdXJjZT17Y29udGVudH1cclxuICAgICAgICAgICAgICByZW5kZXJlcnM9e3sgY29kZTogQ29kZUJsb2NrLCBwYXJhZ3JhcGg6U3R5bGVkUGFyYWdyYXBoLGhlYWRpbmc6SGVhZGluZ1JlbmRlcmVyLCBsaW5rOkxpbmtSZW5kZXJlciB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIGNvbnN0IGJsb2dQb3N0c1BhdGggPSBbXCJwdWJsaWNcIiwgXCJibG9nUG9zdHNcIl07XHJcbiAgY29uc3QgZmlsZXMgPSBmcy5yZWFkZGlyU3luYyhwYXRoLmpvaW4oLi4uYmxvZ1Bvc3RzUGF0aCkpO1xyXG5cclxuICBjb25zdCBwYXRocyA9IGZpbGVzLm1hcCgoZmlsZW5hbWUpID0+ICh7XHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgc2x1ZzogZmlsZW5hbWUucmVwbGFjZShcIi5tZFwiLCBcIlwiKSxcclxuICAgIH0sXHJcbiAgfSkpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHMsXHJcbiAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zOiB7IHNsdWcgfSB9KSB7XHJcbiAgY29uc3QgYmxvZ1Bvc3RzUGF0aCA9IFtcInB1YmxpY1wiLCBcImJsb2dQb3N0c1wiXTtcclxuICBjb25zdCBtYXJrZG93bldpdGhNZXRhID0gZnMucmVhZEZpbGVTeW5jKFxyXG4gICAgcGF0aC5qb2luKC4uLmJsb2dQb3N0c1BhdGgsIHNsdWcgKyBcIi5tZFwiKSxcclxuICAgIFwidXRmLThcIlxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHsgZGF0YTogZnJvbnRtYXR0ZXIsIGNvbnRlbnQgfSA9IG1hdHRlcihtYXJrZG93bldpdGhNZXRhKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGZyb250bWF0dGVyLFxyXG4gICAgICBzbHVnLFxyXG4gICAgICBjb250ZW50LFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=