import { useEffect } from "react";
import { OPTIONS_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
const useMovieTrailer = (movieId)=>{
    const dispatch = useDispatch();

  // fetch trailer video

  useEffect(() => {
    getMovieVideo();
  }, []);

  const getMovieVideo = async () => {

    const data = await fetch(
        `https://api.themoviedb.org/3/movie/976573/videos?language=en-US`,      OPTIONS_API
    );
    const json = await data.json();

    const filterTrailer = json.results.filter(
      (video) => video.type == "Trailer"
    );
    const trailer = filterTrailer.length ? filterTrailer[0] : json.results[0];

    dispatch(addTrailerVideo(trailer));
  };

}

export default useMovieTrailer;