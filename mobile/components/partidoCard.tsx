import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PartidoCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.cancha}>Cancha koopa</Text>
      <Text>25/09/2023</Text>
      <Text>10:00</Text>
    </View>
  )
}

export default PartidoCard

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 24,
    gap: 12,
    borderWidth: 2,
    borderColor: "green",
    borderRadius: 16
  },
  cancha: {
    fontWeight: "600",
    fontSize: 18
  }
})