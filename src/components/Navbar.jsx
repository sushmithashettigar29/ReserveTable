import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { ChefHat } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);

  return (
    <header className="text-gray-600 body-font cream-bg sticky top-0 z-50 shadow-sm">
      <div
        className="container mx-auto flex flex-wrap items-center justify-between 
                      py-4 px-4 sm:px-6 md:px-8 lg:px-25"
      >
        {/* Logo */}
        <Link
          to="/"
          className="flex title-font font-bold items-center space-x-2 text-gray-900"
        >
          <ChefHat className="h-6 w-6 text-gray-800 orange-text" />
          <span className="text-xl font-extrabold red-text">ReserveTable</span>
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden inline-flex items-center p-2 ml-3 text-gray-700 hover:text-gray-900 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex md:ml-auto items-center text-base">
          <Link to="/" className="mr-5 hover:text-gray-900 font-bold">
            Home
          </Link>
          <Link
            to="/restaurants"
            className="mr-5 hover:text-gray-900 font-bold"
          >
            Restaurants
          </Link>
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex">
          {!user ? (
            <Link
              to="/signin"
              className="inline-flex font-bold text-white items-center red-bg border-0 py-1.5 px-4 focus:outline-none hover:bg-gray-200 rounded text-base"
            >
              Login / Signup
            </Link>
          ) : (
            <>
              <Link
                to="/profile"
                className="inline-flex items-center text-white font-semibold orange-bg border-0 py-1.5 px-4 mr-2 focus:outline-none hover:bg-gray-200 rounded text-base"
              >
                Profile
              </Link>
              <button
                onClick={logout}
                className="inline-flex items-center cursor-pointer text-white font-semibold red-bg border-0 py-1.5 px-4 focus:outline-none hover:bg-gray-200 rounded text-base"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col items-center p-4 space-y-3">
            <Link
              to="/"
              className="hover:text-indigo-600"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/restaurants"
              className="hover:text-indigo-600"
              onClick={() => setIsOpen(false)}
            >
              Restaurants
            </Link>
            {user && <span className="hover:text-indigo-600">{user.name}</span>}
            {!user ? (
              <Link
                to="/signin"
                className="bg-gray-100 py-2 px-3 rounded hover:bg-gray-200"
                onClick={() => setIsOpen(false)}
              >
                Login / Signup
              </Link>
            ) : (
              <>
                <Link
                  to="/profile"
                  className="bg-gray-100 py-2 px-3 rounded hover:bg-gray-200"
                  onClick={() => setIsOpen(false)}
                >
                  Profile
                </Link>
                <button
                  onClick={logout}
                  className="bg-gray-100 py-2 px-3 rounded hover:bg-gray-200"
                >
                  Logout
                </button>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
