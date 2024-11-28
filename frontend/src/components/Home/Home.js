import React, { useEffect, useRef, useState } from 'react';
import RegionalMovies from '../MovieList/Regional';
import HindiHits from '../MovieList/HindiHits';
import FeaturedContent from '../Profile/Profile';

const Home = ( { moviesRef, favoritesRef, watchLaterRef}) => {
  const [movies, setMovies] = useState({ movies: [], favorites: [], regional: [], watchLater: [] });

  useEffect(() => {
    const fetchMovies = async () => {
      
      const data =
      {
        "movies": [
          {
            "title": "Peaky Blinders",
            "imgSrc": "./1.jpeg",
            "details": {
              "description": "A notorious gang in 1919 Birmingham, England, is led by the fierce Tommy Shelby, a crime boss set on moving up in the world no matter the cost.",
              "link": "https://example.com/watch/peaky-blinders"
            }
          },
          {
            "title": "Money Heist",
            "imgSrc": "./2.jpeg",
            "details": {
              "description": "Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal manipulates the police to carry out his plan.",
              "link": "https://example.com/watch/money-heist"
            }
          },
          {
            "title": "TENET",
            "imgSrc": "./333.jpg",
            "details": {
              "description": "A secret agent is given a single word as his weapon and sent to prevent the onset of World War III.",
              "link": "https://example.com/watch/tenet"
            }
          },
          {
            "title": "Knives Out",
            "imgSrc": "./444.jpg",
            "details": {
              "description": "The circumstances surrounding the death of crime novelist Harlan Thrombey are mysterious.",
              "link": "https://example.com/watch/knives-out"
            }
          },
          {
            "title": "Avengers",
            "imgSrc": "./5.jpg",
            "details": {
              "description": "American superhero film based on the Marvel Comics superhero team of the same name.",
              "link": "https://example.com/watch/avengers"
            }
          },
          {
            "title": "Rampage",
            "imgSrc": "./6.jpg",
            "details": {
              "description": "Rampage is a 2018 American science fiction monster film directed by Brad Peyton, loosely based on the video game series of the same name by Midway Games.",
              "link": "https://example.com/watch/rampage"
            }
          },
          {
            "title": "Ender's Game",
            "imgSrc": "./7.jpg",
            "details": {
              "description": "Ender's Game is a 2013 American military science fiction action film based on Orson Scott Card's 1985 novel of the same name.",
              "link": "https://example.com/watch/enders-game"
            }
          }
        ],
        "favorites": [
          {
            "title": "The Kargil Girl",
            "imgSrc": "./20.jpg",
            "details": {
              "description": "A story of a brave Indian Air Force pilot.",
              "link": "https://example.com/watch/the-kargil-girl"
            }
          },
          {
            "title": "Inception",
            "imgSrc": "./25.jpg",
            "details": {
              "description": "A thief who steals corporate secrets through dream-sharing technology is tasked with planting an idea.",
              "link": "https://example.com/watch/inception"
            }
          },
          {
            "title": "Thor",
            "imgSrc": "./23.jpg",
            "details": {
              "description": "The powerful but arrogant god Thor is cast out of Asgard to live amongst humans.",
              "link": "https://example.com/watch/thor"
            }
          },
          {
            "title": "Raya and the Last Dragon",
            "imgSrc": "./24.jpg",
            "details": {
              "description": "A lone warrior sets out to find the last dragon to save her kingdom.",
              "link": "https://example.com/watch/raya-the-last-dragon"
            }
          },
          {
            "title": "Avengers",
            "imgSrc": "./22.jpg",
            "details": {
              "description": "Earth's mightiest heroes must come together to stop a global threat.",
              "link": "https://example.com/watch/avengers"
            }
          },
          {
            "title": "Lego Batman",
            "imgSrc": "./15.jpg",
            "details": {
              "description": "Lego Batman sets out to save Gotham City from the Joker's hostile takeover.",
              "link": "https://example.com/watch/lego-batman"
            }
          }
        ],
        "regional": [
          {
            "title": "Sufna",
            "imgSrc": "./30.jfif",
            "description": "Jeet, a carefree young man, and Teg, a poor labourer working in the fields, fall in love with each other.",
            "link": "https://example.com/watch/sufna"
          },
          {
            "title": "Dear Comorade",
            "imgSrc": "./31.jpg",
            "description": "Bobby, a student union leader with anger issues, falls in love with Lily, a state-level cricketer.",
            "link": "https://example.com/watch/dear-comorade"
          },
          {
            "title": "NatSamrath",
            "imgSrc": "./32.jpg",
            "description": "After retirement, Ganpat Belwalkar, a Shakespearean actor, divides his property amongst his two children.",
            "link": "https://example.com/watch/natsamrath"
          },
          {
            "title": "World famous lover",
            "imgSrc": "./33.jpg",
            "description": "As Gautham, an aspiring writer, grieves his heartbreak by penning his thoughts in the form of love stories.",
            "link": "https://example.com/watch/world-famous-lover"
          },
          {
            "title": "Qismat",
            "imgSrc": "./34.jpg",
            "description": "Shivjit and Bani pretend to be in a relationship to make her ex-boyfriend jealous.",
            "link": "https://example.com/watch/qismat"
          },
          {
            "title": "Chal mera putt",
            "imgSrc": "./35.jpg",
            "description": "Six illegal immigrants try to make a living in the UK while fearing a raid. However, they develop a friendship and always try to look after each other.",
            "link": "https://example.com/watch/chal-mera-putt"
          }
        ],
        "watchLater": [
          {
            "title": "Iron Man",
            "imgSrc": "./8.jpg",
            "description": "An industrialist constructs a high-tech armoured and decides to use his suit to fight against evil forces and save the world.",
            "link": "https://example.com/watch/iron-man"
          },
          {
            "title": "Mirzapur",
            "imgSrc": "./9.jpg",
            "description": "The iron-fisted Akhandanand Tripathi is a millionaire carpet exporter and the mafia don of Mirzapur. His son, Munna, is an unworthy, power-hungry heir who will stop at nothing to inherit his father's legacy.",
            "link": "https://example.com/watch/mirzapur"
          },
          {
            "title": "Due Date",
            "imgSrc": "./10.jpg",
            "description": "The estimated date of delivery, also known as expected date of confinement, and estimated due date or simply due date.",
            "link": "https://example.com/watch/due-date"
          },
          {
            "title": "The Family Man",
            "imgSrc": "./11.jpg",
            "description": "The Family Man is an edgy action-drama series, which tells the story of a middle-class man who works for a special cell of the National Investigation Agency.",
            "link": "https://example.com/watch/the-family-man"
          },
          {
            "title": "Sacred Games",
            "imgSrc": "./12.jpg",
            "description": "A link in their pasts leads an honest cop to a fugitive gang boss, whose cryptic warning spurs the officer on a quest to save Mumbai from cataclysm.",
            "link": "https://example.com/watch/sacred-games"
          },
          {
            "title": "3 Idiots",
            "imgSrc": "./21.png",
            "description": "3 Idiots is a 2009 Indian Hindi-language coming-of-age comedy-drama film directed by Rajkumar Hirani, and also co-written by him with Abhijat Joshi.",
            "link": "https://example.com/watch/3-idiots"
          }
        ],
        "hindiHits": [
          {
            title: "Kabir Singh",
            description:
              "Kabir, a genius yet hostile medical student, falls in love with Preeti from his college. When Preeti's father spots the couple kissing.",
            imgSrc: "./36.jpg",
            link: "https://example.com/watch/kabir-singh",
          },
          {
            title: "Dil Bechara",
            description:
              "While struggling to survive, Manny and Kizie, who each have a terminal illness, fall in love with each other.",
            imgSrc: "./37.jpg",
            link: "https://example.com/watch/dil-bechara",
          },
          {
            title: "Chhichhore",
            description:
              "A tragic incident forces Anirudh, a middle-aged man, to reminisce about his college days along with his friends, who were labelled as losers.",
            imgSrc: "./38.jfif",
            link: "https://example.com/watch/chichore",
          },
          {
            title: "Devdas",
            description:
              "After his wealthy family prohibits him from marrying the woman he is in love with, Devdas's life spirals downward as he takes up alcohol and vice to alleviate the pain.",
            imgSrc: "./42.jpg",
            link: "https://example.com/watch/devdas",
          },
          {
            title: "War",
            description:
              "Kabir, a secret agent, goes rogue after a mission to catch a terrorist goes awry. However, his boss sends Khalid, another agent and his student, to track him down.",
            imgSrc: "./40.jpg",
            link: "https://example.com/watch/war",
          },
          {
            title: "Gangs of Wasseypur",
            description:
              "Gangs of Wasseypur is a 2012 Indian two-part crime film produced and directed by Anurag Kashyap, written by Kashyap and Zeishan Quadri.",
            imgSrc: "./41.jpeg",
            link: "https://example.com/watch/ganges-of-wasseypur",
          },
        ]


      }

      setMovies(data);
    };

    fetchMovies();
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen max-w-max ">
      <div className="mx-auto py-6" >



        <section ref={moviesRef} id="movies">
          {/* Movies Section */}
          <div className="mb-10 px-16">
            <h2 className="text-3xl font-bold mb-6">Movies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {movies.movies?.map((movie, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col"
                >
                  <img
                    src={movie.imgSrc}
                    alt={movie.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-4 flex-grow flex flex-col">
                    <h3 className="text-xl font-semibold mb-2">{movie.title}</h3>
                    <p className="text-gray-400 text-sm flex-grow">
                      {movie.details.description}
                    </p>
                    <a
                      href={movie.details.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center mt-4 text-white bg-red-600 hover:bg-red-700 font-semibold py-2 px-4 rounded"
                    >
                      Watch Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Favoritses Section */}
        <section ref={favoritesRef} id="favorites">
          <div className="mb-10 px-16">
            <h2 className="text-3xl font-bold mt-2 mb-6">Favorites</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {movies.favorites?.map((favorite, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col"
                >
                  <img
                    src={favorite.imgSrc}
                    alt={favorite.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-4 flex-grow flex flex-col">
                    <h3 className="text-xl font-semibold mb-2">
                      {favorite.title}
                    </h3>
                    <p className="text-gray-400 text-sm flex-grow">
                      {favorite.details.description}
                    </p>
                    <a
                      href={favorite.details.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center mt-4 text-white bg-red-600 hover:bg-red-700 font-semibold py-2 px-4 rounded"
                    >
                      Watch Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Regional Section */}

        <RegionalMovies movies={movies} />


        <section ref={watchLaterRef} id="watchLater">
          {/* Watch Later Section */}
          <div className="w-full mt -10 p-10  bg-gradient-to-r from-gray-800 to-black py-12 ">
            <h1 className="text-4xl font-extrabold text-center text-white mb-8 tracking-wide">Watch Later</h1>
            <div className="flex overflow-x-auto space-x-8 py-8 w-full scrollbar-hide">
              {movies?.watchLater.map((movie, index) => (
                <div key={index} className="relative w-72 group hover:scale-105 transform transition-all duration-500">
                  {/* Image */}
                  <img
                    className="w-full h-80 object-cover rounded-lg shadow-xl transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-80"
                    src={movie.imgSrc}
                    alt={movie.title}
                  />
                  <div className="absolute top-4 left-6 text-white text-2xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {movie.title}
                  </div>
                  <p className="absolute bottom-20 left-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-56">
                    {movie.description}
                  </p>
                  <a
                    href={movie.link}
                    className="absolute bottom-6 left-6 bg-gradient-to-r from-gray-900 to-red-600 text-white py-2 px-6 font-semibold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    Watch Now
                  </a>
                </div>
              ))}
            </div>
            {/* Right Arrow for Scrolling */}
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white text-3xl opacity-50 hover:opacity-100 cursor-pointer transition-opacity duration-300">
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>
        </section>

        {/* Hindi Hits Section */}
        <HindiHits movies={movies} />

      </div>
    </div>
  );

};

export default Home;
