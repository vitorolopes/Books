import React, {createContext, useContext, useState} from 'react';

const BookContext = createContext();

export const BookContextProvider = ( {children} ) => {
    const [books, setBooks] = useState([
        {title: 'name of the wind', id: 1},
        {title: 'the way of kings', id: 2},
        {title: 'the final empire', id: 3},
        {title: 'the hero of ages', id: 4}
      ]);

  return (
    <BookContext.Provider
        value = {{books}}
    >
        {children}
    </BookContext.Provider>
  )
}

export const useBookContext = () => useContext(BookContext)