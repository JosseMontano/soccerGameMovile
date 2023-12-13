import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PartidoCard from './partidoCard'

const MisPartidos = () => {
  return (
    <View>
      <PartidoCard />
      <PartidoCard />
      <PartidoCard />
      <PartidoCard />
    </View>
  )
}

export default MisPartidos

const styles = StyleSheet.create({})