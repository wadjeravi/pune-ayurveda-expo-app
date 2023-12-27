import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import isEqual from 'lodash/isEqual';

const Usercart = ({ route }) => {
  const { item, myCart, setMyCart} = route.params || {};

  const initialQuantity = myCart.filter(cartItem => isEqual(cartItem.item, item)).length;
  const [quantity, setQuantity] = useState(initialQuantity);

  let totalPrice = 0.0
  let discountPrice = 0.0
  for(let i=0;i<myCart.length;i++){
    discountPrice = myCart[i].item.discountPrice
    let amount = discountPrice.replace(/\$/g, '');
    totalPrice += (Number(amount) * myCart[i].quantity)
  }

  const handleAddButtonPress = (item) => {
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

  return (
    <View>
      <ScrollView vertical>
        {myCart.map((item, index) => (
          <View key={index} style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20, marginLeft: 15 }}>
            <Image
              source={item.item.uri}
              style={{ width: 200, height: 200 }}
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontWeight: 'bold' }}>{item.item.name}</Text>
            </View>

            {/* button */}
            <View style={styles.button}>
              <TouchableOpacity onPress={handleRemoveButtonPress}>
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{item.quantity}</Text>
              <TouchableOpacity onPress={()=>{handleAddButtonPress(item.item)}}>
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            </View>


            <View style={{ marginLeft: 10 }}>
              <Text>{totalPrice}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

    </View>
  )
}

export default Usercart

const styles = StyleSheet.create({
  image: {
    marginLeft: 5,
    width: "100%", // Adjust the width as needed
    height: 80, // Adjust the height as needed
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
})