import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from './src/screens/HomeScreen'
import Userprofile from './src/screens/UserProfile'
import Settings from './src/screens/Settings'
import shoppingcart from './src/screens/shoppingcart'
import Map from './src/screens/Map'


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen'>
        <Stack.Screen name="home" component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="userprofile" component={Userprofile}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="map" component={Map}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Settings" component={Settings}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="shoppingcart" component={shoppingcart}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
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
