import React from 'react';
import { useAuthContext } from '../contexts/AuthContextProvider';
import { useThemeContext } from '../contexts/ThemeContextProvider';

const Navbar = () => {

  const {toggleAuth, isAuthenticated} = useAuthContext()

  const {isLightTheme, light, dark} = useThemeContext()

  const colors = isLightTheme ? light : dark;
 
  return (
    <nav style={{ background: colors.ui, color: colors.syntax}}>
      <h1>Context App</h1>
      {/* <button className={ isAuthenticated ? "btn btn-secondary m-4" : "btn btn-success m-4"  } */}
      <button className={ `btn ${ isAuthenticated ? "btn-secondary" : "btn-success"}  m-4` }
              onClick={toggleAuth}  
      >
         {isAuthenticated ? "Logout" : "Login" }
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


