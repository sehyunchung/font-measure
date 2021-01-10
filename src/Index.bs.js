'use strict';

var React = require("react");
var ReactDom = require("react-dom");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var App$FontMeasure = require("./App.bs.js");

var rootElement = document.querySelector("#root");

if (rootElement == null) {
  console.log("#root element not found");
} else {
  ReactDom.render(React.createElement(App$FontMeasure.make, {}), rootElement);
}

var rootElement$1 = (rootElement == null) ? undefined : Caml_option.some(rootElement);

exports.rootElement = rootElement$1;
/* rootElement Not a pure module */
