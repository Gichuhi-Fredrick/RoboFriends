import React from 'react';

export default function Scroll(props) {
  return (
    <div
      style={{
        overflow: 'scroll',
        height: '900px',
        padding: '5px',
        marginTop: '10px',
        borderTop: '1px solid whiteSmoke',
      }}
    >
      {props.children}
    </div>
  );
}
