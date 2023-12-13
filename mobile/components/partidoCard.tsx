import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SoccerGameI } from '../interfaces/soccerGameI'
import Button from './button'
import useAuthStore from '../store/auth'
import { deleteServ, postService } from '../utils/fetch'

interface Params {
  v: SoccerGameI
  handleSignUp: (partidoId: string) => Promise<void>
  handleLoadData?: () => Promise<void>
  btnTxt: string;
}


const PartidoCard = ({ v, handleSignUp, handleLoadData, btnTxt }: Params) => {
  const { userId } = useAuthStore();

  const showBtn = userId == v.usuarioId ? true : false

  const handleDelete = async () => {
    const res = await deleteServ('SoccerGame/' + v.partidoId);
    if (res.status == 200) {
      if (handleLoadData) {
        handleLoadData()
      }
      alert(res.message)
      return
    }
    alert('Ha ocurrido un error')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.cancha}>{v.tipoCancha}</Text>
      <Text>{v.fecha}</Text>
      <Text>{v.hora}</Text>
      <Text>Usuario: {v.nombreUsuario}</Text>
      <Text>Cantidad jugadores: {v.maximoJugadores}</Text>
      {showBtn && <Button onPress={() => handleDelete()}>Eliminar</Button>}
      {!showBtn && <Button onPress={() => handleSignUp(v.partidoId)}>{btnTxt}</Button>}
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