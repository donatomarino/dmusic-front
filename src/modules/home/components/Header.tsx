import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { VerifiedAuth } from "../../../types/types";
import { useHeader } from "../hooks/useHeader";
import SideMenuMobile from "./SideMenuMobile";

const Header = ({ auth }: VerifiedAuth) => {
  const { setSearch, handleSong, user, navigate, search, menuOpen, setMenuOpen } = useHeader();

  return (
    <header className="bg-header col-span-full flex items-center justify-between px-4 sm:px-6 py-4 sm:py-6 shadow-md relative">

      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <h1
        className="absolute left-1/2 transform -translate-x-1/2 md:relative md:left-0 md:translate-x-0 text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-tl from-purple-500 via-pink-500 to-blue-400 cursor-pointer hover:scale-105 transition-transform duration-200"
      >
        DMusic
      </h1>

      <div className="hidden md:flex flex-1 justify-center mx-6">
        <form
          className="flex items-center bg-night rounded-3xl px-2 h-10 w-full sm:w-6/12 hover:border-primary hover:border-2 hover:bg-hover-night transition-all duration-200"
          onSubmit={handleSong}
        >
          <button type="submit" className="p-3 border-0 bg-transparent hover:cursor-pointer">
            <FaSearch size={16} className="text-gray-400 sm:text-gray-500" />
          </button>
          <input
            className="text-primary text-sm ml-2 w-full bg-transparent placeholder-gray-500 hover:text-white focus:outline-none focus:ring-0"
            name="searchbar"
            value={search}
            placeholder="¿Qué quieres reproducir?"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>

      {auth ? (
        <div className="flex flex-col sm:flex-row items-center gap-2 md:flex-row md:gap-3.5">
          <div className="relative flex items-center justify-center w-10 h-10 sm:w-10 sm:h-10 md:w-10 md:h-10 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-400 text-white font-bold text-sm cursor-pointer hover:scale-110 transition-transform duration-200">
            {user}
          </div>
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row items-center gap-2 md:flex-row md:gap-3.5">
          <button
            type="button"
            onClick={() => navigate('/register')}
            className="px-2 py-2 w-24 sm:w-24 md:w-24 rounded-3xl text-primary text-sm font-medium cursor-pointer transition-colors duration-300 ease-in-out bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-400 hover:brightness-110"
          >
            Registrate
          </button>
          <button
            type="button"
            onClick={() => navigate('/login')}
            className="px-2 py-2 w-30 sm:w-30 md:w-30 rounded-3xl bg-night border-2 border-purple-500 text-white text-sm font-medium cursor-pointer transition-all duration-300 ease-in-out hover:bg-header hover:border-pink-500"
          >
            Iniciar sesión
          </button>
        </div>
      )}

      {menuOpen && <SideMenuMobile auth={auth} />}
    </header>
  );
};

export default Header;
