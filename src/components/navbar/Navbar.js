import React from 'react'
import PropTypes from 'prop-types'
import './Navbar.css';
import {Link,NavLink} from 'react-router-dom'

const Navbar = (props) => {
    const {title} = props
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-success">
        <Link className="navbar-brand" to="/">{title}</Link>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className={
              (info) => info.isActive ? "nav-item active" : ""
            }>
              <NavLink className="nav-link" to="/home">Home <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/ContactAdd">Add</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about/ff">About</NavLink>
            </li>
          </ul>
      </nav>
    </div>
  )
}

Navbar.defaultProps = {
    title: "My Title Null"
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

export default Navbar;
