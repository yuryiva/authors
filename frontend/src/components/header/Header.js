import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import photo from '../../assets/photo6.jpg';



const Header = ({ open, setOpen }) => {  

  const handleDropdown = () => {
    let closed = !open;
    setOpen(closed);
  }

  return (
    <NavigationMenu open={ open }>   

      <PhotoSection>
        <img src={photo} alt="authors" />
      </PhotoSection>

      <LinkSection>
        <LinkContainerLeft>
          <Link to="/" onClick={handleDropdown}>
            Home
          </Link>   

          <Link to="/page1" onClick={handleDropdown}>
            Books
          </Link> 

          <Link to="/page2" onClick={handleDropdown}>
            Podcast
          </Link>

          <Link to="/page3" onClick={handleDropdown}>
            Short stories
          </Link>
        </LinkContainerLeft>

        <LinkContainerRight>
          <Link to="/page4" onClick={handleDropdown}>
            The Authors
          </Link>

          <Link to="/page5" onClick={handleDropdown}>
            Who we are
          </Link> 
        
          <Link to="/page6" onClick={handleDropdown}>
            Join the movement
          </Link>      

          <Link to="/page6" onClick={handleDropdown}>
            Contact us
          </Link>      
        </LinkContainerRight>        
      </LinkSection>               
      
    </NavigationMenu>
  );
}


// Styling navigation menu 
const NavigationMenu = styled.nav`
  /* overflow: auto; */
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
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

  @media (max-width: 576px) {
      width: 100%;  
      min-height: 100vh;
      height: auto;   
  }

  a {
    font-size: 1.5rem;    
    /* text-transform: uppercase; */
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0D0C1D;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 1560px) {
      font-size: 1.4rem;
    }

    @media (max-width: 1400px) {
      font-size: 1.3rem;
    }

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }

    @media (max-width: 576px) {
      font-size: 1rem;
      text-align: center;
      
    }

    &:hover {
      color: #343078;
    }
  }
`

const PhotoSection = styled.section`
  width: 30%;  
  margin-right: 10%; 
  display: inline-block;
  overflow: hidden;
  border-radius: 5px;

  img {
    display: block;
    width: 100%;
    /* height:300px;   */
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;    
    transition: transform 0.8s;    

    &:hover {
      cursor: pointer;
      transform: scale(1.1);
      transform-origin: 50% 50%;
    }
  }

  @media (max-width: 1230px) {
    display: none;
  }

`

const LinkSection = styled.section`
  /* width: 60%; */
  /* height: 500px; */
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media (max-width: 1230px) {
    width: 90%;
  }

  @media (max-width: 900px) {
    width: 90%;
    flex-direction: column; 
    text-align: center;
  }

  @media (max-width: 576px) {
    width: 100%;  
    margin-top: 50px;    
  }
`

const LinkContainerLeft = styled.div`
  /* width: 50%; */
  min-width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1560px) {
    min-width: 400px;
  } 

  @media (max-width: 1400px) {
    min-width: 350px;
  }  

  @media (max-width: 900px) {    
    text-align: left;
  }

  @media (max-width: 576px) {
    min-width: auto;
     width: 100%
  }
`

const LinkContainerRight = styled.div`
  /* width: 50%; */
  min-width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1560px) {
    min-width: 400px;
  } 

  @media (max-width: 1400px) {
    min-width: 350px;
  }

  @media (max-width: 900px) {    
    text-align: right;
  }

  @media (max-width: 576px) {
    min-width: auto;
     width: 100%
  }
`


export default Header;