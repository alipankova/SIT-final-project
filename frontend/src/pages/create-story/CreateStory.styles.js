import styled from "styled-components";
import { PageButton } from "../../styles/global.styles";
import { StoryWrapper } from "../story-page/StoryPage.styles";
import { UserHeader } from '../story-page/StoryPage.styles';

export const CreateStoryWrapper = styled.section `
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    top: 0;
    left: 0;
    background-color: rgba(33, 33, 33, 0.7); 
    width: 100vw;
    height: 100vh;
    align-items: center;

    
    .modal-story-wrapper {
        margin: 0 auto;
        background-color: white;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 20px;
        border-radius: 15px;
        width: 40%;
        height: 50%;

        @media (max-width: 800px) {
            width: 90%;
            margin: 0;
            flex-direction: column;
            height: 70%;
        }

        @media (max-width: 1200px) {
            flex-direction: column;
            height: 60%;
        }

    }

    .modal-story-button {
        align-self: flex-start;
        margin-top: 1em;
        margin-right: 1em;
    }

`;

export const FormWrapper = styled(StoryWrapper)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-self: center;
    margin: 0;
    height: 100%;
    width: 70%;
    align-items: flex-start;
    margin-left: 25px;

    label {
        font-size: 10px;
        margin-bottom: 5px;
        align-self: left;
    }

    textarea {
        width: 95%;
        height: 15em;
        border: 1px solid rgba(218, 188, 57, 0.4);
        margin-bottom: 20px;
    }
    
    .form-input {
        width: 95%;
        height: 2em;
        border: 1px solid rgba(218, 188, 57, 0.4);
        margin-bottom: 20px;
    }

    input {
        font-family: 'Montserrat', sans-serif;
    }

    input::-webkit-file-upload-button {
        background-color: white;
        color: black;
        padding: 5px;
        font-family: 'Montserrat', sans-serif;
        border-radius: 8px;
        cursor: pointer;
        border: 1px solid rgba(218, 188, 57, 1);
        
    }

    @media (max-width: 800px) {
        width: 90%;
        margin-left: 0;
        }
`;

export const PostButton = styled(PageButton)`
    align-self: flex-end;
    margin-top: auto;
`;

export const CreateStoryUserHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-self: center;
    height: 100%;
    margin: auto 10px;
    width: 15%;

    span {
        margin: 5px auto;
    }
`;
