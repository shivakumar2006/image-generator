import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GiArtificialIntelligence } from "react-icons/gi";
import { useSelector, useDispatch } from 'react-redux';
import { supabase } from '../supabase';
import { setUser } from '../features/authSlice';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);

    useEffect(() => {
        const fetchUser = async () => {
            if(!user) {
                const { data: { user }, error } = await supabase.auth.getUser();
                if(user) {
                    dispatch(setUser(user))
                } 
            }
        }

        fetchUser();
    }, [dispatch, user])

    const profilePicture = user?.user_metadata?.avatar_url || user?.user_metadata?.picture;

    const handleClick = () => {
        navigate("/profile");
    }

    console.log(user); // Debugging: log user object to see its structure
    console.log(user?.user_metadata?.picture); // Debugging: log avatar_url

    // if (!user) {
    //     return <div>Loading...</div>; // Or redirect to the login page if no user is found
    // }

    return (
        <div className='w-full h-20 text-white flex flex-row justify-between items-center'
            style={{
                background: "linear-gradient(90deg, rgba(46,5,65,1) 0%, rgba(35,2,52,1) 35%, rgba(31,3,42,1) 55%, rgba(0,0,0,1) 100%)",
            }}  
        >
                <Link 
                    to="/content" 
                    className='text-3xl font-extrabold mx-10 shadow-white hover:shadow-md flex flex-row '>
                    <GiArtificialIntelligence className='text-5xl'/>
                </Link>
                <div className='w-80 flex flex-row justify-between'>
                <Link to="/content" className="cursor-pointer my-3" >Home</Link>
                <Link to="/history" className="cursor-pointer my-3" >History</Link>
                <div className='w-13 h-13 mx-10 border-2 border-white rounded-full shadow-white hover:shadow-md'>
                    {user && profilePicture ? (
                        <img 
                            src={profilePicture} 
                            alt='Profile' 
                            className='w-full h-full rounded-full cursor-pointer'
                            referrerPolicy="no-referrer"
                            onClick={handleClick}
                        />
                    ) : (
                        <div className='w-full h-full bg-gray-500 rounded-full flex justify-center items-center'>
                            <span className='text-white'>No Image</span>
                        </div>
                    )} 
                    
                </div>
                </div>
        </div>
    )
}

export default Navbar;