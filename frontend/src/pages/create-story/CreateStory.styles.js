import styled from "styled-components";
import { StoryWrapper } from "../story-page/StoryPage.styles";

export const CreateStoryWrapper = styled.section `
    position: fixed;
    top: 0;
    left: 0;
    background-color: black;
    width: 100%;
    height: 100%;

    .modal-story-wrapper {
        margin: 1em;
        background-color: white;

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
        align-items: center;
        gap: 1em;
        margin: 1em 0;
    }

    .file-field {
        margin: 0 auto;
    }
`

export const FormWrapper = styled(StoryWrapper)`
    gap: 1em;
    padding: 1em;

    textarea {
        width: 95%;
        height: 10em;
    }
`