import React from "react";
import StoriesShortcut from './StoriesShortcut';
import Instagram from './Instagram';
import JoinTheMovement from './Movement';
import Journey from './Journey';

export default function LandingPage() {
  return (
    <div>
      <Journey />
      <StoriesShortcut/>
      <JoinTheMovement/>
      <Instagram/>
    </div>
  );
}
