
import './App.css';
import AddBook from './components/addbook';
import NAVBAR from './components/navbar';
import BookList from './components/booklist';
import Register from './components/RegisterUser';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginUser from './components/loginUser';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NAVBAR />
        <Routes>
          <Route exact path='/addbook' element={<AddBook />} />
          <Route exact path='/booklist' element={<BookList />} />
          <Route exact path='/registeruser' element={<Register />} />
          <Route exact path='/login' element={<LoginUser />} />
        </Routes>

      </BrowserRouter>


    </div>
  );
}

export default App;
