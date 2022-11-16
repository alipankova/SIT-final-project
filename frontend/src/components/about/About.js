import React, { useState } from 'react'
import { 
    ImageSliderDiv,
} from './About.styles';
import {IoIosArrowDropleft} from 'react-icons/io';
import {IoIosArrowDropright} from 'react-icons/io';
import { faBlackboard } from '@fortawesome/free-solid-svg-icons';


const ImageSlider = ({slides}) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const slideStyles = {
        width: '100%',
        height: '500px',
        borderRadius: '15px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${slides[currentIndex].url})`,
    }

    const leftArrowStyles = {
        position: 'absolute',
        top: 'calc(50% - 5rem)',
        transform: 'translate(0, -50%)',
        left: '20vw',
        fontSize: '5em',
        color: '#fff',
        zIndex: 1, 
        cursor: 'pointer'
    }
    
    const rightArrowStyles = {
        position: 'absolute',
        top: 'calc(50% - 5rem)',
        transform: 'translate(0, -50%)',
        right: '20vw',
        fontSize: '5em',
        color: '#fff',
        zIndex: 1, 
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
                <IoIosArrowDropleft style={leftArrowStyles} onClick={goToPrevious} />
                <IoIosArrowDropright style={rightArrowStyles} onClick={goToNext} />
            </div>
        </ImageSliderDiv>
    )
}

export default ImageSlider;

