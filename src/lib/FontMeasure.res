type options = {
  origin: [#baseline | #top | #median],
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
external measure: (
  ~family: string,
  ~options: options,
) => {
  "top": float,
  "median": float,
  "middle": float,
  "bottom": float,
  "alphabetic": float,
  "baseline": float,
  "upper": float,
  "lower": float,
  "capHeight": float,
  "xHeight": float,
  "ascent": float,
  "descent": float,
  "hanging": float,
  "ideographic": float,
  "lineHeight": float,
  "overshoot": float,
  "tittle": float,
} = "default"
