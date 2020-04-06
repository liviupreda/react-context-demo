import React, { CreateContext } from "react";

const ThemeContext = createContext();

class ThemeProvider extends Component {
  render() {
    <ThemeContext.Provider>{this.props.children}</ThemeContext.Provider>;
  }
}
