import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { FONT, SIZES, COLORS } from "../globals/constants/theme";

const FavouritePicksCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}>
      <Image source={item.uri}
        style={{
          width: 200,
          height: 200,
        }}
        resizeMode="contain" />
      <View style={{ marginBottom: 20 }}>
        {/* Add space between add button view and image */}
      </View>
      <View style={styles.discountView}>
        <Text style={styles.discountText}>{item.discount}</Text>
      </View>
      <View style={{ alignItems: 'left', justifyContent: 'center' }}>
        <Text style={{fontSize:SIZES.large}}>{item.name}</Text>
        <Text style={{fontSize:SIZES.large}}>{item.description}</Text>
      </View>
      <View style={{ marginBottom: 20 }}>
        {/* Add space between name view and addbutton */}
      </View>
      <View style={styles.originalPriceView}>
        <Text style={styles.originalPrices}>{item.originalPrice}</Text>
      </View>
      <View style={styles.discountPriceView}>
        <Text style={styles.discountPrices}>{item.discountPrice}</Text>
      </View>
      <TouchableOpacity style={styles.addButton} onPress={() => handleImagePress(item)}>
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

export default FavouritePicksCard


const styles = StyleSheet.create({
  container: (selectedJob, item) => ({
    width: 250,
    padding: SIZES.xLarge,
    backgroundColor: 'white',
    borderRadius: SIZES.medium,
    justifyContent: "space-between",
    elevation: 5, // Add elevation for shadow
    shadowColor: 'black', // Color of the shadow
    shadowOffset: { width: 0, height: 2 }, // Offset of the shadow
    shadowOpacity: 0.3, // Opacity of the shadow
    shadowRadius: 3, // Radius of the shadow
  }),
  addButton: {
    position: 'absolute',
    justifyContent:"center",
    alignItems:"center",
    bottom: 5,
    right: 5,
    borderRadius:8,
    borderColor:'red',
    borderWidth:1,
    backgroundColor: 'white', 
    padding: 10, 
    width:80,
    height:40
  },
  originalPriceView:{
    position: 'absolute',
    bottom: 20,
    left: 5,
  },
  discountPriceView:{
    position: 'absolute',
    bottom: 5,
    left: 5,
  },
  originalPrices:{
    color:'black',
    textDecorationLine:'line-through'
  },
  discountPrices:{
    color:'black',
  },
  addButtonText: {
    color: 'red', 
    fontWeight:'bold',
    fontSize:15
  },
  discountView: {
    backgroundColor: 'purple',
    padding: 2,
    borderTopLeftRadius: SIZES.medium,
    borderBottomRightRadius:10,
    alignItems: 'center', 
    justifyContent: 'center', 
    position: 'absolute',
    top: 0, 
    left: 0,
  },
  discountText: {
    color: 'white',
  },
});

