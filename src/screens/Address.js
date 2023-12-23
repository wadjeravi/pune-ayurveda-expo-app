import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BottomNav from '../components/BottomNav';
import { colors } from '../globals/style';


const Address = () => {
  const navigation = useNavigation(); // Use the useNavigation hook to get the navigation object

  const [houseNumber, setHouseNumber] = useState('');
  const [buildingNumber, setBuildingNumber] = useState('');
  const [landmark, setLandmark] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [pincode, setPincode] = useState('');

  const handleSaveAddress = () => {
    if (!houseNumber || !buildingNumber || !phoneNumber || !pincode) {
      // Check if any mandatory field is empty
      Alert.alert('Error', 'Please fill in all mandatory fields.');
      return;
    }

    console.log(
      `House Number: ${houseNumber} \nBuilding: ${buildingNumber} \nLandmark: ${landmark} \nPhoneNumber: ${phoneNumber} \nPincode: ${pincode}`
    );
  };

  const handleContinue = () => {
    navigation.navigate('PaymentSelection');
    // Add logic to handle "Continue" button click
    // console.log('Continue button clicked');
  };

  return (
    <View style={styles.container}>
      <Text>House No. & Floor *</Text>
      <TextInput
        style={styles.input}
        onChangeText={setHouseNumber}
        value={houseNumber}
      />

      <Text>Building & StreetName *</Text>
      <TextInput
        style={styles.input}
        onChangeText={setBuildingNumber}
        value={buildingNumber}
      />

      <Text>Landmark & Area Name (Optional)</Text>
      <TextInput
        style={styles.input}
        onChangeText={setLandmark}
        value={landmark}
      />

      <Text>PhoneNumber *</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPhoneNumber}
        value={phoneNumber}
      />

      <Text>PinCode *</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPincode}
        value={pincode}
      />

      {/* <Button
        title="Save Address"
        onPress={handleSaveAddress}
        style={styles.saveAddress}
      /> */}

      <Button
        title="Continue"
        onPress={handleContinue}
        style={styles.continueButton}
      />

      <View style={styles.bottomnav}>
        <BottomNav navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'Top',
    paddingHorizontal: 10,
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
  saveAddress: {
    backgroundColor: '#800080',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  continueButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginTop: 2,
    marginBottom: 20,
    // height:30,
  },
  bottomnav: {
    position: 'absolute',
    justifyContent: 'flex-end',
    bottom: 0,
    width: '110%',
    backgroundColor: colors.col1,
    Index: 20,
    height: 50,
  },
});

export default Address;