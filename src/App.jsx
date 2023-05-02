import { useEffect } from 'react';
import './App.css';
import { getMovieList } from './api';

function App() {

  const search = (value) => {
    console.log({value})
  }

  useEffect(() => {
    getMovieList()
  }, [])



  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie mania</h1>
        <input type="text" placeholder='cari movie kesayangan' className='movie-search' onChange={({target}) => search(target.value)}/>
        <div className="movie-container">
          <div className="movie-wrapper">
            <div className="movie-title">lol</div>
            <img src='' className="movie-image"></img>
            <div className="movie-date">22-10-2022</div>
            <div className="movie-rate">7.9</div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
