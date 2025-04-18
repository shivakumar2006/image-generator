import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabase';
import { logOutUser } from '../features/authSlice';

const Profile = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const userMeta = user?.user_metadata || {};
  const profilePicture = user?.user_metadata?.avatar_url || user?.user_metadata?.picture;
  const displayName = userMeta.name || userMeta.full_name || userMeta.user_name || "No name found";

  console.log(user.user_metadata.iss);

  const handleClick = async () => {
    // Log out from Supabase
    await supabase.auth.signOut();

    // Get the current session (should be null after logout)
    const { data: session } = await supabase.auth.getSession();
    console.log('Session after logout:', session); // This should be null if the session was cleared

    // Dispatch logOutUser to clear Redux state
    dispatch(logOutUser());

    // Redirect to home or login page
    navigate("/");
  };

  return (
    <div
      className="w-screen h-screen flex justify-center items-center"
      style={{
        background: "linear-gradient(90deg, rgba(46,5,65,1) 0%, rgba(35,2,52,1) 35%, rgba(31,3,42,1) 55%, rgba(0,0,0,1) 100%)",
      }}
    >
      <div className="w-80 sm:w-96 md:w-120 lg:w-160 h-auto bg-white/20 rounded-2xl flex flex-col shadow-white shadow-sm hover:shadow-xl">
        <div className="w-full h-40 rounded-t-2xl flex flex-col justify-center items-center">
          <div className="w-24 sm:w-32 h-24 sm:h-32 mb-0 rounded-full">
            {profilePicture && (
              <img
                src={profilePicture}
                alt="profile"
                className="w-full h-full rounded-full shadow-lg border-white border-2"
              />
            )}
          </div>
        </div>

        {/* user data */}
        <div className="w-full flex flex-col items-center gap-4 text-white p-4">
          <div className="w-full h-16 hover:bg-black/30 flex flex-col justify-center items-center">
            <div className="text-2xl sm:text-3xl md:text-4xl">
              <p>{displayName}</p>
            </div>
          </div>
          <div className="w-full h-16 hover:bg-black/30 flex flex-col justify-center items-center">
            <div className="text-xl sm:text-2xl">
              <p>{user?.user_metadata?.email}</p>
            </div>
          </div>
        </div>

        {/* log out */}
        <div className="w-full h-20 rounded-b-2xl flex items-center justify-center p-4">
          <button
            className="w-64 sm:w-72 h-12 text-white text-xl bg-white/10 border-purple-600 border-2 rounded-2xl hover:bg-purple-700"
            onClick={handleClick}
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
