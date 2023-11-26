import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { colors } from '../globals/style';

const BottomNav = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Feather name="settings" size={30} color="black" style={styles.icon1} onPress={() => { navigation.navigate('Settings') }} />
      </View>
      <View>
        <AntDesign name="shoppingcart" size={30} color="black" style={styles.icon1} onPress={() => { navigation.navigate('shoppingcart') }} />
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
    height:50,
    borderTopWidth: 0.5,
  },
  icon1: {
    color: colors.text4,
  },
});
