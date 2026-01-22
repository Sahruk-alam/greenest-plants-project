import React, { use, useState } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../Authentication/AuthProvider';

const UpdateProfile = () => {
    const navigate=useNavigate() 
    const{user,updateUser,setUser}=use(AuthContext)
   const handleUpdate = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const photo = event.target.photo.value;
    updateUser({
         displayName:name,
         photoURL:photo })
    .then(() => {
        alert('Profile updated successfully');
        setUser({...user, displayName:name,
            photoURL:photo});
            navigate(-1);
    })
    .catch((error) => {
        console.log('Error updating profile:', error);
    });
  };
    return (
        <div className=' justify-center items-center min-h-screen flex'>
           <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center">
      <h1 className="text-5xl font-bold mb-8">Update Profile</h1>
       
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
      <form onSubmit={handleUpdate}>
          <fieldset className="fieldset">
          <label className="label">DisplayName</label>
          <input type="text" name='name' className="input" placeholder="DisplayName" />
          <label className="label">PhotoURL</label>
          <input type="text" name='photo' className="input" placeholder="PhotoURL" />
          <div className='justify-between flex'>
           <button className="btn btn-success px-8 mt-4">Update</button> 
           <button onClick={() => navigate(-1)} className="btn btn-error px-8 mt-4">Cancel</button> 
          </div>
        </fieldset>
      </form>

      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default UpdateProfile;