import styled from "styled-components";
// import "@fontsource/montserrat";

export const FooterWrapperDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2), 0px 0px 1px rgba(0, 0, 0, 0.15);
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: rgba(255, 255, 255, 1);

    p {
        margin: 0;
        padding: 0;
    }
    svg {
        margin: 0 .5em;
        color: #DABC39;
    }
`;

export const TabsShare = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5em;
    padding: .5em;
    justify-content: center;
    align-items: center;
    width: 20%;
`;

export const TabsFollow = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5em;
    padding: .5em;
    justify-content: center;
    align-items: center;
    width: 20%;
`;

export const Signature = styled.div`
    display: flex;
    padding: 0 1em;
    justify-content: flex-start;
    font-size: 12px;
    align-items: center;
    color: black;
    width: 20%;
    

`;

export const FootLink = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;                
    width: 20%;
    cursor: pointer;
    font-size: 18px;

    :hover{
        color: #DABC39;
        }

`

export const SocialLinks = styled.div`
    display: flex;

    :hover{
        color: #DABC39;
        }

`