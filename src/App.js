import React from 'react';

import { connect } from "react-redux";

//Componentes auxiliares:
import GameOver from './views/GameOver';
import GameScreen from './views/GameScreen';

let App = (props) => {
  return (
    <div className="app">
      {(!props.theGameIsOver) ? <GameScreen /> : <GameOver />}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    theGameIsOver: state.userReducer.theGameIsOver,
  };
};

export default connect(mapStateToProps)(App);
