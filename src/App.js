import Seacrh from './pages/search/index';
import React, {useState} from 'react';
import Gif from './components/gif.component';
import './App.css';

const API_KEY = '6II6Akr2GFYoZSooxoCE4PU9aJ88FDJ8';
const App = () => {
  const [search, setSearch] = useState('');
  const [gifs, setGifs] = useState({});

  const searchbarChange = (e) => {
    setSearch(e.target.value);
  };

  const getGifs = (e) => {
    e.preventDefault();
    const temp = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${search}&limit=12`;
    fetch(temp)
      .then((res) => res.json())
      .then(data => {
        setGifs(data);
      });
    
  };

  return (
    <>
      <Seacrh getData={getGifs} getSearch={searchbarChange} />
      {gifs.data?.map((gif) => (
        <Gif title={gif.title} url={gif.images.fixed_width.url} key={gif.id}/>
      ))}
    </>
  );
}

export default App;
