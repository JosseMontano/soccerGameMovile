import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from "./button"
import PartidoCard from './partidoCard'
import { SoccerGameI } from '../interfaces/soccerGameI'

interface Params {
  v: SoccerGameI
}

const Partidos = ({ v }: Params) => {
  return (
    <View style={styles.container}>
      <Button onPress={() => { }}>Crear partido</Button>
      <ScrollView contentContainerStyle={styles.cardsContainer}>
        <PartidoCard v={v} />
      </ScrollView>
    </View>
  )
}

export default Partidos

const styles = StyleSheet.create({
  container: {
    gap: 12
  },
  cardsContainer: {
    gap: 12
  }
})