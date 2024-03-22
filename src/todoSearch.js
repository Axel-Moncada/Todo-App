import React from 'react';
import './TodoSearch.css';

function TodoSearch({
  searchValue,
  setserchValue,

}) {
  return (

    <div className='TodoSearch'>
    <input 
    placeholder="Search homework"
    value={searchValue}
    onChange={
      (event) => {
        setserchValue(event.target.value);
      }
    }
      
    />

    <button> I Got This!</button>
    </div>
  );
}

export { TodoSearch };