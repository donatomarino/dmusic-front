import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-header col-span-full flex justify-between align-center px-5 py-7 shadow-md">
      <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-tl from-purple-500 via-pink-500 to-blue-400 cursor-pointer">
        DMusic
      </h1>

      <div className="flex flex-1 justify-center">
        <form
          className="flex align-center bg-searchbar rounded-3xl px-2 h-10 w-96 hover:border-primary hover:rounded-3xl hover:border hover:bg-[#212121]"
        // onChange={handleSong}
        >
          <input
            className="text-primary text-sm w-full hover:text-white"
            name="searchbar"
            placeholder="¿Qué quieres reproducir?"
          // onChange={(e) => setSong(e.target.value)}
          ></input>
          <button
            type="submit"
            className="p-3 border-0 bg-transparent hover:cursor-pointer "
          >
            <FaSearch size={18} color="#555" />
          </button>
        </form>
      </div>

    </header>
  )
}

export default Header;