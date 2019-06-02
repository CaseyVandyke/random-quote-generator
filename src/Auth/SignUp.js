import React, { Component } from "react";
import axios from "axios";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      username: ""
    };
  }

  handleChange = e => {
    this.setState({
      username: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(`sign-up-form username: ${this.state.username}`);
    //request to server
    axios
      .post("/", {
        username: this.state.username
      })
      .then(res => {
        if (res.data) {
          console.log("successful signup");
          this.setState({
            redirectTo: "/login"
          });
        } else {
          console.log("Signup server error");
        }
      })
      .catch(err => {
        console.log(`Sign up error: + ${err}`);
      });
  };

  render() {
    return (
      <form action="#" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default SignUp;
