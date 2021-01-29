import React from "react";
import TellYourStoryForm from "../tellYourStoryForm/TellYourStoryForm";
import PreOrderForm from "../preOrderForm/PreOrderForm";
import GetInTouchForm from "../getInTouchForm/GetInTouchForm";



export default function ShortStories() {
  return (
    <div>
      <h3>This is the Short stories page</h3>
      <hr />
      <TellYourStoryForm />
<hr/>
<GetInTouchForm />
      <hr/>
      
      <PreOrderForm />
    </div>
  );
}
