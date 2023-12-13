import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

const App = () => {
  const [houseNumber, setHouseNumber] = useState('');
  const [buildingNumber, setBuildingNumber] = useState('');
  const [landmark, setLandmark] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [pincode, setPincode] = useState('');

  const handleSubmit = () => {
    if (!houseNumber || !buildingNumber || !phoneNumber || !pincode) {
      // Check if any mandatory field is empty
      Alert.alert('Error', 'Please fill in all mandatory fields.');
      return;
    }

    console.log(
      `House Number : ${houseNumber} \nBuilding : ${buildingNumber} \nLandmark : ${landmark} \nPhoneNumber : ${phoneNumber} \nPincode : ${pincode}`
    );
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
      <Button title="Save Address" onPress={handleSubmit} style={styles.SaveAddress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
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
  SaveAddress: {
    backgroundColor: '#800080',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
});

export default App;