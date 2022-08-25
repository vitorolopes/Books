import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ButtonToggler from './components/ButtonToggler';

import { BookContextProvider } from './contexts/BookContextProvider';

function App() {
  return (
    <div className="App">

      <Navbar/>

      <BookContextProvider>
        <BookList/>
      </BookContextProvider>

      <ButtonToggler/>

    </div>
  );
}

export default App;
