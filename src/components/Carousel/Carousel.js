// Libs
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring'

// Utils

// Components

// Component
const CarouselItem = ({ title, copy, image, isActive }) => {
    const animationProps = useSpring({
        transform: 'translate3d(0,-40px,0)',
        opacity: 1,
        delay: isActive ? 300 : 0,
        [isActive ? 'from' : 'to']: {
            transform: 'translate3d(0,0px,0)',
            opacity: 0
        }
    })

    return <animated.li style={animationProps} className='carousel__item' data-is-active={isActive}>
        <h2 className='carousel__title'>{title}</h2>
        <p className='carousel__copy'>{copy}</p>
        <img className='carousel__image' src={image} alt={title} />
    </animated.li>
}

const Carousel = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(0)

    const handleNavigation = (updatedIndex) => {
        switch (true) {
            case updatedIndex > items.length - 1:
                setActiveIndex(0);
                break;
            case updatedIndex < 0:
                setActiveIndex(items.length - 1)
                break;
            default:
                setActiveIndex(updatedIndex)
                break;
        }
    }

    return <div className='carousel'>
        <ul className='carousel__items'>
            {items.map((item, index) => <CarouselItem key={index} {...item} isActive={index === activeIndex} />)}
        </ul>

        <button className='carousel__nav-button' onClick={() => handleNavigation(activeIndex - 1)}>Previous</button>
        <button className='carousel__nav-button' onClick={() => handleNavigation(activeIndex + 1)}>Next</button>
    </div>;
};

// Props
Carousel.defaultProps = {
    items: []
};

const { array, bool, string } = PropTypes;

Carousel.propTypes = {
    items: array.isRequired
};

CarouselItem.propTypes = {
    title: string.isRequired,
    copy: string.isRequired,
    image: string.isRequired,
    isActive: bool.isRequired
};

export default Carousel;
