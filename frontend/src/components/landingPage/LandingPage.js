import React from "react";
import StoriesShortcut from './StoriesShortcut';
import Instagram from './Instagram';
import JoinTheMovement from './Movement';
import OurImpact from "./OurImpact";
import styled from 'styled-components';
// import Journey from './Journey';

export default function LandingPage() {
  return (
    <MainContainer>
      <OurImpact />
      {/* <Journey /> */}
      <StoriesShortcut/>
      <JoinTheMovement/>
      <Instagram/>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  /* width: 100%;
  height: 100%; */

  max-height: 100vh;
	/* overflow-y: scroll; */
	/* border: 1px solid gray; */
	scroll-snap-type: mandatory;
	scroll-snap-points-y: repeat(3rem);
	scroll-snap-type: y mandatory;
`