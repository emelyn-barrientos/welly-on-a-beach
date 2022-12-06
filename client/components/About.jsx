
import React from 'react'
import { Link } from "react-router-dom";

function About() {
  return (
    <nav>
      <p><Link to='/'>Back to Home</Link></p>
      <p><Link to='/About'>About the App</Link></p>
    </nav>
  )
}

export default About