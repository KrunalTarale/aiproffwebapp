import React from 'react';
import './Touch.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Touch = () => {
  return (
    <div className="touch h-19 text-white w-full p-10 bg-gradient-to-r from-blue-950 to-blue-600 shadow-lg text-center">
      <h1 className="text-5xl font-semibold mb-4">How can we help you?</h1>
      <p className="text-whitesmoke mb-6 text-xl pt-2">Get in touch with us.</p>
      
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
        
        <div className="flex items-center justify-center text-center">
          <FontAwesomeIcon icon={faPhone} className="text-lg" />
          <p className="ml-2">+918076774495</p>
        </div>
        
        <div className="flex items-center justify-center text-center">
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
          <p className="ml-2">Email us: anushree.singh@aiproff.ai</p>
        </div>
      
      </div>
    </div>
  );
};

export default Touch;
