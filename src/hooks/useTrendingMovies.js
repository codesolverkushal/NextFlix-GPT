import { useDispatch } from "react-redux";
import { addTrendingMovies } from "../utils/moviesSlice";
import { OPTIONS_API } from "../utils/constants";
import { useEffect } from "react";


const useTrendingMovies = ()=>{
    const dispatch = useDispatch();

    useEffect(()=>{
      getTrendingMovies();
    },[]);
  
  
    const getTrendingMovies = async()=>{
      const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',OPTIONS_API);
      const json = await data.json();
      console.log(json.results);
  
      dispatch(addTrendingMovies(json.results));
  
    }
}


export default useTrendingMovies;