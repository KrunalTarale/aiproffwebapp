import React, { useState } from 'react';
import image1 from '../assets/trailer2.jpeg';
import image2 from '../assets/trailer1.jpeg';
import './Trailer.css';
import { Link } from 'react-router-dom';

const Trailer = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredtwo, setIsHoveredtwo] = useState(false);

  return (
    <div>
      {/* Row 1 */}
      <div className="lg:flex trailer ">
        <div className="flex lg:w-1/2">
          <img
            src={image1}
            alt="Left"
            className="w-full h-auto md:ml-0 md:mr-4 object-cover"
          />




        </div>
        <div className="lg:w-1/2 p-10 ">
          <div>
            <h1 className="text-5xl font-semibold leading-snug">
              From poverty to empowerment: Raising the bar for sustainable and
              inclusive growth
            </h1>
          </div>
          <div className="mt-4">
            {' '}
            <p className="leading-loose text-xl font-thin  text-gray-700">
              What would it take to raise minimum living standards and get on a
              net-zero path in this decade? Our research explores twin ambitions
              for people and the planet.
            </p>
          </div>
          <div className="mt-4">
            <p className="text-gray-500 dark:text-gray-400">
              <Link
                to="/article"
                className={`inline-flex items-center font-semibold text-black hover:text-blue-700 hover:no-underline ${
                  isHovered ? 'hovered' : ''
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Advance the continuum of progress
                <svg
                  className={`w-4 h-4 ml-2 text-blue-600 dark:text-blue-700 transition-transform ${
                    isHovered ? 'translate-x-2' : ''
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </p>

            <p className="text-gray-500 dark:text-gray-400 mt-4">
              <a
                href="#"
                className={`inline-flex items-center font-semibold text-black hover:text-blue-700 hover:no-underline ${
                  isHoveredtwo ? 'hovered' : ''
                }`}
                onMouseEnter={() => setIsHoveredtwo(true)}
                onMouseLeave={() => setIsHoveredtwo(false)}
              >
                Explore more insights from McKinsey Global Institute
                <svg
                  className={`w-4 h-4 ml-2 text-blue-600 dark:text-blue-700 transition-transform ${
                    isHoveredtwo ? 'translate-x-2' : ''
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Row 2 */}

      <div className="lg:flex flex-row-reverse trailer ">
      <div className="flex lg:w-1/2">
          <img
            src={image2}
            alt="Left"
            className="w-full h-auto md:ml-0 md:mr-4 object-cover"
          />
        </div>
        <div className="lg:w-1/2 p-10  flex justify-end">
          <div className="lg:max-w-lg">
            <div>
              <h1 className="text-5xl font-semibold leading-snug">
                Don’t wait—create with generative AI
              </h1>
            </div>
            <div className="mt-4">
              {' '}
              <p className="leading-loose text-xl font-thin  text-gray-700">
                Generative AI could add enormous value across the global
                economy, from banking to life sciences. The companies that use
                the technology quickly and effectively will have the edge.
              </p>
            </div>
            <div className="mt-4">
              <p className="text-gray-500 dark:text-gray-400">
                <a
                  href="#"
                  className={`inline-flex items-center font-semibold text-black hover:text-blue-700 hover:no-underline ${
                    isHovered ? 'hovered' : ''
                  }`}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  The time is now
                  <svg
                    className={`w-4 h-4 ml-2 text-blue-600 dark:text-blue-700 transition-transform ${
                      isHovered ? 'translate-x-2' : ''
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </p>

              <p className="text-gray-500 dark:text-gray-400 mt-4">
                <a
                  href="#"
                  className={`inline-flex items-center font-semibold text-black hover:text-blue-700 hover:no-underline ${
                    isHoveredtwo ? 'hovered' : ''
                  }`}
                  onMouseEnter={() => setIsHoveredtwo(true)}
                  onMouseLeave={() => setIsHoveredtwo(false)}
                >
                  Explore more insights from McKinsey Global Institute
                  <svg
                    className={`w-4 h-4 ml-2 text-blue-600 dark:text-blue-700 transition-transform ${
                      isHoveredtwo ? 'translate-x-2' : ''
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </p>
            </div>
          </div>
        </div>
   
      </div>
    </div>
  );
};

export default Trailer;
