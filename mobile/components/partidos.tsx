import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from "./button"
import PartidoCard from './partidoCard'
import { SoccerGameI } from '../interfaces/soccerGameI'

interface Params{
  v:SoccerGameI
}

const Partidos = ({v}:Params) => {
  return (
    <View>
      <Button onPress={() => {}}>Crear partido</Button>
      <View style={styles.cardsContainer}>
        <PartidoCard v={v} />
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