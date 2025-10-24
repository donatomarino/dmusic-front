import { useContent } from '../hooks/useContent';
import { usePlaySong } from '../hooks/usePlaySong';

const Content = () => {
  const { artists } = useContent();
  const { handleSong } = usePlaySong();

  return (
    <div className="bg-bg-cards h-full p-4 flex flex-col">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-3 mb-4">
        <div>
          <img
            src="https://i.pinimg.com/736x/8f/3b/1e/8f3b1eaa982f4f6d179e92c07cee99ea.jpg"
            className="w-64 sm:w-72 md:w-80 lg:w-80 xl:w-80 h-36 sm:h-40 md:h-56 lg:h-56 xl:h-56 object-cover rounded-xl"
            alt="Banner"
          />
        </div>
        <div>
          <div className="flex flex-col">
            <h3 className="w-full md:w-64 text-center md:text-left sm:text-m md:text-l lg:text-xl xl:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-blue-400 hover:animate-pulse">
              ARTISTAS DEL MOMENTO
            </h3>
            <p className="text-m text-gray-400 mt-1">Los más escuchados esta semana</p>
          </div>
        </div>
      </div>

      <div className="w-full h-1 bg-neutral-800 rounded-full mb-4 flex-shrink-0"></div>
      
      <div className="w-full gap-5 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:flex lg:flex-row overflow-x-auto lg:overflow-x-visible mt-3 cursor-grab">
        {artists.map((e) => (
          <div
            key={e.id}
            className="bg-night rounded-2xl shadow-md transition-transform duration-200 hover:scale-105 hover:shadow-lg hover:bg-hover-night flex flex-col items-center p-3 w-48 sm:w-56 md:w-56 lg:w-72 xl:w-72 flex-shrink-0"
            onClick={() => handleSong(e.id, 'play-artist')}
          >
            <img
              className="w-4/5 sm:w-11/12 md:w-full h-20 sm:h-32 md:h-44 lg:h-48 xl:h-48 rounded-full object-cover"
              src={e.avatar}
              alt={e.full_name}
            />
            <div className="p-2 w-full">
              <p className="text-center text-white text-sm sm:text-base md:text-base lg:text-lg xl:text-lg">
                {e.full_name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
