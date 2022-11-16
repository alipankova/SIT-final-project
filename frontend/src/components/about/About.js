import React, { useState } from 'react'
import { 
    ImageSliderDiv,
} from './About.styles'


const ImageSlider = ({slides}) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const slideStyles = {
        width: '100%',
        height: '100%',
        borderRadius: '15px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${slides[currentIndex].url})`,
    }

    const leftArrowStyles = {
        position: 'absolute',
        top: '240%',
        left: '10vw',
        fontSize: '40px',
        color: 'white',
        zIndex: 0, 
        cursor: 'pointer',
    }
    
    const rightArrowStyles = {
        position: 'absolute',
        top: '240%',
        right: '10vw',
        fontSize: '40px',
        color: 'white',
        zIndex: 0, 
        cursor: 'pointer',
    }

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    return (
        <ImageSliderDiv>
            <div style={slideStyles}>
                <div style={leftArrowStyles} onClick={goToPrevious}>◀</div>
                <div style={rightArrowStyles} onClick={goToNext}>▶</div>
            </div>
        </ImageSliderDiv>
    )
}

export default ImageSlider;

