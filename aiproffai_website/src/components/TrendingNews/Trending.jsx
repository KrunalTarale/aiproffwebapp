import React from 'react';

const Trending = () => {
  return (
    <div className="lg:py-3 flex justify-between border-b-2 overflow-x-auto max-h-24">
      <div
        className="p-4 flex flex-col items-center justify-center lg:w-1/10"
      >
        <span className="font-bold">Trending</span>
        <span className="font-bold">News</span>
      </div>

      <div className="flex lg:w-9/10 npm runb ">
        {[...Array(4)].map((_, index) => (
          <div className="flex items-center pr-2 lg:w-1/4" key={index}>
            <span className="font-bold text-2xl md:text-3xl text-blue-500 mr-2">
              1
            </span>
            <span className="text-2xl md:text-3xl lg:text-4xl">|</span>
            <span className="md:ml-2">
              The economic potential of generative AI: The next productivity
              frontier
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
