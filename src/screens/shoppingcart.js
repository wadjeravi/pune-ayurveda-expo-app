import { StyleSheet, Text, View, ScrollView, Image, Button, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import isEqual from 'lodash/isEqual';

const Usercart = ({ route }) => {
  const { item, myCart, setMyCart } = route.params || {};

  const initialQuantity = myCart.filter(cartItem => isEqual(cartItem.item, item)).length;
  const [quantity, setQuantity] = useState(initialQuantity);

  let totalPrice = 0.0;

  for (let i = 0; i < myCart.length; i++) {
    let discountPrice = myCart[i].item.discountPrice;
    let amount = discountPrice.replace(/\$/g, '');
    totalPrice += Number(amount) * myCart[i].quantity; // Multiply by quantity
  }

  const handleAddButtonPress = (item) => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    let found = false;
    let newCart = [];
    for (let i = 0; i < myCart.length; i++) {
      if (isEqual(myCart[i].item, item) === true) {
        newCart.push({ "item": myCart[i].item, "quantity": myCart[i].quantity + 1 });
        found = true;
        break;
      } else {
        newCart.push(myCart[i]);
      }
    }
    if (found === false) {
      newCart.push({ "item": item, "quantity": 1 });
    }
    console.log(newCart);
    setMyCart(newCart);
  };

  const handleRemoveButtonPress = () => {
    if (myCart.length > 0) {
      let newCart = [];

      for (let i = 0; i < myCart.length; i++) {
        let condition = isEqual(myCart[i].item, item);
        if (condition === true && myCart[i].quantity > 1)
          newCart.push({ "item": item, "quantity": myCart[i].quantity - 1 });
        else if (condition === false)
          newCart.push(myCart[i]);
      }
      console.log(newCart);
      setQuantity((prevQuantity) => prevQuantity - 1);
      setMyCart(newCart);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} vertical>
        {myCart.map((item, index) => (
          <View key={index} style={styles.cartItemContainer}>
            <Image
              source={item.item.uri}
              style={styles.image}
            />
            <View style={styles.itemDetailsContainer}>
              <Text style={styles.itemName}>{item.item.name}</Text>

              <Text style={styles.itemPrice}>{item.item.discountPrice}</Text>

              <View style={{ marginTop: 100 }}></View>

              <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={handleRemoveButtonPress}>
                  <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantityText}>{item.quantity}</Text>
                <TouchableOpacity onPress={() => { handleAddButtonPress(item.item) }}>
                  <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.totalView}>
        <Text style={styles.totalLabel}>
          To Pay
        </Text>
        <Text style={styles.totalPrice}>
          ${totalPrice.toFixed(2)}
        </Text>
        <Button
          title="Continue to Payment"
          onPress={() => {
            // Handle the navigation or action for continuing to payment
            console.log("Continue to Payment pressed");
          }}
        />
      </View>
    </View>
  );
};

export default Usercart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  cartItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    marginLeft: 15,
  },
  image: {
    width: 150,
    height: 200,
  },
  itemDetailsContainer: {
    marginLeft: 5,
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 20
  },
  buttonContainer: {
    backgroundColor: 'white',
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 4,
    flexDirection: 'row',
  },
  buttonText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 4,
  },
  quantityText: {
    fontSize: 16,
    color: 'red',
    marginHorizontal: 8,
    marginHorizontal: 4,
  },
  itemPrice: {
    marginLeft: 5,
    fontSize:20
  },
  totalView: {
    backgroundColor: 'white',
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    margin: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalLabel: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'red',
  },
  totalPrice: {
    fontSize: 16,
    color: 'red',
  },
});
