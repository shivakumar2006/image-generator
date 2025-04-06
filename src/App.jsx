import React, { useEffect } from 'react'
import Content from './components/Content';
import "./App.css";
import Navbar from './components/Navbar';
import History from './components/History';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Authentication from './components/Authentication';
import { Routes, Route, useLocation } from 'react-router-dom';
import { supabase } from './supabase';
import { useNavigate } from 'react-router-dom';

const App = () => {

    const navigate = useNavigate();
    
    // check if the user is authenticate and redirect to the content page...
    useEffect(() => {
        const checkSession = async () => {
            const { data } = await supabase.auth.getSession();
            const session = data?.session; // use optional changing to prevent errors
            if(session && location.pathname === "/") {
                navigate("/content");
            }
        }
            checkSession();
    }, [navigate, location])

    const location = useLocation(); 

    const hideLayout = location.pathname === "/"; // authentication page

  return (
    <>
        { !hideLayout && <Navbar /> }
            <Routes>
                <Route path='/' element={<Authentication />} />
                <Route path='/content' element={<Content />} />
                <Route path='/history' element={<History />} />
                <Route path='/profile' element={<Profile />}/>
            </Routes>
        { !hideLayout && <Footer /> }
    </>
  )
}

export default App