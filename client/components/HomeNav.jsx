import React from "react";
import { Link } from "react-router-dom";

function HomeNav(){
  return (
    <nav>
      <p><Link to='/'>Home</Link></p>
    </nav>
  )
}

export default HomeNav