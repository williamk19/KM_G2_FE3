import React, { useState } from 'react';
import Seacrh from './pages/search/index';
import Trend from './pages/trending/index';
import Gif from './components/gif.component';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  const [search, setSearch] = useState('');
  const [gifs, setGifs] = useState({});

  const searchbarChange = (e) => {
    setSearch(e.target.value);
  };

  const getGifs = (e) => {
    e.preventDefault();
    const temp = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_KEY
}&q=${search}&limit=12`;
    fetch(temp)
      .then((res) => res.json())
      .then(data => {
        setGifs(data);
      });
    
  };

  return (
    <>
      <Router>
        <div>
          <nav className='bg-slate-400 py-5 px-3'>
            <ul className='flex space-x-11'>
              <li>
                <h3 className='text-3xl'>Giphy-GIFinder</h3>
              </li>
              <li>
                <Link to="/search" className='text-3xl'>Search</Link>
              </li>
              <li>
                <Link to="/trend" className='text-3xl'>Trend</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/search">
              <Seacrh getData={getGifs} getSearch={searchbarChange} />
              <div className='component-container'>
                {gifs.data?.map((gif) => (
                  <Gif title={gif.title} url={gif.images.fixed_width.url} key={gif.id} />
                ))}
              </div>
              
            </Route>
            <Route path="/trend">
              <Trend />
            </Route>
          </Switch>
        </div>
      </Router>
      
    </>
  );
}

export default App;
