import React from 'react';
import './MovieList.css';

const MovieList = () => {
  const movies = [
    {
      title: 'Peaky Blinders',
      imgSrc: './1.jpeg',
      desc: 'A notorious gang in 1919 Birmingham, England, is led by the fierce Tommy Shelby, a crime boss set on moving up in the world no matter the cost.',
      link: 'https://example.com/watch/peaky-blinders',
    },
    {
      title: 'Money Heist',
      imgSrc: './2.jpeg',
      desc: 'Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal manipulates the police to carry out his plan.',
      link: 'https://example.com/watch/money-heist',
    },
    {
      title: 'TENET',
      imgSrc: './333.jpg',
      desc: 'A secret agent is given a single word as his weapon and sent to prevent the onset of World War III.',
      link: 'https://example.com/watch/tenet',
    },
    {
      title: 'Knives Out',
      imgSrc: './444.jpg',
      desc: 'The circumstances surrounding the death of crime novelist Harlan Thrombey are mysterious.',
      link: 'https://example.com/watch/knives-out',
    },
    {
      title: 'Avengers',
      imgSrc: './5.jpg',
      desc: 'American superhero film based on the Marvel Comics superhero team of the same name.',
      link: 'https://example.com/watch/avengers',
    },
    {
      title: 'Rampage',
      imgSrc: './6.jpg',
      desc: 'Rampage is a 2018 American science fiction monster film directed by Brad Peyton, loosely based on the video game series of the same name by Midway Games.',
      link: 'https://example.com/watch/rampage',
    },
    {
      title: "Ender's Game",
      imgSrc: './7.jpg',
      desc: 'Ender\'s Game is a 2013 American military science fiction action film based on Orson Scott Card\'s 1985 novel of the same name.',
      link: 'https://example.com/watch/enders-game',
    }
  ];

  return (
    <div className="movie-list-container">
      <h1 id="a1" className="movie-list-title">English Hits</h1>
      <div className="movie-list-wrapper">
        <div className="movie-list">
          {movies.map((movie, index) => (
            <div key={index} className="movie-list-item">
              <img className="movie-list-item-img" src={movie.imgSrc} alt={movie.title} />
              <span className="movie-list-item-title">{movie.title}</span>
              <p className="movie-list-item-desc">{movie.desc}</p>
              <button className="movie-list-item-button">
                <a href={movie.link} target="_blank" rel="noopener noreferrer">Watch</a>
              </button>
            </div>
          ))}
        </div>
        <i className="fas fa-chevron-right arrow"></i>
      </div>
    </div>
    
  );
};

export default MovieList;
