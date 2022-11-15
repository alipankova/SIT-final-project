import styled from "styled-components";

// mobile designs first (480px width and less):
export const StoryPageWrapper = styled.section `
    border: 2px solid red;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    gap: .5em;
    padding: .5em;
    margin-top: 0;
    
    // whole searchbar with magnifier and post button:
    .search {
        display: flex;
        justify-content: space-around;
        gap: 1em;
        margin: .5em 0;
    }

    // search from with magnifier:
    .search-form {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        width: 90%;
    }

    // search-form:
    .search-field {
        width: 100%;
        max-width: 400px;
    }

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

    