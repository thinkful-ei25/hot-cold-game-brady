import React from 'react';
import './past-guesses.css';


export default function PastGuesses(props) {
  return (
    <div class="past-guesses">
      {props.guesses}
    </div>
  );

}

