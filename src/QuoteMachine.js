import React, { Component } from "react";

class QuoteMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: []
    };
  }

  callAPI() {
    fetch("http://localhost:4000/api/quotes").then(res =>
      res.json().then(json => {
        this.setState({
          quotes: json
        });
      })
    );
  }

  componentDidMount() {
    this.callAPI();
  }
  render() {
    const { quotes } = this.state;
    return (
      <div className="quote-container">
        {quotes.map((quote, i) => (
          <div className="quote-center" key={i}>
            <h1 className="quote">{quote.quote}</h1>
            <p className="quote-author">{quote.author}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default QuoteMachine;
