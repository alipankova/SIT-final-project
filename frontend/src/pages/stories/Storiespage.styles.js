import styled from "styled-components";

// this is the overall page wrapper inside the body.
// With 'display: flex' on the body, it was acting weird. - ALINA: deletes almsot everything, since Navbar and Footer were inside PageWrapper and it makes sence if it is just a page frame
export const PageWrapper = styled.div `
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    left: 0;
    top:0;  
`;

// background covering dark div for readability:
export const Dark = styled.div `
    display: inline-block;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 1;
    min-width: 100vw;
    min-height: 100vh;
    top: 0;
    left: 0;
`;