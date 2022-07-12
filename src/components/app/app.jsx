import React from 'react';
import MainPage from '../main-page/main-page';
import LoginComponent from '../login-component/login-component';
import FavoritesComponent from '../favorites-component/favorites-component';
import PropertyComponent from '../property-component/property-component';
import NotPageComponent from '../not-page-component/not-page-component';
import PropTypes from 'prop-types';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

const App = ({ cards, placesCount }) => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <MainPage cards={cards} placesCount={placesCount}/>
      </Route>
      <Route exact path="/login">
        <LoginComponent/>
      </Route>
      <Route exact path="/favorites">
        <FavoritesComponent/>
      </Route>
      <Route exact path="/offer">
        <PropertyComponent/>
      </Route>
      <Route>
        <NotPageComponent/>
      </Route>
    </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
  cards: PropTypes.array.isRequired,
};

export default App;