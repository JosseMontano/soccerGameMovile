import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Button from "../components/button"
import Partidos from "../components/partidos"
import MisPartidos from "../components/misPartidos"

type PageType = "Mis partidos" | "Lista de partidos";

const Home = () => {
  const [page, setPage] = useState<PageType>("Mis partidos");

  return (
    <View style={styles.container}>
      <View>
        <Text>Gol App</Text>
        <p>{page}</p>
        <View>
          <Button onPress={() => setPage("Mis partidos")}>Mis partidos</Button>
          <Button onPress={() => setPage("Lista de partidos")}>Partidos</Button>
        </View>
      </View>
      {
        page === "Mis partidos" ?
        <MisPartidos /> :
        page === "Lista de partidos" &&
        <Partidos />
      }
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
  },
})