import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import isEqual from 'lodash/isEqual';

const ProductDescriptionPage = ({ route }) => {
    const { item, myCart, setMyCart } = route.params;
    const initialQuantity = myCart.filter(cartItem => isEqual(cartItem, item)).length;
    const [quantity, setQuantity] = useState(initialQuantity);
    const handleAddButtonPress = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
        setMyCart((prevCart) => [...prevCart, item]);
    };
    const handleRemoveButtonPress = () => {
        if (myCart.length > 0) {
            let newCart = [];
            let found = false;
            for (let i = 0; i < myCart.length; i++) {
                let condition = isEqual(myCart[i], item);
                if (condition == false || found)
                    newCart.push(myCart[i]);
                else
                    found = true;
            }
            console.log(newCart);
            setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 0)); // Ensure quantity doesn't go below 0
            setMyCart(newCart);
        }
    };

    return (
        <View style={styles.container}>
            {/* Image Section */}
            <View style={styles.imageContainer}>
                <Image
                    source={item.uri}
                    style={styles.image}
                    resizeMode='contain'
                />
            </View>
            <View style={styles.detailsContainer}>
                <Text style={styles.productName}>{item.name}</Text>
                <View style={styles.descriptionContainer}>
                    <View style={styles.priceContainer}>
                        <Text>{`Price: ${item.originalPrice}`}</Text>
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
                </View>
                <View>
                    <Text style={{fontSize:20, color:'purple',marginTop:20}}>Product Information</Text>
                </View>
                <ScrollView>
                    <Text>{`Original Price: ${item.originalPrice}`}</Text>
                    <Text>{`Discount Price: ${item.discountPrice}`}</Text>
                    <Text>{`Net Qty: ${item.qty}`}</Text>
                    <Text>{`Discount: ${item.discount}`}</Text>
                    <Text style={{fontSize:15,marginTop:20}}>{item.description}</Text>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: 200,
        width: 300,
    },
    detailsContainer: {
        flex: 1,
        padding: 20,
    },
    productName: {
        fontSize: 20,
        marginTop: 20,
    },
    descriptionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
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

export default ProductDescriptionPage;
