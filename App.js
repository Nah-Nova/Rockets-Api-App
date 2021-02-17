//react import
import  React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, StatusBar } from 'react-native';
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import 'react-native-gesture-handler';
//redux imports
import {Provider, useSelector, useDispatch} from 'react-redux'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
//my imports
import { routes as routeNames } from './src/constants'
import { CapsulesList, LaunchesList, RocketsList, ShipsList, CapsulesDetails, LaunchesDetails, RocketsDetails, ShipsDetails, HomeScreen, Theme } from './src/views';
import { createStackNavigator } from '@react-navigation/stack';
import DeprecatedEdgeInsetsPropType from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedEdgeInsetsPropType';
import themeReducer from './src/redux/themeReducer'
import { lightTheme, darkTheme } from "./src/views/Theme";


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
DeprecatedEdgeInsetsPropType


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

// Define every view available in the "Home" tab
const HomeStack= createStackNavigator()
const homeRoutes = [{
  name: routeNames.homeScreen,
  component: HomeScreen,
}, ...routes]

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    {homeRoutes.map((route, i) => (
      <HomeStack.Screen key={i} {...route}/>
    ))}
  </HomeStack.Navigator>
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

const store = createStore(combineReducers({ themeReducer }), applyMiddleware(thunk));

// Configure the tabs and call the sub navigators
const Tab = createBottomTabNavigator();
const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Tab.Navigator 
        tabBarOptions={{
          activeTintColor: 'red',
          inactiveTintColor: 'white',
        }}
      >
        <Tab.Screen 
          name='Capsules' 
          component={CapsulesStackScreen} 
          options={{
          tabBarLabel: 'Capsules',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="battery" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen 
          name='Rockets' 
          component={RocketsStackScreen}
          options={{
            tabBarLabel: 'Rockets',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="rocket-outline" color={color} size={26} />
              ),
            }}
        />
        <Tab.Screen 
          name='Home' 
          component={HomeStackScreen} 
          options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-outline" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen 
          name='Launches' 
          component={LaunchesStackScreen}
          options={{
            tabBarLabel: 'Launches',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="rocket-launch-outline" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen 
          name='Ships' 
          component={ShipsStackScreen}  
          options={{
          tabBarLabel: 'Ships',
          tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="ship-wheel" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  </Provider>
)
export default App 
