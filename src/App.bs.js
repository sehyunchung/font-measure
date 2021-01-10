

import * as Css from "bs-css-emotion/src/Css.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Title$FerrettoStatus from "./ui/Title/Title.bs.js";

var wrapper = Curry._1(Css.style, {
      hd: Css.padding(Css.zero),
      tl: {
        hd: Css.margin(Css.zero),
        tl: {
          hd: Css.height(Css.pct(100)),
          tl: {
            hd: Css.width(Css.pct(100)),
            tl: {
              hd: Css.overflow(Css.auto),
              tl: {
                hd: Css.display("flex"),
                tl: {
                  hd: Css.justifyContent(Css.center),
                  tl: {
                    hd: Css.alignItems(Css.center),
                    tl: {
                      hd: Css.flexDirection(Css.column),
                      tl: {
                        hd: Css.color(Css.hex("000")),
                        tl: /* [] */0
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    });

Curry._2(Css.$$global, "html, body, #root", {
      hd: Css.padding(Css.zero),
      tl: {
        hd: Css.margin(Css.zero),
        tl: {
          hd: Css.height(Css.pct(100)),
          tl: {
            hd: Css.width(Css.pct(100)),
            tl: /* [] */0
          }
        }
      }
    });

Curry._2(Css.$$global, "*", {
      hd: Css.boxSizing("borderBox"),
      tl: /* [] */0
    });

var Styles = {
  wrapper: wrapper
};

function App(Props) {
  var match = React.useState(function () {
        return "hello";
      });
  var setValue = match[1];
  var value = match[0];
  return React.createElement("div", {
              className: wrapper
            }, React.createElement(Title$FerrettoStatus.make, {
                  children: "font-measure"
                }), React.createElement("input", {
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

export {
  Styles ,
  make ,
  
}
/* wrapper Not a pure module */
