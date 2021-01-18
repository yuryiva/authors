import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Header = ({ open, setOpen }) => {

  const handleDropdown = () => {
    let closed = !open;
    setOpen(closed);
  }

  return (
    <StyledMenu open={ open }>   

        <Link to="/" onClick={handleDropdown}>
          Home
        </Link>    
      
        <Link to="/page1" onClick={handleDropdown}>
          Join the movement
        </Link>

        <Link to="/page2" onClick={handleDropdown}>
          Stories
        </Link>

        <Link to="/page3" onClick={handleDropdown}>
          Books
        </Link>

        <Link to="/page4" onClick={handleDropdown}>
          Podcast
        </Link>

        <Link to="/page5" onClick={handleDropdown}>
          About Us
        </Link>         
      
    </StyledMenu>
  );
}


// Styling nav components
const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #EFFFFA;
  transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-100%)'};
  height: 100vh;
  width: 100vw;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.5s ease-in-out;

  /* @media (max-width: 576px) {
      width: 100%;      
  } */

  a {
    font-size: 2rem;    
    /* text-transform: uppercase; */
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0D0C1D;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`

export default Header;