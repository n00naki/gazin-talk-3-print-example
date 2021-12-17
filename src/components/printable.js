import React from "react";
import "./printable.css";

export const Printable = (props) => {
  if (props.isPrintable) {
    return <div className="print">{props.children}</div>;
  }

  return <div className="no-print">{props.children}</div>;
};
