import React, { useState, useEffect } from 'react';
import { Button, View, SafeAreaView, FlatList, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';

export const ShipsList = ({ navigation }) => {

  const [ships, setShips] = useState()

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get('https://api.spacexdata.com/v4/ships')

      if (res.status === 200 && res.data) {
        setShips(res.data)
      }
    }
    fetchData()
  }, [])

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.itemTitle}>{item.name}</Text>
        <Button style={styles.button}
        title="View Details"
        onPress={() => navigate('Details')}/>
      </View>
    );
  };

  if (!ships) {
    return (
      <SafeAreaView>
        <Text style={{ textAlign: "center" }}>Loading..</Text>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={{paddingHorizontal: 16}}>
      <View style={styles.header}>
        <Text style={styles.title}>Ships</Text>
        <Text style={styles.subTitle}>All ships</Text>
      </View>
      <FlatList
        data={ships}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
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