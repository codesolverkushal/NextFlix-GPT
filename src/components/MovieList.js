import MovieCard from "./MovieCard";

const MovieList = ({title,movies}) => {
    console.log(movies);
  return (
    <div className="px-6">
    <h1 className="text-3xl py-4 text-white">{title}</h1>
    <div className="flex overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300">
      {movies?.map((movie) => (
        <div key={movie.id} className="flex-none p-2">
          <MovieCard posterPath={movie.poster_path} />
        </div>
      ))}
    </div>
  </div>

  )
}

export default MovieList;