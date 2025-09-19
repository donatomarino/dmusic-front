import { FaHome, FaSearch, FaChartLine, FaMusic } from "react-icons/fa";

const SideMenu = () => {
  return (
    <div className="col-span-1 row-span-2 bg-night flex flex-col justify-between pt-4">
      <ul className="flex flex-col gap-6">
        <li
          className="flex items-center py-3 px-4 cursor-pointer 
             hover:bg-purple-700/40 transition-colors duration-300"
        // onClick={() => toggleComponent(2)}
        >
          <FaHome className="text-xl mr-3.5 text-primary" />
          <div className="text-l font-medium text-primary">Inicio</div>
        </li>
        <li
          className="flex items-center py-3 px-4 cursor-pointer
             hover:bg-purple-700/40 transition-colors duration-300"
        // onClick={() => toggleComponent(3)}
        >
          <FaSearch className="text-xl mr-3.5 text-primary" />
          <div className="text-l font-medium text-primary">Explorar</div>
        </li>
        <li
          className="flex items-center py-3 px-4 cursor-pointer
             hover:bg-purple-700/40 transition-colors duration-300"
        // onClick={() => toggleComponent(4)}
        >
          <FaChartLine className="text-xl mr-3.5 text-primary" />
          <div className="text-l font-medium text-primary">Tendencias</div>
        </li>

        {/* {login === 1 && ( */}
        <li
          className="flex items-center py-3 px-4 cursor-pointer mb-2.5 
             hover:bg-purple-700/40 transition-colors duration-300"
        // onClick={() => toggleComponent(5)}
        >
          <FaMusic className="text-xl mr-3.5 text-primary" />
          <div className="text-l font-medium text-primary">Mi Biblioteca</div>
        </li>
        {/* )}  */}
      </ul>

      {/* {login === 1 && ( */}
      <ul>
        <li
          className="flex items-center py-3 px-5 justify-center cursor-pointer border-t-3 border-header hover:bg-purple-700/40 transition-colors duration-300"
        // onClick={() => toggleComponent(5)}
        >
          <div className="text-l font-medium text-primary">Cerrar sesión</div>
        </li>
      </ul>
      {/* // )} */}
    </div>
  );
}

export default SideMenu;