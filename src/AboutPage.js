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
            <h3>Background</h3>
            <p>As </p>
            <p>Having designed websites, magazine ads, and custom graphics for over 12 years, I thrive on transforming messages into visually impactful communication. Whether I am working independently or as part of a group, I am regularly learning new tools and techniques to bring more value to the team and/or client I am working with.</p>
        </div>
    </Profile>
);

export default AboutPage;

const Profile = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-auto-flow: dense;
  grid-column-gap: 1rem;
  margin: 0 auto;
  padding: 2rem 0;
  max-width: 800px;
  
  div{ text-align: left; }
  img{
        max-width: 100%;
        height: auto;
      }
  }
`;