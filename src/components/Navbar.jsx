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
                    dispatch(setUser(user));
                } 
            }
        }

        fetchUser();
    }, [dispatch, user]);

    const profilePicture = user?.user_metadata?.avatar_url || user?.user_metadata?.picture;

    const handleClick = () => {
        navigate("/profile");
    }

    return (
        <div className="w-full h-20 text-white flex flex-row justify-between items-center px-4 sm:px-8 md:px-12 lg:px-16"
            style={{
                background: "linear-gradient(90deg, rgba(46,5,65,1) 0%, rgba(35,2,52,1) 35%, rgba(31,3,42,1) 55%, rgba(0,0,0,1) 100%)",
            }}
        >
            <Link 
                to="/content" 
                className="text-3xl font-extrabold shadow-white hover:shadow-md flex items-center space-x-2"
            >
                <GiArtificialIntelligence className="text-4xl sm:text-5xl"/>
                {/* <span className="text-lg sm:text-xl">AI Image Generator</span> */}
            </Link>
            <div className="flex items-center space-x-4 sm:space-x-6">
                <Link to="/content" className="my-3 text-lg sm:text-xl cursor-pointer hover:text-gray-300">Home</Link>
                <Link to="/history" className="my-3 text-lg sm:text-xl cursor-pointer hover:text-gray-300">History</Link>
                
                {/* Profile Picture Section */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-4 border-2 border-white rounded-full shadow-white hover:shadow-md">
                    {user && profilePicture ? (
                        <img 
                            src={profilePicture} 
                            alt="Profile" 
                            className="w-full h-full rounded-full cursor-pointer"
                            referrerPolicy="no-referrer"
                            onClick={handleClick}
                        />
                    ) : (
                        <div className="w-full h-full bg-gray-500 rounded-full flex justify-center items-center">
                            <span className="text-white">No Image</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
