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
      <View style={styles.header}>
        <Text style={styles.title}>Gol App</Text>
        <Text>{page}</Text>
        <View style={styles.buttonsContainer}>
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
  header: {
    alignItems: "center",
    gap: 12
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
  },
  pageTitle: {
    fontSize: 18
  },
  buttonsContainer: {
    gap: 48
  },
})