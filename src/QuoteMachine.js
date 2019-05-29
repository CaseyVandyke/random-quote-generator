import React, { Component } from "react";

class QuoteMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      randomNumber: 0,
      clicked: false
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
        //console.log(this.state.quotes);
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
        <button onClick={this.handleClick}>Random Quote</button>
      </div>
    );
  }
}

export default QuoteMachine;

/* <div className="quote-container">
        {quotes.map((quote, i) => (
          <div className="quote-center" key={i}>
            <h1 className="quote">{quote.quote}</h1>
            <p className="quote-author">{quote.author}</p>
            <ul>
              <li>twitter icon</li>
              <li>tumbler icon</li>
            </ul>
          </div>
        ))}
      </div>

      */
