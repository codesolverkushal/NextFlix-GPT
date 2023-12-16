import { useEffect } from "react"
import { OPTIONS_API } from "../utils/constants"
import Header from "./Header"

const Browse = () => {

  useEffect(()=>{
    getNowPlayingMovie();
  },[]);


  const getNowPlayingMovie = async()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',OPTIONS_API);
    const json = await data.json();
    console.log(json)

  }
  return (
    <div>
      <Header/>
    </div>
  )
}

export default Browse