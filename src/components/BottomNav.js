import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import { colors } from '../globals/style';

const BottomNav = ({ navigation, activeScreen }) => {
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  const bottomNavItems = [
    { icon: 'settings', label: 'Settings', screen: 'Settings' },
    { icon: 'shoppingcart', label: 'Cart', screen: 'shoppingcart' },
    // Add more items as needed
    // { icon: 'map', label: 'Map', screen: 'Map' },
  ];

  return (
    <View style={styles.container}>
      {bottomNavItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => navigateToScreen(item.screen)}
          style={[styles.item, item.screen === activeScreen ? styles.activeItem : null]}
        >
          <View style={styles.iconContainer}>
            {item.icon === 'settings' && (
              <Feather name={item.icon} size={30} color={item.screen === activeScreen ? 'black' : 'purple'} />
            )}
            {item.icon === 'shoppingcart' && (
              <AntDesign name={item.icon} size={30} color={item.screen === activeScreen ? 'black' : 'purple'} />
            )}
            {/* Add more conditions for other icons */}
          </View>
          <Text style={[styles.label, { color: item.screen === activeScreen ? 'black' : colors.text4 }]}>
            {item.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
    elevation: 30,
    height: 55,
    borderTopWidth: 0.5,
  },
  item: {
    flex: 1,
    alignItems: 'center',
  },
  activeItem: {
    backgroundColor: colors.activeBackgroundColor,
  },
  iconContainer: {
    marginTop: 8,
    backgroundColor: colors.col1,
    borderRadius: 50,
    elevation: 8,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 40,
    marginTop:2,
  },

  label: {
    fontSize: 9,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:-2,
  },
});

export default BottomNav;
