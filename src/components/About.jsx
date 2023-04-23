import React, { useState } from "react";
import navbar from './Navbar';
import { Link, useMatch, useResolvedPath } from "react-router-dom"

const About = () => {
  return (
    
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
};


export default About;
