import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useLinkTo } from "@react-navigation/native";
import Input from "../components/input";
import NextButton from "../components/nextButton";

const Login = () => {
  const linkTo = useLinkTo();

  const login = () => {
    linkTo("/Register");
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <View style={styles.topContainer}>
          <Image
            style={styles.image}
            source={require("../assets/login/imglogin.jpg")}
          />
          <Text style={styles.title}>Bienvenido a Gol App</Text>
        </View>
        <View style={styles.inputs}>
          <Input />
          <Input />
        </View>
        <NextButton onPress={() => linkTo("Home")} />
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
    color: "green",
  },
});

export default Login;
