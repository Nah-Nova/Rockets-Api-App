import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { routes as routeNames } from './src/constants'
import { CapsulesList, LaunchesList, RocketsList, ShipsList } from './src/views';



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
    name: routeNames.launchesList,
    component: LaunchesList,
  
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