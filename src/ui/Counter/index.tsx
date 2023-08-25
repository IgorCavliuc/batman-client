import React from 'react';
import './style/index.scss';

const Counter = ({ count,id, increment, decrement  }: any) => {
  return (
    <div className='batman-store--ui__counter'>
      <button onClick={()=>decrement(id)}>-</button>
      <p>{count}</p>
      <button onClick={()=>increment(id)}>+</button>
    </div>
  );
};

export default Counter;
