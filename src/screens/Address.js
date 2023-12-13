// //FINAL code

// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
// } from 'react-native';
// //import MapScreen from '../screens/MapScreen';

// const CheckoutScreen = () => {
//   const [address1, setAddress1] = useState('');
//   const [address2, setAddress2] = useState('');
//   const [mobileNumber1, setMobileNumber1] = useState('');
//   const [mobileNumber2, setMobileNumber2] = useState('');
//   const [selectedAddress, setSelectedAddress] = useState(1);

//   const handleCheckout = () => {
//     console.log('Selected Address:', selectedAddress);
//     console.log('Address 1:', address1);
//     console.log('Address 2:', address2);
//     console.log('Mobile Number 1:', mobileNumber1);
//     console.log('Mobile Number 2:', mobileNumber2);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.optionContainer}>
//         <TouchableOpacity
//           style={[
//             styles.selectOption,
//             selectedAddress === 1 && styles.selectedOption,
//           ]}
//           onPress={() => setSelectedAddress(1)}
//         />
//         <View style={styles.inputContent}>
//           <Text style={styles.optionLabel}>Deliver at Home</Text>
//           <TextInput
//             style={styles.inputField}
//             placeholder='Enter Home Address'
//             onChangeText={(text) => setAddress1(text)}
//             value={address1}
//           />
//           <TextInput
//             style={styles.inputField}
//             placeholder='Enter Mobile Number'
//             onChangeText={(text) => setMobileNumber1(text)}
//             value={mobileNumber1}
//             keyboardType="phone-pad"
//           />
//         </View>
//       </View>
//       <View style={styles.optionContainer}>
//         <TouchableOpacity
//           style={[

//             styles.selectOption,
//             selectedAddress === 2 && styles.selectedOption,
//           ]}
//           onPress={() => setSelectedAddress(2)}
//         />
//         <View style={styles.inputContent}>
//           <Text style={styles.optionLabel}>Deliver at Work</Text>
//           <TextInput
//             style={styles.inputField}
//             placeholder='Enter Work Address'
//             onChangeText={(text) => setAddress2(text)}
//             value={address2}
//           />
//           <TextInput
//             style={styles.inputField}
//             placeholder='Enter Mobile Number'
//             onChangeText={(text) => setMobileNumber2(text)}
//             value={mobileNumber2}
//             keyboardType="phone-pad"
//           />
//         </View>
//       </View>
//       <TouchableOpacity style={styles.button} onPress={handleCheckout}>
//         <Text style={styles.buttonText}>Continue</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f4f4f4',
//     padding: 20,
//   },
//   optionContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//     borderRadius: 10,
//     backgroundColor: '#fff',
//     elevation: 3,
//     padding: 15,
//   },
//   selectOption: {
//     width: 20,
//     height: 20,
//     borderRadius: 10,
//     borderWidth: 2,
//     borderColor: 'purple',
//     marginRight: 10,
//   },
//   selectedOption: {
//     backgroundColor: 'purple',
//   },
//   inputContent: {
//     flex: 1,
//   },
//   optionLabel: {
//     fontSize: 18,
//     marginBottom: 5,
//     fontWeight: 'bold',
//   },
//   inputField: {
//     height: 40,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 8,
//     marginBottom: 10,
//   },
//   button: {
//     backgroundColor: '#007BFF',
//     padding: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });
// export default CheckoutScreen;

/******************************************************************************************* */

// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
// import MapScreen from '../screens/MapScreen'; // Adjust the import based on your file structure
// //import * as Location from 'expo-location';

// const CheckoutScreen = () => {
//   const [address1, setAddress1] = useState('');
//   // const [address2, setAddress2] = useState('');
//   const [mobileNumber1, setMobileNumber1] = useState('');
//   // const [mobileNumber2, setMobileNumber2] = useState('');
//   const [selectedAddress, setSelectedAddress] = useState(1);

//   const handleCheckout = () => {
//     console.log('Selected Address:', selectedAddress);
//     console.log('Address 1:', address1);
//     // console.log('Address 2:', address2);
//     console.log('Mobile Number 1:', mobileNumber1);
//     // console.log('Mobile Number 2:', mobileNumber2);
//   };

//   return (
//     <View style={styles.container}>
//       {/* Include the MapScreen component within a View */}
//       <View style={styles.mapContainer}>
//         {/* <View> */}
//           <MapScreen />
//         {/* </View> */}
//       </View>

//       {/* Rest of the CheckoutScreen content */}

