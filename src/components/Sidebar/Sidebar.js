// Libs
import React from 'react';
import PropTypes from 'prop-types';

// Utils

// Components

// Resources
import { ReactComponent as MotionIcon } from '../../static/img/icons/animation.svg';

// Component
const navItems = [
    {
        label: 'README',
        postfix: 'mandatory',
        href: 'https://github.com/DaveBitter/motion-workshop/blob/master/README.md',
    },
    {
        label: 'React Spring docs',
        postfix: 'optional',
        href: 'https://www.react-spring.io',
        items: [
            {
                label: 'Basics',
                postfix: 'optional',
                href: 'https://www.react-spring.io/docs/hooks/basics',
            },
            {
                label: 'Common API',
                postfix: 'optional',
                href: 'https://www.react-spring.io/docs/hooks/api',
            },
            {
                label: 'useSpring',
                postfix: 'optional',
                href: 'https://www.react-spring.io/docs/hooks/use-spring',
            },
            {
                label: 'useSprings',
                postfix: 'super optional',
                href: 'https://www.react-spring.io/docs/hooks/use-springs',
            },
            {
                label: 'useTrail',
                postfix: 'super optional',
                href: 'https://www.react-spring.io/docs/hooks/use-trail',
            },
            {
                label: 'useTransition',
                postfix: 'super optional',
                href: 'https://www.react-spring.io/docs/hooks/use-transition',
            },
            {
                label: 'useChain',
                postfix: 'super optional',
                href: 'https://www.react-spring.io/docs/hooks/use-chain',
            },
            {
                label: 'Examples',
                postfix: 'optional',
                href: 'https://www.react-spring.io/docs/hooks/examples',
            }
        ]
    },
    {
        label: 'React Spring Visualiser',
        postfix: 'Optional',
        href: 'https://react-spring-visualizer.com/',
    }
];

const SidebarItem = ({ label, postfix, href, items }) => <li className='sidebar__item'>
    <a className='sidebar__link' href={href} target='_blank' rel='noopener noreferrer'>
        {label}
        <small>{postfix}</small>
    </a>
    {items && <SidebarItems items={items} />}
</li>;

const SidebarItems = ({ items }) => <ul className='sidebar__items'>
    {items.map((item, index) => <SidebarItem key={index} {...item} />)}
</ul>;

const Sidebar = () => {
    return <aside className='sidebar'>
        <h1 className='sidebar__heading h4'>Motion Workshop <MotionIcon className='sidebar__icon' /></h1>

        <SidebarItems items={navItems} />
    </aside>;
};

// Props
Sidebar.defaultProps = {
};

const { array, string } = PropTypes;

Sidebar.propTypes = {
};

SidebarItem.propTypes = {
    items: array.isRequired,
};

SidebarItem.propTypes = {
    label: string.isRequired,
    postfix: string,
    href: string.isRequired,
    items: array
};

export default Sidebar;
