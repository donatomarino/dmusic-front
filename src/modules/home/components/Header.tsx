import { FaSearch } from "react-icons/fa";
import { VerifiedAuth } from "../../../types/types";
import { useHeader } from "../hooks/useHeader";

const Header = ({ auth }: VerifiedAuth) => {
  const { setSearch, handleSong, user, navigate, search } = useHeader();

  return (
    <header className="bg-header col-span-full flex justify-between align-center px-5 py-7 shadow-md">
      <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-tl from-purple-500 via-pink-500 to-blue-400 cursor-pointer">
        DMusic
      </h1>

      <div className="flex flex-1 justify-center">
        <form
          className="flex align-center bg-night rounded-3xl px-2 h-10 w-4/12 hover:border-primary hover:rounded-3xl hover:border-2 hover:bg-hover-night"
          onSubmit={handleSong}
        >
          <button
            type="submit"
            className="p-3 border-0 bg-transparent hover:cursor-pointer"
          >
            <FaSearch size={18} color="#555" />
          </button>
          <input
            className="text-primary text-sm ml-2 w-full hover:text-white focus:outline-none focus:ring-0"
            name="searchbar"
            value={search}
            placeholder="¿Qué quieres reproducir?"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>

      {auth ?
        <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-400 text-white font-bold text-sm cursor-pointer hover:scale-110 transition-transform duration-200">
          {user}
        </div>
        :
        <div className="flex gap-3.5">
          <button
            type='button'
            onClick={() => navigate('/register')} 
            className="px-2 py-3 w-24 rounded-3xl text-primary text-sm font-medium cursor-pointer transition-colors duration-300 ease-in-out bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-400 hover:brightness-110">
            Registrate
          </button>
          <button
            type='button'
            onClick={() => navigate('/login')} 
            className="px-2 py-3 w-30 rounded-3xl bg-night border-2 border-purple-500 text-white text-sm font-medium cursor-pointer transition-all duration-300 ease-in-out hover:bg-header hover:border-pink-500">
            Iniciar sesión
          </button>
        </div>
      }
    </header>
  )
}

export default Header;