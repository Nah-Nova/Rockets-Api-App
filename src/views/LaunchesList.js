import React, { useState, useEffect } from 'react';
import { Button, View, SafeAreaView, FlatList, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';


import { routes } from '../constants';

export const LaunchesList = ({ navigation }) => {

  const [launches, setLaunches] = useState()
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get('https://api.spacexdata.com/v4/launches')

      if (res.status === 200 && res.data) {
        setLaunches(res.data)
      }
    }
    fetchData()
  }, [])

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.itemTitle}>{item.name}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate(routes.launchesDetails, {id: item.id})}>
        <Text style={styles.text}>View Details</Text>
        </TouchableOpacity>
      </View>
    );
  };


  if (!launches) {
    return (
      <SafeAreaView>
        <Text style={{ textAlign: "center" }}>Loading..</Text>
      </SafeAreaView>
    )
  } 
  
  return (
    <SafeAreaView style={styles.scrollview}>
      <View style={styles.header}>
        <Text style={styles.title}>Launches</Text>
        <Text style={styles.subTitle}>All Launches</Text>
      </View>
      <FlatList
        data={launches}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
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
    color: "black"
  }
})

