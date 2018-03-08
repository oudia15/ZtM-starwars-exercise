import React from 'react';
import './SearchBox.css'

const SearchBox = ({searchChange}) => {
  return (
      <div className='pa2'>
        <input
          className='pa3 ba b--green bg-lightest-blue tc'
          type='search'
          placeholder="Filter Characters"
          onChange={ searchChange }
          />
      </div>
  );
}

export default SearchBox;
