import Seacrh from './pages/search/index';
import Trend from './pages/trending/index';
import React, {useState} from 'react';
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
          <nav>
            <ul>
              <li>
                <Link to="/search">Search</Link>
              </li>
              <li>
                <Link to="/trend">Trend</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/search">
              <Seacrh getData={getGifs} getSearch={searchbarChange} />
              {gifs.data?.map((gif) => (
                <Gif title={gif.title} url={gif.images.fixed_width.url} key={gif.id} />
              ))}
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
