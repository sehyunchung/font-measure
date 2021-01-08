let title = {
  open Css
  style(list{
    color("fff"->hex),
    fontFamily(
      #custom(
        `
    -apple-system,system-ui,
    BlinkMacSystemFont,
    "Segoe UI", Roboto,
    "Helvetica Neue",
    Arial,
    sans-serif
  `,
      ),
    ),
    textAlign(center),
    fontSize(3.->rem),
  })
}

@react.component
let make = (~children) => <h1 className=title> children </h1>
