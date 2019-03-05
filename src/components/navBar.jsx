import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        The Place Apartments
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/landing">
              Home <span class="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/floorplans">
              Floor Plans
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/availability">
              Availability
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/residents">
              Residents
            </NavLink>
          </li>
        </ul>
        {/*
          <li className="nav-item">
            <NavLink
              className="nav-link disabled"
              to="/"
              tabindex="-1"
              aria-disabled="true"
            >
              Disabled
            </NavLink>
          </li>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
        */}
      </div>
    </nav>
  );
};

export default Navbar;
