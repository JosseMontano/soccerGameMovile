import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from "./button"
import PartidoCard from './partidoCard'

const Partidos = () => {
  return (
    <View>
      <Button onPress={() => {}}>Crear partido</Button>
      <View style={styles.cardsContainer}>
        <PartidoCard />
        <PartidoCard />
        <PartidoCard />
      </View>
    </View>
  )
}

export default Partidos

const styles = StyleSheet.create({
  cardsContainer: {
    gap: 32
  }
})