import React, { useState, useEffect } from 'react';
import { Button, View, SafeAreaView, FlatList, Text, StyleSheet, Image } from 'react-native';
import axios from 'axios';
import 'fontsource-roboto';

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
      <Text>Launch Name: {launch.name}</Text>
      <Text>Flight Number: {launch.flight_number}</Text>
      <Text>Rocket id: {launch.rocket}</Text>
      <Text>Launch Date Local: {launch.date_local}</Text>
      <Text>Launch Date UTC: {launch.date_utc}</Text>
      <Image source={{uri: launch.links.patch.large}} 
      style={{width:"100%" , height: 400}}/>
      <Text>Launch Details: {launch.details}</Text>
    </SafeAreaView>
  );
}
