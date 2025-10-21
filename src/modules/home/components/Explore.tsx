import { FaPlay, FaHeart } from "react-icons/fa";
import { useExplore } from "../hooks/useExplore";
import { playSong } from "../hooks/playSong";
import { addFavoriteSong } from "../hooks/addFavoriteSong";
import { VerifiedAuth } from "../../../types/types";

const Explore = ({auth}: VerifiedAuth) => {
  const { songs } = useExplore();
  const { handleSong } = playSong();
  const { handleFavoriteSong } = addFavoriteSong();
  const user = localStorage.getItem('token');

  return (
    <div className="bg-bg-cards h-full p-4 flex flex-col">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-3 mb-4">
        <img
          src="https://i.pinimg.com/736x/8f/3b/1e/8f3b1eaa982f4f6d179e92c07cee99ea.jpg"
          className="w-80 h-56 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl sm:h-32 md:h-40 lg:h-48 xl:h-48 object-cover rounded-xl"
          alt="Banner"
        />
        <h3 className="w-64 text-center md:text-left sm:text-m md:text-l lg:text-xl xl:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-blue-400 hover:animate-pulse">
          EXPLORA TODA LA MÚSICA
        </h3>
      </div>

      <div className="w-full h-1 bg-neutral-800 rounded-full mb-4"></div>

      <div className="w-full sm:h-20 md:h-74 lg:h-86 flex gap-5 overflow-x-scroll">
        {songs
          .map((e, i) => (
            <div
              key={e.id}
              className="min-w-52 sm:h-20 md:h-64 lg:h-74 bg-night rounded-2xl shadow-md transition-transform duration-200 hover:scale-105 hover:shadow-lg hover:bg-hover-night flex flex-col items-center p-3"
            >
              <img
                className="w-4/5 sm:w-11/12 md:w-full h-20 sm:h-40 md:h-44 lg:h-48 xl:h-40 rounded-full object-cover"
                src={e.image}
                alt={e.title}
              />
              <div className="p-2 w-full">
                <p className="text-center text-white text-sm sm:text-base md:text-base lg:text-lg xl:text-lg ">{e.artist.full_name}</p>
                <p className="text-center text-gray-400 text-sm sm:text-base md:text-base lg:text-lg xl:text-lg ">
                  {e.title}
                </p>

                <div className="flex justify-around mt-2">
                  <button
                    className="bg-blue-800 hover:bg-blue-700 flex justify-center items-center text-sm sm:text-base w-8 sm:w-9 h-8 sm:h-9 rounded-full border-0 text-white cursor-grab"
                    onClick={() => handleSong(e.id)}
                  >
                    <FaPlay />
                  </button>
                  <button
                    className={`bg-red-900 flex justify-center items-center text-sm sm:text-base w-8 sm:w-9 h-8 sm:h-9 rounded-full border-0 text-white ${auth ? "hover:bg-red-800 cursor-pointer" : "opacity-60 cursor-not-allowed"}`}
                    onClick={() => handleFavoriteSong(e.id)}
                    disabled={!auth}
                  >
                    <FaHeart />
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Explore;