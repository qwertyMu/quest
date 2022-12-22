import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import { CssBaseline } from "@mui/material";

import NavigationBar from "./components/navigation/NavigationBar";
import NavigationContainer from "./components/navigation/NavigationContainer";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{ height: "100%", backgroundColor: "#1a1b21" }}
      >
        <meta name="viewport" content="initial-scale=1, width=device-width" />

        <CssBaseline />
        <BrowserRouter>
          <NavigationBar />
          <NavigationContainer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
