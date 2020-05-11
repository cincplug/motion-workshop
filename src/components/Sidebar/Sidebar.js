// Libs
import React from 'react';
import PropTypes from 'prop-types';

// Utils

// Components

// Component
const navItems = [
    {
        label: 'README',
        href: 'https://github.com/DaveBitter/motion-workshop/blob/master/README.md',
    },
    {
        label: 'React Spring docs',
        href: 'https://www.react-spring.io',
        items: [
            {
                label: 'Basics',
                href: 'https://www.react-spring.io/docs/hooks/basics',
            },
            {
                label: 'Common API',
                href: 'https://www.react-spring.io/docs/hooks/api',
            },
            {
                label: 'useSpring',
                href: 'https://www.react-spring.io/docs/hooks/use-spring',
            },
            {
                label: 'useSprings',
                href: 'https://www.react-spring.io/docs/hooks/use-springs',
            },
            {
                label: 'useTrail',
                href: 'https://www.react-spring.io/docs/hooks/use-trail',
            },
            {
                label: 'useTransition',
                href: 'https://www.react-spring.io/docs/hooks/use-transition',
            },
            {
                label: 'useChain',
                href: 'https://www.react-spring.io/docs/hooks/use-chain',
            },
            {
                label: 'Examples',
                href: 'https://www.react-spring.io/docs/hooks/examples',
            }
        ]
    }
];

const SidebarItem = ({ label, href, items }) => <li className='sidebar__item'>
    <a className='sidebar__link' href={href} target='_blank' rel='noopener noreferrer'>{label}</a>
    {items && <SidebarItems items={items} />}
</li>;

const SidebarItems = ({ items }) => <ul className='sidebar__items'>
    {items.map((item, index) => <SidebarItem key={index} {...item} />)}
</ul>;

const Sidebar = () => {
    return <aside className='sidebar'>
        <h2 className='sidebar__heading h3'>Resources</h2>
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
    value: string.isRequired,
    items: array
};

export default Sidebar;
