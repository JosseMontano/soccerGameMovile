import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PartidoCard from './partidoCard'
import { SoccerGameI } from '../interfaces/soccerGameI'

interface Params {
  v: SoccerGameI
}

const MisPartidos = ({ v }: Params) => {
  return (
    <View>
      <PartidoCard v={v} />
    </View>
  )
}

export default MisPartidos

const styles = StyleSheet.create({})