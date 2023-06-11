import { Colors } from "../globalVariables";
import React from "react";

export interface ButtonProps {
  children?: any;
  size?: "md" | "lg" | "xl";
  type: "plain" | "gray" | "tinted" | "filled";
}

const Button = (props: ButtonProps) => {
  const plainButtonStyle = {
    backgroundColor: "transparent",
    border: "none",
    color: Colors.bluePrimary,
    padding:
      props.size === "md"
        ? "5px 10px"
        : props.size === "lg"
        ? "10px 20px"
        : props.size === "xl"
        ? "12px 20px"
        : "5px 10px",
    fontSize:
      props.size === "md"
        ? "13px"
        : props.size === "lg"
        ? "16px"
        : props.size === "xl"
        ? "19px"
        : "13px",
  };

  const grayButtonStyle = {
    ...plainButtonStyle,
    borderRadius:
      props.size === "lg" ? "50px" : props.size === "xl" ? "15px" : "50px",
    backgroundColor: Colors.graySecondary,
  };

  const tiltedButtonStyle = {
    ...grayButtonStyle,
    backgroundColor: Colors.blueTinted,
  };

  const filledButtonStyle = {
    ...grayButtonStyle,
    backgroundColor: Colors.bluePrimary,
    color: "#fff",
  };

  return (
    <button
      style={
        props.type === "plain"
          ? plainButtonStyle
          : props.type === "gray"
          ? grayButtonStyle
          : props.type === "tinted"
          ? tiltedButtonStyle
          : props.type === "filled"
          ? filledButtonStyle
          : plainButtonStyle
      }
    >
      {props.children}
    </button>
  );
};

export default Button;
