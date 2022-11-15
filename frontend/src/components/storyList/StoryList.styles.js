import styled from "styled-components";
import { BaseModalBackground, ModalProvider } from "styled-react-modal";
import Modal from "styled-react-modal";

// mobile designs first (480px width and less):
export const StoryPageWrapper = styled.section `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: ;
    width: 100vw;
    height: calc(100vh - 140px);
    gap: .5em;
    padding: .5em;
    margin-top: 0;
    border: 3px solid red;
    
    // whole searchbar with magnifier and post button:
    .search {
        display: flex;
        justify-content: space-around;
        gap: 1em;
        margin: .5em 0;
        width: 100%;
    }

    // search from with magnifier:
    .search-form {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        width: 80%;
    }

    // search-form:
    .search-field {
        width: 100%;
        max-width: 400px;
    }

    .search-story {
        min-width: 75%;
        padding: 0.3rem;
        border: none;
        border-bottom: 1px solid #D3D3D3;
    }

    /* img {
        display: block;
        max-width: 100%;
        margin: 0 auto;
        width: 250px; 
        aspect-ratio: 1 / 1;
        object-fit: cover; 
        object-position: 100% 0;
    } */

    @media (min-width: 480px) {
            // new distance due to change of header and footer:
            margin: 5em 0;

        }
    
    .search-form {
        justify-content: center;
    }

    @media (min-width: 800px) {
        // new distance due to change of header:
            margin-top: 7em;
        }
    
    .search-form {
        justify-content: center;
    }
`
// wrapper around stories (excluding searchbar and post button). It
// will change to grid and adjust column numbers:
export const StoryListWrapper = styled.div `

    margin: 0 auto;

    @media (min-width: 420px) {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: .5em;
            padding: .5em;
        }

    @media (min-width: 865px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: .5em;
        padding: .5em;
    }
 `

export const FadingBackground = styled(BaseModalBackground)`
    background-color: rgba(33, 33, 33, 0.7);
    
    .warning {
        background-color: white;
        border-radius: 15px;
        width: 15em;
        height: 10em;
        display: flex;
        gap: 2em;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const PageButton = styled.button`
    background-color: #DABC39;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif; 
    padding: 10px 10px;;
    ;
`;

export const LoginWarningModal = styled(Modal)`

`;

export const WarningModalProvider = styled(ModalProvider)`

`;
    