import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PartidoCard from './partidoCard'
import { SoccerGameI } from '../interfaces/soccerGameI'
import { postService } from '../utils/fetch'
import useAuthStore from '../store/auth'
import Usefetch from '../hooks/useFetch'
import { getSoccerGameByUser } from '../services/soccerGame'


interface SignUpI {
  usuarioId: string,
  partidoId: string
}

const MisPartidos = () => {

  const { userId } = useAuthStore();

  const { data } = Usefetch<any>({ services: getSoccerGameByUser, id: userId })

  const handleDesubscripcion = async (partidoId: string) => {
    const val: SignUpI = {
      partidoId: partidoId,
      usuarioId: userId
    }
    const res = await postService('UsuarioPartido/Desinscribirse', val);
    console.log(res)
    if (res.status == 200) {
      alert(res.message)
      return
    }
    alert('Ha ocurrido un erro')
  }


  return (
    <ScrollView contentContainerStyle={styles.cardsContainer}>
      {data.game != null && data.game.map(v => <PartidoCard key={v.partidoId} v={v} handleSignUp={handleDesubscripcion} btnTxt={"Desinscribirse"} />)}
    </ScrollView>
  )
}

export default MisPartidos

const styles = StyleSheet.create({
  cardsContainer: {
    gap: 12
  }
})