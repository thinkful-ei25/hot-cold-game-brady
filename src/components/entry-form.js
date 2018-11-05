import React from 'react';
import './entry-form.css';
import Feedback from './feedback';
import GuessCounter from './guess-counter';
import PastGuesses from './past-guesses';
import GuessInput from './guess-input';

export default function EntryForm(props) {
  return (
    <div className="guess-box">
      <Feedback status={props.status} />
      <GuessInput />
      <GuessCounter totalGuesses="10" />
      <PastGuesses guesses="1,2,5,8,24,64" />
    </div>
  );
}
