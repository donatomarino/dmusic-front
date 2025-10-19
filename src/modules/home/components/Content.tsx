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
          <div className='flex flex-col'>
            <h3 className="w-3xl text-center md:text-left sm:text-m md:text-l lg:text-xl xl:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-blue-400 hover:animate-pulse">
              ARTISTAS DEL MOMENTO
            </h3>
            <p className="text-m text-gray-400 mt-1">Los más escuchados esta semana</p>
          </div>
        </div>
      </div>
        <div className="w-full h-1 bg-neutral-800 mx-auto mt-4 rounded-full"></div>

      <div className="mt-10 flex flex-wrap justify-center gap-6">
        {artists.slice(0, 4).map((e) => (
          <div
            key={e.id}
            className="w-1/2 sm:w-1/3 md:w-1/5 bg-night rounded-2xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-hover-night"
          >
            <img
              className="w-4/5 rounded-full mx-auto p-5 min-h-52 object-cover"
              src={e.avatar}
              alt={e.full_name}
            />
            <div className="p-2">
              <p className="text-center text-white font-semibold text-base m-0">
                {e.full_name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Content;