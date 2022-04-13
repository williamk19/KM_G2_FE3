import React from 'react';

const seacrh = ({ getData, getSearch }) => {
    return (
        <>
            <input
                className='border-2 border-slate-600' 
                type="search"
                name='searchbox'
                onChange={getSearch} />
            <input
                className='border-2 border-slate-600' 
                type="submit" 
                value="SEARCH" 
                onClick={getData} />
        </>
    );
};

export default seacrh;