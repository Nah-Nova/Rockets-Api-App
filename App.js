import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { routes as routeNames } from './src/constants'
import { CapsulesList, MissionsList, RocketsList, ShipsList } from './src/views';

import Ionicons from 'react-native-vector-icons/Ionicons';

const routes = [
  {
    name: routeNames.capsulesList,
    component: CapsulesList,
  },
  {
    name: routeNames.rocketsList,
    component: RocketsList,
    
  },
  {
    name: routeNames.missionsList,
    component: MissionsList,
  
  },
  {
    name: routeNames.shipsList,
    component: ShipsList,
  },
]

const Tab = createBottomTabNavigator();

const App = () => (
  <NavigationContainer>
    <Tab.Navigator>
      {routes.map((route, i) => <Tab.Screen key={i} {...route} />)}
    </Tab.Navigator>
  </NavigationContainer>
)

export default App  