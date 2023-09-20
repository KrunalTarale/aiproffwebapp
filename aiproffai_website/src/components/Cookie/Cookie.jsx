import React from 'react';

const Cookie = ({ onClose }) => {
  const handleAccept = () => {
    // You can implement the logic to save the user's cookie preferences here
    onClose();
  };

  return (
    <div className="bg-white p-12 shadow-md max-w-3xl">
      <p className="mb-10 text-gray-500">
        We use cookies to give you the best possible experience with AiProff.ai.
        Some are essential for this site to function; others help us understand
        how you use the site, so we can improve it. We may also use cookies for
        targeting purposes. Click “Accept all cookies” to proceed as specified,
        or click “Manage my preferences” to choose the types of cookies you will
        accept.<a href="/privacy">Privacy Policy</a>.
      </p>
      <div className="flex justify-center space-x-8">
        <button
          className="px-4 py-2 bg-white-500 text-blue-600 hover:text-white border-2 border-blue-600 hover:bg-blue-600"
          onClick={handleAccept}
        >
          Manage preferences
        </button>
        <button
          className="px-4 py-2 bg-blue-600 text-white  hover:bg-white border-2 border-blue-600 hover:text-blue-600"
          onClick={handleAccept}
        >
          Accept all cookie
        </button>
      </div>
    </div>
  );
};

export default Cookie;
