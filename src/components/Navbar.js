import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/slices/authSlice';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-white hover:text-gray-300 hidden md:inline">Home</Link>
          <Link to="/cart" className="text-white hover:text-gray-300 hidden md:inline">Cart</Link>
          <Link to="/checkout" className="text-white hover:text-gray-300 hidden md:inline">Checkout</Link>
        </div>
        <div className="flex space-x-4 items-center">
          {user ? (
            <>
              <span className="text-white hidden md:inline">{user.username}</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded hidden md:inline"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-white hover:text-gray-300 hidden md:inline">Login</Link>
              <Link to="/signup" className="text-white hover:text-gray-300 hidden md:inline">Sign Up</Link>
            </>
          )}
          <button
            className="text-white md:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-gray-800`}>
        <div className="container mx-auto p-4 flex flex-col space-y-4">
          <Link to="/" className="text-white hover:text-gray-300" onClick={toggleMenu}>Home</Link>
          <Link to="/cart" className="text-white hover:text-gray-300" onClick={toggleMenu}>Cart</Link>
          <Link to="/checkout" className="text-white hover:text-gray-300" onClick={toggleMenu}>Checkout</Link>
          {user ? (
            <>
              <span className="text-white">{user.username}</span>
              <button
                onClick={() => {
                  handleLogout();
                  toggleMenu();
                }}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-white hover:text-gray-300" onClick={toggleMenu}>Login</Link>
              <Link to="/signup" className="text-white hover:text-gray-300" onClick={toggleMenu}>Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
