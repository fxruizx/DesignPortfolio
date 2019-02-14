import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

//FUNCTIONAL STATELESS COMPONENT
export default class BackToTop extends Component {
    state = {
        bttToggle: 'down' 
    }
    
    scrollToTop(){
       document.getElementById("AppTop").scrollIntoView();
    }
    
    render(){
        
        let scrollPosition = 0;
        window.onscroll = () => {
            scrollPosition = window.scrollY;
            
            if(scrollPosition > 200 && this.state.bttToggle === 'down'){
                this.setState({ bttToggle: 'up' });
            }else if(scrollPosition <= 200){
                this.setState({ bttToggle: 'down'});
            }
        };
        return(
            <BackToTopStyled className={ this.state.bttToggle }>
                <button onClick={ this.scrollToTop }>Back to Top</button>
            </BackToTopStyled>
            
        );
    }
}

// Setup @keyframe animations for the back to top button
const   slideup = keyframes`
        from{ bottom: -20vh; }
        to{ bottom: 0vh; }`,
        slidedown = keyframes`
        from{ bottom: 0vh; }
        to{ bottom: -20vh; }`;

const BackToTopStyled = styled.div`
    border-left: 4em solid transparent;
    border-right: 4em solid transparent;
    border-bottom: 5em solid rgba(17, 153, 136, .75);
    bottom: -20vh;
    height: 0;
    left: 50%;
    position: fixed;
    transform: translateX(-50%);
    width: 0;
    z-index: 100;
    
    button{
        background-color: transparent;
        border: none;
        color: #fff;
        cursor: pointer;
        display: inline-block;
        font-size: .75em;
        height: 3em;
        transform: translate(-50%, 80%);
        width: 4.5em;
        
        &:focus{ outline: none; }
    }
    
    &.up{ animation: ${ slideup } 1.5s normal forwards; }
    &.down{ animation: ${ slidedown } 1.5s normal forwards; }
`;
