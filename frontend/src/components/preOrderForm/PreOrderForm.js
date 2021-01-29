//import hook for useContext
import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Context } from "../../context/Context";
import Checkout from "../payment/Checkout";

const PreOrderForm = () => {
  const [status, setStatus] = useState("Submit");
  const [sentMessage, setSentMessage] = useState(false);
  const [amountOfBooks, setAmountOfBooks] = useState(0);

  //storing context in variable that I named context, to have access to everyhing
  const context = useContext(Context);
  console.log(context);
  const bookPrice = 25;

  const handleChange = (event) => {
    const numberOfBooks = event.target.value;
    setAmountOfBooks(numberOfBooks);
  };

  const totalOrder = bookPrice * amountOfBooks;

  const handleAnotherOrder = () => {
    setSentMessage(false);
    setAmountOfBooks(0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("Sending...");
    const {
      amount,
      name,
      email,
      phone,
      address,
      city,
      state,
      country,
      postcode,
      message,
    } = e.target.elements;

    let details = {
      amount: amount.value,
      name: name.value,
      email: email.value,
      phone: phone.value,
      address: address.value,
      city: city.value,
      state: state.value,
      country: country.value,
      postcode: postcode.value,
      message: message.value,
      totalOrder: totalOrder,
    };
    context.getDataFromForm(details);

    // details['totalOrder'] = totalOrder;

    // let response = await fetch(`http://localhost:8080/preorder`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json;charset=utf-8",
    //   },
    //   body: JSON.stringify(details),
    // });
    // setStatus("Submit");
    // let result = await response.json();
    // setSentMessage(result.status);
  };
  return (
    <SendMessageWrapper>
      {sentMessage ? (
        <ResponseDiv>
          {sentMessage === "SENT" && (
            <p>THANK YOU FOR THE PREORDER! WE'LL GET BACK TO YOU ASAP</p>
          )}
          {sentMessage === "ERROR" && (
            <p>SOMETHING WENT WRONG. TRY AGAIN PLEASE</p>
          )}
          <button onClick={() => handleAnotherOrder()}>
            Make another order
          </button>
        </ResponseDiv>
      ) : (
        <SentMessageForm onSubmit={handleSubmit}>
          <h5>PRICE PER BOOK: {bookPrice} EUR</h5>
          <div>
            <label htmlFor="amount">Amount of books</label>
            <input
              onChange={handleChange}
              type="number"
              id="amount"
              min="0"
              required
            />
          </div>

          <h5>TOTAL EUR: {totalOrder}</h5>

          <div>
            <label htmlFor="name">Full name:</label>
            <input type="text" id="name" required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required />
          </div>
          <div>
            <label htmlFor="phone">Phone number:</label>
            <input type="tel" id="phone" required />
          </div>
          <div>
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" required />
          </div>
          <div>
            <label htmlFor="city">City/town:</label>
            <input type="text" id="city" required />
          </div>
          <div>
            <label htmlFor="state">State:</label>
            <input type="text" id="state" />
          </div>
          <div>
            <label htmlFor="country">Country:</label>
            <input type="text" id="country" required />
          </div>
          <div>
            <label htmlFor="postcode">Post code/ZIP:</label>
            <input type="text" id="postcode" required />
          </div>
          <div>
            <label htmlFor="message">Additional info:</label>
            <textarea id="message" />
          </div>
          <SubmitDiv>
            <button type="submit">{status}</button>
          </SubmitDiv>
          <Checkout
            name={"Authors LLC."}
            description={"Book(s) you bought"}
            amount={4.99}
          />
        </SentMessageForm>
      )}
    </SendMessageWrapper>
  );
};

export default PreOrderForm;

const SendMessageWrapper = styled.div`
  width: 60%;
  //height: 40%;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  // margin: 20px;

  margin: auto;

  padding: 10px;

  border: 1px lightgray solid;
  button {
    border-radius: 5px;
    width: 35%;
    height: 40px;
    text-align: center;
    background-color: white;
    border: 1px lightgray solid;
    font-size: 20px;
    color: grey;
    outline: none;
    margin-top: 25px;
  }
  button:hover {
    background-color: lightgrey;
    color: white;
  }
`;

const SentMessageForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;
  label {
    width: 40%; m,
    margin-right: 30px;
    text-align: right;
    align-items: bottom;
  }
  textarea {
    height: 100px;
    width: 100%;
    margin-top: 10px;
  }
  h5 {
    margin-bottom: 5px;
  }
  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    // justify-content: right;
    flex-wrap: no wrap;
  }
  input {
    width: 100%;
    height: 30px;
    border: 0;
    border-bottom: 1px solid black;
    margin: 10px 0;
    text-decoration: 0;
    outline: none;
    cursor: pointer;
    font-size: 18px;
  }

  input:hover {
    background-color: rgba(192, 192, 192, 0.3);
  }
`;
// const PriceTotal = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   text-align: center;
// `;
const ResponseDiv = styled.div`
  height: 80%;
  button {
    height: 80%;
    width: 50%;
  }
`;
const SubmitDiv = styled.div`
  display: flex;
  justify-content: center;
`;
