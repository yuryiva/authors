import React, { useState } from "react";
import { Progress } from "reactstrap";
import { ProgressBar } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";

const TellYourStoryForm = () => {
  const [status, setStatus] = useState("Submit");
  const [sentMessage, setSentMessage] = useState(false);
  const [stateOfLoading, setStateOfLoading] = useState(0);
  const [uploadButton, setUploadButton] = useState("Upload");
  ///////////////// upload files
  const [filesToUpload, setFilesToUpload] = useState(null);

  const onChangeHandler = (event) => {
    console.log(event.target.files);
    console.log(event.target.files[0].name);
    setFilesToUpload(event.target.files);
  };

  const onClickHandler = () => {
    const data = new FormData();
    if (filesToUpload !== null) {
      // console.log(filesToUpload);
      // console.log(stateOfLoading);
      for (let i = 0; i < filesToUpload.length; i++) {
        data.append("file", filesToUpload[i]); /////????data.append("file", filesToUpload[i], filesToUpload[i].name);
        console.log(data);
      }
      axios
        .post("http://localhost:8080/upload", data, {
          onUploadProgress: (ProgressEvent) => {
            setStateOfLoading(
              (ProgressEvent.loaded / ProgressEvent.total) * 100
            );
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
    } else {
      alert("Please choose a file to upload");
    }
  };
  ////////////////////

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, topic, message } = e.target.elements;

    const imageName = filesToUpload ? filesToUpload[0].name : "";
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
      filesToUpload,
      imageName: imageName,
      topic: topic.value,
    };
    let response = await fetch("http://localhost:8080/tell-your-story", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    setSentMessage(result.status);

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
          <h2>Tell Your Story</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here'.
          </p>
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
            <input type="text" id="topic" required />
          </div>
          <div>
            <label>Add File </label>
            <input
              type="file"
              name="file"
              // multiple- for multiple files upload
              onChange={onChangeHandler}
            />

            <ProgressBar>
              {stateOfLoading > 0 && Math.round(stateOfLoading, 2) + "%"}
            </ProgressBar>

            <button type="button" onClick={onClickHandler}>
              {uploadButton}
            </button>
          </div>

          <div>
            <label htmlFor="message">Your Story: </label>
            <textarea id="message" required />
          </div>
          <button type="submit">{status}</button>
        </form>
      )}
    </SendMessageForm>
  );
};

export default TellYourStoryForm;

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
