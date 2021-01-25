import React, { useState } from "react";
import styled from "styled-components";

const PreOrderForm = () => {
  const [status, setStatus] = useState("Submit");
  const [sentMessage, setSentMessage] = useState(false);
  const [amountOfBooks, setAmountOfBooks] = useState(0);

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
    // details['totalOrder'] = totalOrder;

    let response = await fetch(`http://localhost:8080/preorder`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    setSentMessage(result.status);
  };
  return (
    <SendMessageForm>
      {sentMessage ? (
        <div>
          {sentMessage === "SENT" && (
            <p>THANK YOU FOR THE PREORDER! WE'LL GET BACK TO YOU ASAP</p>
          )}
          {sentMessage === "ERROR" && (
            <p>SOMETHING WENT WRONG. TRY AGAIN PLEASE</p>
          )}
          <button onClick={() => handleAnotherOrder()}>
            Make another order
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
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
          <div>TOTAL EUR: {totalOrder}</div>
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
          <button type="submit">{status}</button>
        </form>
      )}
    </SendMessageForm>
  );
};

export default PreOrderForm;

const SendMessageForm = styled.div`
  width: 50%;
  height: 30%;
  display: flex;
  flex-direction: column;
  text-align: center;
  background: lightblue;

  border: 2px solid black;
`;

// const SendMessageButton = styled.button`
// font-size: ${({ Initial }) => Initial ? '50px': '20px'}
// `;
