import  React, {useState, useEffect} from 'react';
import { Button, View, SafeAreaView, FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export const ShipsList = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }
  