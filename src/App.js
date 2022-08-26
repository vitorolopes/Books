import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ButtonToggler from './components/ButtonToggler';

import { BookContextProvider } from './contexts/BookContextProvider';
import { AuthContextProvider } from './contexts/AuthContextProvider';

//! SEE THIS: Multiple contexts and reducers
// https://codezup.com/how-to-combine-multiple-reducers-in-react-hooks-usereducer/

function App() {
  return (
    <div className="App">

    <AuthContextProvider>

      <Navbar/>

      <BookContextProvider>

        <BookList/>
        
      </BookContextProvider>

      <ButtonToggler/>

    </AuthContextProvider>

      

    </div>
  );
}

export default App;
