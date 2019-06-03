import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import Home from "./containers/Home/";
import Matches from "./containers/Matches/";
import { Flex } from "grid-styled";
require("dotenv").config();

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <Flex style={{ flexDirection: "column" }} className="App">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/matches" component={Matches} />
            </Switch>
          </Flex>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
