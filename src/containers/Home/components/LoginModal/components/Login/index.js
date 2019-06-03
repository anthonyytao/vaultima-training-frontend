import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Title, LineInput, SubmitButton, SecondaryOptionText } from "./styles";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  onChange = (key, e) => {
    this.setState({ [key]: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <Title>Login</Title>
        <LineInput
          placeholder="Email"
          onChange={e => this.onChange("email", e)}
        />
        <LineInput
          placeholder="Password"
          onChange={e => this.onChange("password", e)}
          type="password"
        />
        <Link to="/matches">
          <SubmitButton>Login</SubmitButton>
        </Link>
        <SecondaryOptionText onClick={this.props.changeMode}>
          Or Register
        </SecondaryOptionText>
      </React.Fragment>
    );
  }
}

export default Login;
