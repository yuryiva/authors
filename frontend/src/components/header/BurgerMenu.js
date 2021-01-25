import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BurgerMenu = ({ open, setOpen }) => {

  const handleBurgerMenu = () => {
    let closed = !open;
    setOpen(closed);
  }

    return (
      <BurgerContainer>
        <Link to="/">
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
  position: relative;
  width: 100%;
  height: 100px;
  display: flex; 
  justify-content: center;
  align-items: center; 
`

// Styled burger menu
const StyledBurger = styled.button`
  /* position: absolute;
  top: 50%;  
  right: 50%; */  
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  /* @media (max-width: 768px) {
      width: 100%;      
  } */

  div {    
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => open ? '#0D0C1D' : '#0D0C1D'};
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
    z-index: 5;
`

export default BurgerMenu;