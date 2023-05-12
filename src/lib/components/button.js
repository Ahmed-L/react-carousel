import React from "react";
import "./button.css";

export const Button = (props) => {
  return (
    <button className={`${props.classname} h-1/2 w-1/2`} type={props.type}>
      {props.label}
    </button>
  );
};
