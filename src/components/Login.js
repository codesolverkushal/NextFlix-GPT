import Header from "./Header"
import { useState } from "react";
const Login = () => {

  const [isSignInForm,setIsSignInForm] = useState(true);
  const toggleSignForm = ()=>{
        setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header/>
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="bg-image" />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 m-auto right-0 left-0 text-white bg-opacity-80 rounded-lg">
        <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm &&  <input
         type="text" 
         placeholder="Full Name"
         className="p-4 my-4 w-full bg-gray-700 rounded-bl-md"
         /> }
       
        <input type="text" placeholder="Enter email / Mob no." className="p-4 my-4 w-full bg-gray-700 rounded-md" />
        <input type="Password" placeholder="Enter your password." className="p-4 my-2  w-full bg-gray-700 rounded-md" />
        <button className="p-4 my-6 w-full text-white bg-red-700 rounded-lg">Sign In</button>

        <div className="inline-flex">
            <p className="text-gray-400 mx-1">{isSignInForm ? "New to Netflix? " : "Already Registered"}</p>
            <p className="hover:underline cursor-pointer" onClick={toggleSignForm}>{isSignInForm ? "Sign up now." : "Sign In now."}</p>
        </div>

      </form>
    </div>
  )
}
 
export default Login