import React, { use, useState } from "react";
import { AuthContext } from "../../Authentication/AuthProvider";
// import { Link, useNavigate } from "react-router";


const SignUp = () => {
  const { CreateUser, setUser, updateUser } =use(AuthContext);
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
//   const navigation=useNavigate()
  const handleRegister = (event) => {
    event.preventDefault();
    const photo = event.target.photo.value;
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(name, photo, email, password);
    
    if (name.length < 3) {
      setNameError("Name must be at least 3 characters long.");
      return;
    }
    setNameError("");
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      return;
    }
    setPasswordError("");
    const pattern = /^[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
    if(!pattern.test(email)){
      setEmailError('Required a valid email address.');
      return;
    }
    setEmailError('');

    CreateUser(email, password)
      .then((result) => {
        console.log(result.user);
//         updateUser({
//           displayName: name,
//           photoURL: photo
//         }).then(() => {
//           // console.log('Profile updated successfully');
//           setUser({...result.user, displayName: name,
//             photoURL: photo});
//             navigation('/');
//         }).catch((error) => {
//           console.log('Error updating profile:', error);
//           setUser(result.user);
//         });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        alert(errorMessage);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card py-6 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="font-bold text-2xl text-center">
          Register your account</h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            <label className="label font-bold">Your Name </label>
            <input
              type="text"
              name="name"
              required
              className="input"
              placeholder="Enter your Name"
            />
            {nameError && (
              <p className="text-red-600 font-semibold">{nameError}</p>
            )}
            <label className="label font-bold">Photo URL</label>
            <input
              type="text"
              name="photo"
              required
              className="input"
              placeholder="Enter your Photo URL"
            />

            <label className="label font-bold">Email address</label>
            <input
              type="email"
              name="email"
              required
              className="input"
              placeholder="Enter your Email"
            />
            {
              emailError && (<p className="text-red-600 font-semibold">{emailError}</p>)
            }
            <label className="label font-bold">Password</label>
            <input
              type="password"
              name="password"
              required
              className="input"
              placeholder="Enter your Password"
            />
            {
              passwordError && (<p className="text-red-600 font-semibold">{passwordError}</p>)
            }
            <div className="flex mt-2">
              <input
                type="checkbox"
                name="terms"
                required
                id="terms"
                className="mr-2"
              />
              <p>Agree to terms and conditions</p>
            </div>

            <button type="submit" className="btn btn-neutral mt-2">
              Register
            </button>
            <p className="text-center font-semibold pt-3">
              Already have an account?
              <a href="/login" className="link text-blue-500">
                Login
              </a>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
