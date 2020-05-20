import React from 'react';

const userOutput = (props) => {
    const style = {
        backgroundColor: 'yellow',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    }
  return (
      <div className='userOutput'>
          <p style={style}>message: {props.username}</p>
          <p>other value</p>
      </div>
  );
};

export default userOutput;