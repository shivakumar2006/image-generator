import React from 'react';
import { Link } from 'react-router-dom';
import { GiArtificialIntelligence } from "react-icons/gi";

const Navbar = () => {
    return (
        <div className='w-full h-20 text-white flex flex-row justify-between items-center'
            style={{
                background: "linear-gradient(90deg, rgba(46,5,65,1) 0%, rgba(35,2,52,1) 35%, rgba(31,3,42,1) 55%, rgba(0,0,0,1) 100%)",
            }}  
        >
                <Link 
                    to="/" 
                    className='text-3xl font-extrabold mx-10 shadow-white hover:shadow-md flex flex-row '>
                    <GiArtificialIntelligence className='text-5xl'/>
                        <h1 className='text-4xl my-1'>AI</h1>
                </Link>
                <Link to="/history" className="cursor-pointer " >History</Link>
                <div className='w-10 h-10 mx-10 border-2 border-white rounded-full shadow-white hover:shadow-md'>
                    <img />
                </div>
        </div>
    )
}

export default Navbar;