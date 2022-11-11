import styled from "styled-components";
import Modal, { BaseModalBackground } from "styled-react-modal";
// import "@fontsource/montserrat";

export const FooterWrapperDiv = styled.div`
    border: 1px solid #DDD8C4;
    background: rgba(255, 255, 255, 0.9);
    font-size: .8em;
    position: fixed;
    bottom: 1em;
    left: 4em;

    svg, a {
        margin: .1em;
        font-size: 1em;
    }

    p {
        margin: 0;
        width: fit-content;
    }

    div.social {
        margin: 0;
    }

    @media (min-width: 480px) {
        bottom: 0;
        left: 0;
        width: 100%;

        svg, a {
        font-size: 1.3em;
        }
	}
`;
export const TabsContainerDiv = styled.div`
    border-bottom: 1px solid #DDD8C4;
    display: flex;
    flex-direction: column;
    gap: 2em;

    *{
    cursor: pointer;
    color: #1E1E1E;
    font-family: 'Montserrat', sans-serif; 
    }

    @media (min-width: 480px) {
        flex-direction: row;
        padding: 0 1em;
        justify-content: space-between;
	}

    @media (min-width: 800px) {
        justify-content: space-around;
        gap: 6em;
	}
`;
export const TabsDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text {
            :hover{
            color: #DABC39;
            }
        }

    @media (min-width: 480px) {
        width: fit-content;
	}
    
`;
export const Signature = styled.div`
    /* border: 1px solid magenta; */
    color: black;
    font-size: .6em;
    padding: .2em;

    @media (min-width: 480px) {
        font-size: 1em;
	}

`;

export const FadingBackground = styled(BaseModalBackground)`
  background-color: rgba(33, 33, 33, 0.7);
`; 

export const StyledStoreModal = Modal.styled`
  width: 60vw;
  height: 55vh;
  display: flex;
  align-items: left;
  flex-direction: column;
  color: #DABC39;
  background: #FFFFFF;
  border-radius: 15px;
  transition : all 0.3s ease-in-out;
  font-family: 'Montserrat', sans-serif;
  padding: 0 20px 0 30px;

  h1 {
    font-size: 30px;
    color:#DABC39;
    margin-bottom: 0;
  }
  
  h3 {
    font-size: 20px;
    color: #DABC39;
    margin-bottom: 0;
  }

    p {
     font-size: 14px;
     margin-top:0;
     color: #000000;
    }

    @media only screen and (max-width: 450px) {
        height: 65vh;
        width: 70vw;
        margin-top: 100px;
        padding: 0 10px 0 15px;
        h1 {
            font-size: 18px;
          }

        h3 { 
            font-size: 16px;
            
        }

        p {
            font-size: 10px;
           }
    }      
`;

export const StyledContactModal = Modal.styled`
  width: 40vw;
  height: 40vh;
  display: flex;
  align-items: left;
  flex-direction: column;
  color: #DABC39;
  background: #FFFFFF;
  border-radius: 15px;
  transition : all 0.3s ease-in-out;
  font-family: 'Montserrat', sans-serif;
  padding: 0 20px 0 30px;

  h1 {
    font-size: 30px;
    color:#DABC39;
    margin-bottom: 0;
  }
  
  h3 {
    font-size: 20px;
    color: #DABC39;
    margin-bottom: 0;
  }

    p {
     font-size: 14px;
     margin-top: 0;
     margin-bottom:0;
     color: #000000;
    }

    @media only screen and (max-width: 450px) {
        height: 50vh;
        width: 70vw;
        padding: 0 10px 0 15px;
        h1 {
            font-size: 18px;
          }

        h3 { 
            font-size: 16px;
            
        }

        p {
            font-size: 10px;
           }
    }      
`;

export const AddressesDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-right: 20px;

    @media only screen and (max-width: 450px) {
        flex-direction: column;
    }
`;