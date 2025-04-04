import React from 'react'
import Content from './components/Content';
import "./App.css";
import Navbar from './components/Navbar';
import History from './components/History';
import Footer from './components/Footer';
import Authentication from './components/Authentication';
import { Routes, Route, useLocation } from 'react-router-dom';

const App = () => {

    const location = useLocation(); 

    const hideLayout = location.pathname === "/"; // authentication page

  return (
    <>
        { !hideLayout && <Navbar /> }
            <Routes>
                <Route path='/' element={<Authentication />} />
                <Route path='/content' element={<Content />} />
                <Route path='/history' element={<History />} />
            </Routes>
        { !hideLayout && <Footer /> }
    </>
  )
}

export default App