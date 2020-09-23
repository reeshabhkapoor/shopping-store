import React, { forwardRef } from "react";
import CheckCircleTwoToneIcon from "@material-ui/icons/CheckCircleTwoTone";
import "./ProductMessage.css";
import CheckIcon from "./images/checkIcon.png";

const ProductMessage = forwardRef(({ title, addRemoveMsg }) => {
  return (
    <div className="productMessage">
      <h4>{title}</h4>
      <div className="productMessage__addText">
        <p>{addRemoveMsg}</p>
        <img className="checkIcon" src={CheckIcon} alt="check" />
      </div>
    </div>
  );
});

export default ProductMessage;
