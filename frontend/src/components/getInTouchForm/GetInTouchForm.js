import React, { useState } from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";

const topics = ["Press", "Partnership", "Feedback", "Other"];

const GetInTouchForm = () => {
  const [status, setStatus] = useState("Submit");
  const [sentMessage, setSentMessage] = useState(false);
  const [topicChosen, setTopicChosen] = useState("");

  const handleTopicChoice = (event) => {
    event.preventDefault();
    setTopicChosen(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;

    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
      topicChosen,
    };
    let response = await fetch("http://localhost:8080/get-in-touch", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    setSentMessage(result.status);
    setTopicChosen("");
  };
  return (
    <SendMessageForm>
      {sentMessage ? (
        <div>
          {sentMessage === "SENT" && (
            <p>THANK YOU! WE'LL GET BACK TO YOU ASAP</p>
          )}
          {sentMessage === "ERROR" && (
            <p>SOMETHING WENT WRONG. TRY AGAIN PLEASE</p>
          )}
          <button onClick={() => setSentMessage(false)}>
            sent another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Get In Touch</h2>
          <div>
            <label htmlFor="name">Full name </label>
            <input type="text" id="name" required />
          </div>
          <div>
            <label htmlFor="email">Email </label>
            <input type="email" id="email" required />
          </div>
          <div>
            <label htmlFor="topic">Topic </label>
            <select onChange={handleTopicChoice} required>
              <option></option>
              {topics.map((element) => (
                <option key={nanoid()} id="topic">
                  {element}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="message">Your Message </label>
            <textarea id="message" required />
          </div>
          <button type="submit">{status}</button>
        </form>
      )}
    </SendMessageForm>
  );
};

export default GetInTouchForm;

// const Pr = styled.div`
// height: 20px;
// background-color: yellow;
// text-align: center;
// `
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
