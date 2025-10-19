import FormField from "../../login/components/FormField";
import { Header } from "../../login/components/Header";
import { useRegister } from "../hooks/useRegister";

export const Register = () => {
  const { formData, handleChange, handleSubmit, navigate, isRegistred } = useRegister();

  return (
    <div className="min-h-screen flex justify-center items-center text-white font-sans bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4 sm:px-6 md:px-12">
      <form method="POST" onSubmit={handleSubmit} className="flex flex-col items-center w-full max-w-2xl mx-auto p-8 sm:p-12 bg-gray-900/80 rounded-xl shadow-lg shadow-gray-800 text-white font-sans">
        <Header description="Únete ahora y disfruta de todo el contenido" />

        <div className="flex flex-col w-full gap-6 sm:gap-8 mt-4">
          <FormField
            label="Nombre completo"
            name="full_name"
            type="text"
            id="full_name"
            placeholder="Introduce tu nombre completo"
            value={formData.full_name}
            onChange={handleChange}
            minLength={4}
            disabled={isRegistred}

          />

          <FormField
            label="Dirección de correo electrónico"
            name="email"
            type="email"
            id="email"
            placeholder="Introduce tu correo electrónico"
            value={formData.email}
            onChange={handleChange}
            disabled={isRegistred}

          />

          <FormField
            label="Contraseña"
            name="password"
            type="password"
            id="password"
            placeholder="Introduce tu contraseña"
            value={formData.password}
            onChange={handleChange}
            disabled={isRegistred}

          />

          <FormField
            label="Confirma contraseña"
            name="confirm_pass"
            type="password"
            id="confirm-password"
            placeholder="Introduce tu contraseña"
            value={formData.confirm_pass}
            onChange={handleChange}
            disabled={isRegistred}
          />
        </div>

        {isRegistred ?
          <div>
            <button type='button' className='bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-400 hover:scale-105 transition-transform duration-300 text-white border-0 py-3 px-6 rounded-2xl font-medium text-base cursor-pointer shadow-md shadow-purple-700/50 mt-5' onClick={() => navigate('/login')}>¡Conéctate ahora!</button>
          </div> :
          <div className="w-full flex justify-center mt-8 space-x-4">
            <button
              type="submit"
              className="bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-400 hover:scale-105 transition-transform duration-300 text-white border-0 py-3 px-6 rounded-2xl font-medium text-base cursor-pointer shadow-md shadow-purple-700/50"
            >
              Registrate a DMusic
            </button>

            <button
              type="button"
              onClick={() => navigate('/login')}
              className="py-3 px-6 rounded-2xl bg-night border-2 border-purple-500 text-white text-base font-medium cursor-pointer transition-transform duration-300 hover:bg-header hover:border-pink-500 shadow-md shadow-gray-800"
            >
              Vuelve al login
            </button>
          </div>
        }
      </form>
    </div>
  )
}