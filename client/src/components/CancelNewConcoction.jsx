import React from 'react';

export default class CancelNewConcoction extends React.Component {
  render() {
    return (
      <div onClick={() => { this.props.changeViewTo('home'); }}>
        <h2 className='saveBttn'>Cancel</h2>
      </div>
    );
  }
}
