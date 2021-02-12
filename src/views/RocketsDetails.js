import React, { useState, useEffect } from 'react';
import { Button, View, SafeAreaView, FlatList, Text, StyleSheet, Image } from 'react-native';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';


export const RocketsDetails = ({ route, navigation }) => {
  const {id} = route.params
  const [rocket, setRocket] = useState()

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`https://api.spacexdata.com/v4/rockets/${id}`)

      if (res.status === 200 && res.data) {
        setRocket(res.data)
      }
    }
    fetchData()
  }, [])

  if (!rocket) {
    return (
      <SafeAreaView>
        <Text style={{ textAlign: "center" }}>Loading..</Text>
      </SafeAreaView>
    )
  }

  return (
    <ScrollView style={styles.scrollview}>
      <Text style={styles.title}>{rocket.name}</Text>
      <Image source={{uri: rocket.flickr_images[0]}} 
      style={{width:"100%" , height: 400}}/>
      <Text style={styles.itemTitle}>Rocket Information:</Text>
      <Text style={styles.item}>Description: {rocket.description}</Text>
      <Text style={styles.item}>Type: {rocket.type}</Text>
      <Text style={styles.item}>Active: {rocket.active}</Text>
      <Text style={styles.item}>Stages: {rocket.stages}</Text>
      <Text style={styles.item}>Boosters: {rocket.boosters}</Text>
      <Text style={styles.item}>Cost per launch: {rocket.cost_per_launch}</Text>
      <Text style={styles.item}>Succes Rate: {rocket.succes_rate_pct}</Text>
      <Text style={styles.item}>First Launch: {rocket.first_flight}</Text>
      <Text style={styles.item}>Country: {rocket.country}</Text>
      <Text style={styles.item}>Company: {rocket.company}</Text>
      <Text style={styles.item}>mass: {rocket.mass.kg}</Text>
      <Text style={styles.item}>height: {rocket.height.meters}</Text>
      <Text style={styles.item}>Id: {rocket.id}</Text>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  header: {
    marginTop: 10,
    marginBottom: 16
  },
  scrollview: {
    paddingTop: 16,
    backgroundColor: "#000000"
  },
  title: {
    fontWeight:"900",
    fontSize: 32,
    textAlign: "center",
    color: "white",
    borderColor: 'red',
    borderWidth: 3
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
    color: "white",
    borderColor: 'red',
    borderWidth: 3
  }
})