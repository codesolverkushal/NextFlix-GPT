import Header from "./Header";
import { useRef, useState } from "react";
import { checkValidate } from "../utils/validate";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL } from "../utils/constants";
import { PROFILE_URL } from './../utils/constants';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const toggleSignForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleClick = async () => {
    const message = checkValidate(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: PROFILE_URL,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
         

           const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName:displayName,
                  photoURL: photoURL,
                })
              );
            
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + errorMessage);
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BG_URL}
          alt="bgimage"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 m-auto right-0 left-0 text-white bg-opacity-80 rounded-lg"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700 rounded-bl-md"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Enter email / Mob no."
          className="p-4 my-4 w-full bg-gray-700 rounded-md"
        />
        <input
          ref={password}
          type="Password"
          placeholder="Enter your password."
          className="p-4 my-2  w-full bg-gray-700 rounded-md"
        />
        <p
          className={`font-extrabold ${
            errorMessage === null && errorMessage !== ""
              ? "text-green-700"
              : "text-red-700"
          }`}
        >
          {errorMessage === null && errorMessage !== ""
            ? "Successful!"
            : errorMessage}
        </p>
        <button
          className="p-4 my-6 w-full text-white bg-red-700 rounded-lg"
          onClick={handleClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <div className="inline-flex">
          <p className="text-gray-400 mx-1">
            {isSignInForm ? "New to Netflix? " : "Already Registered"}
          </p>
          <p
            className="hover:underline cursor-pointer"
            onClick={toggleSignForm}
          >
            {isSignInForm ? "Sign up now." : "Sign In now."}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
