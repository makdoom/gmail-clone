import React from "react";
import "./emailSection.css";

const EmailSection = ({ Icon, title, color, isSelected }) => {
  return (
    <div
      className={`section ${isSelected && "section--selected"}`}
      style={{
        borderBottom: `3px solid ${color}`,
        color: `${isSelected && color}`,
      }}
    >
      <Icon fontSize="small" />
      <p>{title}</p>
    </div>
  );
};

export default EmailSection;
