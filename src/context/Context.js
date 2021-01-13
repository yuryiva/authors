import React, { Component } from "react";

export const Context = React.createContext();

class Provider extends Component {
  state = {    
        // Add state properties
  };

//   Component did mount section
  componentDidMount() {
    
  }

//   Methods section




  render() {
    return (
      <Context.Provider
        value={{
          state: this.state,
          
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Provider;
