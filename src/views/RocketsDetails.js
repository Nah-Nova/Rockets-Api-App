import React, { useState, useEffect } from 'react';
import { Button, View, SafeAreaView, FlatList, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';

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
    <SafeAreaView style={{paddingHorizontal: 16}}>
      <Text>{rocket.name}</Text>
      <Text>height: {rocket.height.meters} meter</Text>
      <Text>mass: {rocket.mass.kg}kg</Text>
    </SafeAreaView>
  );
}