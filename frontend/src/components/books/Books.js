import styled from "styled-components";
import React, { useState } from "react";
import PreOrderFrom from "../preOrderForm/PreOrderForm";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');
</style>;

export default function Books() {
  const [showPreOrder, togglePreOrder] = useState(false);
  const handlePreOrderToggle = () => {
    togglePreOrder(!showPreOrder);
  };

  return (
    <PageWrapper>
      <BookWrapper>
        <BookImg>
          <img
            src="https://imagessl7.casadellibro.com/a/l/t5/27/9788423357727.jpg"
            alt="book"
          />
        </BookImg>

        <BookDescription>
          <h3>Stories of Hope</h3>

          <p>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500, cuando un impresor (N. del T.
            persona que se dedica a la imprenta) desconocido usó una galería de
            textos y los mezcló de tal manera que logró hacer un libro de textos
            especimen. No sólo sobrevivió 500 años, sino que tambien ingresó
            como texto de relleno en documentos electrónicos, quedando
            esencialmente igual al original. Fue popularizado en los 60s con la
            creación de las hojas "Letraset", las cuales contenian pasajes de
            Lorem Ipsum, y más recientemente con software de autoedición, como
            por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem
            Ipsum.
          </p>
        </BookDescription>
        <BookCheckOut>
          <h3>$13.99</h3>
          <p>By Crisina and Sara | January 22, 2021</p>
          <p>Paperback</p>
          <p>Category: Mystery</p>
          <p>Delivery in 2-5 working days.</p>
          <p>Eligible for free delivery with a 15% donation.</p>
          {/* <button>Pre-Order</button> */}
          <button onClick={handlePreOrderToggle}>Pre-Order</button>
          {/* <button onClick={() => showPreOrder()}>Pre-Order</button> */}
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
      {showPreOrder && <PreOrderFrom />}
    </PageWrapper>
  );
}
const ProductDetails = styled.div`
  width: 50%;
  margin: 100px;
  p {
    border-bottom: 1px lightgray solid;
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
  }
`;
const BookCheckOut = styled.div`
  height: 450px;
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
  }
  p {
    border-bottom: 1px black solid;
  }
`;
