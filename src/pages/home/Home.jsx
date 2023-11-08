import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-xl p-8 shadow-lg text-center">
        <h1 className="text-4xl text-gray-900 font-bold mb-4">
          Welcome to Sports News Dashboard
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Your ultimate source for the latest sports news and live scores.
        </p>

        <div className="space-y-4">
          <Link to="/dashboard">
            <button className="bg-gray-600 hover:bg-blue-600 text-white py-2 px-4 rounded-full text-lg font-semibold">
              Go to Dashboard
            </button>
          </Link>

          <div className="space-x-4">
            <Link to="/signin">
              <button className="bg-gray-300 hover:bg-gray-200 text-gray-800 py-2 px-6 rounded-full text-lg font-semibold">
                Sign In
              </button>
            </Link>
            <Link to="/signup">
              <button className="bg-gray-300 hover:bg-gray-200 text-gray-800 py-2 px-6 rounded-full text-lg font-semibold">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
