import React, { useState, useEffect } from 'react';
import { Button, View, SafeAreaView, FlatList, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';

export const CapsulesList = ({ navigation }) => {

  const [capsules, setCapsules] = useState()
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get('https://api.spacexdata.com/v4/capsules')

      if (res.status === 200 && res.data) {
        setCapsules(res.data)
      }
    }
    fetchData()
  }, [])

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.itemTitle}>{item.type}</Text>
        <Button style={styles.button}
        title="View Details"
        onPress={(navigate) => navigate('CapsulesDetails')}/>
      </View>
    );
  };


  if (!capsules) {
    return (
      <SafeAreaView>
        <Text style={{ textAlign: "center" }}>Loading..</Text>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={{paddingHorizontal: 16}}>
      <View style={styles.header}>
        <Text style={styles.title}>Capsules</Text>
        <Text style={styles.subTitle}>All Capsules</Text>
      </View>
      <FlatList
        data={capsules}
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
  },

})
