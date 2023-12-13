import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PartidoCard from './partidoCard'
import { SoccerGameI } from '../interfaces/soccerGameI'

interface Params {
  data: SoccerGameI[]
}

const MisPartidos = ({ data }: Params) => {
  return (
    <ScrollView contentContainerStyle={styles.cardsContainer}>
      {data.map(v => <PartidoCard key={v.partidoId} v={v} />)}
    </ScrollView>
  )
}

export default MisPartidos

const styles = StyleSheet.create({
  cardsContainer: {
    gap: 12
  }
})