import  React, {useState, useEffect} from 'react';
import { Button, View, SafeAreaView, FlatList, Text,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';

export const ShipsList = ({ navigation }) => {

  const [ships, setShips] = useState()
    
    useEffect(async () => {
      const res = await axios.get('https://api.spacexdata.com/v3/ships')
    
      if (res.status === 200 && res.data) {
          setShips(ships)
        }
      }, [])
    
    if (!ships) {
      return (
          
        <Text style={{textAlignVertical: "center",textAlign: "center", textAlignHorizontal: "center", }}>Loading..</Text>
        )
      }

  return (
    <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }}>  
    </View>
    );
  }
  