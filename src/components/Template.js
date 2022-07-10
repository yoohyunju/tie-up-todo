import React from "react";
import "./Template.css"

const Template = ({children, todoLength}) => {
  return (
    <div className="template">
      <div className="title">tie-U:p </div>
      {/* <div className="tasks">tasks: {todoLength}</div> */}
      <div>{children}</div>
    </div>
  );
};

export default Template;