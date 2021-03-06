"use strict"
import React from 'react';

const SaveNewConcoction = (props) => {
  if (!props.state.actions.reduce((prev, curr) => {
    let complete = true;
    if (curr.action === '' || curr.actionOption === '' || curr.actionParams === '') {
      complete = false;
    }
    return prev && complete;
  }, true) || props.trigger === '' || props.triggerOption === '' || props.triggerParams === '') {
    return (
      <div></div>
    );
  } else {
    return (
      <div className='saveEnabled inline' onClick={ () => {props.saveConcoction()}}>
        <h2 className='saveBttn'>Launch</h2>
      </div>
    );
  }
};

export default SaveNewConcoction;
