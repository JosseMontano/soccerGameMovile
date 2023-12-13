import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

interface Props {
  onPress: () => any
}

const NextButton = ({ onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image style={styles.image} source={require("../assets/icons/next.png")} />
    </TouchableOpacity>
  );
};

export default NextButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    width: 72,
    height: 72,
    borderRadius: 36,
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: "60%",
    height: "60%",
  }
});
