import React, { useState, useEffect } from 'react';
import { Button, View, SafeAreaView, FlatList, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';

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
    <SafeAreaView style={{paddingHorizontal: 16}}>
      <Text>{ship.name}</Text>
    </SafeAreaView>
  );
}