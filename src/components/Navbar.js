import React from "react";
import PropTypes from 'prop-types'; //to import PropTypes from prop-types
// import {Link} from "react-router-dom"; //to import Link from navbar-router-dom

export default function Navbar(props) {
  const myStyle = {
    backgroundColor:`${props.NavBgColor}`
  }
  return (
    <nav className={`navbar navbar-${props.mode} navbar-expand-lg bg-body-dark bg-${props.mode}`} style={myStyle}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{props.title}</a> 
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* a must to be replaced with Link and href with to (Value of 'to' and 'path'(in Navbar.js) must be same => To use routing */}
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link active" href="/about">{props.aboutText}</a>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link active" href="/contact">ContactUs</a>
            </li> */}
          </ul>
          <div className="redbutton">
          <button type="button" className="btn btn-danger my-2 mx-2" onClick={props.redMode}>Red Mode</button>
          </div>
          <div className="greenbutton">
          <button type="button" className="btn btn-success" onClick={props.greenMode}>Green Mode</button>
          </div>
          <div className={`form-check form-switch mx-2 text-${props.mode === 'light' ? 'dark':'light'}` } >
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label " htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

//To define propTypes (What type of props) user will going to pass here
//.isRequired => To make it mandatory 
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string
}

//  To add default value to the props if user didn't passed value of props to the user
Navbar.defaultProps = {
  title: "Add Title here",
  aboutText: "Add About here"
}

