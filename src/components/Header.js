import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect, useState } from "react";
import { LOGO, PROFILE_URL, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";


const Header = () => {


  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const dispatch = useDispatch();
  const navigate = useNavigate();

 
 
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  // const url = "https://avatars.githubusercontent.com/u/130832724?v=4";

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });

    // unsubscribe when component unmounts...
    return () => unsubscribe();
  }, []);

  const handleGPTSearchClick = ()=>{
    // Toggle GPT search button.
    dispatch(toggleGptSearchView()); 
  }

  const handleLanguageChange = (e)=>{
     dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className=" absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-52" src={LOGO} alt="logo" />
      {user && (
        <div className="flex items-center p-2">
           {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button className="py-2 px-2 m-2 bg-purple-500 text-white rounded-lg" onClick={handleGPTSearchClick}> {showGptSearch ? "Homepage" : "GPT Search"}</button>
          <h1 className="inline-block font-bold text-white">Hello! {user?.displayName || "User"}</h1>
          <img className="w-12 h-12 mx-5 rounded-full" alt="usericon" src={user?.photoURL ?? PROFILE_URL} />
          <button onClick={handleSignOut} className="font-bold text-white ">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
   

  )
}

export default Header