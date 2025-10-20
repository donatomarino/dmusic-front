import { FaRegSmile } from "react-icons/fa";

const UserData = () => {

  return (
    <div className="UserData__Container">
      <div className="UserData__Header">
        <h2 className="UserData__Header--h2">Hola, {datos.full_name}! <span className="UserData__Header--emoji"><FaRegSmile size={25} color="yellow" /></span></h2>
      </div>

      <div className="UserData__Content">
        <div className="UserData__Content--Item">
          <label>Nombre:</label>
          <div className="UserData__Content--div">{datos.full_name}</div>
        </div>

        <div className="UserData__Content--Item">
          <label>Email:</label>
          <div className="UserData__Content--div">{datos.email}</div>
        </div>

        <div className="UserData__Content--Item">
          <label>Fecha de nacimiento</label>
          <div className="UserData__Content--div">{datos.birthdate.slice(0, 10).split('-').reverse().join('-')}</div>
        </div>

        <div className="UserData__Content--Item">
          <label>Genero</label>
          <div className="UserData__Content--div">{datos.gender.toUpperCase()}</div>
        </div>

        <button className='UserData__Button' onClick={() => navigate('/user/forgot-password')}>
          Restablece contraseña
        </button>
      </div>
    </div>
  )
}

export default UserData;