import React from 'react';

export default function SearchBox({ onInputChange }) {
  return (
    <>
      <div className="pa2">
        <input
          onInput={onInputChange}
          type="search"
          placeholder="search..."
          className="pa3 ba b--green bg-lightest-blue"
        />
      </div>
    </>
  );
}
