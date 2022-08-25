import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ButtonToggler from './components/ButtonToggler';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BookList/>
      <ButtonToggler/>
    </div>
  );
}

export default App;
