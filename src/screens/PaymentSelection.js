import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PaymentPage = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handlePayment = (option) => {
    setSelectedOption(option);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>Select Payment Option</Text>
        <Text style={styles.heading}>Total Amount:</Text>

        <View style={styles.optionContainer}>
          <TouchableOpacity
            style={[
              styles.paymentOption,
              selectedOption === 'cashOnDelivery' && styles.selectedOption,
              selectedOption === 'cashOnDelivery' && styles.elevatedOption,
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
        </View>

        <View style={styles.optionContainer}>
          <TouchableOpacity
            style={[
              styles.paymentOption,
              selectedOption === 'payOnline' && styles.selectedOption,
              selectedOption === 'payOnline' && styles.elevatedOption,
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
        </View>

        <TouchableOpacity
          style={styles.paymentButton}
          onPress={handlePayment}
        >
          <Text style={styles.paymentButtonText}>Proceed to Payment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 50,
    justifyContent: 'Top',
    padding: 20,
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
    marginLeft: 10,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginTop:30,
    marginLeft:10,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 12,
  },
  selectedOption: {
    backgroundColor: 'lightgrey',
  },
  selectionIndicatorContainer: {
    position: 'absolute',
    left: -50,
  },
  selectionIndicator: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'purple',
  },
  elevatedOption: {
    elevation: 4,
  },
  paymentButton: {
    marginTop: 10,
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
