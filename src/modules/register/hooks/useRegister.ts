import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { RegisterPayload, BaseApiResponse } from "../../../types/types";
import { toast } from "react-toastify";
import { regService } from "../services/regService";

export const useRegister = () => {
  const navigate = useNavigate();
  const [ isRegistred, setIsRegistred ] = useState<boolean>(false);
  const [formData, setFormData] = useState<RegisterPayload>({
    full_name: '',
    email: '',
    password: '',
    confirm_pass: '',
    showPassword: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (formData.password !== formData.confirm_pass) {
      toast.error("Las contraseñas no coinciden.");
      return;
    }

    try {
      const res: BaseApiResponse = await regService.register(formData);

      if (res.success) {
        toast.success("Usuario registrado correctamente.");
        setIsRegistred(prev => !prev);
      } else {
        toast.error(res.message);
      }

    } catch (error: any) {
      if (error.errors && typeof error.errors === 'object') {
        const errorMessage = Object.values(error.errors)[0] as string[];
        toast.error(errorMessage[0]);
      } else {
        toast.error("Error durante el registro");
      }
    }
  };

  return { formData, handleChange, handleSubmit, navigate, isRegistred };
};