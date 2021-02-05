import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { routes as routeNames } from './src/constants'
import { CapsulesList, MissionsList, RocketsList, ShipsList } from './src/views';

const routes = [
  {
    name: routeNames.capsulesList,
    component: CapsulesList,
    tabBarLabel: 'Capsules'
  },
  {
    name: routeNames.missionsList,
    component: MissionsList,
    tabBarLabel: 'Missions'
  },
  {
    name: routeNames.rocketsList,
    component: RocketsList,
    tabBarLabel: 'Rockets'
  },
  {
    name: routeNames.shipsList,
    component: ShipsList,
    tabBarLabel: 'Ships'
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