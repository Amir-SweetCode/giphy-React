import { useState } from 'react';
import './App.css';

function App() {

  const [searchTerm, setSearchTerm] = useState('');
  const [limit, setLimit] = useState(1);
  const [gifs, setGifs] = useState([]);

  const API_KEY = '2JgYTHVCvRTorxzyX6BKEWUdHrMkEKBp';

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${API_KEY}&limit=${limit}`)
      .then(response => response.json())
      .then(data => {
        setGifs(data.data);
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="App">
      <h1 className="title">Giphy</h1>
      <form onSubmit={handleSubmit} id="searchForm">
        <div className="search">
          <input type="text" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}
            id="searchInput"
            className="form-control"
            placeholder="Поиск GIF" />
          <button id="searchButton" type="submit" className="btn btn-primary">Поиск</button>
        </div>
        <div className="settings">
          <label htmlFor="limit">Выберите количество GIF: </label>
          <select id="limit" name="limit" className="form-select" value={limit} onChange={(event) => setLimit(event.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
      </form>
      <div id="gifContainer">
        {gifs.map((gif) => (
          <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} />
        ))}
      </div>
    </div>
  );
}

export default App;
