import { useState } from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import SearchContent from './Searchcontent.json'; // Correct import statement


function NavSearch({ toggleSearchModal }) {
  const [searchText, setSearchText] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearchClick = () => {
    setIsSearching(true);
  };

  const handleClearClick = () => {
    setSearchText('');
    setIsSearching(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();

      window.location.href = `/search?query=${searchText}`;
    }
  };

  return (
    <nav className="bg-white  border-b-2 p-4 my-0 border-2 border-blue-600">
      <div className="relative w-full  px-4 py-6">
        <input
          type="text"
          placeholder="Search for blogs..."
          className={` w-full md:text-2xl outline-none ${
            isSearching ? 'pl-10 pr-10' : ''
          }`}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Link
          to={`/search?query=${searchText}`}
          className="absolute right-20 md:text-4xl top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          <FontAwesomeIcon icon={faSearch} />
        </Link>
        <button
          onClick={toggleSearchModal}
          className="absolute right-4 md:text-5xl top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
    </nav>
  );
}

export default NavSearch;
