import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './Components/Screens/HomeScreen'
import MarketScreen from './Components/Screens/MarketScreen';
import CloudTVScreen from './Components/Screens/CloudTVScreen';

import LogoTitle from './Components/Screens/LogoTitle';
import NewsDetails from './Components/Screens/NewsDetails';

const tab = createBottomTabNavigator();
const Stack =createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <tab.Navigator>
          <tab.Screen name="News">
            {
              ()=>(
                <Stack.Navigator>
                  <Stack.Screen name="Home" options={{headerTitle: <LogoTitle />,headerStyle:{ backgroundColor:'#fff'}}} component={HomeScreen}/>
                  <Stack.Screen name="News" options={{headerTitle: 'News'}} component={NewsDetails}/>
                  <Stack.Screen name="cloudTV" options={{headerTitle: 'TV'}} component={CloudTVScreen}/>
                </Stack.Navigator>
              )
            }
             
          </tab.Screen>
          <tab.Screen name="Market">
            {
              ()=>(
                <Stack.Navigator>
                  <Stack.Screen name="Market" options={{headerTitle: <LogoTitle />,headerStyle:{ backgroundColor:'#FF002A'}}} component={MarketScreen}/>
                </Stack.Navigator>
              )
            }
             
          </tab.Screen>
          <tab.Screen name="CloudTV">
            {
              ()=>(
                <Stack.Navigator>
                  <Stack.Screen name="Cloud"options={{headerTitle: <LogoTitle />,headerStyle:{ backgroundColor:'#FF002A'}}} component={CloudTVScreen}/>
                </Stack.Navigator>
              )
            }
             
          </tab.Screen>
      </tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
