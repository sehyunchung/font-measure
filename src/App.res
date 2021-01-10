@react.component
let make = () => {
  let (value, setValue) = React.useState(() => "top")

  <main className=%tw("font-mono p-4")>
    <Title> {"font-measure"->React.string} </Title>
    <form className=%tw("flex items-center mt-4")>
      <label className=%tw("text-lg mr-1") htmlFor="origin"> {"origin:"->React.string} </label>
      <input
        className=%tw("text-lg text-gray-800 border border-gray-300 p-1")
        id="origin"
        type_="text"
        autoFocus=true
        value={value}
        placeholder="top"
        onChange={ev => {
          setValue(_ => ReactEvent.Form.target(ev)["value"])
        }}
      />
    </form>
  </main>
}
