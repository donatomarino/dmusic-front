import { useEffect, useState } from "react";
import { authService } from "../services/authService";
import { useNavigate } from "react-router-dom";
import { AuthResponse, BaseApiResponse, LoginPayload } from "../../../types/types";
import { toast } from "react-toastify";

export const useLogin = () => {
  useEffect(() => {
    localStorage.removeItem('token');
  }, []);
  const navigate = useNavigate();
  const [formData, setFormData] = useState<LoginPayload>({
    email: '',
    password: '',
    showPassword: false
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      // toggleLoading();
      const res: AuthResponse | BaseApiResponse = await authService.login(formData);

      if (res.success && 'access_token' in res) {
        localStorage.setItem('token', res.access_token);
        navigate('/');
      } else {
        toast.error('Introduzca las credenciales en el placeholder');
      }

    } catch (e: unknown) {
      console.error(e);
    } finally {
      // toggleLoading();
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return { formData, setFormData, handleChange, handleSubmit, navigate }
};