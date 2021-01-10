'use strict';

var React = require("react");

function Title(Props) {
  var children = Props.children;
  return React.createElement("h1", {
              className: "text-5xl font-black"
            }, children);
}

var make = Title;

exports.make = make;
/* react Not a pure module */
