import React, { use, useState } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../Authentication/AuthProvider';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

const UpdateProfile = () => {
    const navigate=useNavigate() 
    const{user,updateUser,setUser}=use(AuthContext)
    const [name, setName] = useState(user?.displayName || '');
  const [photo, setPhoto] = useState(user?.photoURL || '');
  const [error, setError] = useState('');
  const handleUpdate = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const photo = event.target.photo.value;
    if(name.length < 3) {
      setError('Name must be at least 3 characters long');
      return;
    } else {
      setError('');
    }
    updateUser({
         displayName:name,
         photoURL:photo })
    .then(() => {
        // console.log('Profile updated successfully');
        setUser({...user, displayName: name,
            photoURL:photo});
            navigate(-1);
    })
    .catch((error) => {
        console.log('Error updating profile:', error);
    });
  };
    return (
<div>
       <Navbar></Navbar>
        <div className=' justify-center items-center min-h-screen flex'>
           <div className="hero bg-base-100 min-h-screen">
  <div className="hero-content flex-col ">
    <div className="text-center">
      <h1 className="text-5xl font-bold mb-8">Update Profile</h1>
       
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
      <form onSubmit={handleUpdate}>
          <fieldset className="fieldset">
          <label className="label">DisplayName</label>
          <input type="text" name='name' className="input" placeholder="DisplayName" 
          onChange={(e) => setName(e.target.value)} />
          {
            error && <p className="text-red-500">{error}</p>
          }
          <label className="label">PhotoURL</label>
          <input type="text" name='photo' className="input" placeholder="PhotoURL" 
          onChange={(e) => setPhoto(e.target.value)} />
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
        <Footer></Footer>
</div>
    );
};

export default UpdateProfile;