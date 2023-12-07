import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { colors } from '../globals/style';

const BottomNav = ({ myCart, navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Feather name="settings" size={30} color="black" style={styles.icon1} onPress={() => { navigation.navigate('Settings') }} />
      </View>
      <View style={styles.cartContainer}>
        {myCart.length > 0 && (
          <View style={styles.cartItemContainer}>
            <Text style={styles.cartItem}>{myCart.length}</Text>
          </View>
        )}
        <AntDesign name="shoppingcart" size={30} color="black" style={[styles.icon1, styles.cartIcon]} onPress={() => { navigation.navigate('shoppingcart') }} />
      </View>
      {/* <View>
        <FontAwesome5 name="map" size={30} color="black" style={styles.icon1} onPress={() => { navigation.navigate('Map') }} />
      </View> */}
    </View>

  );
};

export default BottomNav;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
    elevation: 30,
    height: 50,
    borderTopWidth: 0.5,
  },
  icon1: {
    color: colors.text4,
  },
  cartContainer: {
    position: 'relative', // Ensure relative positioning for the cart container
  },
  cartItemContainer: {
    position: 'absolute',
    top: -2,
    right: -2,
    backgroundColor: 'red', // Set your desired background color
    borderRadius: 50, // Set borderRadius to make it round (half of the width/height)
    width: 18, // Set your desired width
    height: 18, // Set your desired height
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2, 
  },
  cartItem: {
    color: 'white', // Set your desired text color
    fontSize: 10, // Set your desired font size
    fontWeight: 'bold',
  },
  cartIcon: {
    zIndex: 1, // Set zIndex to ensure the cart icon is behind the round
  },
});