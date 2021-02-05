import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { routes as routeNames } from './src/constants'
import { CapsulesList, MissionsList, RocketsList, ShipsList } from './src/views';

const routes = {
  [routeNames.capsulesList]: CapsulesList,
  [routeNames.missionsList]: MissionsList,
  [routeNames.rocketsList]: RocketsList,
  [routeNames.shipsList]: ShipsList,
}

const Tab = createBottomTabNavigator();

const App = () => (
  <NavigationContainer>
    <Tab.Navigator>
      {Object.keys(routes).map((name, i) => (
        <Tab.Screen
          key={i}
          name={name}
          component={routes[name]}
        />
      ))}
    </Tab.Navigator>
  </NavigationContainer>
)

export default App  