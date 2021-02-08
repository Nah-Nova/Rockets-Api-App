import React, { useState, useEffect } from 'react';
import { Button, View, SafeAreaView, FlatList, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
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
    <SafeAreaView style={{paddingHorizontal: 16}}>
      <Text>{launch.name}</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  header: {
    marginTop: 80,
    marginBottom: 16
  },
  title: {
    fontWeight: '900',
    fontSize: 32
  },
  subTitle: {
    opacity: .75
  },
  item: {
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
    backgroundColor: '#e3e3e3'
  },
  itemTitle: {
    fontSize: 24
  }
})