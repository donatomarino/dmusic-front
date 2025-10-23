import { FaPlay } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useLibrary } from "../hooks/useLibrary";
import { playSong } from "../hooks/usePlaySong";

export const Library = () => {
  const { library, deleteSong } = useLibrary();
  const { handleSong } = playSong();

  return (
   <div className="bg-bg-cards h-full p-4 flex flex-col">
  <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-3 mb-4">
    <img
      src="https://i.pinimg.com/736x/4e/b2/bc/4eb2bcc47c479fbaa623bb6fc9080847.jpg"
      className="w-80 h-56 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl sm:h-32 md:h-40 lg:h-48 xl:h-48 object-cover rounded-xl"
      alt="Page Image"
    />
    <h3 className="w-64 text-center md:text-left sm:text-m md:text-l lg:text-xl xl:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-blue-400 hover:animate-pulse">
      MI BIBLIOTECA
    </h3>
  </div>

  <div className="w-full h-1 bg-neutral-800 rounded-full mb-4"></div>

  <div className="w-full mx-auto">
    <ol className="flex flex-col gap-3 w-full">
      {library.map((e, i) => (
        <li
          key={i}
          className="w-full grid grid-cols-5 items-center px-4 py-3 bg-night rounded-lg shadow transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg"
        >
          <div className="flex justify-start">
            <img
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover"
              src={e.image}
              alt={e.title}
            />
          </div>

          <div className="flex justify-center">
            <span className="font-bold text-white text-base sm:text-lg text-center truncate">
              {e.title}
            </span>
          </div>

          <div className="flex justify-center">
            <span className="text-gray-400 text-base text-center truncate">
              {e.artist.full_name}
            </span>
          </div>

          <div className="col-span-2 flex items-center justify-end gap-3">
            <button
              className="bg-blue-700 hover:bg-blue-600 rounded-full p-2 transition-colors cursor-grab"
              onClick={() => handleSong(e.id)}
              title="Reproducir"
            >
              <FaPlay size={18} color="white" />
            </button>

            <span className="text-sm text-gray-300 text-center w-14">{e.duration}</span>

            <button
              className="bg-red-700 hover:bg-red-600 rounded-full p-2 transition-colors cursor-alias"
              onClick={() => deleteSong(e.id)}
              title="Eliminar de favoritos"
            >
              <AiOutlineClose size={18} color="white" />
            </button>
          </div>
        </li>
      ))}
    </ol>
  </div>
</div>

  )
}