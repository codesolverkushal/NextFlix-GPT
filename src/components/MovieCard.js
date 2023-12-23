import { IMG_CDN } from "../utils/constants"

const MovieCard = ({posterPath}) => {
  if(!posterPath){
    return;
  }
  return (
    <div className="relative">
     <img
        className="w-48 pr-4"
        src={IMG_CDN + posterPath}
        alt="Movie Card"
      />
    </div>
  )
}

export default MovieCard