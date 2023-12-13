import * as yup from "yup";

const requriedMsg = "Este campo es requerido";

export const postGameValidationSchema = yup.object().shape({
  maximoJugadores: yup.number().required(requriedMsg),
  tipoCancha: yup.string().required(requriedMsg),
  fecha: yup.string().required(requriedMsg),
  hora: yup.string().required(requriedMsg),
});
