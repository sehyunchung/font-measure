@react.component
let make = () => {
  let (value, setValue) = React.useState(() => "hello")

  <React.Fragment>
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
      className=%tw("text-xl")
    />
    <div> {value->React.string} </div>
  </React.Fragment>
}
