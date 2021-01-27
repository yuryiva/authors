import React from "react";
import StoriesShortcut from './StoriesShortcut';
import Instagram from './Instagram';
import JoinTheMovement from './Movement';
import OurImpact from "./OurImpact";
import styled from 'styled-components';
// import Journey from './Journey';

export default function LandingPage() {
  return (
    <div>
      <OurImpact />
      {/* <Journey /> */}
      <StoriesShortcut/>
      <JoinTheMovement/>
      <Instagram/>
    </div>
  );
}
