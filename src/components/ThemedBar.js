import React from "react";
import ThemeContext from "../theme-context";

const ThemedBar = () => {
  return (
    <ThemeContext.Consumer>
      {theme => {
        // console.log (theme)
        return (
          <div
            className="alert mt-5"
            style={{ backgroundColor: theme.bgColor,  color:theme.color,}}
          > Demo
          < button className={theme.classname}>Demo Button</button>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  ); 
};

export default ThemedBar;
