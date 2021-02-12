import React, { useState, useEffect } from 'react';
import { Button, View, SafeAreaView, ScrollView, FlatList, Text, StyleSheet, Image } from 'react-native';
import axios from 'axios';


export const LaunchesDetails = ({ route, navigation }) => {
  const {id} = route.params
  const [launch, setLaunches] = useState()

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`https://api.spacexdata.com/v4/launches/${id}`)

      if (res.status === 200 && res.data) {
        setLaunches(res.data)
      }
    }
    fetchData()
  }, [])

  if (!launch) {
    return (
      <SafeAreaView>
        <Text style={{ textAlign: "center" }}>Loading..</Text>
      </SafeAreaView>
    )
  }

  return (
    <ScrollView style={styles.scrollview}>
      <Text style={styles.title}>{launch.name}</Text>
      <Image source={{uri: launch.links.patch.large}} 
      style={{width:"100%" , height: 400}}/>
      <Text style={styles.itemTitle}>Launch Information: </Text>
      <Text style={styles.item}>Launch Details: {launch.details}</Text>
      <Text style={styles.item}>Rocket id: {launch.rocket}</Text>
      <Text style={styles.item}>Flight Number: {launch.flight_number}</Text>
      <Text style={styles.item}>Launch Date Local: {launch.date_local}</Text>
      <Text style={styles.item}>Launch Date UTC: {launch.date_utc}</Text>
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

