import {React,useEffect} from "react";
import { TouchableOpacity, View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { FONT, SIZES, COLORS } from "../globals/constants/theme"
import img1 from '../../assets/Images/vitaminB12.jpg';
import img2 from '../../assets/Images/herbalance.jpg';
import img3 from '../../assets/Images/greenTea.jpg';
import img4 from '../../assets/Images/vitaminB12.jpg';

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

const Categories = ({ navigation, myCart, setMyCart }) => {

  const renderGridItem = ( item ) => (
    <TouchableOpacity style={styles.card} onPress={() => { 
      navigation.navigate('categoriesListingPage', { 
        myCart,
        setMyCart,
        navigation
      }); 
     }}>
      <Text style={styles.cardName}>{item.name}</Text>
      <View style={{ marginTop: 10 }}></View>
      <Image source={item.uri} style={styles.cardImage} />
    </TouchableOpacity>
  );
  useEffect(()=>{
   
  },[myCart])
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Explore By Categories</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All{'>'}</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.cardContainer}>
      {staticImages.map((item) => (
        <View key={item.id} style={styles.gridItem}>
          {renderGridItem(item)}
        </View>
      ))}
    </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
  headerBtn: {
    fontSize: 16,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: 80, // Adjust this width to allow for space between cards
    heighxt:200,
    aspectRatio: 1, // Maintain a 1:1 aspect ratio for the cards
    marginBottom: 5,
    marginTop: 5,
    marginLeft:"1%",// Add margin for spacing between cards
    marginRight: "1%", // Add margin for spacing between cards
    backgroundColor: "#F7EDF8",
    borderRadius: 10,
    alignItems: "center",
    overflow: "hidden"
  },
  cardImage: {
    width: "50%",
    height: "50%",
    resizeMode: "contain",
  },
  cardName: {
    marginTop: 8,
    fontSize: 12,
  },
});