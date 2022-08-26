import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthContextProvider = ( {children} ) => {

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const toggleAuth = () => { 
    setIsAuthenticated(!isAuthenticated)
   }
    
  return(
    <AuthContext.Provider
        value={{
            isAuthenticated,
            toggleAuth
        }}
    >
        { children }
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)