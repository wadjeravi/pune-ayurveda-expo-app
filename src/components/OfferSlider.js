import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
//import {  colors } from '../../../constants'
import Swiper from 'react-native-swiper'


const offerSlider = () => {
    return (
        <View>
            <View style={styles.offerSlider}>
                <Swiper autoplay={true} autoplayTimeout={5} showsButtons={false}
                    dotColor="grey" activeDotColor="black"
                >
                    <View style={styles.slide}>
                        <Image source={require('../../assets/Images/slider1.jpg')} style={styles.image} />
                    </View>
                    <View style={styles.slide}>
                        <Image source={require('../../assets/Images/slider2.jpg')} style={styles.image} />
                    </View>
                    <View style={styles.slide}>
                        <Image source={require('../../assets/Images/slider3.jpg')} style={styles.image} />
                    </View>
                </Swiper>
            </View>
        </View>
    )
}
export default offerSlider

const styles = StyleSheet.create({
    offerSlider: {
        width: '90',
        height: 200,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: -40,
        // marginVertical: 10,
    },
    slide: {
        width: '100',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 300,
        height: 150,
        borderRadius: 30,
        resizeMode: 'cover',
        // padding:50,
        marginBottom: 35,
        // marginLeft:50,
        // marginRight:50,
    },

    dot: {
        backgroundColor: 'grey',
        width: 10,
        height: 10,
        borderRadius: 5,
        margin: 5,
    },
    activeDot: {
        backgroundColor: 'black',
        width: 10,
        height: 10,
        borderRadius: 5,
        margin: 5,
    },
})