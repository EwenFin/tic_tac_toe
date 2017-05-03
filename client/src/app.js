import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board.jsx'
// import Game from './components/Game.jsx'


window.onload = function(){
  ReactDOM.render(
    <Board/>,
    document.getElementById('app')
  );

  calculateWinner(squares)
}
