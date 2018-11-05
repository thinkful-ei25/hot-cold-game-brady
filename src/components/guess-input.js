import React from 'react';
// import './guess-input.css';

export default function GuessInput(props) {
  return (
    <form>
      <input type = "text" maxLength="3" placeholder="Enter Your Guess Here"></input>
      <input type ="submit" class="button" name="submit"></input>
    </form>
  )

}
