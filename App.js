import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from './src/screens/HomeScreen'
import Userprofile from './src/screens/UserProfile'
import Settings from './src/screens/Settings'
import CategoriesListingPage from './src/screens/CategoriesListingPage'
import shoppingcart from './src/screens/shoppingcart'
import Address from './src/screens/Address'
import Orders from './src/screens/Orders'
import PaymentSelection from './src/screens/PaymentSelection'
import Notification from './src/screens/Notification'


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
          // headerTitleAlign:'center',
          labelStyle: { paddingBottom: 3 },
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
        <Stack.Screen name="Address" component={Address}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen name="Orders" component={Orders}
          options={{
            headerShown: true,
          }}
        />
         <Stack.Screen name="Notification" component={Notification}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen name="PaymentSelection" component={PaymentSelection}
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