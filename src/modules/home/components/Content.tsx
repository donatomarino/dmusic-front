import { useContent } from '../hooks/useContent';

const Content = () => {
  const { artists } = useContent();

  return (
    <div className="bg-bg-cards h-full p-4">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-3 mb-4">
        <div>
          <img
            src="https://i.pinimg.com/736x/8f/3b/1e/8f3b1eaa982f4f6d179e92c07cee99ea.jpg"
            className="w-80 h-56 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl sm:h-32 md:h-40 lg:h-48 xl:h-48 object-cover rounded-xl"
            alt="Banner"
          />
        </div>
        <div>
          <div className="flex flex-col">
            <h3 className="w-3xl text-center md:text-left sm:text-m md:text-l lg:text-xl xl:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-blue-400 hover:animate-pulse">
              ARTISTAS DEL MOMENTO
            </h3>
            <p className="text-m text-gray-400 mt-1">Los más escuchados esta semana</p>
          </div>
        </div>
      </div>

      <div className="w-full h-1 bg-neutral-800 mx-auto mt-4 rounded-full"></div>

      <div className="w-full flex gap-5 overflow-x-auto py-4 mt-10 scrollbar-thin scrollbar-thumb-pink-500 scrollbar-track-night">
        {artists.map((e) => (
          <div
            key={e.id}
            className="flex flex-col items-center bg-night rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-hover-night min-w-[180px] max-w-[240px] mx-2 cursor-grab"
          >
            <img
              className="w-32 h-24 sm:w-28 sm:h-32 md:w-36 md:h-40 rounded-full object-cover mt-4 shadow-md border-4 border-pink-500"
              src={e.avatar}
              alt={e.full_name}
            />
            <div className="p-3 w-full flex flex-col items-center">
              <p className="text-center text-white font-bold text-base sm:text-lg md:text-xl mb-1 truncate">
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
