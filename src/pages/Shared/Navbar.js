import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  const menuItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="appointment">Appointment</NavLink>
      </li>
      <li>
        <NavLink to="/review">Review</NavLink>
      </li>
      <li>
        <NavLink to="/contactUs">Contact</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
      )}
      <li>
        {user ? (
          <button onClick={logout} className="btn btn-ghost">
            Log Out
          </button>
        ) : (
          <Link className="w-20" to="/login">Log in</Link>
        )}
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 z-20 sticky top-0">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 gap-2"
          >
            {menuItems}
          </ul>
        </div>
        <Link
          to="/"
          className="lg:ml-12 sm:ml-4 normal-case text-xl cursor-pointer"
        >
          Doctors Portal
        </Link>
      </div>
      <div className="navbar-end">
        <label tabIndex="0" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
      <div className="navbar-end hidden mr-14 lg:flex">
        <ul className="menu menu-horizontal p-0 gap-2">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
