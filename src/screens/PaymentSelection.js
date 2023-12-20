import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PaymentPage = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handlePayment = (option) => {
    setSelectedOption(option);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}> Select Payment Option</Text>
      <Text style={styles.heading}> Total Amount: </Text>

      <TouchableOpacity
        style={[
          styles.paymentOption,
          selectedOption === 'cashOnDelivery' && styles.selectedOption,
        ]}
        onPress={() => handlePayment('cashOnDelivery')}
      >
        <View style={styles.selectionIndicatorContainer}>
          <View
            style={[
              styles.selectionIndicator,
              {
                backgroundColor:
                  selectedOption === 'cashOnDelivery' ? 'purple' : 'white',
              },
            ]}
          />
        </View>
        <Text>Cash on Delivery</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.paymentOption,
          selectedOption === 'payOnline' && styles.selectedOption,
        ]}
        onPress={() => handlePayment('payOnline')}
      >
        <View style={styles.selectionIndicatorContainer}>
          <View
            style={[
              styles.selectionIndicator,
              {
                backgroundColor:
                  selectedOption === 'payOnline' ? 'purple' : 'white',
              },
            ]}
          />
        </View>
        <Text>Pay Online</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.paymentButton} onPress={handlePayment}>
        <Text style={styles.paymentButtonText}>Proceed to Payment</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: 50,
    justifyContent:'Top',
  },
  heading: {
    fontSize: 20,
    marginBottom: 20,
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 280,
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: 40,
    // marginRight:130,
  },
  selectedOption: {
    backgroundColor: 'lightgrey',
  },
  selectionIndicatorContainer: {
    position: 'absolute',
    left: -30,
  },
  selectionIndicator: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'purple',
  },
  paymentButton: {
    marginTop: 20,
    backgroundColor: '#448EE4',
    padding: 10,
    borderRadius: 5,
    marginLeft: 20,
    marginRight: 20,
  },
  paymentButtonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default PaymentPage;
