import { useSelector } from "react-redux"
import MovieList from './MovieList';

const GptMovieSuggestions = () => {

  const {moviesResult,moviesName} = useSelector((store)=> store.gpt);

  if(!moviesName) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
        <div>
          {moviesName.map((movieName,index) => <MovieList key = {movieName} title={movieName} movies={moviesResult[index]}/>)}
        
        </div>
    </div>
  )
}

export default GptMovieSuggestions