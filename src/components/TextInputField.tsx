import React from "react";

function TextInputField({ ...props }) {
  console.log("TextInputField.props");
  console.log(props);
  const [inputVal, setStateInputVal] = React.useState("") as any;
  const onChangeInputHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStateInputVal(e.target.value);
  };
  return (
    <>
      <input
        value={inputVal}
        placeholder={props?.firstName}
        onChange={onChangeInputHandle}
        style={{ display: "inline-flex" }}
      ></input>
      <p>{inputVal}</p>
    </>
  );
}

export default TextInputField;
