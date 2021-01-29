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

  getDataFromForm = (data) => {
    console.log("Hello from context", data);

    this.setState({
      amount: data.amount,
      name: data.name,
      email: data.email,
      phone: data.phone,
      address: data.address,
      city: data.city,
      state: data.state,
      country: data.country,
      postcode: data.postcode,
      message: data.message,
      totalOrder: data.totalOrder,
    });
  };

  render() {
    return (
      <Context.Provider
        value={{
          //same function as above getDataFromForm : this.getDataFromForm
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
