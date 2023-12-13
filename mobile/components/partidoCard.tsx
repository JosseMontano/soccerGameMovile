import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SoccerGameI } from '../interfaces/soccerGameI'

interface Params {
  v: SoccerGameI
}

const PartidoCard = ({ v }: Params) => {
  return (
    <View style={styles.container}>
      <Text style={styles.cancha}>{v.tipoCancha}</Text>
      <Text>{v.fecha}</Text>
      <Text>{v.hora}</Text>
      <Text>Usuario: {v.nombreUsuario}</Text>
      <Text>Cantidad jugadores: {v.maximoJugadores}</Text>
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