import logo from '../assets/logo.png';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';
import NewHam from './NewHam';
import './NewHam.css';
import { Link } from 'react-router-dom';
import NavSearch from '../Search/NavSearch';

function Navbar() {
  const [offeringsDropdownVisible, setOfferingsDropdownVisible] =
    useState(false);
  const [shopsDropdownVisible, setShopsDropdownVisible] = useState(false);

  let offeringsTimer;
  let shopsTimer;

  const clearOfferingsTimer = () => {
    clearTimeout(offeringsTimer);
  };

  const clearShopsTimer = () => {
    clearTimeout(shopsTimer);
  };

  const closeDropdowns = () => {
    clearOfferingsTimer();
    clearShopsTimer();
    setOfferingsDropdownVisible(false);
    setShopsDropdownVisible(false);
  };

  const handleOfferingsMouseEnter = () => {
    clearShopsTimer();
    setOfferingsDropdownVisible(true);
    setShopsDropdownVisible(false);
  };

  const handleShopsMouseEnter = () => {
    clearOfferingsTimer();
    setShopsDropdownVisible(true);
    setOfferingsDropdownVisible(false);
  };

  const handleMouseLeave = () => {
    offeringsTimer = setTimeout(() => {
      setOfferingsDropdownVisible(false);
    }, 300);

    shopsTimer = setTimeout(() => {
      setShopsDropdownVisible(false);
    }, 300);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleModal() {
    setIsModalOpen(true); // Open the modal
  }

  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const toggleSearchModal = () => {
    setIsSearchModalOpen(!isSearchModalOpen);
  };

  return (
    <nav className="bg-slate-100 ">
      <div className="flex items-center justify-between lg:p-6 py-4  ">
        <div className="flex items-center justify-between md:mr-auto space-x-4 lg:ml-0 ml-4">
          <div>
            <button className="text-black hover:" onClick={toggleModal}>
              <FontAwesomeIcon icon={faBars} size="2x" />
            </button>
          </div>
          <div className="p-0 m-0 w-24">
            <Link to="/" className="">
              <img src={logo} className="mr-3 h-full" alt="Logo" />
            </Link>
          </div>
        </div>

        <div
          className="flex justify-between w-full md:w-auto space-x-20 pt-4"
          id="navbar-dropdown"
          onMouseLeave={handleMouseLeave}
        >
          {' '}
          <ul className="hidden lg:flex font-medium lg:p-0  mr-0 lg:mr-20 lg:space-x-8 lg:mt-0 ">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4  rounded  md:hover:text-blue-500 md:p-0 text-black "
                aria-current="page"
              >
                ABOUT US
              </a>
            </li>

            <li
              onMouseEnter={handleOfferingsMouseEnter}
              onMouseLeave={clearOfferingsTimer} //
            >
              <button className="relative flex items-center justify-between w-full py-2 pl-3 pr-4   md:border-0 md:hover:text-blue-500 md:p-0 md:w-auto text-black">
                OFFERINGS{' '}
                <svg
                  className="w-2.5 h-2.5 ml-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              <div
                className={`z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 ${
                  offeringsDropdownVisible ? 'block' : 'hidden'
                } absolute mt-2`}
                onMouseEnter={clearOfferingsTimer} // Add onMouseEnter to clear the timer
                onMouseLeave={handleMouseLeave} // Add onMouseLeave event handler
              >
                <ul
                  className="py-2 text-sm  text-white"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Minimum Viable Product (MVP)
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Proof of Concept (POC)
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Corporate and Academic Training(CAT)
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li
              onMouseEnter={handleShopsMouseEnter}
              onMouseLeave={clearShopsTimer} // A
            >
              <button className="relative flex items-center justify-between w-full py-2 pl-3 pr-4   md:border-0 md:hover:text-blue-500 md:p-0 md:w-auto text-black">
                SHOP{' '}
                <svg
                  className="w-2.5 h-2.5 ml-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              <div
                className={`z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 ${
                  shopsDropdownVisible ? 'block' : 'hidden'
                } absolute mt-2`}
                onMouseEnter={clearShopsTimer} // Add onMouseEnter to clear the timer
                onMouseLeave={handleMouseLeave} // Add onMouseLeave event handler
              >
                <ul
                  className="py-2 text-sm  text-white"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Try
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Buy
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li>
            <Link to="/assessment" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 text-black">
                ASSESSMENTS
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 text-black   "
              >
                BLOG
              </a>
            </li>
            <li>
            <Link to="/contact" className="ml-10">
                CONTACT US
                </Link>
            </li>
          </ul>
        </div>
        <div className="pt-4 pr-4 lg:pt-2 lg:pr-0 ">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="text-gray-700 text-2xl lg:text-3xl"
            onClick={toggleSearchModal}
          />
        </div>
      </div>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <NewHam closeModal={() => setIsModalOpen(false)} />
          </div>
        </div>
      )}
      {isSearchModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <NavSearch toggleSearchModal={toggleSearchModal} />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
