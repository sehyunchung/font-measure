

import * as Css from "bs-css-emotion/src/Css.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";

var title = Curry._1(Css.style, {
      hd: Css.fontFamily({
            NAME: "custom",
            VAL: "\n    -apple-system,system-ui,\n    BlinkMacSystemFont,\n    \"Segoe UI\", Roboto,\n    \"Helvetica Neue\",\n    Arial,\n    sans-serif\n  "
          }),
      tl: {
        hd: Css.textAlign(Css.center),
        tl: {
          hd: Css.fontSize(Css.rem(3)),
          tl: /* [] */0
        }
      }
    });

function Title(Props) {
  var children = Props.children;
  return React.createElement("h1", {
              className: title
            }, children);
}

var make = Title;

export {
  title ,
  make ,
  
}
/* title Not a pure module */
