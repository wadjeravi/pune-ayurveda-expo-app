// // import * as React from 'react';
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// // import Ionicons from 'react-native-vector-icons/Ionicons';

// // // Screens
// // // import Home from '../Screen/Home';
// // // import Detail from '../Screen/Detail';
// // // import Setting from '../Screen/Setting';

// // import Home from "../../../Screen/Home";
// // import Detail from "../../../Screen/Detail";
// // import Setting from "../../../Screen/Setting";

// // //import { BottomNav } from '../..';
// // //import Cart from './Screen/Cart';


// // //Screen names
// // const HomeName = "Home";
// // const DetailName = "Detail";
// // const SettingName = "Setting";
// // //const CartName = "Cart";

// // const Tab = createBottomTabNavigator();

// // function BottomNav() {
// //   return (
// //     <NavigationContainer>
// //       <Tab.Navigator
// //         initialRouteName={HomeName}
// //         screenOptions={({ route }) => ({
// //           tabBarIcon: ({ focused, color, size }) => {
// //             let iconName;
// //             let rn = route.name;
// //             if (rn === HomeName) {
// //               iconName = focused ? 'home' : 'home-outline';

// //             } else if (rn === DetailName) {
// //               iconName = focused ? 'list' : 'list-outline';

// //             } else if (rn === SettingName) {
// //               iconName = focused ? 'settings' : 'settings-outline';
// //             }
// //           // } else if (rn === CartName) {
// //           //   iconName = focused ? 'Cart' : 'Cart-outline';
// //           // }
// //             // You can return any component that you like here!
// //             return <Ionicons name={iconName} size={size} color={color} style={{paddingTop:4}} />;
// //           },
// //         })}
// //         tabBarOptions={{
// //           activeTintColor: 'purple',
// //           inactiveTintColor: 'LightBlack',
// //           labelStyle: { paddingBottom: 3},
// //          // style: { padding: 10, height: 70}
// //         }}>
// //         <Tab.Screen name={HomeName} component={Home} />
// //         <Tab.Screen name={DetailName} component={Detail} />
// //         <Tab.Screen name={SettingName} component={Setting} />
// //         {/* <Tab.Screen name={CartName} component={Cart} /> */}
// //       </Tab.Navigator>
// //     </NavigationContainer>
// //   );
// // }
// // export default BottomNav;

// // import { StyleSheet, Text, View } from 'react-native'
// // import React from 'react'

// // const BottomNav = () => {
// //   return (
// //     <View>
// //       <Text>BottomNav</Text>
// //     </View>
// //   )
// // }

// // export default BottomNav

// // const styles = StyleSheet.create({})

// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { AntDesign } from '@expo/vector-icons';
// import { Ionicons } from '@expo/vector-icons';
// import { colors } from '../globals/style';
// import { FontAwesome5 } from '@expo/vector-icons';
// import { Feather } from '@expo/vector-icons';
// const BottomNav = ({ navigation }) => {
//     return (
//         <View style={styles.container}>

//             {/* <View style={styles.btncon1}>
//                 <AntDesign name="home" size={30} color="black" style={styles.icon1} onPress={() => { navigation.navigate('home') }} />

//             </View> */}
//             {/* <View >
//                 <Ionicons name="setting" size={40} color="black" style={styles.icon2} onPress={() => { navigation.navigate('home') }} />
//             </View> */}

//             <View>
//                 <Feather name="settings" size={30} color="black" style={styles.icon1} onPress={() => { navigation.navigate('Settings') }} />
//             </View>
//             <View >
//                 <AntDesign name="shoppingcart" size={30} color="black" style={styles.icon1} onPress={() => { navigation.navigate('Usercart') }} />
//             </View>
//             <View >
//                 <FontAwesome5 name="map-marked-alt" size={30} color="black" style={styles.icon1} onPress={() => { navigation.navigate('Trackorders') }} />
//             </View>

//         </View>
//     )
// }

// export default BottomNav

// const styles = StyleSheet.create({
//     container: {
//         flexDirection: 'row',
//         justifyContent: 'space-evenly',
//         alignItems: 'center',
//         backgroundColor: 'white',
//         width: '100%',
//         elevation: 30,
//         // borderTopColor: colors.text1,
//         borderTopWidth: 0.5,
//         // borderTopEndRadius: 20,
//         // borderTopStartRadius: 20,
//     },
//     btncon1: {
//         alignItems: 'center',
//     },
//     btncon2: {
//         alignItems: 'center',
//         justifyContent: 'center',
//         position: 'relative',
//         top: -20,
//         backgroundColor: colors.text4,
//         width: 60,
//         height: 60,
//         borderRadius: 20,
//     },
//     icon2: {
//         color: 'white',

//     },
//     icon1: {
//         color: colors.text4,

//     }
// })

import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { colors } from '../globals/style';

const BottomNav = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Feather name="settings" size={30} color="black" style={styles.icon1} onPress={() => { navigation.navigate('Settings') }} />
      </View>
      <View>
        <AntDesign name="shoppingcart" size={30} color="black" style={styles.icon1} onPress={() => { navigation.navigate('shoppingcart') }} />
      </View>
      <View>
        <FontAwesome5 name="map" size={30} color="black" style={styles.icon1} onPress={() => { navigation.navigate('Map') }} />
      </View>
    </View>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
    elevation: 30,
    borderTopWidth: 0.5,
  },
  icon1: {
    color: colors.text4,
  },
});
