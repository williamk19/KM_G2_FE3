import Seacrh from './pages/search/index';
import React from 'react';
import Gif from './components/gif.component';
import './App.css';

const API_KEY = '6II6Akr2GFYoZSooxoCE4PU9aJ88FDJ8';
class App extends React.Component {
  state = {
    search: '',
    gifs: {},
  };

  searchbarChange = (e) => {
    this.setState({ search: e.target.value });
  };

  getGifs = (e) => {
    e.preventDefault();
    const temp = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${this.state.search}&limit=12`;
    fetch(temp)
      .then((res) => res.json())
      .then(data => {
        this.setState({ gifs: data });
      });
    
  };

  render() {
    return (
      <>
        <Seacrh getData={this.getGifs} getSearch={this.searchbarChange} />
        {this.state.gifs.data?.map((gif) => (
          <Gif title={gif.title} url={gif.images.fixed_width.url} key={gif.id}/>
        ))}
      </>
    );
  }
}

export default App;
