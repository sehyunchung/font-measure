'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Title$FontMeasure = require("./ui/Title/Title.bs.js");

function App(Props) {
  var match = React.useState(function () {
        return "hello";
      });
  var setValue = match[1];
  var value = match[0];
  return React.createElement(React.Fragment, {
              children: null
            }, React.createElement(Title$FontMeasure.make, {
                  children: "font-measure"
                }), React.createElement("input", {
                  className: "text-xl",
                  autoFocus: true,
                  placeholder: "hey",
                  type: "text",
                  value: value,
                  onChange: (function (ev) {
                      var value = ev.target.value;
                      return Curry._1(setValue, (function (param) {
                                    return value;
                                  }));
                    })
                }), React.createElement("div", undefined, value));
}

var make = App;

exports.make = make;
/* react Not a pure module */
