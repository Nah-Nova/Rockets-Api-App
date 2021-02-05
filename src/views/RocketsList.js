import  React, {useState, useEffect} from 'react';
import { Button, View, SafeAreaView, FlatList, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';

export const RocketsList = ({ navigation }) => {
  
  const [rockets, setRockets] = useState()
  
   useEffect(async () => {
      const res = await axios.get('https://api.spacexdata.com/v3/rockets')
  
      if (res.status === 200 && res.data) {
        setRockets(rockets)
      }
    }, [])
  
    if (!rockets) {
      return (
        
        <Text style={{textAlignVertical: "center",textAlign: "center", textAlignHorizontal: "center", }}>Loading..</Text>
      )
    }
  
  return (
    <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
    </View>
    );
  }
  
  