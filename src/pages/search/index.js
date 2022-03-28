import React from 'react';

const seacrh = ({getData, getSearch}) => {
    return (
        <>
            <input type="search" name='searchbox' onChange={getSearch}/>
            <input type="submit" value="SEARCH" onClick={getData}/>
        </>
    );
};

export default seacrh;