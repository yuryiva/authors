import React, { Component } from "react";

export const Context = React.createContext();

class Provider extends Component {
  state = {
    // Add state properties
    amount: 0,
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    country: "",
    postcode: "",
    message: "",
    totalOrder: 0,
  };

  //   Component did mount section
  componentDidMount() {}

  //   Methods section

  //preOrderForm function in charge of updating state..

  getDataFromForm = () =>
    this.setState({
      amount: this.state.amount,
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      country: this.state.country,
      postcode: this.state.postcode,
      message: this.state.message,
      totalOrder: this.state.totalOrder,
    });

  render() {
    return (
      <Context.Provider
        value={{
          //same fucntion as above getDataFromForm : this.getDataFromForm
          getDataFromForm: this.getDataFromForm,
          state: this.state,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Provider;
