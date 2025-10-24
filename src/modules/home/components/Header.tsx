import { FaSearch, FaBars, FaTimes, FaHome, FaMusic } from "react-icons/fa";
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

      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-400 text-white font-bold text-sm sm:text-base cursor-pointer hover:scale-110 transition-transform duration-200 overflow-hidden">
        {auth ? user?.charAt(0).toUpperCase() : null}
      </div>

      {menuOpen && <SideMenuMobile auth={auth} />}
    </header>
  );
};

export default Header;
