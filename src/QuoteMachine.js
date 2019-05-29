import React, { Component } from "react";

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
      })
    );
  }

  handleClick = e => {
    const Random = Math.floor(Math.random() * this.state.quotes.length);
    console.log("random number", Random);
    //console.log(this.state.quotes);
    this.setState({
      quoteChange: Random
    });
  };

  handleSubmit = e => {};

  componentDidMount() {
    this.callAPI();
  }

  /*

  function random_item(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}

var items = [254, 45, 212, 365, 2543];
console.log(random_item(items));

  */
  render() {
    console.log(this.state.randomNumber);
    console.log(this.state.quotes.length);

    const { quotes, quoteChange } = this.state;
    console.log(quotes);
    return (
      <div className="quote-container">
        <h1>
          {this.state.quotes.length
            ? this.state.quotes[this.state.randomNumber].quote
            : "Loading ..."}
        </h1>
        <button onClick={this.handleClick}>Next</button>
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
