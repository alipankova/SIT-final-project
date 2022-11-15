import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreateStoryWrapper } from './CreateStory.styles';
import { PageButton } from '../../styles/global.styles';
import { UserHeader } from '../story-page/StoryPage.styles';
import { FormWrapper } from './CreateStory.styles';

const CreateStory = () => {

    const [loggedInUser, setLoggedInUser] = useState('');
    const localToken = (JSON.parse(localStorage.getItem("bagsAuth"))).bagsToken;

    // fetch logged-in user:
    useEffect(() => {
        const url = "https://bag-for-everyone.propulsion-learn.ch/backend/api/user/me/";
        const config = {
            method: "GET",
            headers: {          
                "Authorization": `Bearer ${localToken}`
            }
        }
        fetch(url, config)
            .then(response => response.json())
            .then(data => setLoggedInUser(data))
            .catch(error => console.log(error))
    }, []);

    const navigate = useNavigate();
    const [storyImage, setStoryImage] = useState(null);
    const [storyData, setStoryData] = useState(
        {
        title: "",
        content: ""
        }
    )
    const [created, setCreated] = useState(false);

    const handleStoryChange = e => {
        setStoryData(prevFormData => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleImageUpload = e => {
        const imageUrl = e.target.files;
        setStoryImage(imageUrl[0]);
    }

    //   Post a story:   
    const CreateStory = e => {
        e.preventDefault();
        // after successful posting:
        const cleanUp = () => {
            setCreated(false);
            document.getElementById('title').value='';
            document.getElementById('story').value='';
            setStoryData({
                title: "",
                content: ""
            })
            navigate('/story');
        }

        const formData = new FormData();

        formData.append("title", storyData.title);
        formData.append("content", storyData.content);
        formData.append("image", storyImage);
        const url = "https://bag-for-everyone.propulsion-learn.ch/backend/api/post/"
        const config = {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${localToken}`
            },
            body: formData,
        }

        if (!storyData.title) {
            alert ('Title cannot be empty.')
            return;
        };
        if (!storyData.content) {
            alert ('Content cannot be empty.')
            return;
        };
        if (!storyImage) {
            alert ('Please choose an image.')
            return;
        };

        fetch(url, config)
            .then(response => {
                response.json();
                setCreated(true);
            })
            .then(data => {
                setTimeout(cleanUp, 2000);
            })
            .catch(error => console.log(error))
    }

    return (
        <CreateStoryWrapper>
                <PageButton onClick={() => navigate('/story')} className='modal-story-button'>X</PageButton>
                <div className='modal-story-wrapper'>
                    <UserHeader>
                    <div className='user-info-wrapper'>
                        <img src='../assets/images/user/user.png' alt='user avatar'></img>
                        <span>{loggedInUser ? loggedInUser[0].username : loggedInUser}</span>
                    </div>
                    </UserHeader>
                    <FormWrapper>
                        <label>
                        Your title *
                        </label>
                        <input className='form-input' id="title" type="text" name="title" onChange = {handleStoryChange} required></input>
                        <label>
                        Your story *
                        </label>
                        <textarea id="story" name="content" onChange = {handleStoryChange} required></textarea>
                        <label htmlFor="select">Upload image:</label>
                        <div className='file-field'>
                            <input id="select" multiple type='file' name='image' accept='image/' onChange={e => handleImageUpload(e)}></input>
                        </div>
                        <PageButton type={"submit"} 
                                    onClick={CreateStory}
                        >{created ? 'CREATED!' : 'Post'}
                        </PageButton> 
                    </ FormWrapper>
                </div>
        </CreateStoryWrapper>
    )
}

export default CreateStory