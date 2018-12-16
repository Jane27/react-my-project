import React, { Component } from "react";

import ThemeContext from "../theme-context";

import ThemedBar from "./ThemedBar";

const themes = {
  light: {
    classname: "btn btn-primary",
    bgColor: "#eeeeee",
    color: "#000"
  },
  dark: {
    classname: "btn btn-light",
    bgColor: "#222222",
    color: "#fff"
  }
};

class ThemeSwitcher extends Component {
  constructor(props) {
    super();
    this.state = {
      theme: "light"
    };
    /*********************** method 4: *****************************/
    // this.ChangeTheme = this.ChangeTheme.bind(this);
  }
   /*********************** method 1,4: *****************************/
  //  ChangeTheme(theme){
  //   this.setState({theme});
  // }

    /*********************** method 2: *****************************/
  // ChangeTheme(e) {
  //   console.log("ChangeTheme", e.target.text);
    
  //   this.setState({
  //     theme: e.target.text === "Light Theme" ? 'light' : 'dark'
  //   });
  // }

    /*********************** method 3: *****************************/
  ChangeTheme = (theme) => {
    // console.log("ChangeTheme", e.target.text);
    
    this.setState({theme});
  }
  render() {
    return (
      <ThemeContext.Provider value={themes[this.state.theme]}>
        <div>
          <a
            href="#theme-switcher"
            className="btn btn-light"
            /*********************** method 1: *****************************/
            // onClick={this.ChangeTheme.bind(this, "light")}

            /*********************** method 2: *****************************/
            // onClick={this.ChangeTheme.bind(this)}

            /*********************** method 3,4: *****************************/
            onClick={() => this.ChangeTheme('light')}
          >
            Light Theme
          </a>
          <a
            href="#theme-switcher"
            className="btn btn-secondary"
            onClick={() => this.ChangeTheme('dark')}
          >
            Dark Theme
          </a>
          <ThemedBar />
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default ThemeSwitcher;
