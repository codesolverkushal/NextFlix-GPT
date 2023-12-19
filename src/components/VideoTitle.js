const VideoTitle = ({title,overview}) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-5xl font-extrabold">{title}</h1>
        <h1 className="py-6 text-lg w-1/4">{overview.slice(0, 180)}{overview.length > 15 ? '...' : '.'}</h1>

        <div className="">
            <button className="bg-blue-500 text-white px-12 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">▶️ Play</button>
            <button className="ml-4 bg-gray-800 text-white px-7 py-3 rounded-md hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray active:bg-gray-900">More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle

  