import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PartidoCard from './partidoCard'
import { SoccerGameI } from '../interfaces/soccerGameI'

interface Params {
  v: SoccerGameI
}

const MisPartidos = ({ v }: Params) => {
  return (
    <ScrollView contentContainerStyle={styles.cardsContainer}>
      <PartidoCard v={v} />
    </ScrollView>
  )
}

export default MisPartidos

const styles = StyleSheet.create({
  cardsContainer: {
    gap: 12
  }
})