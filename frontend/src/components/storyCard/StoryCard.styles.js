import styled from "styled-components";

// single story wrapping container:
export const StoryWrapper = styled.section `
    margin-bottom: 1em;
    position: relative;
    width: 360px;
    max-width: 100%;

    :hover .overlay {
            opacity: 0.7;
        } 

    :hover .h3 {
        opacity: 1;
    } 

    // title display:
    h3 {
        color: white;
        font-size: 20px;
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        text-align: center;
        opacity: 0;
    }

        /* position: absolute;
        text-align: center;
        opacity: 1;
        font-size: 24px;
        color: white;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    } */
    // to activate show on hover, set opacity
    // of h3 to 0 and use this code:


    // set image for responsiveness and equal size:
    img {
        display: block;
        max-width: 100%;
        margin: 0 auto;
        width: 360px; 
        aspect-ratio: 1 / 1;
        object-fit: cover; 
        object-position: 100% 0;
        }
    
    // darkening div when hovering over the picture
    div {
        position: absolute;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 100%;
        opacity: 0;
        transition: 0s ease;
        background-color: rgba(33, 33, 33);
    }

`;