import React from 'react';
import { useBookContext } from '../contexts/BookContextProvider';

import { useAuthContext } from '../contexts/AuthContextProvider';

const BookList = () => {

  const {books} = useBookContext()

  const {isAuthenticated} = useAuthContext()

  return ( 
    <div className="book-list" >

      {isAuthenticated && (
        
        <ul>
            {books.map(book => {
                return (
                <li key={book.id}>
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