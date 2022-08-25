import React from 'react'

const Navbar = () => {

  return (
    <nav>
      <h1>Context App</h1>
      <button className='btn btn-primary m-4'   
      >
         Logged in - Logged out 
      </button>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
 
export default Navbar; 