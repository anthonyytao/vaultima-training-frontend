import React, { Component } from "react";
import { Title, LineInput, SubmitButton, SecondaryOptionText } from "./styles";

class Register extends Component {
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
        <Title>Register</Title>
        <LineInput
          placeholder="Email"
          onChange={e => this.onChange("email", e)}
        />
        <LineInput
          placeholder="Password"
          onChange={e => this.onChange("password", e)}
          type="password"
        />
        <SubmitButton>Get Started</SubmitButton>
        <SecondaryOptionText onClick={this.props.changeMode}>
          Or Login
        </SecondaryOptionText>
      </React.Fragment>
    );
  }
}

export default Register;
