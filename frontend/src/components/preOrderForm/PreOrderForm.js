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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { amount, name, address, email, phone, message } = e.target.elements;

    let details = {
      amount: amount.value,
      name: name.value,
      address: address.value,
      email: email.value,
      phone: phone.value,
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
    <SendMessageWrapper>
      {sentMessage ? (
        <ResponseDiv>
          {sentMessage === "SENT" && (
            <p>THANK YOU FOR THE PREORDER! WE'LL GET BACK TO YOU ASAP</p>
          )}
          {sentMessage === "ERROR" && (
            <p>SOMETHING WENT WRONG. TRY AGAIN PLEASE</p>
          )}
          <button onClick={() => setSentMessage(false)}>
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
          <div>TOTAL EUR: {totalOrder}</div>
          <div>
            <label htmlFor="name">Full name:</label>
            <input type="text" id="name" required />
          </div>
          <div>
            <label htmlFor="address">Postal address:</label>
            <input type="text" id="address" required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required />
          </div>
          <div>
            <label htmlFor="phone">Phone number including country code:</label>
            <input type="tel" id="phone" required />
          </div>
          <div>
            <label htmlFor="message">Any additional info:</label>
            <textarea id="message" />
          </div>
          <button type="submit">{status}</button>
        </SentMessageForm>
      )}
    </SendMessageWrapper>
  );
};

export default PreOrderForm;

const SendMessageWrapper = styled.div`
  width: 40%;
  height: 40%;
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  margin: auto;

  padding: 20px;

  border: 2px solid gray;
  button {
    border-radius: 5px;
    width: 20%;
    height: 40px;
    text-align: center;
    background-color: white;
    border: 2px solid grey;
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
  text-align: center;

  h5 {
    margin-bottom: 10px;
  }
  div {
    margin-bottom: 10px;
  }
  input {
    width: 90%;
    height: 20px;
    border: 0;
    border-bottom: 1px solid black;
    // background-color: lightgray;
    margin: 20px 0;
    text-decoration: 0;
    outline: none;
    cursor: pointer;
    font-size: 18px;
  }

  input:hover {
    background-color: rgba(192, 192, 192, 0.3);
  }
`;

const ResponseDiv = styled.div`
  height: 80%;
  button {
    height: 80%;
    width: 50%;
  }
`;

// const SendMessageButton = styled.button`
// font-size: ${({ Initial }) => Initial ? '50px': '20px'}
// `;
