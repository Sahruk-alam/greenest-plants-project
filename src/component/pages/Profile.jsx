import React, { useContext } from "react";
import { AuthContext } from "../../Authentication/AuthProvider";
import { FaRegEdit } from "react-icons/fa";
import Loading from './Loading';
import { Link } from "react-router";
const Profile = () => {
  const { user, loading } = useContext(AuthContext);
 if (loading) {
    return <Loading />;
  }
  return (
    <div className="min-h-screen  w-11/12 mx-auto mt-10">
        {
        user ? <div className=" px-5  rounded-lg shadow-xl">
        <div className="flex items-center justify-between mb-7">
          <div></div>
          <Link to='/update' className="flex border-l hover:bg-base-300 px-0.5 border-r border-b items-center gap-1"><FaRegEdit />Update Profile</Link>
        </div>
        <div className="flex mb-4 items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold">{user?.displayName}</h2>
            <h2 className="text-lg my-2">{user?.email}</h2>
          </div>
          <img
            src={user?.photoURL}
            alt="User Avatar"
            className="w-32 h-32 rounded-xl mb-2"
          />
        </div>
      </div> : <h2 className="text-3xl text-center font-bold text-red-600">Please LogIn & show profile</h2>
    }
      
    </div>
  );
};

export default Profile;
