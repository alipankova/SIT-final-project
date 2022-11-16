import styled from "styled-components";
// import "@fontsource/montserrat";

export const FooterWrapperDiv = styled.div`
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2), 0px 0px 1px rgba(0, 0, 0, 0.15);
    display: block;
    
    box-sizing: border-box;
    bottom: 0;
    left: 0;
    max-height: 70px;
    width: 100vw;
    align-items: center;
    background: rgba(255, 255, 255, 1);
    position: fixed;
    overflow: hidden;

    p {
        margin: 0;
    }
`;

export const TabsContainerDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    *{
    color: #1E1E1E;
    font-family: 'Montserrat', sans-serif; 
    font-size: 16px;
    line-height: 0.5;
    }

    @media screen and (max-width: 900px) {
        width: 90vw;
        margin-left: 10vw;
        *{ 
        font-size: 10px;
        }   
    }
`;

export const TabsDiv = styled.div`
    flex-direction: column;
    align-items: center;
    padding: 0 5rem;
  
    *{
        margin-right: 5px;
    }

    p {
        margin: 1rem 0;
    }

    svg {
        margin-bottom: 1rem;
        :hover{
            color: red;  
        }
    }

    @media screen and (max-width: 480px) {
        *{ 
        font-size: 10px;
        }   
    }
`;

export const Signature = styled.div`
    color: black;
    font-size: 10px;

    @media screen and (max-width: 480px) {
        font-size: 4px;
        
    }
`;

export const ReactableLinks = styled.p`
    cursor: pointer;
    font-size: 18px;
    :hover{
        color: #DABC39;
        }

`

export const LinksDiv = styled.div`
    display: flex;

    div {
        font-size: 18px;
    }
  
`

export const SocialMediaDivs = styled.div`
    display:flex;

    *{
        font-size: 18px;
    }
`