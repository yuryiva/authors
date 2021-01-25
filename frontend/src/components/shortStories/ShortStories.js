import React from "react";
import ContactForm from "../contactForm/ContactForm";
import PreOrderForm from "../preOrderForm/PreOrderForm";
import Subscribe from "../subscribeForm/Subscribe";


export default function ShortStories() {
  return (
    <div>
      <h3>This is the Short stories page</h3>
      <hr />
      <ContactForm />
      <hr/>
      <Subscribe />
      <hr/>
      <PreOrderForm />
    </div>
  );
}
