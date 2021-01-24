import React, { useState } from "react";
import styled from "styled-components";

const Subscribe = () => {
  const [status, setStatus] = useState("Submit");
  const [email, setEmail] = useState("");
  const [sentMessage, setSentMessage] = useState(false);
  const [showSubscribeComponent, setShowSubscribeComponent] = useState(true);

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("Sending...");

    let details = {
      email: email,
    };
    console.log(details);

    let response = await fetch(`http://localhost:3001/subscribe`, {
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
      {showSubscribeComponent === true && (
        <div>
          {sentMessage ? (
            <div>

            {sentMessage === "ERROR" && (
                <>
                  <p>SOMETHING WENT WRONG</p>
                  <button onClick={() => setSentMessage('SENT')}>
                    TRY AGAIN PLEASE
                  </button>
                </>
              )}


              {sentMessage === "SENT" && (
                <div>
                  <p>THANK YOU FOR SUBSCRIBING!</p>
                  <button onClick={() => setShowSubscribeComponent(false)}>
                    Close
                  </button>
                </div>
              )}
              
            </div>


            
          ) : (
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email">Please enter email: </label>
                <input id="email" onChange={handleChange} type="email" />
              </div>
              <button type="submit">{status}</button>
            </form>
          )}
        </div>
      )}
    </SendMessageForm>
  );
};

export default Subscribe;

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
