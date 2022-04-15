import React, {Component} from 'react';

const Navbar = ({totalCounters}) => {
  return(
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
          <h1>
            <span className="badge badge-secondary text-success">{totalCounters}</span>
          </h1>
        </a>
      </div>
    </nav>
  )
}

export default Navbar;
