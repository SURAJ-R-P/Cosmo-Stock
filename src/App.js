import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import StockDetails from './Components/StockDetails/StockDetails';
import Header from './Components/Header/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      {/* <Home></Home>
      <StockDetails></StockDetails> */}
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/stock/:symbol" element={<StockDetails></StockDetails>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
