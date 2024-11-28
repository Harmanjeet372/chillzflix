const HindiHits = ({ movies }) => {
  return (
    
    <div className="bg-gradient-to-b from-gray-800 to-black py-12">
  <h1 className="text-4xl font-extrabold text-center text-white mb-10">
    Hindi Hits
  </h1>
  <div className="relative flex overflow-x-auto space-x-8 scrollbar-hide px-10 py-8">
    {movies?.hindiHits?.map((movie, index) => (
      <div
        key={index}
        className="relative flex-shrink-0 w-64 bg-gray-900 rounded-lg shadow-lg group hover:scale-105 transform transition-transform duration-300"
      >
        {/* Image */}
        <img
          src={movie.imgSrc}
          alt={movie.title}
          className="w-full h-80 object-cover rounded-lg"
        />
        
        {/* Overlay Container */}
        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-end items-start p-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {/* Title */}
          <h2 className="text-lg font-semibold text-white">
            {movie.title}
          </h2>
          {/* Description */}
          <p className="text-sm text-gray-300 mt-2">
            {movie.description}
          </p>
          {/* Watch Button */}
            <a
              href={movie.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-gradient-to-r from-green-400 to-blue-500 text-white font-medium py-2 px-6 rounded-full"
            >
              Watch
            </a>
        </div>
      </div>
    ))}
  </div>
  {/* Scroll Right Arrow */}
  <div className="absolute top-1/2 right-8 transform -translate-y-1/2 text-white text-4xl cursor-pointer hover:opacity-100 opacity-50 transition-opacity duration-300">
    <i className="fas fa-chevron-right"></i>
  </div>
</div>


  );
};

export default HindiHits;
