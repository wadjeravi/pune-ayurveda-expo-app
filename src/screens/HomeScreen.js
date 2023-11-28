import { StyleSheet, Text, View, StatusBar, TextInput, ScrollView } from 'react-native';
import React from 'react';
import HomeHeadNav from '../components/HomeHeadNav';
import OfferSlider from '../components/OfferSlider';
import BottomNav from '../components/BottomNav';
import Categories from '../components/Categories';
import FavouritePicks from '../components/Favouritepicks';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../globals/style';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      
        <StatusBar />
        <HomeHeadNav navigation={navigation} />
        <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.searchbox}>
          <AntDesign name="search1" size={24} color="black" style={
            styles.searchicon
          } />
          <TextInput style={styles.input} placeholder="Search for over 5000 products" onChangeText={(e) => {
            setSearch(e)
          }} />

        </View>
        <OfferSlider />
        <FavouritePicks />
        <Categories navigation={navigation}/> 

      </ScrollView>
      <View style={styles.bottomnav}>
          <BottomNav navigation={navigation} />
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
    // alignItems: 'center',
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
  bottomnav: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: colors.col1,
    zIndex: 20,
  }

});













































































































































































































































// import React, { useState } from 'react';
// import { StyleSheet, Text, View, StatusBar, TextInput } from 'react-native';
// import { AntDesign } from '@expo/vector-icons';
// import HomeHeadNav from '../components/HomeHeadNav';
// import OfferSlider from '../components/OfferSlider';

// const HomeScreen = ({ navigation }) => {
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleSearch = () => {
//     // Implement your search logic here
//     console.log('Search Query:', searchQuery);
//   };

//   return (
//     <View style={styles.container}>
//       <StatusBar />
//       <HomeHeadNav />

//       {/* Search Bar */}
//       <View style={styles.searchContainer}>
//         <TextInput
//           style={styles.searchInput}
//           placeholder="Search..."
//           value={searchQuery}
//           onChangeText={(text) => setSearchQuery(text)}
//           onSubmitEditing={handleSearch}
//         />
//         <AntDesign
//           name="search1"
//           size={24}
//           color="black"
//           onPress={handleSearch}
//         />
//       </View>

//       <Text> HomeScreen </Text>
//       <OfferSlider />
//     </View>
//   );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     margin: 10,
//     padding: 10,
//     borderWidth: 2,
//     borderColor: 'gray',
//     borderRadius: 0,
//   },
//   searchInput: {
//     flex: 1,
//     padding: 10,
//   },
// });
