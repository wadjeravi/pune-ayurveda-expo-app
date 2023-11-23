import React from "react";
import { TouchableOpacity, View, Text, Image, FlatList, StyleSheet } from "react-native";
//import { FONT, SIZES, COLORS } from "../../../constants";
import vitaminB12 from '../../assets/Images/vitaminB12.jpg';
import herbalance from '../../assets/Images/herbalance.jpg';
import greenTea from '../../assets/Images/greenTea.jpg';
//import vitaminB12 from '../../assets/Images/vitaminB12.jpg';

const staticImages = [
    // Your data array
];
const Categories = () => {
    const renderGridItem = ({ item }) => (
        <TouchableOpacity style={styles.card}>
            <Text style={styles.cardName}>{item.name}</Text>
            <View style={{marginTop: 10}}></View>
            <Image source={{ uri: item.uri }} style={styles.cardImage} />
        </TouchableOpacity>
    );
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Explore By Categories</Text>
                <TouchableOpacity>
                    <Text style={styles.headerBtn}>Show All{'>'}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.cardContainer}>
                <FlatList
                    data={staticImages}
                    renderItem={renderGridItem}
                    keyExtractor={(item) => item.id}
                    numColumns={4}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    // headerTitle: {
    //     fontSize: SIZES.large,
    //     fontFamily: FONT.medium,
    //     color: COLORS.primary,
    // },
    headerBtn: {
        fontSize: 16,
        // fontFamily: FONT.medium,
        // color: COLORS.gray,
    },
    cardContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    card: {
        width: "23%",
        aspectRatio: 1,
        marginBottom: 5,
        marginTop: 5,
        marginRight: "2%",
        backgroundColor: "#F7EDF8",
        borderRadius: 10,
        alignItems: "center",
        overflow: "hidden",
    },
    cardImage: {
        width: "50%",
        height: "50%",
        resizeMode: "contain",
    },
    cardName: {
        marginTop: 8,
        fontSize: 12,
    },
});
export default Categories;
