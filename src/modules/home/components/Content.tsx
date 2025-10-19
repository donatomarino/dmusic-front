import { useContent } from '../hooks/useContent';

const Content = () => {
  const {artists} = useContent();

  return (
    <div className="bg-bg-cards h-full p-5">
      <div className="text-center mb-8">
        <h3 className="pt-5 text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-blue-400 hover:animate-pulse">
          ARTISTAS DEL MOMENTO
        </h3>
        <p className="text-sm text-gray-400 mt-1">Los más escuchados esta semana</p>
        <div className="w-full h-1 bg-neutral-800 mx-auto mt-4 rounded-full"></div>
      </div>

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