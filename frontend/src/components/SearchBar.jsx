// import React, { useState } from 'react';

// const SearchBar = ({ data }) => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredResults, setFilteredResults] = useState([]);

//   // Handle changes in the search input
//   const handleSearch = (event) => {
//     const value = event.target.value.toLowerCase();
//     setSearchTerm(value);

//     // Filter the data based on the search term
//     const results = data.filter(item =>
//       item.toLowerCase().includes(value)
//     );

//     setFilteredResults(results);
//   };

//   return (
//     <div style={{ margin: '20px' }}>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchTerm}
//         onChange={handleSearch}
//         style={{
//           padding: '10px',
//           width: '300px',
//           border: '1px solid #ccc',
//           borderRadius: '4px'
//         }}
//       />
//       <ul style={{ marginTop: '10px' }}>
//         {filteredResults.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SearchBar;