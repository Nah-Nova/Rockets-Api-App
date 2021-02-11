import  React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import { routes as routeNames } from './src/constants'
import { CapsulesList, LaunchesList, RocketsList, ShipsList, CapsulesDetails, LaunchesDetails, RocketsDetails, ShipsDetails } from './src/views';
import { createStackNavigator } from '@react-navigation/stack';

// An array containing all the shared routes. Basically all the available routes except for the the entry screen per tab
const routes = [
  {
    name: routeNames.capsulesDetails,
    component: CapsulesDetails,
  },
  {
    name: routeNames.rocketsDetails,
    component: RocketsDetails,
    
  },
  {
    name: routeNames.launchesDetails,
    component: LaunchesDetails,
  
  },
  {
    name: routeNames.shipsDetails,
    component: ShipsDetails,
  },
]

// Define every view available in the "Capsules" tab
const CapsulesStack = createStackNavigator()
const capsulesRoutes = [{
  name: routeNames.capsulesList,
  component:CapsulesList ,
}, ...routes]

const CapsulesStackScreen = () => (
  <CapsulesStack.Navigator>
    {capsulesRoutes.map((route, i) => (
      <CapsulesStack.Screen key={i} {...route}/>
    ))}
  </CapsulesStack.Navigator>
)

// Define every view available in the "Rockets" tab
const RocketsStack = createStackNavigator()
const rocketsRoutes = [{
  name: routeNames.rocketsList,
  component: RocketsList,
}, ...routes]

const RocketsStackScreen = () => (
  <RocketsStack.Navigator>
    {rocketsRoutes.map((route, i) => (
      <RocketsStack.Screen key={i} {...route}/>
    ))}
  </RocketsStack.Navigator>
)

// Define every view available in the "Launches" tab
const LaunchesStack = createStackNavigator()
const launchesRoutes = [{
  name: routeNames.launchesList,
  component: LaunchesList,
}, ...routes]

const LaunchesStackScreen = () => (
  <LaunchesStack.Navigator>
    {launchesRoutes.map((route, i) => (
      <LaunchesStack.Screen key={i} {...route}/>
    ))}
  </LaunchesStack.Navigator>
)

// Define every view available in the "Ships" tab
const ShipsStack = createStackNavigator()
const shipsRoutes = [{
  name: routeNames.shipsList,
  component: ShipsList,
}, ...routes]

const ShipsStackScreen = () => (
  <ShipsStack.Navigator>
    {shipsRoutes.map((route, i) => (
      <ShipsStack.Screen key={i} {...route}/>
    ))}
  </ShipsStack.Navigator>
)

// Configure the tabs and call the sub navigators
const Tab = createBottomTabNavigator();
const App = () => (
  <NavigationContainer theme={DarkTheme}>
    <Tab.Navigator initialRouteName="capsules.list"
        shifting={true}
        labeled={false}
        sceneAnimationEnabled={false}
        activeColor="#00aea2"
        inactiveColor="#95a5a6"
        barStyle={{ backgroundColor: '#ffff' }}
  >
      <Tab.Screen name='Capsules' component={CapsulesStackScreen}/>
      <Tab.Screen name='Rockets' component={RocketsStackScreen}/>
      <Tab.Screen name='Launches' component={LaunchesStackScreen}/>
      <Tab.Screen name='Ships' component={ShipsStackScreen}/>
    </Tab.Navigator>
  </NavigationContainer>
)

export default App 