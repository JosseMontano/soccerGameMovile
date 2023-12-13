import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from 'react'
import NextButton from "../components/nextButton";
import Input from "../components/input";
import { Formik } from "formik";
import { postGameValidationSchema } from "../validations/postGame";
import { postService } from "../utils/fetch";
import { useLinkTo } from "@react-navigation/native";
import useAuthStore from "../store/auth";

interface FormType {
  maximoJugadores: number
  tipoCancha: string
  fecha: string
  hora: string
  usuarioId?: string
}

const FormPostGame = () => {
  const linkTo = useLinkTo();
  const { userId } = useAuthStore();

  const handleRedirectlogin = () => {
    linkTo("/Home");
  };

  const handlePostGame = async (val: FormType) => {
    console.log(val)
    const obj: FormType = {
      usuarioId: userId, ...val
    }
    const res = await postService('SoccerGame', obj);
    console.log(res)
    if (res.status == 201) {
      alert(res.message)
      linkTo("/Home");
      return
    }
    alert('Ha ocurrido un error')
  }

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <View style={styles.topContainer}>
          <Text style={styles.title}>Crear Partido</Text>
        </View>
        <Formik
          validationSchema={postGameValidationSchema}
          initialValues={{ maximoJugadores: 0, tipoCancha: "", fecha: "", hora: "" }}
          onSubmit={handlePostGame}
        >
          {({
            handleChange,
            handleBlur,
            values,
            errors,
            touched,
            handleSubmit,
          }) => (
            <>
              <View style={styles.inputs}>
                <Input
                  placeholder="Tipo de cancha"
                  handleBlur={handleBlur("tipoCancha")}
                  handleChange={handleChange("tipoCancha")}
                  value={values.tipoCancha}
                  error={errors.tipoCancha && touched.tipoCancha && errors.tipoCancha}
                />
                <Input
                  placeholder="Cantidad jugadores"
                  handleBlur={handleBlur("maximoJugadores")}
                  handleChange={handleChange("maximoJugadores")}
                  value={values.maximoJugadores}
                  error={errors.maximoJugadores && touched.maximoJugadores && errors.maximoJugadores}
                />

                <Input
                  placeholder="Fechas"
                  handleBlur={handleBlur("fecha")}
                  handleChange={handleChange("fecha")}
                  value={values.fecha}
                  error={errors.fecha && touched.fecha && errors.fecha}
                />

                <Input
                  placeholder="Hora"
                  handleBlur={handleBlur("hora")}
                  handleChange={handleChange("hora")}
                  value={values.hora}
                  error={errors.hora && touched.hora && errors.hora}
                />
              </View>
              <NextButton onPress={handleSubmit} />
            </>
          )}
        </Formik>
      </View>
      <View style={styles.notContainer}>
        <TouchableOpacity onPress={() => handleRedirectlogin()}>
          <Text style={styles.bottomText}>Retroceder</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default FormPostGame

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
  },
  loginContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 32,
  },
  notContainer: {
    alignItems: "center",
    marginBottom: 12,
    flexDirection: "row",
    alignSelf: "center",
    gap: 8,
  },
  topContainer: {
    gap: 12,
    alignItems: "center",
  },
  image: {
    width: 96,
    height: 96,
    borderRadius: 48,
  },
  title: {
    fontWeight: "700",
    fontSize: 24,
  },
  inputs: {
    gap: 12,
  },
  bottomText: {
    color: "#F5C451",
  },
});