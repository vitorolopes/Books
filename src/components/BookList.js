import React from 'react';
import { useBookContext } from '../contexts/BookContextProvider';

import { useAuthContext } from '../contexts/AuthContextProvider';

import { useThemeContext } from '../contexts/ThemeContextProvider';


const BookList = () => {

  const {books} = useBookContext()

  const {isAuthenticated} = useAuthContext()

  const {isLightTheme, light, dark} = useThemeContext()

  const colors = isLightTheme ? light : dark;

  return ( 
    <div className="book-list"  style={{ background: colors.ui, color: colors.syntax}}>

      {isAuthenticated && (

        <ul>
            {books.map(book => {
                return (
                <li key={book.id} style={{ background: colors.bg }} >
                    {book.title}
                </li>
                );
            })}
        </ul>
      )}
        
  
    </div>
  );
}
 
export default BookList;