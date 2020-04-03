import React, { Component } from "react";
import Navbar from "./Navbar";
import Form from "./Form";
import PageContent from "./PageContent";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Form />
      </>
    );
  }
}

export default App;
