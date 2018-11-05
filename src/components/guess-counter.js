import React from 'react';
import './guess-counter.css';


export default function GuessCounter(props) {
  return (
    <div class = "counter">
      <p>Guess #<span class="number-guess">{props.totalGuesses}</span>!</p>
    </div>
  );

}

