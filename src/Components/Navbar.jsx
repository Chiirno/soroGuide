import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark pl-0"><ul>
        <li style={liStyle}><Link to="/">Home</Link></li>
        <li style={liStyle}><Link to="/Thugs">Thugs</Link></li>
        <li style={liStyle}><Link to="/Communions">Communions</Link></li>
      </ul></nav>
    </div>
  )
}

const liStyle = {
  float: "left",
  margin: "10px",
  paddingRight: "5px"
}

export default Navbar
