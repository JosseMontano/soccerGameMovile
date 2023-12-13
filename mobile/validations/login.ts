import * as yup from "yup";

const requriedMsg = "Este campo es requerido";

export const loginValidationSchema = yup.object().shape({
  nombreUsuario: yup.string().email("Email invalido").required(requriedMsg),
  contrasenia: yup.string().min(6, "El minimo es de 6").required(requriedMsg),
});
