import React, { useState } from "react";
// import { Progress } from "reactstrap";
import styled from "styled-components";
import axios from "axios";

const topics = ["topic1", "topic2", "topic3", "topic4", "topic5", "topic6"];

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const [sentMessage, setSentMessage] = useState(false);
  const [topicChosen, setTopicChosen] = useState(topics[0]);
  const [stateOfLoading, setStateOfLoading] = useState(0);
  const [uploadButton, setUploadButton] = useState("Upload");
  ///////////////// upload files
  const [filesToUpload, setFilesToUpload] = useState(null);

  const handleTopicChoice = (event) => {
    event.preventDefault();
    setTopicChosen(event.target.value);
    console.log(event.target.value);
  };

  const onChangeHandler = (event) => {
    console.log(event.target.files);
    console.log(event.target.files[0].name);
    setFilesToUpload(event.target.files);
  };

  const onClickHandler = () => {
    const data = new FormData();
    console.log(filesToUpload);
    console.log(stateOfLoading);
    for (let i = 0; i < filesToUpload.length; i++) {
      data.append("file", filesToUpload[i]); /////????data.append("file", filesToUpload[i], filesToUpload[i].name);
      console.log(data);
    }

    axios
      .post("http://localhost:8080/upload", data, {
        // receive two    parameter endpoint url ,form data
        onUploadProgress: (ProgressEvent) => {
          setStateOfLoading((ProgressEvent.loaded / ProgressEvent.total) * 100);
        },
      })
      .then(
        (res) => {
          console.log(res.statusText, "FILE UPLOADED");
          console.log(res);
          {
            setUploadButton("Uploaded");
          }
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
    const { name, email, message } = e.target.elements;

    const imageName = filesToUpload ? filesToUpload[0].name : "";
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
      filesToUpload,
      imageName: imageName,
      topicChosen,
    };
    let response = await fetch("http://localhost:8080/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    setSentMessage(result.status);
    setTopicChosen(topics[0]);
    setFilesToUpload(null);
    setStateOfLoading(0);
    setUploadButton("Upload");
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
            <label htmlFor="topic">Please pick a topic of your message:</label>
            <select onChange={handleTopicChoice}>
              <option>--Pick an Option--</option>
              {topics.map((element, index) => (
                <option key={index} id="topic" required>
                  {element}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="name">Full name:</label>
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
            {/* <div className="form-group">
              <Progress max="100" color="success" value={stateOfLoading}>
                {Math.round(stateOfLoading, 2)}%
              </Progress>
            </div> */}
            <button type="button" onClick={onClickHandler}>
              {uploadButton}
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
