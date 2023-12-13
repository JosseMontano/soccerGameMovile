import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface Props {
  children: string
  onPress: (...props: any) => any
}

const Button = ({ children, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5C451",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12
  },
  text: {
    color: "white",
    fontWeight: "600",
    textAlign: "center"
  }
});