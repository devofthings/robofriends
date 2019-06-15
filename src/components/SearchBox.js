import React from 'react';

const SearchBox = ({  searchChange }) => {
    return (
        <div className='pa2'>
            <input
                className='pa3 ba b--navy bg-washed-blue code'
                type='search' 
                placeholder='Search Robots..'
                onChange={searchChange} 
            />
        </div>
    );
}

export default SearchBox;