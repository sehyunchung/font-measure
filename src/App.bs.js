

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Title$FontMeasure from "./ui/Title/Title.bs.js";

function App(Props) {
  var match = React.useState(function () {
        return "top";
      });
  var setValue = match[1];
  return React.createElement("main", {
              className: "font-mono p-4"
            }, React.createElement(Title$FontMeasure.make, {
                  children: "font-measure"
                }), React.createElement("form", {
                  className: "flex items-center mt-4"
                }, React.createElement("label", {
                      className: "text-lg mr-1",
                      htmlFor: "origin"
                    }, "origin:"), React.createElement("input", {
                      className: "text-lg text-gray-800 border border-gray-300 p-1",
                      id: "origin",
                      autoFocus: true,
                      placeholder: "top",
                      type: "text",
                      value: match[0],
                      onChange: (function (ev) {
                          return Curry._1(setValue, (function (param) {
                                        return ev.target.value;
                                      }));
                        })
                    })));
}

var make = App;

export {
  make ,
  
}
/* react Not a pure module */
