import { Colors } from "../globalVariables";
import "./inputField.css";
import React from "react";

export interface InputFieldProps {
  type: "text" | "number" | "search";
  placeholder?: string;
}

const InputField = (props: InputFieldProps) => {
  const baseStyle = {
    border: "1px solid transparent",
    backgroundColor: Colors.graySecondary,
    borderRadius: "10px",
    padding: "5px 10px 5px 10px",
  };

  return (
    <input
      id="darwinKit-inputField"
      autoComplete={props.type === "search" ? "off" : "unset"}
      style={baseStyle}
      {...props}
    />
  );
};

export default InputField;
