module Styles = {
  open Css

  let wrapper = style(list{
    padding(zero),
    margin(zero),
    height(100.->pct),
    width(100.->pct),
    overflow(auto),
    display(#flex),
    justifyContent(center),
    alignItems(center),
    flexDirection(column),
    color(`000`->hex),
  })

  global(
    `html, body, #root`,
    list{padding(zero), margin(zero), height(100.->pct), width(100.->pct)},
  )
  global(`*`, list{boxSizing(#borderBox)})
}

@react.component
let make = () => {
  let (value, setValue) = React.useState(() => "hello")

  <div className={Styles.wrapper}>
    <Title> {"font-measure"->React.string} </Title>
    <input
      type_="text"
      autoFocus=true
      value={value}
      placeholder="hey"
      onChange={ev => {
        let value = ReactEvent.Form.target(ev)["value"]
        setValue(_ => value)
      }}
    />
    <div> {value->React.string} </div>
  </div>
}
