import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useLinkTo } from "@react-navigation/native";
import Input from "../components/input";
import NextButton from "../components/nextButton";
import { Formik } from "formik";
import { loginValidationSchema } from "../validations/login";
import { postService } from "../utils/fetch";

interface FormType {
    nombreUsuario: string, contrasenia: string
}

const Login = () => {
    const linkTo = useLinkTo();

    const login = () => {
        linkTo("/Register");
    };

    const handleLogin = async (val: FormType) => {
        const res = await postService('user/Login', val);
        if (res.status == 200) {
            console.log(val)
            alert(res.message)
            console.log(res)
            linkTo("/Home");
            return
            //res.data
        }
        alert('contraseña incorrecta')
    }

    return (
        <View style={styles.container}>
            <View style={styles.loginContainer}>
                <View style={styles.topContainer}>
                    <Image
                        style={styles.image}
                        source={require("../assets/login/imglogin.jpg")}
                    />
                    <Text style={styles.title}>Bienvenido a Gol App1</Text>
                </View>
                <Formik
                    validationSchema={loginValidationSchema}
                    initialValues={{ nombreUsuario: "", contrasenia: "" }}
                    onSubmit={handleLogin}
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
                                <Input handleBlur={handleBlur("nombreUsuario")} handleChange={handleChange("nombreUsuario")} value={values.nombreUsuario} />
                                <Text
                                >
                                    {errors.nombreUsuario && touched.nombreUsuario && errors.nombreUsuario}
                                </Text>
                                <Input handleBlur={handleBlur("contrasenia")} handleChange={handleChange("contrasenia")} value={values.contrasenia} />
                                <Text
                                >
                                    {errors.contrasenia && touched.contrasenia && errors.contrasenia}
                                </Text>
                            </View>
                            <NextButton onPress={handleSubmit} />
                        </>
                    )}
                </Formik>
            </View>
            <View style={styles.notContainer}>
                <Text>¿No tienes una cuenta?</Text>
                <TouchableOpacity onPress={() => login()}>
                    <Text style={styles.bottomText}>Regístrate</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

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

export default Login;
