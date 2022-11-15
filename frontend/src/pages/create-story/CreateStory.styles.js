import styled from "styled-components";
import { StoryWrapper } from "../story-page/StoryPage.styles";

export const CreateStoryWrapper = styled.section `
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    top: 0;
    left: 0;
    background-color: rgba(33, 33, 33, 0.7);
    width: 100%;
    height: 100%;

    
    .modal-story-wrapper {
        background-color: white;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        padding: 10px;
        border-radius: 15px;
        align-items: flex-start;

        @media (min-width: 480px) {
            width: 50%;
            margin: 0 auto;
        }
    }

    .modal-story-button {
        align-self: flex-start;
        margin-top: 1em;
        margin-left: 1em;
    }

    .user-info-wrapper {
        display: flex;
        flex-direction: column;
        border: 2px solid blue;
    }

    .file-field {
        margin: 0 auto;
    }
`

export const FormWrapper = styled(StoryWrapper)`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin: 0;
    align-items: flex-start;
    border: 2px solid green;
    height: 100%;
    width: 80%;

    label{
        font-size: 10px;
    }

    textarea {
        width: 95%;
        height: 10em;
    }
`;
