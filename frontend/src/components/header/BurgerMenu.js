import React, { useState, useEffect, useRef } from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BurgerMenu = ({ open, setOpen }) => {
  const [scrollNavbar, setScrollNavbar] = useState('');  

  useEffect(() => {
    window.addEventListener('scroll', handleNavbarScroll);
  })

  // This method will toggle the dropdown menu ON/OFF
  const handleBurgerMenu = () => {
    let closed = !open;
    setOpen(closed);    
  }

  // This method will scroll to the top of the page when clicking on the logo
  const handleLogo = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });    
    setOpen(false);
  }
   
  // This method will change the colour of the navbar on scroll
  const handleNavbarScroll = () => {
    if(window.scrollY >= '100px'){      
      setScrollNavbar(true) 
    } else {
      setScrollNavbar(false) 
    }     
  }  
  

    return (
      <BurgerContainer>
        <Link to="/" onClick={handleLogo}>
          <LogoImage />
        </Link>

        <StyledBurger 
          open={open} 
          onClick={handleBurgerMenu}
        >
            <div />
            <div />
            <div />
        </StyledBurger>
      </BurgerContainer>
        
    )
}

// Burger container
const BurgerContainer = styled.div`
  /* position: relative; */  
  background: ${({ scrollNavbar }) => scrollNavbar ? '#fff' : 'transparent'};  
  position: fixed;
  width: 100%;
  height: 100px;
  display: flex; 
  justify-content: center;
  align-items: center; 
  z-index: 2;  
`

// Styled burger menu
const StyledBurger = styled.button` 
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 999;

  &:focus {
    outline: none;
  }

  /* @media (max-width: 768px) {
      width: 100%;      
  } */

  div {    
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => open ? '#000' : '#fff'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

const LogoImage = styled.img`
  width: 30px;
  height: 50px;
  position: absolute;
  top: 25px; 
  left: 25px;  
`

export default BurgerMenu;