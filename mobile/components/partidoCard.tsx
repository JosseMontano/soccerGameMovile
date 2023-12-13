import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SoccerGameI } from '../interfaces/soccerGameI'
import Button from './button'
import useAuthStore from '../store/auth'

interface Params {
  v: SoccerGameI
}

const PartidoCard = ({ v }: Params) => {
  const { userId } = useAuthStore();

  const showBtn = userId == v.usuarioId ? true : false

  return (
    <View style={styles.container}>
      <Text style={styles.cancha}>{v.tipoCancha}</Text>
      <Text>{v.fecha}</Text>
      <Text>{v.hora}</Text>
      <Text>Usuario: {v.nombreUsuario}</Text>
      <Text>Cantidad jugadores: {v.maximoJugadores}</Text>
      {showBtn && <Button onPress={() => { }}>Eliminar</Button>}
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
    borderColor: "#F5C451",
    borderRadius: 16
  },
  cancha: {
    fontWeight: "600",
    fontSize: 18
  }
})