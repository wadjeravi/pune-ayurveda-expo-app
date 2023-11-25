import React from 'react'
import { View, Text, TouchableOpacity, Image ,StyleSheet} from 'react-native'

const CategoriesListingPageCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}>
      <Image source={item.uri}
        style={{
          width: "100%",
          height: 100,
        }}
        resizeMode="contain" />
      <View style={{ marginBottom: 2 }}>
        {/* Add space between add button view and image */}
      </View>
      <View style={styles.discountView}>
        <Text style={styles.discountText}>{item.discount}</Text>
      </View>
      <View style={{ alignItems: 'left', justifyContent: 'center' }}>
        <Text style={styles.nameText}>{item.name}</Text>
        <Text style={styles.descriptionText}>{item.description}</Text>
      </View>
      <View style={{ marginBottom: 30 }}>
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

export default CategoriesListingPageCard

const styles = StyleSheet.create({
    container: (selectedJob, item) => ({
      flex: 1,
      backgroundColor: 'white',
      borderRadius: 8,
      justifyContent: 'space-between',
      margin: 2, // Add margin to separate cards
      padding: 16,
      alignItems: 'center', // Center content horizontally
      elevation: 5,
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 3,
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
      padding: 4, 
      width:50,
      height:30
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
      color:'grey',
      textDecorationLine:'line-through',
      fontSize:10,
    },
    discountPrices:{
      color:'black',
      fontSize:12,
    },
    addButtonText: {
      color: 'red', 
      fontWeight:'bold',
      fontSize:12
    },
    discountView: {
      backgroundColor: 'purple',
      padding: 2,
      borderTopLeftRadius: 8,
      borderBottomRightRadius:10,
      alignItems: 'center', 
      justifyContent: 'center', 
      position: 'absolute',
      top: 0, 
      left: 0,
    },
    discountText: {
      color: 'white',
      fontSize:12,
    },
    nameText: {
      fontSize: 12, // Adjust the font size for the name
    },
    descriptionText: {
      fontSize: 12, // Adjust the font size for the description
    },
  });