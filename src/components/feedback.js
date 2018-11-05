import React from 'react';
import './feedback.css';


export default function Feedback(props) {

  return (
    <div className = "status">
      <p>{props.status}</p>
    </div>
  );
}
