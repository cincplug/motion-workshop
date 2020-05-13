// Libs
import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';

// Utils

// Data
import CAROUSEL_ITEMS from './data/carouselItems.json';
import BRANDS from './data/brands.json';

// Components
import Carousel from './components/Carousel/Carousel';
import Sidebar from './components/Sidebar/Sidebar';
import Switcher from './components/Switcher/Switcher';

// Component
const App = () => {
  const [activeBrand, setActiveBrand] = useState(sessionStorage.getItem('activeBrand') || BRANDS[0].id);

  const handleSelect = id => {
    setActiveBrand(id)
  };

  useEffect(() => {
    sessionStorage.setItem('activeBrand', activeBrand);
  }, [activeBrand]);

  return <>
    <Sidebar />

    <main>
      <h1 title='Yeahhh... the contrast is bad but is says "Motion Workshop"'>Motion Workshop</h1>

      <Switcher items={BRANDS} activeItem={activeBrand} handleSelect={handleSelect} />

      <Carousel key={activeBrand} items={CAROUSEL_ITEMS[activeBrand]} />
    </main>
  </>;
};

// Props
App.defaultProps = {
};

// const { } = PropTypes;

App.propTypes = {
};

export default App;
