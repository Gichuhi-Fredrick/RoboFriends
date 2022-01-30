import React from 'react';

export default function Card({name, id, email}) {
  return (
  <>
    <div className='tc bg-light-green dib br3 pa3 ma2 grow'>
      <img src={`https://robohash.org/${id}?150X150`} alt='robot' />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
    </>
  )
}