//       <View style={styles.optionContainer}>
//         <ScrollView>
//           <TouchableOpacity
//             style={[
//               styles.selectOption,
//               selectedAddress === 1 && styles.selectedOption,
//             ]}
//             onPress={() => setSelectedAddress(1)}
//           />
//           <View style={styles.inputContent}>
//             <Text style={styles.optionLabel}>Deliver at Home</Text>
//             <TextInput
//               style={styles.inputField}
//               placeholder='Enter Home Address'
//               onChangeText={(text) => setAddress1(text)}
//               value={address1}
//             />
//             <TextInput
//               style={styles.inputField}
//               placeholder='Enter Mobile Number'
//               onChangeText={(text) => setMobileNumber1(text)}
//               value={mobileNumber1}
//               keyboardType="phone-pad"
//             />
//           </View>
//         </ScrollView>
//       </View>

//       {/* <TouchableOpacity
//           style={[
//             styles.selectOption,
//             selectedAddress === 2 && styles.selectedOption,
//           ]}
//           onPress={() => setSelectedAddress(2)}
//         /> */}
//       {/* <View style={styles.inputContent}>
//           <Text style={styles.optionLabel}>Deliver at Work</Text>
//           <TextInput
//             style={styles.i  {/* <View style={styles.optionContainer}>nputField}
//             placeholder='Enter Work Address'
//             onChangeText={(text) => setAddress2(text)}
//             value={address2}
//           />
//           <TextInput
//             style={styles.inputField}
//             placeholder='Enter Mobile Number'
//             onChangeText={(text) => setMobileNumber2(text)}
//             value={mobileNumber2}
//             keyboardType="phone-pad"
//           />
//         </View> */}
//       {/* </View> */}
//       <TouchableOpacity style={styles.button} onPress={handleCheckout}>
//         <Text style={styles.buttonText}>Continue</Text>
//       </TouchableOpacity>

//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f4f4f4',
//     padding: 20,
//   },
//   mapContainer: {
//     // aspectRatio: 2, // Set to 1 to make it a square
//     flex: 1,
//     // marginBottom: 10, // Adjusted marginBottom
//     // top: -260,
//     bottom: 80,
//     // left:50,
//     // right:50,
//   },
//   optionContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 80,
//     marginBottom: 20,
//     borderRadius: 10,
//     backgroundColor: '#fff',
//     elevation: 3,
//     padding: 15,

//   },
//   // selectOption: {
//   //   width: 20,
//   //   height: 20,
//   //   borderRadius: 10,
//   //   borderWidth: 2,
//   //   borderColor: 'purple',
//   //   marginRight: 10,
//   // },
//   // selectedOption: {
//   //   backgroundColor: 'purple',
//   // },
//   // inputContent: {
//   //   flex: 1,
//   // },
//   // optionLabel: {
//   //   fontSize: 18,
//   //   marginBottom: 5,
//   //   fontWeight: 'bold',
//   // },
//   inputField: {
//     height: 40,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 8,
//     marginBottom: 10,
//   },
//   button: {
//     backgroundColor: '#007BFF',
//     padding: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });
// export default CheckoutScreen;

/*************************************************************************************** */


// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import MapScreen from '../screens/MapScreen'; // Adjust the import based on your file structure

// const CheckoutScreen = () => {
//   const [address1, setAddress1] = useState('');
//   // const [address2, setAddress2] = useState('');
//   const [mobileNumber1, setMobileNumber1] = useState('');
//   // const [mobileNumber2, setMobileNumber2] = useState('');
//   const [selectedAddress, setSelectedAddress] = useState(1);

//   const handleCheckout = () => {
//     console.log('Selected Address:', selectedAddress);
//     console.log('Address 1:', address1);
//     // console.log('Address 2:', address2);
//     console.log('Mobile Number 1:', mobileNumber1);
//     // console.log('Mobile Number 2:', mobileNumber2);
//   };

//   return (
//     <View style={styles.container}>
//       {/* Include the MapScreen component within a View */}
//       <View style={styles.mapContainer}>
//         <MapScreen />
//       </View>

