import React from 'react';
import { useBookContext } from '../contexts/BookContextProvider';

const BookList = () => {

  const {books} = useBookContext()

  return ( 
    <div className="book-list" >
    
        <ul>
            {books.map(book => {
                return (
                <li key={book.id}>
                    {book.title}
                </li>
                );
            })}
        </ul>
  
    </div>
  );
}
 
export default BookList;