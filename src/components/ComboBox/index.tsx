import React from "react";
import "./comboBox.css";

export interface ComboBoxProps {
  nullable?: true | false;
  options: Array<JSX.Element>;
  placeholder?: string;
}

const ComboBox = (props: ComboBoxProps) => {
  return (
    <select className="darwinKit-comboBox" {...props}>
      {props.nullable && (
        <option disabled selected>
          {props.placeholder}
        </option>
      )}
    </select>
  );
};

export default ComboBox;
