import React from "react";

function TextInputField({ ...props }) {
  const [inputVal, setStateInputVal] = React.useState("") as any;
  const onChangeInputHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStateInputVal(e.target.value);
  };

  console.log(props);
  return props?.buttonProps?.action?.type ? (
    <>
      <input
        value={inputVal}
        placeholder={props?.firstName}
        onChange={onChangeInputHandle}
        style={{ display: "inline-flex" }}
      ></input>
      <button
        type="submit"
        style={{ display: "inline-flex" }}
        onClick={() =>
          console.log(`Send API request to ${props?.buttonProps?.action?.url}`)
        }
      >
        {props?.buttonProps?.label}
      </button>
    </>
  ) : (
    <>
      <br />
      <input
        style={{ display: "inline-flex" }}
        value={inputVal}
        placeholder={props?.firstName}
        onChange={onChangeInputHandle}
      ></input>
      <br />
    </>
  );
}

export default TextInputField;
