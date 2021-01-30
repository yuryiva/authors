import styled from "styled-components";
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import PreOrderForm from "../preOrderForm/PreOrderForm";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');
</style>;

export default function Books() {
  // const [showPreOrder, togglePreOrder] = useState(false);
  // const handlePreOrderToggle = () => {
  //   togglePreOrder(!showPreOrder);
  // };
  const bookPrice = 15.99;
  return (
    <PageWrapper>
      <BookWrapper>
        <BookImg>
          <img
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQYFM7A8Fn0G23_-MxQ4kzKkxsR3qUh7Gv-wYYjgSB8oYugldi_"
            alt="book"
          />
        </BookImg>

        <BookDescription>
          <h3>Stories of Hope</h3>

          <p>
            Heather Morris's extraordinary talents as a listener led Lale
            Sokolov to entrust her with his story - which she told as the
            bestselling novel THE TATTOOIST OF AUSCHWITZ and its follow-up,
            CILKA'S JOURNEY. Now she shares her inspiring voyage through
            writing, exploring how she learned to really listen to the stories
            people told her, some of which she has shared with millions of
            readers in her fiction. An inspiring manual for life, STORIES OF
            HOPE examines and explores Heather's extraordinary writing journey
            in the form of a series of tales of the remarkable people she has
            met, the incredible stories they have shared with her, and the
            lessons they hold for us all.
          </p>
        </BookDescription>
        <BookCheckOut>
          <h3>
            €<span>{bookPrice}</span>
          </h3>
          <p>By Heather Morris | January 22, 2021</p>
          <p>Paperback</p>
          <p>Category: Mystery</p>
          <p>Delivery in 2-5 working days.</p>
          <p>Eligible for free delivery with a 15% donation.</p>
          <Link to="/preOrderForm">
            <button>Pre-Order</button>
          </Link>
          {/* <button onClick={handlePreOrderToggle}>Pre-Order</button> */}
        </BookCheckOut>
      </BookWrapper>

      <ProductDetails>
        <h3>Product Details</h3>
        <h2> Stories of hope</h2>
        <p>ISBN</p>
        <p>Format</p>
        <p>Publisher</p>
        <p>No. of Pages</p>
        <p>Weight</p>
        <p>Language</p>
        <p>Dimensions</p>
      </ProductDetails>
      {/* {showPreOrder && <PreOrderFrom />} */}
    </PageWrapper>
  );
}
const ProductDetails = styled.div`
  width: 50%;
  margin: 100px;
  h3 {
    margin-bottom: 20px;
  }
  h2 {
    margin-bottom: 20px;
  }
  p {
    border-bottom: 1px lightgray solid;
    margin-bottom: 20px;
  }
`;
const PageWrapper = styled.div``;
const BookWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  margin: 20px;
  font-family: "Space Mono", monospace;
`;
const BookImg = styled.div`
  img {
    width: 360px;
    height: 500px;
  }
  margin: 40px;
`;
const BookDescription = styled.div`
  width: 400px;
  margin: 0 40px;
  h3 {
    font-size: 30px;
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;
const BookCheckOut = styled.div`
  height: 470px;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  margin: 40px;

  text-align: left;
  width: 350px;
  button {
    border-radius: 5px;
    width: 100%;
    height: 50px;
    text-align: center;
    background-color: white;
    border: 2px solid rgb(33, 105, 219);
    font-size: 20px;
    color: rgb(33, 105, 219);
    outline: none;
    // margin-top: 20px 20px;
  }
  button:hover {
    background-color: rgb(33, 105, 219);
    color: white;
  }
  border: 1px lightgray solid;
  border-radius: 10px;
  h3 {
    padding: 10px;
    border-bottom: 1px black solid;
    color: red;
    font-size: 20px;
    display: flex;
    align-item: center;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  p {
    border-bottom: 1px black solid;
    margin-top: 15px;
    margin-bottom: 15px;
  }
`;
