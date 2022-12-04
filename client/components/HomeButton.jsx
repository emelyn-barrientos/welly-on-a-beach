import React from "react";
import { Link } from "react-router-dom";

function HomeButton(){
  return (
    <nav>
      <p><Link to='/'>Back to Home</Link></p>
    </nav>
  )
}

export default HomeButton