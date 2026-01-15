import React, { use } from 'react';
import { PiTreeEvergreenFill } from 'react-icons/pi';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Authentication/AuthProvider';


const Navbar = () => {
  const {user, signoutUser}=use(AuthContext);
    const handlesignOutUser=()=>{
    signoutUser()
    .then(()=>{
      console.log('User signed out successfully');
    })
    .catch(error=>{
      console.error('Error signing out user:', error);
    });
    }
    const links=
        <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/plants'>Plants</NavLink></li>
        <li><NavLink to='/profile'>My Profile</NavLink></li>
        </>
    
    return (
        <div className="navbar shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost sm:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <Link to="/" className="btn md:ml-5 text-xl text-green-600"><PiTreeEvergreenFill className='text-green-600' />GreenNest</Link>
  </div>
  <div className="navbar-center hidden sm:flex">
    <ul className="menu menu-horizontal px-1 text-accent">
     {
        links
     }
    </ul>
   
  </div>
   
  <div className="navbar-end gap-2 ">
    {
      user && <span className="font-semibold">{user.displayName}</span>
    }
    {
      user ? <a onClick={handlesignOutUser} className="btn">Logout</a> : <Link to="/login" className="btn">Login</Link>
      }
   
  </div>

</div>
    );
};

export default Navbar;