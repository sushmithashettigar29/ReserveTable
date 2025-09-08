import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);

  return (
    <header className="text-gray-600 body-font shadow">
      <div className="container mx-auto flex flex-wrap p-5 flex-row items-center justify-between">
        <Link to="/" className="flex title-font font-medium items-center text-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">ReserveTable</span>
        </Link>

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
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex md:ml-auto items-center text-base">
          <Link to="/" className="mr-5 hover:text-gray-900">Home</Link>
          <Link to="/restaurants" className="mr-5 hover:text-gray-900">Restaurants</Link>
          {user && <span className="mr-5 font-medium">{user.name}</span>}
        </nav>

        <div className="hidden md:flex">
          {!user ? (
            <Link
              to="/signin"
              className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base"
            >
              Login / Signup
            </Link>
          ) : (
            <>
              <Link
                to="/profile"
                className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 mr-2 focus:outline-none hover:bg-gray-200 rounded text-base"
              >
                Profile
              </Link>
              <button
                onClick={logout}
                className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base"
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
            <Link to="/" className="hover:text-indigo-600" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/restaurants" className="hover:text-indigo-600" onClick={() => setIsOpen(false)}>Restaurants</Link>
            {user && <span className="hover:text-indigo-600">{user.name}</span>}
            {!user ? (
              <Link to="/signin" className="bg-gray-100 py-2 px-3 rounded hover:bg-gray-200" onClick={() => setIsOpen(false)}>Login / Signup</Link>
            ) : (
              <>
                <Link to="/profile" className="bg-gray-100 py-2 px-3 rounded hover:bg-gray-200" onClick={() => setIsOpen(false)}>Profile</Link>
                <button onClick={logout} className="bg-gray-100 py-2 px-3 rounded hover:bg-gray-200">Logout</button>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
