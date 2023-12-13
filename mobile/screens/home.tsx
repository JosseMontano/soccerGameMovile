import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Button from "../components/button"
import Partidos from "../components/partidos"
import MisPartidos from "../components/misPartidos"
import Usefetch from '../hooks/useFetch'
import { getSoccerGame } from '../services/soccerGame'
import { SoccerGameI } from '../interfaces/soccerGameI'
import { ReturnGetI } from '../interfaces/returnGetI'

type PageType = "Mis partidos" | "Lista de partidos";

const Home = () => {
  const [page, setPage] = useState<PageType>("Mis partidos");

  const { data: soccerGameData, loading } = Usefetch<SoccerGameI>({ services: getSoccerGame })

  const { data: soccerGameByUserData } = Usefetch<SoccerGameI>({ services: getSoccerGame, id: '52740360-0884-4300-a3ee-c4c0ce5e10a9' })

  console.log("***********************************")
  console.log(soccerGameByUserData)
  console.log("***********************************")

  if (!loading)
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
        {soccerGameData.length != undefined &&
          page === "Mis partidos" ?
          soccerGameByUserData.map((v) => (
            <MisPartidos v={v}/>
          ))
          :
          page === "Lista de partidos" &&
          soccerGameData.map((v) => (
            <Partidos v={v} />
          ))
        }
      </View>
    )

  return (
    <View></View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    gap: 24
  },
  header: {
    alignItems: "center",
    gap: 12
  },
  title: {
    fontSize: 48,
    fontWeight: "600",
    color: "#F5C451"
  },
  pageTitle: {
    fontSize: 18,
    opacity: 0.6
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 48
  },
})