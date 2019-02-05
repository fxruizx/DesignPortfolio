import React from 'react';
import profileImage from './fxr-with-ironman.jpg';
import styled from 'styled-components';

//FUNCTIONAL STATELESS COMPONENT
const AboutPage = () => (
    <Profile>
        <img src={ profileImage } alt="Francisco with Ironman" title="Francisco with Ironman" />
        <div>
            <h2>About Francisco Ruiz</h2>
            <p>I am a multi-disciplinary designer and developer. Whether I am designing a social media banner, developing a website in responsive design, or crafting pixel art, I am at home creating visual experiences to amplify a message or punctuate an idea.</p>
            <h4>Background</h4>
            <p>Growing up as an avid video gamer, I attended California State University, Northridge, majoring in Computer Science in hopes of one day making video games. While at CSUN I discovered my proclivity for web design, and though this was not a major offered at the time, I was able to design my own major that combined my Comp Sci credits with ones I would take in Art and Cinematography & Television Arts. </p>
            <p>After earning my B.A. and freelancing for a year I was hired as a Jr. Art Director for a ad-agency, followed by working as a web production artist and seeing the seedy underbelly of a web hosting company. But after moving to Oregon, I found a job as a web developer, and have since transitioned into being a graphics design lead for the same company.</p>
            <h4>What I Am Looking for Now</h4>
            <p>Though I have a broad skillset from front-end web development to podcasting, I would love to bring value to an orgainzation large or small where I could further develop as a web designer, ideally growing my experience with React.</p> 
        </div>
    </Profile>
);

export default AboutPage;

const Profile = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-auto-flow: dense;
  grid-column-gap: 1rem;
  margin: 0 auto;
  padding: 2rem 0;
  width: 80%;
  max-width: 1280px;
  
  @media screen and (max-width: 640px){
    grid-template-columns: repeat(auto-fit, minmax(80%, 1fr));
  }
  
  div{ text-align: left; }
  img{ max-width: 100%; height: auto;  }
}`;