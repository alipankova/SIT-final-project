import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { StoryListWrapper, StoryPageWrapper, 
  FadingBackground, LoginWarningModal, 
  WarningModalProvider, PostButton } from './StoryList.styles';
import StoryCard from '../storyCard/StoryCard';
import { SlMagnifier } from 'react-icons/sl';
import { PageButton } from '../../styles/global.styles';

const StoryList = () => {

  const [stories, setStories] = useState([]);
  const baseURLDev = "http://localhost:8001/backend/api/"
  const baseURLProd = "https://bag-for-everyone.propulsion-learn.ch/backend/api/"

  // check for token in local storage:
  const localToken = localStorage.getItem("bagsAuth");
  const navigate = useNavigate();

  //MODAL SETTINGS
  const [isOpen, setIsOpen] = useState(false);
  const [searchParam, setSearchParam] = useState('');
  const toggleModal = () => {
        setIsOpen(!isOpen);
  }
  
  // fetch all stories:
  useEffect(() => {
      fetch(`${baseURLDev}post/`).then(response => {
        return response.json();
      }).then(data => {
        setStories(data)});
  }, []);
  const allStories = stories.map((story, index) => <StoryCard key={index} story={story} />)

  // post button click:
  const handlePostClick = () => {
    // check if logged in:
    if (localToken === null) {
      toggleModal();
    } else {
      navigate('/story/create');
    }
  };

  const handleLoginRequest = () => {
      setIsOpen(!isOpen);
      navigate('/login');
  }

  // search by keyword through titles/content
  const handleSearch = () => {
    fetch(`${baseURLDev}post/?search=${searchParam}`).then(response => {
      return response.json();
    }).then(data => {
      setStories(data)});
  }

  const handleParamChange = e => {
    setSearchParam(e.target.value);
  }

  return (
    <>
      <WarningModalProvider backgroundComponent={FadingBackground}>
        <LoginWarningModal
          isOpen={isOpen}
          onBackgroundClick={toggleModal}
          allowScroll = {false}
        >
          <div className='warning'>
            <p>To post a story, please login</p>
            <PageButton onClick={handleLoginRequest}>LOGIN</PageButton>
            <PageButton onClick={toggleModal}>BACK TO STORIES</PageButton>
          </div> 
        </LoginWarningModal>
      </WarningModalProvider>
      <h2 style={{fontWeight: '500',
                  marginTop: '2em'}}
      >Join the
        <span style={{fontWeight: '700'}}> bagforeveryone </span>journey!
      </h2>
      <StoryPageWrapper>
        <div className='search'>
          <div className='search-form'>
            <div className='search-field'>
              <input placeholder="...search titles or content" 
                    className='form-input search-story' 
                     value={searchParam}
                     type="text" 
                     name="searchParam" 
                     onChange = {handleParamChange}
              />
            </div>
            <SlMagnifier style={{cursor: 'pointer'}} onClick={handleSearch}/>
          </div>
          <PostButton onClick={handlePostClick}>POST</PostButton>
        </div>
        <StoryListWrapper>
            {stories && allStories}
        </StoryListWrapper>
      </StoryPageWrapper>
    </>
  )
}

export default StoryList