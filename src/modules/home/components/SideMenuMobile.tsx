import { FaHome, FaMusic, FaSearch } from "react-icons/fa";
import { useHeader } from "../hooks/useHeader";
import { VerifiedAuth } from "../../../types/types";
import { useContext } from "react";
import { ComponentContext } from "../../../context/ComponentContext";

const SideMenuMobile = ({ auth }: VerifiedAuth) => {
  const { navigate, setMenuOpen } = useHeader();
  const { toggleComponent } = useContext(ComponentContext);

  return (
    <div className="absolute top-full left-0 w-full bg-night shadow-lg rounded-b-xl flex flex-col items-start p-4 gap-3 md:hidden z-50">
      <button
        className="flex items-center gap-2 text-white hover:text-purple-400"
        onClick={() => { toggleComponent(1); setMenuOpen(false); }}
      >
        <FaHome /> Inicio
      </button>
      <button
        className="flex items-center gap-2 text-white hover:text-purple-400"
        onClick={() => { toggleComponent(2); setMenuOpen(false); }}
      >
        <FaSearch /> Explorar
      </button>
      {auth && (
        <button
          className="flex items-center gap-2 text-white hover:text-purple-400"
          onClick={() => { toggleComponent(4); setMenuOpen(false); }}
        >
          <FaMusic /> Mi Biblioteca
        </button>
      )}
      {auth && (
        <button
          className="flex items-center gap-2 text-red-400 hover:text-red-500 mt-2"
          onClick={() => { navigate("/login"); setMenuOpen(false); }}
        >
          Cerrar sesión
        </button>
      )}
    </div>
  )
}

export default SideMenuMobile;