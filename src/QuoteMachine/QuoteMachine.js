import React, { Component } from "react";
import QuoteButon from "./QuoteButton";
import QuoteSocial from "./QuoteSocial";

/*

*/
class QuoteMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      randomNumber: 0,
      currentColor: 0,
      colors: [
        "#f39c12",
        "#fb6964",
        "#74a857",
        "#27ae60",
        "#332124",
        "#15a085",
        "#e64c3c",
        "#2b3e50"
      ]
    };
  }

  // Call to Node server
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

  // Mounts quotes array to the Dom
  componentDidMount() {
    this.callAPI();
  }
  // Change quote on click
  handleClick = () => {
    const Random = Math.floor(Math.random() * this.state.quotes.length);
    const randomColor = Math.floor(Math.random() * this.state.colors.length);
    this.setState({
      clicked: true,
      randomNumber: Random,
      currentColor: randomColor
    });
  };

  render() {
    console.log(this.state.colors);
    console.log(this.state.randomNumber);

    const { quotes } = this.state;
    console.log(quotes);
    return (
      <div
        className="quote-container"
        style={{ backgroundColor: this.state.colors[this.state.currentColor] }}
      >
        <h1>
          {this.state.quotes.length || this.state.clicked
            ? this.state.quotes[this.state.randomNumber].quote
            : "Loading ..."}
        </h1>
        <QuoteButon handleClick={this.handleClick} />
        <QuoteSocial />
      </div>
    );
  }
}

export default QuoteMachine;
