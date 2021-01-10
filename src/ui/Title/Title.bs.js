

import * as React from "react";

function Title(Props) {
  var children = Props.children;
  return React.createElement("h1", {
              className: "font-mono text-5xl font-extrabold"
            }, children);
}

var make = Title;

export {
  make ,
  
}
/* react Not a pure module */
