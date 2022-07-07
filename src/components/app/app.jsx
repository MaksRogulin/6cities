import React from 'react';
import MainPage from '../main-page/main-page';
import PropTypes from 'prop-types';

const App = ({ cards, placesCount }) => {
  return (
    <MainPage cards={cards} placesCount={placesCount}></MainPage>
  );
};

App.propTypes = {
  placesCount: PropTypes.string.isRequired,
  cards: PropTypes.array.isRequired,
};

export default App;
