import React, { useState, useEffect } from 'react';
import { Button, View, SafeAreaView, FlatList, Text, StyleSheet } from 'react-native';
import axios from 'axios';


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
    <SafeAreaView style={{paddingHorizontal: 16}}>
      <Text>Name: {capsule.type}</Text>
      <Text>Serial Number:{capsule.serial}</Text>
      <Text>Status:{capsule.status}</Text>
      <Text>Reused:{capsule.reuse_count}</Text>
      <Text>Water Landings:{capsule.water_landings}</Text>
      <Text>Last Update:{capsule.last_update}</Text>
      <Text>Launches: {capsule.launches}</Text>
      <Text>Id: {capsule.id}</Text>
    </SafeAreaView>
  );
}