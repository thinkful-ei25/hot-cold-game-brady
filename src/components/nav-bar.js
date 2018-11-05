import React from 'react';

import './nav-bar.css';

export default function NavBar(props) {

  return (
    <div className="nav-bar">
      <h1 className="title">{props.title}</h1>
      <div className="game-reset-button">
        <a href = "#" className="button">{props.newGame}</a>
      </div>
    </div>
  )
}