import React, { useState, useEffect } from 'react';
import { Button, View, SafeAreaView, FlatList, Text, StyleSheet, Image} from 'react-native';
import axios from 'axios';
import 'fontsource-roboto';

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
      <Text>Name: {ship.name}</Text>
      <Text>Model:{ship.model}</Text>
      <Text>Type: {ship.type}</Text>
      <Text>Roles: {ship.roles}</Text>
      <Text>Construction Year: {ship.year_built}</Text>
      <Text>Home Port: {ship.home_port}</Text>
      <Text>Ship ID: {ship.id}</Text>
      <Image source={{uri: ship.image}} 
      style={{width:"100%" , height: 400}}/>
    </SafeAreaView>
  );
}