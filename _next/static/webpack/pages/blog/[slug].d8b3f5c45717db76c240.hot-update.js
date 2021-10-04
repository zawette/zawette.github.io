self["webpackHotUpdate_N_E"]("pages/blog/[slug]",{

/***/ "./src/components/Blog/Post/PostStyles.js":
/*!************************************************!*\
  !*** ./src/components/Blog/Post/PostStyles.js ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalPostCss": function() { return /* binding */ GlobalPostCss; },
/* harmony export */   "PostContainer": function() { return /* binding */ PostContainer; },
/* harmony export */   "PostTitle": function() { return /* binding */ PostTitle; },
/* harmony export */   "PostHeader": function() { return /* binding */ PostHeader; },
/* harmony export */   "PostTags": function() { return /* binding */ PostTags; },
/* harmony export */   "PostDate": function() { return /* binding */ PostDate; },
/* harmony export */   "PostExcerpt": function() { return /* binding */ PostExcerpt; },
/* harmony export */   "PostPreviousBtn": function() { return /* binding */ PostPreviousBtn; },
/* harmony export */   "StyledParagraph": function() { return /* binding */ StyledParagraph; },
/* harmony export */   "StyledHeader1": function() { return /* binding */ StyledHeader1; },
/* harmony export */   "StyledHeader2": function() { return /* binding */ StyledHeader2; },
/* harmony export */   "StyledHeader3": function() { return /* binding */ StyledHeader3; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var GlobalPostCss = "\n{\n    width:80%;\n    margin: 0 auto;\n    \n}\n";
var PostContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "PostStyles__PostContainer",
  componentId: "yddrgk-0"
})(["background-color:", ";padding:2rem;margin-top:2rem;"], function (props) {
  return props.theme.colors.background2;
});
var PostTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "PostStyles__PostTitle",
  componentId: "yddrgk-1"
})(["font-weight:500;background:linear-gradient( 121.57deg,#ffffff 18.77%,rgba(255,255,255,0.66) 60.15% );-webkit-background-clip:text;-webkit-text-fill-color:transparent;color:", ";font-size:2em;@media ", "{}@media ", "{}"], function (props) {
  return props.theme.colors.primary1;
}, function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var PostHeader = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "PostStyles__PostHeader",
  componentId: "yddrgk-2"
})([""]);
var PostTags = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.a.withConfig({
  displayName: "PostStyles__PostTags",
  componentId: "yddrgk-3"
})(["text-decoration:underline;margin-right:1rem;font-size:0.7em;&:hover{cursor:pointer;}"]);
var PostDate = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.span.withConfig({
  displayName: "PostStyles__PostDate",
  componentId: "yddrgk-4"
})(["margin-right:1rem;font-size:0.7em;"]);
var PostExcerpt = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "PostStyles__PostExcerpt",
  componentId: "yddrgk-5"
})(["font-size:1em;overflow:hidden;line-height:2rem;max-height:8rem;-webkit-box-orient:vertical;display:block;display:-webkit-box;overflow:hidden !important;text-overflow:ellipsis;-webkit-line-clamp:2;"]);
var PostPreviousBtn = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.a.withConfig({
  displayName: "PostStyles__PostPreviousBtn",
  componentId: "yddrgk-6"
})(["display:inline-block;margin-top:2rem;color:", ";font-size:1.5em;&:visited{color:", ";}"], function (props) {
  return props.theme.colors.button2;
}, function (props) {
  return props.theme.colors.button2;
});
var StyledParagraph = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.p.withConfig({
  displayName: "PostStyles__StyledParagraph",
  componentId: "yddrgk-7"
})(["margin:initial;"]);
var StyledHeader1 = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.h1.withConfig({
  displayName: "PostStyles__StyledHeader1",
  componentId: "yddrgk-8"
})(["margin:1.5rem;"]);
var StyledHeader2 = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.h2.withConfig({
  displayName: "PostStyles__StyledHeader2",
  componentId: "yddrgk-9"
})(["margin:1.5rem;"]);
var StyledHeader3 = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.h2.withConfig({
  displayName: "PostStyles__StyledHeader3",
  componentId: "yddrgk-10"
})(["margin:1.5rem;"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQmxvZy9Qb3N0L1Bvc3RTdHlsZXMuanMiXSwibmFtZXMiOlsiR2xvYmFsUG9zdENzcyIsIlBvc3RDb250YWluZXIiLCJzdHlsZWQiLCJwcm9wcyIsInRoZW1lIiwiY29sb3JzIiwiYmFja2dyb3VuZDIiLCJQb3N0VGl0bGUiLCJwcmltYXJ5MSIsImJyZWFrcG9pbnRzIiwibWQiLCJzbSIsIlBvc3RIZWFkZXIiLCJQb3N0VGFncyIsIlBvc3REYXRlIiwiUG9zdEV4Y2VycHQiLCJQb3N0UHJldmlvdXNCdG4iLCJidXR0b24yIiwiU3R5bGVkUGFyYWdyYXBoIiwiU3R5bGVkSGVhZGVyMSIsIlN0eWxlZEhlYWRlcjIiLCJTdHlsZWRIZWFkZXIzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsYUFBYSx3REFBbkI7QUFRQSxJQUFNQyxhQUFhLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLDREQUNKLFVBQUNDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsV0FBOUI7QUFBQSxDQURJLENBQW5CO0FBTUEsSUFBTUMsU0FBUyxHQUFHTCxxRUFBSDtBQUFBO0FBQUE7QUFBQSxrT0FTWCxVQUFDQyxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJHLFFBQTlCO0FBQUEsQ0FUVyxFQVdYLFVBQUNMLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUssV0FBWixDQUF3QkMsRUFBbkM7QUFBQSxDQVhXLEVBY1gsVUFBQ1AsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZSyxXQUFaLENBQXdCRSxFQUFuQztBQUFBLENBZFcsQ0FBZjtBQWtCQSxJQUFNQyxVQUFVLEdBQUdWLHFFQUFIO0FBQUE7QUFBQTtBQUFBLFFBQWhCO0FBRUEsSUFBTVcsUUFBUSxHQUFHWCxtRUFBSDtBQUFBO0FBQUE7QUFBQSw0RkFBZDtBQVFBLElBQU1ZLFFBQVEsR0FBR1osc0VBQUg7QUFBQTtBQUFBO0FBQUEsMENBQWQ7QUFLQSxJQUFNYSxXQUFXLEdBQUdiLHFFQUFIO0FBQUE7QUFBQTtBQUFBLDRNQUFqQjtBQWFBLElBQU1jLGVBQWUsR0FBR2QsbUVBQUg7QUFBQTtBQUFBO0FBQUEsK0ZBR2pCLFVBQUNDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQlksT0FBOUI7QUFBQSxDQUhpQixFQU1mLFVBQUNkLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQlksT0FBOUI7QUFBQSxDQU5lLENBQXJCO0FBVUEsSUFBTUMsZUFBZSxHQUFHaEIsbUVBQUg7QUFBQTtBQUFBO0FBQUEsdUJBQXJCO0FBSUEsSUFBTWlCLGFBQWEsR0FBR2pCLG9FQUFIO0FBQUE7QUFBQTtBQUFBLHNCQUFuQjtBQUlBLElBQU1rQixhQUFhLEdBQUdsQixvRUFBSDtBQUFBO0FBQUE7QUFBQSxzQkFBbkI7QUFHQSxJQUFNbUIsYUFBYSxHQUFHbkIsb0VBQUg7QUFBQTtBQUFBO0FBQUEsc0JBQW5CIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2cvW3NsdWddLmQ4YjNmNWM0NTcxN2RiNzZjMjQwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdsb2JhbFBvc3RDc3MgPSBgXHJcbntcclxuICAgIHdpZHRoOjgwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgXHJcbn1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQb3N0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLmJhY2tncm91bmQyfTtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUG9zdFRpdGxlID0gc3R5bGVkLmRpdmBcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIDEyMS41N2RlZyxcclxuICAgICNmZmZmZmYgMTguNzclLFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY2KSA2MC4xNSVcclxuICApO1xyXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5wcmltYXJ5MX07XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQb3N0SGVhZGVyID0gc3R5bGVkLmRpdmBgO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBvc3RUYWdzID0gc3R5bGVkLmFgXHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgJjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5gO1xyXG5leHBvcnQgY29uc3QgUG9zdERhdGUgPSBzdHlsZWQuc3BhbmBcclxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgZm9udC1zaXplOiAwLjdlbTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQb3N0RXhjZXJwdCA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBsaW5lLWhlaWdodDogMnJlbTtcclxuICBtYXgtaGVpZ2h0OiA4cmVtO1xyXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQb3N0UHJldmlvdXNCdG4gPSBzdHlsZWQuYWBcclxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICBtYXJnaW4tdG9wOjJyZW07XHJcbiAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMuYnV0dG9uMn07XHJcbiAgZm9udC1zaXplOjEuNWVtO1xyXG4gICY6dmlzaXRlZCB7XHJcbiAgICBjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5idXR0b24yfTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkUGFyYWdyYXBoID0gc3R5bGVkLnBgXHJcbm1hcmdpbjppbml0aWFsO1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkSGVhZGVyMSA9IHN0eWxlZC5oMWBcclxubWFyZ2luOjEuNXJlbTtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZEhlYWRlcjIgPSBzdHlsZWQuaDJgXHJcbm1hcmdpbjoxLjVyZW07XHJcbmBcclxuZXhwb3J0IGNvbnN0IFN0eWxlZEhlYWRlcjMgPSBzdHlsZWQuaDJgXHJcbm1hcmdpbjoxLjVyZW07XHJcbmAiXSwic291cmNlUm9vdCI6IiJ9