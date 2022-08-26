import React from 'react'
import { useThemeContext } from '../contexts/ThemeContextProvider';

const ThemeToggle = () => {

  const {toggleTheme} = useThemeContext()

  return ( 
        <button className='btn btn-warning'
                onClick={toggleTheme}
        >
            Toggle the theme
        </button>
 
  );
};
 
export default ThemeToggle;