import { StyleSheet, Text, View, StatusBar, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';
import HomeHeadNav from '../components/HomeHeadNav';
import OfferSlider from '../components/OfferSlider';
import BottomNav from '../components/BottomNav';
import Categories from '../components/Categories';
import FavouritePicks from '../components/Favouritepicks';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../globals/style';


const HomeScreen = ({ navigation }) => {

  const [myCart, setMyCart] = useState([]);

  return (
    <View style={styles.container}>

      <StatusBar />
      <HomeHeadNav navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.searchbox}>
          <AntDesign name="search1" size={24} color="black" style={
            styles.searchicon
          } />
          <TextInput style={styles.input} placeholder="Search for over 5000 products"
          //  onChangeText={(e) => {
          //   setSearch(e)
          // }} 
          />
        </View>
        <OfferSlider />
        <FavouritePicks myCart={myCart} setMyCart={setMyCart} />
        <Categories navigation={navigation} myCart={myCart} setMyCart={setMyCart} />
      </ScrollView>
      <View>
        <BottomNav myCart={myCart} navigation={navigation} />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    // marginTop: 50,
    flex: 1,
    backgroundColor: colors.col1,
    alignItems: 'center',
    width: '100%',
    height: '80%',
  },
  searchbox: {
    flexDirection: 'row',
    width: '90%',
    backgroundColor: colors.col1,
    borderRadius: 20,
    alignItems: 'center',
    padding: 10,
    margin: 20,
    elevation: 10,
  },
  input: {
    marginLeft: 10,
    width: '90%',
    fontSize: 15,
    // color: colors.text1,
  },
  bottomnav: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: colors.col1,
    zIndex: 20,
    height: 50,
    //marginTop:50,
  }
});