import FormField from "../components/FormField";
import { Header } from "../components/Header";
import type { LoginPayload, AuthResponse, BaseApiResponse } from "../../../types/types";
import { useLogin } from "../hooks/useLogin";

interface Data {
  credentials: LoginPayload;
  successResponse: AuthResponse;
  errorResponse: BaseApiResponse;
}

export const Login = () => {
  const { formData, handleChange, handleSubmit, navigate } = useLogin();

  return (
    <div className="min-h-screen flex justify-center items-center text-white font-sans bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4 sm:px-6 md:px-12">
      <form
        className="flex flex-col items-center w-full max-w-2xl h-auto sm:h-[42rem] p-8 sm:p-12 rounded-xl shadow-lg shadow-gray-800 text-center bg-gray-900/80 backdrop-blur-md"
        onSubmit={handleSubmit}
        method="POST"
      >
        <div className="flex flex-col w-full gap-6 sm:gap-8">
          <Header
            description={'Inicia sesión en DMusic'}
            onClick={() => navigate('/')}
          />

          <div className="flex flex-col w-full">
            <FormField
              label={'Correo electrónico'}
              type={'email'}
              id={'email'}
              placeholder={'donato_8@icloud.com'}
              name={'email'}
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col w-full">
            <FormField
              label={'Contraseña'}
              type={'password'}
              id={'password'}
              placeholder={'prueba1234'}
              name={'password'}
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-400 hover:scale-105 transition-transform duration-300 text-white border-0 py-4 px-8 rounded-2xl font-medium text-base cursor-pointer shadow-md shadow-purple-700/50"
            >
              Iniciar sesión
            </button>
          </div>

          <div className="w-full flex flex-col items-center">
            <div className="mb-2.5 text-sm sm:text-base">¿No tienes cuenta?</div>
            <div
              className="bg-clip-text text-transparent bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-400 cursor-pointer text-base font-medium hover:border-b-2 border-purple-500 hover:brightness-125 transition duration-300"
              onClick={() => navigate('/register')}
            >
              Regístrate en DMusic
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}