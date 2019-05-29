import React, { Component } from "react";
import QuoteButon from "./QuoteButton";

class QuoteMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      randomNumber: 0
    };
  }

  callAPI() {
    fetch("http://localhost:4000/api/quotes").then(res =>
      res.json().then(json => {
        this.setState({
          quotes: json
        });
        const Random = Math.floor(Math.random() * this.state.quotes.length);
        console.log("random number", Random);
        this.setState({
          randomNumber: Random
        });
      })
    );
  }

  componentDidMount() {
    this.callAPI();
  }

  handleClick = () => {
    const Random = Math.floor(Math.random() * this.state.quotes.length);
    this.setState({
      clicked: true,
      randomNumber: Random
    });
  };

  render() {
    console.log(this.state.randomNumber);
    console.log(this.state.quotes.length);

    const { quotes } = this.state;
    console.log(quotes);
    return (
      <div className="quote-container">
        <h1>
          {this.state.quotes.length || this.state.clicked
            ? this.state.quotes[this.state.randomNumber].quote
            : "Loading ..."}
        </h1>
        <QuoteButon handleClick={this.handleClick} />
      </div>
    );
  }
}

export default QuoteMachine;
