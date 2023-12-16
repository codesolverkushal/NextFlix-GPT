import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { OPTIONS_API } from "../utils/constants";
import { useEffect } from "react";


const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch();

    useEffect(()=>{
      getNowPlayingMovie();
    },[]);
  
  
    const getNowPlayingMovie = async()=>{
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',OPTIONS_API);
      const json = await data.json();
      console.log(json.results);
  
      dispatch(addNowPlayingMovies(json.results));
  
    }
}


export default useNowPlayingMovies;