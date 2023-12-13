import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from "./button"
import PartidoCard from './partidoCard'

const Partidos = () => {
  return (
    <View>
      <Button onPress={() => {}}>Crear partido</Button>
      <View>
        <PartidoCard />
        <PartidoCard />
        <PartidoCard />
      </View>
    </View>
  )
}

export default Partidos

const styles = StyleSheet.create({})