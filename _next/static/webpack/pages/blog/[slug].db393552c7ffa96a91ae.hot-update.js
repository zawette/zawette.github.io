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
/* harmony export */   "PostPreviousBtn": function() { return /* binding */ PostPreviousBtn; }
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
})(["color:", ";font-size:1.5em;&:visited{color:", ";}"], function (props) {
  return props.theme.colors.button2;
}, function (props) {
  return props.theme.colors.button2;
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQmxvZy9Qb3N0L1Bvc3RTdHlsZXMuanMiXSwibmFtZXMiOlsiR2xvYmFsUG9zdENzcyIsIlBvc3RDb250YWluZXIiLCJzdHlsZWQiLCJwcm9wcyIsInRoZW1lIiwiY29sb3JzIiwiYmFja2dyb3VuZDIiLCJQb3N0VGl0bGUiLCJwcmltYXJ5MSIsImJyZWFrcG9pbnRzIiwibWQiLCJzbSIsIlBvc3RIZWFkZXIiLCJQb3N0VGFncyIsIlBvc3REYXRlIiwiUG9zdEV4Y2VycHQiLCJQb3N0UHJldmlvdXNCdG4iLCJidXR0b24yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxhQUFhLHdEQUFuQjtBQVFBLElBQU1DLGFBQWEsR0FBR0MscUVBQUg7QUFBQTtBQUFBO0FBQUEsNERBQ0osVUFBQ0MsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxXQUE5QjtBQUFBLENBREksQ0FBbkI7QUFNQSxJQUFNQyxTQUFTLEdBQUdMLHFFQUFIO0FBQUE7QUFBQTtBQUFBLGtPQVNYLFVBQUNDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkcsUUFBOUI7QUFBQSxDQVRXLEVBV1gsVUFBQ0wsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZSyxXQUFaLENBQXdCQyxFQUFuQztBQUFBLENBWFcsRUFjWCxVQUFDUCxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlLLFdBQVosQ0FBd0JFLEVBQW5DO0FBQUEsQ0FkVyxDQUFmO0FBa0JBLElBQU1DLFVBQVUsR0FBR1YscUVBQUg7QUFBQTtBQUFBO0FBQUEsUUFBaEI7QUFFQSxJQUFNVyxRQUFRLEdBQUdYLG1FQUFIO0FBQUE7QUFBQTtBQUFBLDRGQUFkO0FBUUEsSUFBTVksUUFBUSxHQUFHWixzRUFBSDtBQUFBO0FBQUE7QUFBQSwwQ0FBZDtBQUtBLElBQU1hLFdBQVcsR0FBR2IscUVBQUg7QUFBQTtBQUFBO0FBQUEsNE1BQWpCO0FBYUEsSUFBTWMsZUFBZSxHQUFHZCxtRUFBSDtBQUFBO0FBQUE7QUFBQSwwREFDakIsVUFBQ0MsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CWSxPQUE5QjtBQUFBLENBRGlCLEVBSWYsVUFBQ2QsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CWSxPQUE5QjtBQUFBLENBSmUsQ0FBckIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZy9bc2x1Z10uZGIzOTM1NTJjN2ZmYTk2YTkxYWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgR2xvYmFsUG9zdENzcyA9IGBcclxue1xyXG4gICAgd2lkdGg6ODAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBcclxufVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBvc3RDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMuYmFja2dyb3VuZDJ9O1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQb3N0VGl0bGUgPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgMTIxLjU3ZGVnLFxyXG4gICAgI2ZmZmZmZiAxOC43NyUsXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjYpIDYwLjE1JVxyXG4gICk7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLnByaW1hcnkxfTtcclxuICBmb250LXNpemU6IDJlbTtcclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBvc3RIZWFkZXIgPSBzdHlsZWQuZGl2YGA7XHJcblxyXG5leHBvcnQgY29uc3QgUG9zdFRhZ3MgPSBzdHlsZWQuYWBcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgZm9udC1zaXplOiAwLjdlbTtcclxuICAmOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBQb3N0RGF0ZSA9IHN0eWxlZC5zcGFuYFxyXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICBmb250LXNpemU6IDAuN2VtO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBvc3RFeGNlcnB0ID0gc3R5bGVkLmRpdmBcclxuICBmb250LXNpemU6IDFlbTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xyXG4gIG1heC1oZWlnaHQ6IDhyZW07XHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBvc3RQcmV2aW91c0J0biA9IHN0eWxlZC5hYFxyXG4gIGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLmJ1dHRvbjJ9O1xyXG4gIGZvbnQtc2l6ZToxLjVlbTtcclxuICAmOnZpc2l0ZWQge1xyXG4gICAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMuYnV0dG9uMn07XHJcbiAgfVxyXG5gO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9