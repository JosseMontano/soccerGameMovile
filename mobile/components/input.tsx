import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

interface Params {
  handleBlur: any;
  value: any;
  handleChange: any
}

const Input = ({ handleBlur, handleChange, value }: Params) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Usuario</Text>
      <TextInput style={styles.input} onBlur={handleBlur} value={value} onChangeText={handleChange} />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  container: {
    position: "relative"
  },
  text: {
    position: "absolute",
    fontWeight: "600",
    left: 16,
    top: 2,
    opacity: 0.5
  },
  input: {
    borderWidth: 1,
    width: 300,
    borderColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: 8,
    fontSize: 16,
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 8
  }
})