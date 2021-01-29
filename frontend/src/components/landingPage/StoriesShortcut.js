import React, {useEffect} from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css'
<style>@import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');</style>;
<style>@import url('https://fonts.googleapis.com/css2?family=Cutive+Mono&display=swap');</style>

const StoriesShortcut = () => {
    useEffect (() => {
        Aos.init({duration:3000});
    }, []);
      return (
            <StoryWrapper>
                <StoryText>
                    <h4>STORIES FROM AROUND THE WORLD</h4>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words</p>
                </StoryText>
                <StoryImgLinks>
                    <img data-aos='fade-up' src='https://images.unsplash.com/photo-1509305717900-84f40e786d82?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBvcnRyYWl0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt='portrait' />
                    <ImgWrapper1>
                        <img 
                            data-aos='fade-up' 
                            data-aos-duration="3000" 
                            src='https://images.unsplash.com/photo-1610916975200-6d28742d4dd6?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3M3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' 
                            alt='portrait' 
                        />
                    </ImgWrapper1>
                    <ImgWrapper2>
                        <img 
                            data-aos='fade-up' 
                            data-aos-duration="3000" 
                            src='https://images.unsplash.com/photo-1610801264293-588a3b6c3446?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjV8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' 
                            alt='portrait' 
                        />
                    </ImgWrapper2>
                </StoryImgLinks>
            </StoryWrapper>
      )
}

const StoryWrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-start;
text-align:center;
align-items:center;
margin-left:10vw ;
`
const ImgWrapper1 = styled.div `
    @media (max-width:950px) {
        display:none;
    }
`
const ImgWrapper2 = styled.div `
    @media (max-width:1400px) {
        display:none;
    }

    @media(max-width:450px){
    justify-content:center;
    text-align:center;
    margin-left:0;
    width:100%;}
`

const StoryImgLinks = styled.div`
display:flex;
flex-direction:row;
justify-content:flex-start;
text-align:left;
align-items:center;
flex-wrap:wrap;
width:100%;

img {
    width:320px;
    height:420px;
    margin:10px 25px;
    border-radius:3px;
}

img:hover{
    z-index:1;
    transform:scale(1.05);
    box-shadow:0 10px 60px rgba(25,25,26,.2);
    cursor: pointer;
}

@media(max-width:450px){
    justify-content:center;
    text-align:center;
    margin-left:0;
    width:100%;

    img{
        height:300px;
        width:250px;
        margin-left:0;
        margin-right:65px;
        
    }
}
`
const StoryText = styled.div` 
display:flex;
flex-direction:column;
justify-content:left;
text-align:left;
align-items:left;
font-family: 'Space Mono', monospace;
padding-left:20px;

h4{
    font-weight:400;
    font-size:25px;
    width:40%;
    margin-bottom:20px;
}

p {
    font-size:15px;
    margin-bottom:20px;
    font-weight:100;
    color:black;
    width:40%;
    padding-bottom:20px;
}

@media (max-width:600px) {
    h4{
    width:85%;
    margin-bottom:10px;
}

p {
    font-size:12px;
    width:70%;
}
}
`


export default StoriesShortcut;