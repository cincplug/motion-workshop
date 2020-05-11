// Libs
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated, config } from 'react-spring'

// Utils
import getAnimationConfiguration from '../../utils/getAnimationConfiguration';

// Components

// Component
const CarouselItem = ({ title, copy, image, isActive }) => {
    const [isHidden, setIsHidden] = useState(!isActive);
    useEffect(() => {
        setTimeout(() => {
            setIsHidden(!isActive)
        }, 200);
    }, [isActive]);

    const imageProps = useSpring(getAnimationConfiguration({
        from: { transform: 'scale3d(0.9, 0.9, 0.9)' },
        to: { transform: 'scale3d(1, 1, 1)' },
        config: { ...config.wobbly },
        delay: 200,
        isActive
    }))

    const titleProps = useSpring(getAnimationConfiguration({
        from: { transform: 'translate3d(0, 0.5rem, 0)' },
        to: { transform: 'translate3d(0, 0rem, 0)' },
        config: { ...config.wobbly },
        delay: 200,
        isActive
    }))

    const copyProps = useSpring(getAnimationConfiguration({
        from: { transform: 'translate3d(0, -0.5rem, 0)' },
        to: { transform: 'translate3d(0, 0rem, 0)' },
        config: { ...config.wobbly },
        delay: 200,
        isActive
    }))

    return <li className='carousel__item' data-is-hidden={isHidden} data-is-active={isActive}>
        <animated.h2 style={titleProps} className='carousel__title'>{title}</animated.h2>
        <animated.p style={copyProps} className='carousel__copy'>{copy}</animated.p>
        <animated.img style={imageProps} className='carousel__image' src={image} alt={title} />
    </li>
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
