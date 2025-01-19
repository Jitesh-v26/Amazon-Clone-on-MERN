import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home';
import Products from './Product';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
          </Route>
          <Route path='/products' element={<Products />}
          ></Route>
          <Route path='/login' element={<Login />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
