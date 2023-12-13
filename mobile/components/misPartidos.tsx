import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PartidoCard from './partidoCard'

const MisPartidos = () => {
  return (
    <ScrollView contentContainerStyle={styles.cardsContainer}>
      <PartidoCard />
      <PartidoCard />
      <PartidoCard />
      <PartidoCard />
    </ScrollView>
  )
}

export default MisPartidos

const styles = StyleSheet.create({
  cardsContainer: {
    gap: 12
  }
})