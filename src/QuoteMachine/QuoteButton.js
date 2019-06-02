import React from "react";

const QuoteButton = props => {
  return (
    <div className="button-container">
      <button className="button-style" onClick={props.handleClick}>
        Random Quote
      </button>
    </div>
  );
};

export default QuoteButton;
