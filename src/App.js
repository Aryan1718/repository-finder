import React, { useState } from 'react';
import './App.css';
import Navbar from './components/nav-bar/nav-bar'
import { handleSearch } from './components/handler/searchHandler'; // Importing handleSearch from searchHandler.js
import { Analytics } from "@vercel/analytics/react"

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [dataCard, setDataCard] = useState([]);
  const [searched, setSearched] = useState(false); // State to track if search has been performed

  const fetchData = async () => {
    try {
      const newDataCard = await handleSearch(searchQuery);
      setDataCard(newDataCard);
      setSearched(true); // Set searched to true after fetching data
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <div className="App">
      <Navbar />
      <div className='container'>
        <h1 className="text-center font-bold text-black text-4xl">
          Find the perfect project repositories
        </h1>
        <p className="mx-auto font-normal text-sm my-6 max-w-lg">
          Please enter your project name and discover related repositories along with their links and fork counts.
        </p>
        <div className="search-box">
          <input
            type="text"
            className="search-input"
            placeholder="Search Projects By Name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="search-button" onClick={fetchData}>Search</button>
        </div>

        <div className="content">
          {searched && dataCard.length === 0 && (
            <p className="no-data-message">No repositories found.</p>
          )}
          <div className="card-container">
            {dataCard.map((item, index) => (
              <div key={index} className="card">
                <h2>{item.projectName}</h2>
                <p>URL: <a href={item.url}>{item.url}</a></p>
                <p>Description:</p>
                <p>{item.des}</p>
                <p>Clone URL: <a href={item.clone_url}>{item.clone_url}</a></p>
                <p>Total Forks: {item.forks}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <Analytics />
    </>
  );
}

export default App;
