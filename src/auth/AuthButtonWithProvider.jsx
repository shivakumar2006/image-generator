import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { supabase } from '../supabase';

const AuthButtonWithProvider = ({ Icon, Label, Provider}) => {

    const handleLogin = async () => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: Provider,
            options: {
                redirectTo: "http://localhost:5173/content" // Add you rdesired redirect url here
            }
        });
        if(error) {
            alert("Authntication Failed ! ");
            console.error("error : ", error);
        }
    }

  return (
    <div onClick={handleLogin} className='w-full px-4 py-3 flex items-center justify-between border-purple-800 rounded-md border-2 cursor-pointer group hover:bg-purple-600 active:scale-95 duration-150 hover:shadow-md'>
            <Icon className="text-white text-xl group-hover:text-white" />
            <p className='text-white text-lg group-hover:text-white'>{Label}</p>
            <FaChevronRight className='text-white text-base group-hover:text-white' />
    </div>
  )
}

export default AuthButtonWithProvider