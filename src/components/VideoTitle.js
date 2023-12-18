const VideoTitle = ({title,overview}) => {
  return (
    <div className="pt-36 px-12">
        <h1 className="text-5xl font-extrabold  text-gray-800">{title}</h1>
        <h1 className="py-6 text-lg text-gray-600 w-1/4">{overview}</h1>

        <div className="">
            <button className="bg-blue-500 text-white px-12 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">Play</button>
            <button className="ml-4 bg-gray-800 text-white px-7 py-3 rounded-md hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray active:bg-gray-900">More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle

  