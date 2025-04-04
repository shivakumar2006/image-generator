import React from 'react'; 
import { Link } from 'react-router-dom';
import { GiArtificialIntelligence } from "react-icons/gi";
import { BsLinkedin } from "react-icons/bs";
import { VscGithubInverted } from "react-icons/vsc";

const Footer = () => {
    return (
        <div className='w-full h-20 text-white flex flex-row justify-between items-center'
        style={{
            background: "linear-gradient(90deg, rgba(46,5,65,1) 0%, rgba(35,2,52,1) 35%, rgba(31,3,42,1) 55%, rgba(0,0,0,1) 100%)",
        }}  
    >
            <Link 
                className='text-3xl font-extrabold mx-10 flex flex-row '>
                    <GiArtificialIntelligence className='text-2xl my-5'/>
                    <h1 className='text-2xl my-4'>AI</h1>
            </Link>

            <div className='w-50 h-20 text-2xl py-8 flex flex-row gap-15'>
                <Link to="https://www.linkedin.com/in/shiva-shiva-8a48002a7/">
                    <BsLinkedin />
                </Link>
                <Link to="https://github.com/shivakumar2006/image-generator">
                    <VscGithubInverted />
                </Link>
            </div>
    </div>
    )
}

export default Footer;