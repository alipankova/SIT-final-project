import styled from "styled-components";
import { BaseModalBackground, ModalProvider } from "styled-react-modal";
import Modal from "styled-react-modal";
import { PageButton } from '../../styles/global.styles'

// mobile designs first (480px width and less):
export const StoryPageWrapper = styled.section `
    display: flex;
    margin-top: 3em;
    border: 1px solid lightgray;
    overflow-y: scroll;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100vw;
    height: 100%;
    gap: .5em;
    padding: 0;
    margin-top: 0;
    
    // whole searchbar with magnifier and post button:
    .search {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 1em;
        margin: .5em 0;
        width: 60%;
    }

    // search from with magnifier:
    .search-form {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 80%;
    }

    // search-form:
    .search-field {
        width: 100%;
        margin-right: 2em;
        
    }

    .search-story {
        min-width: 100%;
        padding: 0.3rem;
        border: none;
        border-bottom: 1px solid #D3D3D3;
    }

    img {
        display: block;
        max-width: 100%;
        margin: 0 auto;
        width: 250px; 
        aspect-ratio: 1 / 1;
        object-fit: cover; 
        object-position: 100% 0;
    }

    @media (min-width: 480px) {
            // new distance due to change of header and footer:
            margin: 5em 0;

        }
    
    .search-form {
        justify-content: center;
    }
    
    .search-form {
        justify-content: center;
    }
    
    input::placeholder {
        color: #969595;
        opacity: 0.4;
    }
`
// wrapper around stories (excluding searchbar and post button). It
// will change to grid and adjust column numbers:
export const StoryListWrapper = styled.div `
    width: 70%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: .5em;
    margin: 0;

    @media (max-width: 420px) {
        display: flex;
        flex-direction: column;
        width: 95%;
        }

    @media (max-width: 865px) {
        display: flex;
        flex-direction: column;
        padding: .5em;
        width: 85%;
    }
 `;

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
    
export const PostButton = styled(PageButton)`
    padding: 1em 2em;
    border-radius: 20px;
    font-size: 1em;
`;