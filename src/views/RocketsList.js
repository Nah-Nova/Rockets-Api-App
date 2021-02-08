import React, { useState, useEffect } from 'react';
import { Button, View, SafeAreaView, FlatList, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import 'fontsource-roboto';

import { routes } from '../constants';

export const RocketsList = ({ navigation }) => {

  const [rockets, setRockets] = useState()

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get('https://api.spacexdata.com/v4/rockets')

      if (res.status === 200 && res.data) {
        setRockets(res.data)
      }
    }
    fetchData()
  }, [])

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.itemTitle}>{item.name}</Text>
        <Button
          style={styles.button}
          title="View Details"
          onPress={() => navigation.navigate(routes.rocketsDetails, {id: item.id})}
        />
      </View>
    );
  };

  if (!rockets) {
    return (
      <SafeAreaView>
        <Text style={{ textAlign: "center" }}>Loading..</Text>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={{paddingHorizontal: 16}}>
      <View style={styles.header}>
        <Text style={styles.title}>Rockets</Text>
        <Text style={styles.subTitle}>All Rockets</Text>
        
      </View>
      <FlatList
        data={rockets}
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
