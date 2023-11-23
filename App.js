import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from './src/screens/HomeScreen'
import Userprofile from './src/screens/UserProfile'
import Settings from './src/screens/Settings'
import shoppingcart from './src/screens/shoppingcart'
import Map from './src/screens/Map'


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen'>
        <Stack.Screen name="home" component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="userprofile" component={Userprofile}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="map" component={Map}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Settings" component={Settings}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="shoppingcart" component={shoppingcart}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

























































































// /******************************************************************************************************************** */
// // import { StatusBar } from 'expo-status-bar';
// // import React, { useState } from 'react';
// // import { Dimensions, Text, TextInput, TouchableOpacity, View, SafeAreaView} from 'react-native';


// // const WIDTH = Dimensions.get('screen').width;
// // const HEIGTH = Dimensions.get('screen').height;

// // export default function App() {
// //   const [onRegister, setonRegister] = useState(false);

// //   const [loginUsername, setLoginUsername] = useState('');
// //   const [loginpassword, setLoginpassword] = useState('');

// //   const [registerUsername, setRegisterUsername]=useState('');
// //   const [registerPassword, setRegisterPassword]=useState('');
// //   const [registerPasswordConfirm, setRegisterPasswordConfirm]=useState('');
// //   const [registerEmail, setRegistereEmail]=useState('');
// //   return (
// //     <View style={{flex:1,backgroundColor: '#3D3D3D',justifyContent:'center'}}>
// //       <StatusBar hidden/>
// //       <View style={{width: WIDTH*.35, height: WIDTH *.35,  borderRadius: WIDTH *.35,backgroundColor: '#F94E69',position:'absolute',top:WIDTH *-.1,right: WIDTH * .03}}></View>
// //       <View style={{width: WIDTH* .7, height: WIDTH *.7, backgroundColor:'#FE627C', position:'absolute', borderRadius:WIDTH *.35,top:WIDTH *-.2}}></View>
// //       <View style={{width: WIDTH* .1, height: WIDTH *.1, borderRadius:WIDTH *.05, backgroundColor:'#F94E69', position:'absolute',top:WIDTH *.4, left: WIDTH *.2}}></View>
// //       <View style={{width: WIDTH* .16, height: WIDTH *.16, borderRadius:WIDTH *.08, backgroundColor:'#F94E69', position:'absolute',top:WIDTH *.37, left: WIDTH *.35}}></View>
// //       <View style={{width: WIDTH*.3, height: WIDTH *.3, borderTopStartRadius:WIDTH *.3,borderTopEndRadius:WIDTH*.35, backgroundColor: '#F94E69',position:'absolute',bottom:0,right: WIDTH * .1}}></View>
// //       <View style={{padding:WIDTH *.05}}>
// //         <TouchableOpacity styles={{paddingVertical: WIDTH *.01, borderBottomWidth:2, borderBottomColor: onRegister ? 'rgba(255,255,255,0.2)': 'white', width: WIDTH *.25}} onPress={() => setonRegister(false)}>
// //           <Text style={{ fontSize: WIDTH * .045, color:'white'}}>Login</Text>
// //         </TouchableOpacity>
// //         <TouchableOpacity styles={{paddingVertical: WIDTH *.01, borderBottomWidth:2, borderBottomColor: onRegister ? 'rgba(255,255,255,0.2)':'white', width: WIDTH *.25 }}onPress={() => setonRegister(true)}>
// //           <Text style={{ fontSize: WIDTH * .045, color:'white'}}>Register</Text>
// //         </TouchableOpacity>
// //          </View>
// //          {!onRegister ?(
// //          <View style={{padding: WIDTH *.05, marginTop: WIDTH * .04}}>
// //           <View style={{padding: WIDTH *.01, backgroundColor:'#373737', marginBottom:WIDTH * .03}}>
// //             <Text style={{fontSize:WIDTH * .034, color:'F94E69',fontWeight:'bold' }}>Username</Text>
// //             <TextInput style={{color:'white',paddingVertical: WIDTH *.015, fontSize: WIDTH *.04, fontWeight:'bold'}} secureTextEntry={false} value={loginUsername} onChangeText={setLoginUsername}/>
// //           </View>
// //           <View style={{padding: WIDTH *.01, backgroundColor:'#373737', marginBottom:WIDTH * .03}}>
// //             <Text style={{fontSize:WIDTH * .034, color:'F94E69',fontWeight:'bold' }}>Password</Text>
// //             <TextInput style={{color:'white',paddingVertical: WIDTH *.015, fontSize: WIDTH *.04, fontWeight:'bold'}} secureTextEntry/>
// //           </View>
// //           <View style={{padding: WIDTH *.01, backgroundColor:'#373737', marginBottom:WIDTH * .03}}>
// //             <Text style={{fontSize:WIDTH * .034, color:'F94E69',fontWeight:'bold' }}>Password Confirm</Text>
// //             <TextInput style={{color:'white',paddingVertical: WIDTH *.015, fontSize: WIDTH *.04, fontWeight:'bold'}} secureTextEntry/>
// //           </View>
// //           <TouchableOpacity style={{alignSelf: 'flex-end'}}>
// //             <Text style={{fontSize:WIDTH * .034, color:'F94E69',fontWeight:'bold' }}>Forget Password</Text>
// //           </TouchableOpacity>
// //           <TouchableOpacity style={{backgroundColor:'#FE627C',paddingVertical:WIDTH * .03, marginVertical: WIDTH * .05,borderRadius:WIDTH}}>
// //             <Text style={{fontSize: WIDTH * .035, color:'white',textAlign:'center',fontWeight:'bold'}}>Login</Text>
// //           </TouchableOpacity>
// //           <View style={{flexDirection:'row',justifyContent:'centre'}} >          
// //             <Text style={{ fontSize:WIDTH *.034,color:'#F94E69',fontWeight:'bold'}}>Dont have an account??</Text>
// //           <TouchableOpacity onPress={()=> setonRegister(true)} >
// //             <Text style={{ fontSize:WIDTH *.034,color:'#F94E69',fontWeight:'bold'}}>    Create     </Text>
// //           </TouchableOpacity>
// //          </View>
// //          <SafeAreaView>
// //          </SafeAreaView>
// //            </View>
// //          ):(
// //          <View style={{padding: WIDTH *.05, marginTop: WIDTH * .04}}>
// //           <View style={{padding: WIDTH *.02, backgroundColor:'#373737', marginBottom:WIDTH * .03}}>
// //            <Text style={{fontSize:WIDTH * .034, color:'F94E69',fontWeight:'bold' }}>Email</Text>
// //            <TextInput style={{color:'white',paddingVertical: WIDTH *.015, fontSize: WIDTH *.04, fontWeight:'bold'}}  secureTextEntry={false} keyboardType='email-address'value={registerEmail} onChangeText={setRegistereEmail}/>
// //          </View>
// //          <View style={{padding: WIDTH *.01, backgroundColor:'#373737', marginBottom:WIDTH * .03}}>
// //            <Text style={{fontSize:WIDTH * .034, color:'F94E69',fontWeight:'bold' }}>Username</Text>
// //            <TextInput style={{color:'white',paddingVertical: WIDTH *.015, fontSize: WIDTH *.04, fontWeight:'bold'}} secureTextEntry={false} /> 
// //          </View>
// //          <View style={{padding: WIDTH *.01, backgroundColor:'#373737', marginBottom:WIDTH * .03}}>
// //            <Text style={{fontSize:WIDTH * .034, color:'F94E69',fontWeight:'bold' }}>Password</Text>
// //            <TextInput style={{color:'white',paddingVertical: WIDTH *.015, fontSize: WIDTH *.04, fontWeight:'bold'}} secureTextEntry />
// //          </View>
// //           <View style={{padding: WIDTH *.01, backgroundColor:'#373737', marginBottom:WIDTH * .03}}>
// //            <Text style={{fontSize:WIDTH * .034, color:'F94E69',fontWeight:'bold' }}> ConfirmPassword</Text>
// //            <TextInput style={{color:'white',paddingVertical: WIDTH *.015, fontSize: WIDTH *.04, fontWeight:'bold'}} secureTextEntry />
// //          </View>
// //          <TouchableOpacity style={{alignSelf: 'flex-end'}}>
// //            <Text style={{fontSize:WIDTH * .034, color:'F94E69',fontWeight:'bold' }}>Register</Text>
// //          </TouchableOpacity>
// //          <TouchableOpacity style={{backgroundColor:'#FE627C',paddingVertical:WIDTH * .03, marginVertical: WIDTH * .05,borderRadius:WIDTH}}>
// //            <Text style={{fontSize: WIDTH * .035, color:'white',textAlign:'center',fontWeight:'bold'}}>Login</Text>
// //          </TouchableOpacity>
// //          <View style={{flexDirection:'row',justifyContent:'centre'}} >          
// //            <Text style={{ fontSize:WIDTH *.034,color:'white',fontWeight:'bold'}}>Already have an account?</Text>
// //          <TouchableOpacity onPress={()=> setonRegister(false)} >
// //             <Text style={{ fontSize:WIDTH *.034,color:'#F94E69',fontWeight:'bold'}}> Login </Text>
// //          </TouchableOpacity>
// //         </View>
// //       </View>
// //          )}
// //     </View>
// //   );
// // }