import React, { useState, useEffect } from 'react';
import { Button, View, SafeAreaView, FlatList, Text, StyleSheet, Image} from 'react-native';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';


export const ShipsDetails = ({ route, navigation }) => {
  const {id} = route.params
  const [ship, setShip] = useState()

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`https://api.spacexdata.com/v4/ships/${id}`)

      if (res.status === 200 && res.data) {
        setShip(res.data)
      }
    }
    fetchData()
  }, [])

  if (!ship) {
    return (
      <SafeAreaView>
        <Text style={{ textAlign: "center" }}>Loading..</Text>
      </SafeAreaView>
    )
  }

  return (
    <ScrollView style={styles.scrollview}>
      <Text style={styles.title}>{ship.name}</Text>
      <Text style={styles.subTitle}>Model:{ship.model}</Text>
      <Image source={{uri: ship.image}} 
      style={{width:"100%" , height: 400}}/>
      <Text style={styles.itemTitle}>Ship Information:</Text>
      <Text style={styles.item}>Type: {ship.type}</Text>
      <Text style={styles.item}>Roles: {ship.roles}</Text>
      <Text style={styles.item}>Construction Year: {ship.year_built}</Text>
      <Text style={styles.item}>Home Port: {ship.home_port}</Text>
      <Text style={styles.item}>Ship ID: {ship.id}</Text>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  header: {
    marginTop: 10,
    marginBottom: 16
  },
  text:{
    textAlign: "center",
    color: "black"
  },
  button: {
    backgroundColor: "#f44336",
    color: "black",
  },
  scrollview: {
    paddingHorizontal: 10,
    paddingTop: 5,
    backgroundColor: "#000000"
  },
  title: {
    fontWeight:"900",
    fontSize: 32,
    textAlign: "center",
    color: "white"
  },
  subTitle: {
    fontSize: 20,
    textAlign: "center",
    color: "white"
  },
  item: {
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
    backgroundColor: '#e3e3e3'
  },
  itemTitle: {
    fontSize: 24,
    textAlign: "center",
    color: "white"
  }
})
