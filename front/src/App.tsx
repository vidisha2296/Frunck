import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import { Routes, Route ,BrowserRouter} from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Cart from './Components/Cart/Cart';
import SignUp from './Components/SignUp/SignUp';
import SignIn from './Components/SignUp/SignIn';
import Navbar from './Components/Header/Navbar';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Header/>  */}
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/signUp" element={<SignUp/>} />
          <Route path="/signIn" element={<SignIn/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
