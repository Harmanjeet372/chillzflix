import { useEffect, useState } from "react";

const RegionalMovies = ({ movies }) => {
  const [movieList, setMovieList] = useState(movies?.regional || []);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const scrollContainer = document.getElementById("scroll-container");

    const handleScroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        // Reset to the start for seamless loop
        scrollContainer.scrollLeft = 0;
        setScrolling(false);
      }
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMovieList([...movies?.regional, ...movies?.regional]);
  }, [movies]);

  const startScrolling = () => {
    if (!scrolling) {
      setScrolling(true);
      const scrollContainer = document.getElementById("scroll-container");
      const interval = setInterval(() => {
        scrollContainer.scrollLeft += 1; 
      }, 30); 

      return () => clearInterval(interval);
    }
  };

  return (
    <div
      className="relative bg-gradient-to-r from-gray-800 to-black py-10 overflow-hidden"
      onMouseEnter={() => setScrolling(false)} 
      onMouseLeave={startScrolling} 
    >
      <h1 className="text-4xl font-bold text-center text-white mb-10 tracking-wide">Regional</h1>
      <div
        id="scroll-container"
        className="flex overflow-x-scroll space-x-8 px-4 lg:px-8 scrollbar-hide py-6"
      >
        {movieList.map((movie, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-64 group hover:scale-105 transform transition-transform duration-500"
          >
            <img
              className="w-full h-80 object-cover rounded-lg shadow-xl transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-80"
              src={movie.imgSrc}
              alt={movie.title}
            />
            <h2 className="absolute top-4 left-4 text-lg font-semibold text-white bg-black bg-opacity-50 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {movie.title}
            </h2>
            <p className="absolute bottom-20 left-4 text-sm text-gray-300 bg-black bg-opacity-50 p-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-56">
              {movie.description}
            </p>
            <a
              href={movie.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-6 left-4 bg-gradient-to-r from-gray-900 to-red-600 text-white font-medium py-2 px-6 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md"
            >
              Watch
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegionalMovies;
