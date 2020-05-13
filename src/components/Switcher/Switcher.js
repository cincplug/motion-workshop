// Libs
import React from 'react';
import PropTypes from 'prop-types';

// Utils

// Components

// Component
const SwitcherItem = ({ id, label, handleSelect, isActive }) => <li className='switcher__item' data-is-active={isActive}>
    <button className='switcher__button' onClick={() => handleSelect(id)}>{label}</button>
</li>;

const Switcher = ({ activeItem, handleSelect, items }) => {
    return <ul className='switcher'>
        {items.map(item => <SwitcherItem key={item.id} {...item} isActive={activeItem === item.id} handleSelect={handleSelect} />)}
    </ul>;
};

// Props
Switcher.defaultProps = {
    activeItem: null,
    handleSelect: () => { },
    items: []
};

const { array, bool, func, string } = PropTypes;

Switcher.propTypes = {
    activeItem: string,
    handleSelect: func.isRequired,
    items: array.isRequired
};

SwitcherItem.propTypes = {
    id: string.isRequired,
    label: string.isRequired,
    isActive: bool
};

export default Switcher;
