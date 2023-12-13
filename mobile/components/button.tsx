import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface Props {
  children: string
  onPress: (...props: any) => any
}

const Button = ({ children, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{ children }</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    paddingHorizontal: 12,
    paddingVertical: 8
  },
  text: {
    color: "white"
  }
});