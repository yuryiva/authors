import React, {useEffect} from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css'
<style>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');
</style>

const AuthorsStory = () => {
    useEffect (() => {
        Aos.init({duration:2000});
    }, []);
      return (

        <StoryWrapper>
        <Banner>
            <img src='https://images.unsplash.com/photo-1446475157725-e6dada23994e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' alt='banner' />
        </Banner>
           <StorySection1>
           <StorySection1Text>
            <h2>Author Name, Location</h2>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word</p>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word</p>
            </StorySection1Text>
            <StorySection1Img>
            <img src='https://images.unsplash.com/photo-1590452366152-7c59da8b9524?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' alt='image' />
            </StorySection1Img>
           </StorySection1> 
           <HR>
               <hr/>
           </HR>
           <StorySection2>
           <StorySection2Img>
            <img data-aos='fade-up' data-aos-duration="2000" src='https://images.unsplash.com/photo-1583795059494-44bc7e53384c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80' alt='image' />
            </StorySection2Img>
            <h1>"Quote of the story inserted here"</h1>
           </StorySection2> 
           <StorySectionMiddle data-aos='fade-up' data-aos-duration="3500">
               <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
           </StorySectionMiddle>
           <StorySectionMiddle>
               <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
           </StorySectionMiddle>
           <StorySection3>
           <StorySection3Text>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word</p>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word</p>
            </StorySection3Text>
            <StorySection3Img>
            <img data-aos='fade-up' data-aos-duration="3000" src='https://images.unsplash.com/photo-1522874339442-b66b63414ab4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80' alt='image' />
            </StorySection3Img>
           </StorySection3> 

        </StoryWrapper>
      
      
      
    
    
    )
    
    
}

// SECTION 1

const Banner = styled.div`
width:100vw;
height:100vh;
margin-bottom:200px;

    img{    width:100vw;
            height:100vh
            }
`

const StoryWrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
text-align:center;
margin:0;
padding:0;
margin-top:-100px;
`

const StorySection1 = styled.div`
display:flex;
width:100%;
justify-content:center;
flex-direction:row;
flex-wrap:wrap;
margin-bottom:50px;

`

const StorySection1Text = styled.div`
    width:30%;
    margin:20px;
    height:auto;
    text-align:left;

    h2{font-size:30px;}

    p {
        font-size:12px;
        line-height:2em;
        margin-top:30px;
        margin-bottom:30px;
    }

    @media(max-width:1100px){
        width:50%
        
    }
`

const StorySection1Img = styled.div`
    img{
        width:70%;
        height:80%;
    }
`

// SECTION 2

const StorySection2 = styled.div`
display:flex;
flex-direction:column;
text-align:center;
margin-bottom:100px;

h1 {
    margin-top:100px;
}
`

const StorySection2Img = styled.div`
    img{
        width:70%;
    }
`

// MIDDLE STORY SECTION

const StorySectionMiddle = styled.div`
display:flex;
justify-content:center;
text-align:center;
width:100%;
margin-bottom:100px;

p{
    width:40%;
    line-height:2em;
    margin:0 100px;
    margin-bottom:10px;
    
    }

    @media(max-width:1100px){
        p {
            width:70%;
            margin:10px;
        }
    }
`

// SECTION 3

const StorySection3 = styled.div`
display:flex;
flex-direction:row-reverse;
flex-wrap:wrap-reverse;
width:100%;
justify-content:center;
text-align:center;
margin-bottom:100px;
margin-top:100px;


`

const StorySection3Text = styled.div`
    width:40%;
    
    height:auto;
    margin-left:0;

    img {
        margin-bottom:100px;
    }
    
    h2{font-size:25px;}

    p {
        font-size:18px;
        line-height:1.8em;
    }

    @media(max-width:1100px){
        width:70%
    }
`

const StorySection3Img = styled.div`
    img{
        width:60%;
    }
`

const HR = styled.div`

hr {
border:0;
background-color:lightgray;
display:flex;
justify-content:left;
width:85%;
height:4px;
margin:0;
padding:0;
}
`


export default AuthorsStory;