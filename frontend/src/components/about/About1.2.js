import React from 'react'
import { useNavigate } from "react-router-dom"
import { 
    AboutContainerDiv,
    TextBoxDiv,
    StickyButtonDiv,
    LandingPageDiv
} from './About.styles'
import ImageSlider from './About'

const About1 = () => {
    

    const navigate = useNavigate();

      const handleNavigateTo = (destination) => {
        navigate(`/${destination}`)
      }

    const slides = [
        {url: '../assets/images/about/3.jpg', title: 'Slide1'},
        {url: '../assets/images/about/2.jpg', title: 'Slide2'},
        {url: '../assets/images/about/4.jpg', title: 'Slide3'}
    ];

    const ImageSliderContainerDiv = {
        width: '100vw',
        aspectRatio: '5/2',
        margin: '50px auto',
    };

    return (
        <> 
        <AboutContainerDiv id="about">
            <LandingPageDiv>
                <img src="../assets/images/about/About1.jpg" />
            </LandingPageDiv>
                <TextBoxDiv>
                    <h1>About bagforeveryone</h1>
                    <p>The project welcomes refugee and migrant communities, local Greeks, and vulnerable people residing on the Greek island of Lesvos to join in and learn how to use industrial sewing machines to craft items by hand and produce stylish shopper bags. The bags, which are all available on our website, are all made from vegan materials and purchased in the town of Mytilene, the capital of Lesvos.</p>
                    <img src="../assets/images/about/stats.png" />
                </TextBoxDiv>
                <div style={ImageSliderContainerDiv}>
                    <ImageSlider slides={slides} />
                </div>
                <StickyButtonDiv>
                    <button onClick={() => handleNavigateTo("story")}>Story</button>
                </StickyButtonDiv>
        </AboutContainerDiv>
        </>
    )
}

export default About1