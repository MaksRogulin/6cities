import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {cards} from './cards-data';

const COUNTS = {
  PLACES_COUNT: 312
};

ReactDOM.render(
    <App cards={cards} placesCount={COUNTS.PLACES_COUNT} />,
    document.querySelector(`#root`)
);