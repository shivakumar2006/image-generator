import React from 'react'
import Content from './components/Content';
import "./App.css";
import Navbar from './components/Navbar';
import History from './components/History';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
        <Navbar />
            <Routes>
                <Route path='/' element={<Content />} />
                <Route path='/history' element={<History />} />
            </Routes>
        <Footer />
    </>
  )
}

export default App