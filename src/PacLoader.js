import React from 'react';
import styled from 'styled-components';

//FUNCTIONAL STATELESS COMPONENT
// title and image are the props from ArtGrid.js


const PacLoader = ({ r, g, b }) => (
    <LoaderStyled xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" className="lds-pacman" background="none">
        <style>{`.a{fill:#858585;}.b{fill: rgb(${ r },${ g },${ b });}`}</style>
        <g ng-attr-style="display:{{config.showBean}}"><circle cx="72.9" cy="50" r="4" ng-attr-fill="{{config.c2}}" className="a"><animate attributeName="cx" calcMode="linear" values="95;35" keyTimes="0;1" dur="0.5" begin="-0.335s" repeatCount="indefinite"/><animate attributeName="fill-opacity" calcMode="linear" values="0;1;1" keyTimes="0;0.2;1" dur="0.5" begin="-0.335s" repeatCount="indefinite"/></circle><circle cx="93.3" cy="50" r="4" ng-attr-fill="{{config.c2}}" className="a"><animate attributeName="cx" calcMode="linear" values="95;35" keyTimes="0;1" dur="0.5" begin="-0.165s" repeatCount="indefinite"/><animate attributeName="fill-opacity" calcMode="linear" values="0;1;1" keyTimes="0;0.2;1" dur="0.5" begin="-0.165s" repeatCount="indefinite"/></circle><circle cx="53.1" cy="50" r="4" ng-attr-fill="{{config.c2}}" className="a"><animate attributeName="cx" calcMode="linear" values="95;35" keyTimes="0;1" dur="0.5" begin="0s" repeatCount="indefinite"/><animate attributeName="fill-opacity" calcMode="linear" values="0;1;1" keyTimes="0;0.2;1" dur="0.5" begin="0s" repeatCount="indefinite"/></circle></g><g ng-attr-transform="translate({{config.showBeanOffset}} 0)" transform="translate(-15 0)"><path d="M50 50L20 50A30 30 0 0 0 80 50Z" ng-attr-fill="{{config.c1}}" className="b"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;45 50 50;0 50 50" keyTimes="0;0.5;1" dur="0.5s" begin="0s" repeatCount="indefinite"/></path><path d="M50 50L20 50A30 30 0 0 1 80 50Z" ng-attr-fill="{{config.c1}}" className="b"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;-45 50 50;0 50 50" keyTimes="0;0.5;1" dur="0.5s" begin="0s" repeatCount="indefinite"/></path></g>
    </LoaderStyled>
);

export default PacLoader;

const LoaderStyled = styled.svg`
    position: fixed;
    top: 40%;
    left: 52vw;
    transform: translate(-50%, -50%);
    z-index: 50;
`;