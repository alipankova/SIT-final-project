import styled from "styled-components"


export const AboutContainerDiv = styled.div`
    background: #fff;
    display: flex;
    width: 100vw;
    height: auto;
    margin-top: 7em;
    margin-bottom: 2em;
    flex-direction: column;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
`;

export const ImageSliderDiv = styled.div` 
    height: 100%;
    width: 80%;
    margin: 0 auto;
    bottom: 0;
    position: static;
    scroll-snap-align: center;
    

    @media only screen and (max-width: 900px) {
        flex-direction: column;
    }
`;

export const StickyButtonDiv = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    left: 0;
    height: 70px;
    width: 30px;
    color: white;
    border-radius: 0 5px 5px 0;
    background-color: rgba(225, 194, 59, 0.44);
    top: 80vh;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    :hover{
     background-color: #DABC39;
    }
    
    button {
        cursor: pointer;
        border: none;
        background: none;
        transform: rotate(-90deg);
        font-family: 'Montserrat', sans-serif;
        font-size: 15px;
    }
`;

export const TextBoxDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    align-self: center;
    flex-direction: column;
    max-width: 60vw;
    margin-top: 95vh;
    height: 85vh;
    scroll-snap-align: center;
    
    h1 {
        color: #DABC39;
        font-family: 'Montserrat', sans-serif;
        font-size: 30px;
        margin-bottom: 0;
        align-self: center;
    }

    p {
        color: #000000;
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
        align-self: center;
    }

    img {
        width: 60vw;
        align-self: center;
    }

 @media only screen and (max-width: 650px) {
        justify-content: space-evenly;
        max-width: 90vw;
        padding: 10px;
        margin-top: 80vh;
        height: 60vh;
        
        h1 {
            font-size: 14px;
        }

        p {
            font-size: 10px;
         
        }

        img {
            width: 90vw;
        }
    }
`;  

export const LandingPageDiv = styled.div`
    position: absolute;
    width: 100%;
    height: 95%;
    top: 0;
    left: 0;
    margin: 0;
    z-index: 0;
    scroll-snap-align: center;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.9;
    }
`;
