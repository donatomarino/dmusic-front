import { useEffect, useState } from "react";
import { authService } from "../services/authService";
import { useNavigate } from "react-router-dom";
import { AuthResponse, BaseApiResponse, FailedLoginPayload, LoginPayload } from "../../../types/types";
import { toast } from "react-toastify";

export const useLogin = () => {
  useEffect(() => {
    localStorage.removeItem('token');
    window.dispatchEvent(new Event('tokenRemoved'));
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
      const res: AuthResponse | BaseApiResponse = await authService.login(formData);

      if (res.success && 'access_token' in res) {
        localStorage.setItem('token', res.access_token);
        localStorage.setItem('initial_name', res.initial_name);
        navigate('/');
      }
    } catch (e: FailedLoginPayload | any) {
      e.error && toast.error(e.message);
      console.error(e);
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