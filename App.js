import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from './src/screens/HomeScreen'
import Userprofile from './src/screens/UserProfile'
import Settings from './src/screens/Settings'
import CategoriesListingPage from './src/screens/CategoriesListingPage'
import ProductDescriptionPage from './src/screens/ProductDescriptionPage'
import shoppingcart from './src/screens/shoppingcart'
//import Map from './src/screens/Map'


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen'
        screenOptions={{
          statusBarColor: 'purple',

          headerStyle: {
            backgroundColor: "purple"
          },
          headerTintColor: 'white',
          // headerTitleAlign:'center'
        }}
      >
        <Stack.Screen name="home" component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="userprofile" component={Userprofile}
          options={{
            headerShown: true,
          }}
        />
        {/* <Stack.Screen name="map" component={Map}
          options={{
            headerShown: false,
          }}
        /> */}
        <Stack.Screen name="Settings" component={Settings}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen name="shoppingcart" component={shoppingcart}
          options={{
            headerShown: true,

          }}
        />
        <Stack.Screen name="categoriesListingPage" component={CategoriesListingPage}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen name="productDescriptionPage" component={ProductDescriptionPage}
          options={{
            headerShown: true,
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

