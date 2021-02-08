import React, { useState, useEffect } from 'react';
import { Button, View, SafeAreaView, FlatList, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
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
      <Text>{capsule.type}</Text>
    </SafeAreaView>
  );
}