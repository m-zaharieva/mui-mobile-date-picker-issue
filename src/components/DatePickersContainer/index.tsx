import React from "react";
import  "./date-pickers-container.css";

const DatePickersContainer: React.FC<any> = ({ children }) => {
  return <div className={"date-pickers"}>{children}</div>;
};

export default DatePickersContainer;
