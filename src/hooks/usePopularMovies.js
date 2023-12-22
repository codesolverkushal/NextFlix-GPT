import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { OPTIONS_API } from "../utils/constants";
import { useEffect } from "react";


const usePopularMovies = ()=>{
    const dispatch = useDispatch();

    useEffect(()=>{
      getPopularMovies();
    },[]);
  
  
    const getPopularMovies = async()=>{
      const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',OPTIONS_API);
      const json = await data.json();
  
      dispatch(addPopularMovies(json.results));
  
    }
}


export default usePopularMovies;