//       {/* Rest of the CheckoutScreen content */}
//       <View style={styles.optionContainer}>
//         <TouchableOpacity
//           style={[
//             styles.selectOption,
//             selectedAddress === 1 && styles.selectedOption,
//           ]}
//           onPress={() => setSelectedAddress(1)}
//         />
//         <View style={styles.inputContent}>
//           <Text style={styles.optionLabel}>Deliver at Home</Text>
//           <TextInput
//             style={styles.inputField}
//             placeholder='Enter Home Address'
//             onChangeText={(text) => setAddress1(text)}
//             value={address1}
//           />
//           <TextInput
//             style={styles.inputField}
//             placeholder='Enter Mobile Number'
//             onChangeText={(text) => setMobileNumber1(text)}
//             value={mobileNumber1}
//             keyboardType="phone-pad"
//           />
//         </View>
//       </View>
//       <TouchableOpacity style={styles.button} onPress={handleCheckout}>
//         <Text style={styles.buttonText}>Continue</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f4f4f4',
//     padding: 20,
//   },
//   mapContainer: {
//     aspectRatio: 2, // Set to 1 to make it a square
//     flex: 1,
//     marginBottom: 10, // Adjusted marginBottom
//   },
//   optionContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//     borderRadius: 10,
//     backgroundColor: '#fff',
//     elevation: 3,
//     padding: 15,
//   },
//   inputContent: {
//     flex: 1,
//   },
//   optionLabel: {
//     fontSize: 18,
//     marginBottom: 5,
//     fontWeight: 'bold',
//   },
//   inputField: {
//     height: 40,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 8,
//     marginBottom: 10,
//   },
//   button: {
//     backgroundColor: '#007BFF',
//     padding: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });
// export default CheckoutScreen;

/********************************************************************************************* */

import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const App = () => {
  const [houseNumber, setHouseNumber] = useState('');
  //  const [floor, setFloor] = useState('');
  const [buildingNumber, setBuildingNumber] = useState('');
  //  const [blockNumber, setBlockNumber] = useState('');
  const [landmark, setLandmark] = useState('');
  //  const [areaName, setAreaName] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');

  const [Pincode, setPincode] = useState('');



  const handleSubmit = () => {
    // Do something with the form data, e.g., send it to a server or save it locally
    console.log(
      `House Number : ${houseNumber} \nBuilding : ${buildingNumber} \nLandmark : ${landmark} \nPhoneNumber : ${PhoneNumber} \nPincode : ${Pincode}`
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

      <Text>Building & Block No. *</Text>
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
        value={PhoneNumber}
      />

      <Text>PinCode *</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPincode}
        value={Pincode}
      />
      <Button title="Save Address" onPress={handleSubmit}  style={styles.SaveAddress} />
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
    borderColor: 'Black',
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

/********************************************************************************** */

// import React, { useState } from 'react';
// import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

// const App = () => {
//   const [houseNumber, setHouseNumber] = useState('');
//   const [buildingNumber, setBuildingNumber] = useState('');
//   const [landmark, setLandmark] = useState('');
//   const [PhoneNumber, setPhoneNumber] = useState('');
//   const [Pincode, setPincode] = useState('');

//   const handleSubmit = () => {
//     console.log(
//       `House Number : ${houseNumber} \nBuilding : ${buildingNumber} \nLandmark : ${landmark} \nPhoneNumber : ${PhoneNumber} \nPincode : ${Pincode}`
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.sectionTitle}>House No. & Floor *</Text>
//       <TextInput
//         style={styles.input}
//         onChangeText={setHouseNumber}
//         value={houseNumber}
//       />

//       <Text style={styles.sectionTitle}>Building & Block No. *</Text>
//       <TextInput
//         style={styles.input}
//         onChangeText={setBuildingNumber}
//         value={buildingNumber}
//       />

//       <Text style={styles.sectionTitle}>Landmark & Area Name (Optional)</Text>
//       <TextInput
//         style={styles.input}
//         onChangeText={setLandmark}
//         value={landmark}
//       />

//       <Text style={styles.sectionTitle}>PhoneNumber *</Text>
//       <TextInput
//         style={styles.input}
//         onChangeText={setPhoneNumber}
//         value={PhoneNumber}
//       />

//       <Text style={styles.sectionTitle}>Pincode</Text>
//       <TextInput
//         style={styles.input}
//         onChangeText={setPincode}
//         value={Pincode}
//       />

//       <Button title="Save Address" onPress={handleSubmit} style={styles.saveButton} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 10,
//     marginTop: 50,
//     backgroundColor: '#f0f0f0',
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 5,
//   },
//   input: {
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     marginTop: 10,
//     marginBottom: 10,
//     paddingLeft: 10,
//     borderRadius: 5,
//   },
//   saveButton: {
//     backgroundColor: '#007BFF',
//     padding: 10,
//     borderRadius: 5,
//     marginTop: 20,
//   },
// });

// export default App;
