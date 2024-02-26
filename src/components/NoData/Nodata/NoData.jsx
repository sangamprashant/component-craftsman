import React from "react";
import "./NoData.css";

export const NoData = ({ label }) => {
  return (
    <div className="component-craftsman-no-data">
      <p>{label}</p>
    </div>
  );
};
