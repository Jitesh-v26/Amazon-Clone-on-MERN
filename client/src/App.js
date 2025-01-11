import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home';
import Products from './Product';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
          </Route>
          <Route path='/products' element={<Products />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
