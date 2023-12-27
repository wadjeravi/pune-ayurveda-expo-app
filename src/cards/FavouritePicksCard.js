import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, Button } from 'react-native'
import { FONT, SIZES, COLORS } from "../globals/constants/theme";
import isEqual from 'lodash/isEqual';



const FavouritePicksCard = ({ item, myCart, setMyCart, selectedJob, navigation }) => {
  const initialQuantity = myCart.filter(cartItem => isEqual(cartItem.item, item)).length;
  const [quantity, setQuantity] = useState(initialQuantity);
  const handleAddButtonPress = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    let found = false
    let newCart = []
    for(let i=0;i<myCart.length;i++)
    {
      if(isEqual(myCart[i].item,item)==true)
      {
        newCart.push({"item":myCart[i].item,"quantity":myCart[i].quantity+1})
        found = true
        break;
      }
      else
      {
        newCart.push(myCart[i])
      }
    }
    if(found==false)
    {
      newCart.push({"item":item,"quantity":1})
    }
    console.log(newCart)
    setMyCart(newCart);
  };

  const handleRemoveButtonPress = () => {
    if (myCart.length > 0) {
      let newCart = [];

      for (let i = 0; i < myCart.length; i++) {
        let condition = isEqual(myCart[i].item, item);
        if (condition == true && myCart[i].quantity>1)
          newCart.push({"item":item,"quantity":myCart[i].quantity-1});
        else if(condition==false)
        newCart.push(myCart[i])
      }
      console.log(newCart)
      setQuantity((prevQuantity) => prevQuantity - 1);
      setMyCart(newCart);
    }
  };
  const handleCardPress = (item) => {
    navigation.navigate('productDescriptionPage', { item, myCart,setMyCart })
  }

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
        <Text style={{ fontSize: SIZES.large }}>{item.name}</Text>
        <Text style={{ fontSize: SIZES.large }}>{item.qty}</Text>
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
      <View style={styles.addButtonContainer}>
        {quantity === 0 ? (
          <TouchableOpacity onPress={handleAddButtonPress}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Add</Text>
            </View>
          </TouchableOpacity>
        ) : (
          <View style={styles.button}>
            <TouchableOpacity onPress={handleRemoveButtonPress}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity onPress={handleAddButtonPress}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
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
  originalPriceView: {
    position: 'absolute',
    bottom: 20,
    left: 5,
  },
  discountPriceView: {
    position: 'absolute',
    bottom: 5,
    left: 5,
  },
  originalPrices: {
    color: 'grey',
    textDecorationLine: 'line-through',
    fontSize: 12
  },
  discountPrices: {
    color: 'black',
    fontSize: 15
  },
  discountView: {
    backgroundColor: 'purple',
    padding: 2,
    borderTopLeftRadius: SIZES.medium,
    borderBottomRightRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  discountText: {
    color: 'white',
  },
  addButtonContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    flexDirection: 'row',
  },
  button: {
    backgroundColor: 'white',
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 4, // Add margin to separate buttons
    flexDirection: 'row', // Ensure the text is in a row
  },
  buttonText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 4, // Add margin to separate buttons
  },
  quantityText: {
    fontSize: 16,
    color: 'red',
    marginHorizontal: 8,
    marginHorizontal: 4, // Add margin to separate buttons
  },

});