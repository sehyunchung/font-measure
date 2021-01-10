type metrics = [
  | #top
  | #descent
  | #ascent
  | #tittle
  | #upper
  | #capHeight
  | #lower
  | #xHeight
  | #middle
  | #median
  | #alphabetic
  | #baseline
  | #bottom
]

type options = {
  origin: metrics,
  fontSize: float,
  fontWeight: [
    | #num(int)
    | #thin
    | #extraLight
    | #light
    | #normal
    | #medium
    | #semiBold
    | #bold
    | #extraBold
    | #black
    | #lighter
    | #bolder
  ],
  tittle: string,
  descent: string,
  ascent: string,
  overshoot: string,
  upper: string,
  lower: string,
}

type result = {
  top: float,
  median: float,
  middle: float,
  bottom: float,
  alphabetic: float,
  baseline: float,
  upper: float,
  lower: float,
  capHeight: float,
  xHeight: float,
  ascent: float,
  descent: float,
  hanging: float,
  ideographic: float,
  lineHeight: float,
  overshoot: float,
  tittle: float,
}

let defaultOptions = {
  origin: #top,
  fontSize: 64.,
  fontWeight: #normal,
  tittle: "i",
  descent: "p",
  ascent: "h",
  overshoot: "O",
  upper: "H",
  lower: "x",
}

@bs.module("font-measure") @val
external measure: (~family: string, ~options: options) => result = "default"
