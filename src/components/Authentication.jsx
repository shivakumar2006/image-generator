import React, { useEffect } from 'react';
import AuthButtonWithProvider from '../auth/AuthButtonWithProvider';
import {FaGoogle, FaGithub} from "react-icons/fa";
import { supabase } from '../supabase';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/authSlice';

const Authentication = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const getUser = async () => {
            const { data: { user }, error } = await supabase.auth.getUser();
            if (error) {
                console.error("Error getting user:", error);
                return;
            }

            if (user) {
                // Dispatch user data to Redux store if user is logged in
                dispatch(setUser(user));
            } else {
                console.log("no user loggged in !");
            }
        };
        getUser();
    }, [dispatch]);

    useEffect(() => {
        const getUser = async () => {
            const { data: { user }} = await supabase.auth.getUser();
            console.log("logged in user : ", user);
        };

        getUser();
    }, [])

  return (
    <div  className='w-screen h-screen text-white flex flex-col justify-center items-center'
    style={{
        background: "linear-gradient(90deg, rgba(46,5,65,1) 0%, rgba(35,2,52,1) 35%, rgba(31,3,42,1) 55%, rgba(0,0,0,1) 100%)",
    }}   
    >
        <h1 className='text-5xl mb-8'>Authenticaion page</h1>
        <div className='w-150 h-120 bg-white/8 rounded-2xl flex flex-col justify-center items-center shadow-sm shadow-white hover:shadow-md gap-8'>
            <h1 className='text-5xl'>AI Image Generator</h1>
            <p className='text-2xl'>Authentication</p>
            <div className='w-80 h-14 my-10 text-white rounded-2xl flex flex-col justify-center items-center gap-3'>
                <AuthButtonWithProvider 
                    Icon={FaGoogle}
                    Label={"Signin with google"}
                    Provider="google"
                />
                <AuthButtonWithProvider 
                    Icon={FaGithub}
                    Label={"Signin with github"}
                    Provider="github"
                />
            </div>
        </div>
    </div>
  )
}

export default Authentication