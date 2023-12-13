import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image ,FlatList  } from 'react-native';
import img1 from '../../assets/Images/vitaminB12.jpg';
import img2 from '../../assets/Images/herbalance.jpg';
import img3 from '../../assets/Images/greenTea.jpg';
import img4 from '../../assets/Images/vitaminB12.jpg';
import CategoriesListingPageCard from '../cards/CategoriesListingPageCard';


const staticImages = [
  { id: '1', uri: img1, originalPrice: '$100', discountPrice: '$50', name: 'VitaminB12', description: '30 capsules', discount: "50% Off" },
  { id: '2', uri: img2, originalPrice: '$200', discountPrice: '$100', name: 'Herbalance', description: '50g', discount: "50% Off" },
  { id: '3', uri: img3, originalPrice: '$300', discountPrice: '$150', name: 'GreenTea', description: '80g', discount: "50% Off" },
  { id: '4', uri: img4, originalPrice: '$400', discountPrice: '$200', name: 'VitaminB12', description: '30 capsules', discount: "50% Off" },
  { id: '5', uri: img1, originalPrice: '$100', discountPrice: '$50', name: 'VitaminB12', description: '30 capsules', discount: "50% Off" },
  { id: '6', uri: img2, originalPrice: '$200', discountPrice: '$100', name: 'Herbalance', description: '50g', discount: "50% Off" },
  { id: '7', uri: img3, originalPrice: '$300', discountPrice: '$150', name: 'GreenTea', description: '80g', discount: "50% Off" },
  { id: '8', uri: img4, originalPrice: '$400', discountPrice: '$200', name: 'VitaminB12', description: '30 capsules', discount: "50% Off" },
  { id: '9', uri: img1, originalPrice: '$100', discountPrice: '$50', name: 'VitaminB12', description: '30 capsules', discount: "50% Off" },
  { id: '10', uri: img2, originalPrice: '$200', discountPrice: '$100', name: 'Herbalance', description: '50g', discount: "50% Off" },
  { id: '11', uri: img3, originalPrice: '$300', discountPrice: '$150', name: 'GreenTea', description: '80g', discount: "50% Off" },
  { id: '12', uri: img4, originalPrice: '$400', discountPrice: '$200', name: 'VitaminB12', description: '30 capsules', discount: "50% Off" },
];

const CategoriesListingPage = ({route }) => {
  const { myCart, setMyCart } = route.params || {};

  console.log("myCart in CategoriesListingPage:", myCart);
  return (
    <View style={styles.container}>
      <View style={styles.leftSide}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {staticImages.map((item) => (
          <TouchableOpacity key={item.id} style={styles.imageContainer}>
            <Image source={item.uri} style={styles.image} />
            <View style={{ marginTop: 10 }}></View>
            <Text style={styles.imageName}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      </View>
      
      <View style={styles.rightSide}>
        {/* 2x2 Grid on the right side */}
        <FlatList
        data={staticImages}
        renderItem={({ item }) => (
          <CategoriesListingPageCard
            item={item}
            myCart={myCart}
            setMyCart={setMyCart}
          />
        )}
        keyExtractor={item => item?.id}
        numColumns={2}
        contentContainerStyle={{ columnGap: 8 }}
        showsVerticalScrollIndicator={false}
      />
      </View>
    </View>
  );
}

export default CategoriesListingPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  leftSide: {
    flex: 2,
    backgroundColor: 'white',
    padding: 5,
  },
  rightSide: {
    flex: 8,
    backgroundColor: '#e0e0e0',
    padding: 5,
  },
  scrollView: {
    flex: 1, // Make the ScrollView take up the full height of the left side
  },
  image: {
    marginLeft:5,
    width: "100%", // Adjust the width as needed
    height: 80, // Adjust the height as needed
    },
  imageContainer: {
    margin: 5,
    alignItems:'center'
  },
  imageName: {
    marginLeft:2,
    fontSize: 12, // Adjust the font size as needed
    marginTop: 5, // Adjust the margin top as needed
  },
});