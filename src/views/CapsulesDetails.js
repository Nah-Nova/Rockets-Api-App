import React, { useState, useEffect } from 'react';
import { Button, View, SafeAreaView, FlatList, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';


export const CapsulesDetails = ({ route, navigation }) => {
  const {id} = route.params
  const [capsule, setCapsule] = useState()

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`https://api.spacexdata.com/v4/capsules/${id}`)

      if (res.status === 200 && res.data) {
        setCapsule(res.data)
      }
    }
    fetchData()
  }, [])

  if (!capsule) {
    return (
      <SafeAreaView>
        <Text style={{ textAlign: "center" }}>Loading..</Text>
      </SafeAreaView>
    )
  }

  return (
    <ScrollView style={styles.scrollview}>
      <Text style={styles.title}>Name: {capsule.type}</Text>
      <Text style={styles.itemTitle}>Capsule Information:</Text>
      <Text style={styles.item}>Serial Number:{capsule.serial}</Text>
      <Text style={styles.item}>Status:{capsule.status}</Text>
      <Text style={styles.item}>Reused:{capsule.reuse_count}</Text>
      <Text style={styles.item}>Water Landings:{capsule.water_landings}</Text>
      <Text style={styles.item}>Last Update:{capsule.last_update}</Text>
      <Text style={styles.item}>Launches: {capsule.launches}</Text>
      <Text style={styles.item}>Id: {capsule.id}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 10,
    marginBottom: 16,
    color: "white"
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
