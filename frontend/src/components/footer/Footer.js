import React from 'react';
import styled from 'styled-components';
<style>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');
</style>

const Footer = () => {
      return (
          <FooterDiv>
            <FooterWrapper>
            <FooterLinks>
                <AboutUs>
                    <h4>About Us</h4>
                    <p>Who We Are</p>
                    <p>Our Vision</p>
                    <p>Sustainability</p>
                </AboutUs>

                <OurWork>
                    <h4>Our Work</h4>
                    <p>How We Work</p>
                    <p>Our Partners</p>
                </OurWork>

                <ContactUs>
                    <h4>Contact Us</h4>
                    <p>Send Email</p>
                    <p>Facebook</p>
                </ContactUs>
                </FooterLinks>
                <Subscribe>
                    <h4>Join Us</h4>
                    <p>Subscribe for latest updates, new stories and promotions</p>
                    <input placeholder='Email...'/>
                    <button >Subscribe</button>
                </Subscribe>
            </FooterWrapper>
            <Copyright>
            <p>Copyright Authors© 2021</p>
            </Copyright>
            </FooterDiv>
      )
}

const FooterDiv = styled.div`
display:flex;
flex-direction:column;
font-family: 'Space Mono', monospace;
`

const FooterWrapper = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
justify-content:space-between;
background-color:lightgray;
height:200px;
font-family: 'Space Mono', monospace;
padding:20px 80px 0 80px;

p {
    font-size:12px;
}

@media (max-width:1300px) {
    height:auto;
    padding-left:30px;
}
`

const FooterLinks = styled.div`
display:flex;
justify-content:space-between;
flex-direction:row;
flex-wrap:wrap;
width:40%;

h4 {
    margin-bottom:10px;
    margin-right:40px;
}

p {
    font-weight:350;
    margin-bottom:10px;
}

@media (max-width:1300px) {
    width:auto;
    padding-left:0;
}
`

const AboutUs = styled.div`
display:flex;
flex-direction:column;
text-align:left;

`

const OurWork = styled.div` 
display:flex;
flex-direction:column;
text-align:left;
`

const ContactUs = styled.div` 
display:flex;
flex-direction:column;
text-align:left;
`

const Subscribe = styled.div`
display:flex;
flex-direction:column;
text-align:left;
margin:0;

input {
    width:100%;
    border:0;
    border-bottom:1px solid black;
    background-color:lightgray;
    margin:20px 0 ;
    text-decoration:0;
    outline:none;
    cursor: pointer;

}

input:active {
    text-decoration:0;
    border:0;
    outline:none;
    border:none;
}

button {
    height:30px;
    width: 100px;
    border:1px solid black ;
    border-radius:5px;
    background-color:lightgray;
    text-align:center;
    outline:none;
    cursor: pointer;
}

button:active {
    background-color:gray;
    color:white;
}


h4 {
    margin-bottom:10px; 
}

p{
    font-weight:350;
    margin:0;
    padding:0;
    width:300px;
    margin-bottom:10px;
}
`

const Copyright = styled.p`
background-color:lightgray;
display:flex;
justify-content:center;
margin:0;
padding:0;

p{
    font-size:12px;
    font-weight:300;
    margin-top:50px;
    padding-bottom:10px;
}
`

export default Footer;