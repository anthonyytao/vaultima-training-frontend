import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Title, LineInput, SubmitButton, SecondaryOptionText } from "./styles";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      gender: "male",
      animal: "dog",
      color: "red"
    };
  }

  handleOptionChange = (key, changeEvent) => {
    this.setState({
      [key]: changeEvent.target.value
    });
  };

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
        <div>What is your gender?</div>
        <form>
          <div className="form-check">
            <label>
              <input
                type="radio"
                name="react-tips"
                value="male"
                checked={this.state.gender === "male"}
                onChange={changeEvent =>
                  this.handleOptionChange("gender", changeEvent)
                }
                className="form-check-input"
              />
              Male
            </label>
          </div>
          <div className="form-check">
            <label>
              <input
                type="radio"
                name="react-tips"
                value="female"
                checked={this.state.gender === "female"}
                onChange={changeEvent =>
                  this.handleOptionChange("gender", changeEvent)
                }
                className="form-check-input"
              />
              Female
            </label>
          </div>
        </form>
        <div>What is your favorite animal?</div>
        <form>
          <div className="form-check">
            <label>
              <input
                type="radio"
                name="react-tips"
                value="dog"
                checked={this.state.animal === "dog"}
                onChange={changeEvent =>
                  this.handleOptionChange("animal", changeEvent)
                }
                className="form-check-input"
              />
              Dog
            </label>
          </div>
          <div className="form-check">
            <label>
              <input
                type="radio"
                name="react-tips"
                value="cat"
                checked={this.state.animal === "cat"}
                onChange={changeEvent =>
                  this.handleOptionChange("animal", changeEvent)
                }
                className="form-check-input"
              />
              Cat
            </label>
          </div>
        </form>
        <div>What is your favorite color?</div>
        <form>
          <div className="form-check">
            <label>
              <input
                type="radio"
                name="react-tips"
                value="red"
                checked={this.state.color === "red"}
                onChange={changeEvent =>
                  this.handleOptionChange("color", changeEvent)
                }
                className="form-check-input"
              />
              Red
            </label>
          </div>
          <div className="form-check">
            <label>
              <input
                type="radio"
                name="react-tips"
                value="blue"
                checked={this.state.color === "blue"}
                onChange={changeEvent =>
                  this.handleOptionChange("color", changeEvent)
                }
                className="form-check-input"
              />
              Blue
            </label>
          </div>
        </form>
        <Link to="/matches">
          <SubmitButton>Register</SubmitButton>
        </Link>
        <SecondaryOptionText onClick={this.props.changeMode}>
          Or Login
        </SecondaryOptionText>
      </React.Fragment>
    );
  }
}

export default Register;
