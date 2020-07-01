import React from 'react';
import PropTypes from 'prop-types';



function Question(props) {
  return (
    <React.Fragment>
      <h3>{props.questionText}</h3>
      <button onClick={props.clickNextFunction}>Yes</button>
    </React.Fragment>
    );
  }

  Question.propTypes = {
    questionText: PropTypes.string,

  };
  

export default Question;
