import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from "./button"
import PartidoCard from './partidoCard'
import { SoccerGameI } from '../interfaces/soccerGameI'
import { useLinkTo } from '@react-navigation/native'
import useAuthStore from '../store/auth'
import { postService } from '../utils/fetch'

interface Params {
  data: SoccerGameI[]
  handleLoadData: () => Promise<void>
}

interface SignUpI {
  usuarioId: string,
  partidoId: string
}


const Partidos = ({ data, handleLoadData }: Params) => {
  const linkTo = useLinkTo();

  const { userId } = useAuthStore();

  const handleSignUp = async (partidoId: string) => {
    const val: SignUpI = {
      partidoId: partidoId,
      usuarioId: userId
    }
    const res = await postService('UsuarioPartido/Inscribirse', val);
    console.log(res)
    if (res.status == 201) {
      alert(res.message)
      return
    }
    alert('Ya hay una cantidad maxima de juagdores')
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerBtn}><Button onPress={() => { linkTo("/FormPostGame"); }}>Crear partido</Button></View>
      <ScrollView contentContainerStyle={styles.cardsContainer}>
        {data.map(v => <PartidoCard key={v.partidoId} v={v} handleSignUp={handleSignUp} handleLoadData={handleLoadData} btnTxt={"Inscribirse"} />)}
      </ScrollView>
    </ScrollView>
  )
}

export default Partidos

const styles = StyleSheet.create({
  container: {
    gap: 12
  },
  cardsContainer: {
    gap: 12
  },
  containerBtn: {
    marginBottom: 14,
  }
})