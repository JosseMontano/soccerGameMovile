import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from "./button"
import PartidoCard from './partidoCard'
import { SoccerGameI } from '../interfaces/soccerGameI'
import { useLinkTo } from '@react-navigation/native'

interface Params {
  data: SoccerGameI[]
}

const Partidos = ({ data }: Params) => {
  const linkTo = useLinkTo();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerBtn}><Button onPress={() => { linkTo("/FormPostGame"); }}>Crear partido</Button></View>
      <ScrollView contentContainerStyle={styles.cardsContainer}>
        {data.map(v => <PartidoCard key={v.partidoId} v={v} />)}
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