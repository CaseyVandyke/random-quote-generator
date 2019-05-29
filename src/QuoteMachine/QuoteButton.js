import React from "react";

const QuoteButton = props => {
  return (
    <div className="button-container">
      <button onClick={props.handleClick}>Random Quote</button>
    </div>
  );
};

export default QuoteButton;
