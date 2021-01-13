import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      I AM HEADER
      <ul>
        <Link to="/page1">
          <li>PAGE 1</li>
        </Link>
        <Link to="/page2">
          <li>PAGE 2</li>
        </Link>
        <Link to="/page3">
          <li>PAGE 3</li>
        </Link>
        <Link to="/page4">
          <li>PAGE 4</li>
        </Link>
        <Link to="/home">
          <li>HOME</li>
        </Link>
      </ul>
    </div>
  );
}
