// Libs
import React from 'react';
// import PropTypes from 'prop-types';

// Utils

// Data
import CAROUSEL_ITEMS from './data/carouselItems.json';

// Components
import Carousel from './components/Carousel/Carousel';
import Sidebar from './components/Sidebar/Sidebar';

// Component
const App = () => {
  return <>
    <Sidebar />

    <main>
      <h1>Motion Workshop</h1>

      <Carousel items={CAROUSEL_ITEMS} />
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
