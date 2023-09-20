import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import './SearchSite.css';
import Foot from '../Foot/Foot';
import SearchContent from './Searchcontent.json';

function SearchSite() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('query');

  const [searchValue, setSearchValue] = useState(searchQuery || '');
  const [activeFilter, setActiveFilter] = useState('all'); // Initial active filter is 'All Results'

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleClearInput = () => {
    setSearchValue('');
  };

  let filteredContent = [];

  if (searchValue) {
    filteredContent = SearchContent.filter((item) =>
      item.description.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

  const isNoResults = filteredContent.length === 0 && searchValue;

  return (
    <div>
      <Navbar />
      <div className="bg-neutral-200 py-10 space-y-4 flex flex-col justify-center items-center">
        <div className="flex items-center bg-white p-2 px-4 w-full xl:w-3/4">
          <input
            type="text"
            value={searchValue}
            onChange={handleInputChange}
            className="w-full p-4 focus:outline-none text-3xl"
            placeholder="Search..."
          />
          <div className="flex space-x-5 text-4xl">
            <span className="text-neutral-500 cursor-pointer">
              <FontAwesomeIcon icon={faSearch} className="" />
            </span>
            <span
              className="text-neutral-500 cursor-pointer"
              onClick={handleClearInput}
            >
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </div>
        </div>
      </div>
      <div
        className="p-6 search-content flex justify-center  overflow-y-auto"
        style={{ height: '35rem' }}
      >
        <ul className="m-8 max-w-7xl w-full">
          {isNoResults ? (
            <li className="border-b-2 py-8">
              <div className="space-y-4">
                <div>
                  <h1 className="text-3xl font-semibold text-black">
                    We found 0 results. Please try a new search.
                  </h1>
                </div>
              </div>
            </li>
          ) : (
            filteredContent.map((item, index) => (
              <li className="border-b-2 py-8" key={index}>
                <div className="space-y-4">
                  <div>
                    <Link to="/article">
                      <h1 className="text-2xl font-semibold hover:text-blue-600 hover:underline">
                        {item.heading}
                      </h1>
                    </Link>
                  </div>
                  <div className="text-xl">
                    <p>
                      {
                        item.description
                          .split(' ')
                          .map((word, wordIndex) => (
                            <span
                              key={wordIndex}
                              className={
                                word.toLowerCase() === searchValue.toLowerCase()
                                  ? 'bg-yellow-200 font-bold'
                                  : ''
                              }
                            >
                              {word}{' '}
                            </span>
                          ))
                          .slice(0, 20) /* Display only the first 15 words */
                      }
                    </p>
                  </div>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
      <div className="mt-6 pt-4 border-2">
        <Foot />
      </div>
    </div>
  );
}

export default SearchSite;
