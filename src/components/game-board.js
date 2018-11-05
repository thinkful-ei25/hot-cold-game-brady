import React from 'react';
import './game-board.css';
import NavBar from './nav-bar';
import EntryForm from './entry-form';


export default function GameBoard(props) {
  
return (
  <div>
    <div>
    <NavBar title="Hot or Cold" newGame="+ New Game"/>
    </div>
  <div>
      <EntryForm status="You Won. Click new game to play again."/>
  </div>
  </div> 
  );

}