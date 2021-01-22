import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const [sentMessage, setSentMessage] = useState(false);
  // const [buttonDefault, setButton] = useState("Initial");

  ///////////////// upload files
  const [filesToUpload, setFilesToUpload] = useState(null);

  const onChangeHandler = (event) => {
    console.log(event.target.files);
    setFilesToUpload(event.target.files);
  };

  const onClickHandler = () => {
    const data = new FormData();
    for (let i = 0; i < filesToUpload.length; i++) {
      data.append("file", filesToUpload[i]);
    }

    axios
      .post("http://localhost:3001/upload", data, {
        // receive two    parameter endpoint url ,form data
      })
      .then(
        (res) => {
          console.log(res.statusText, "FILE UPLOADED");
        },
        (error) => {
          console.log(error, "FILE NOT UPLOADED");
        }
      );
  };
  ////////////////////

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    // setButton("Sending");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:3001/contact", {
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
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required />
          </div>

          <div>
            <label>Upload Your File </label>
            <input
              type="file"
              name="file"
              multiple // for multiple files upload
              onChange={onChangeHandler}
            />
            <button type="button" onClick={onClickHandler}>
              Upload
            </button>
          </div>

          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" required />
          </div>
          <button type="submit">{status}</button>
        </form>
      )}
    </SendMessageForm>
  );
};

export default ContactForm;

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
