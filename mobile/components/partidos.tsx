import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from "./button"
import PartidoCard from './partidoCard'

const Partidos = () => {
  return (
    <View style={styles.container}>
      <Button onPress={() => {}}>Crear partido</Button>
      <ScrollView contentContainerStyle={styles.cardsContainer}>
        <PartidoCard />
        <PartidoCard />
        <PartidoCard />
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