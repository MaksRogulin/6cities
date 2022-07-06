import React from "react";
import MainPage from "../main-page/main-page";

const App = ({ cards, placesCount }) => {

  return (
    <MainPage cards={cards} placesCount={placesCount}></MainPage>
  );
};

export default App;
