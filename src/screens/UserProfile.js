import React, { useState } from "react";
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const SECTIONS = [
    {
        header: '',
        items: [
            { id: 'Orders', icon: 'shopping-bag', label: 'Orders', type: 'select' },
            { id: 'Customer Support & FAQ', icon: 'message-circle', label: 'Customer Support & FAQ', type: 'select' },
            { id: 'Address', icon: 'map-pin', label: 'Address', type: 'select' },
            { id: 'Refunds', icon: 'refresh-cw', label: 'Refunds', type: 'select' },
            { id: 'Profile', icon: 'user', label: 'Profile', type: 'select' },
            { id: 'Suggested Products', icon: 'star', label: 'Suggested Products', type: 'select' },
            { id: 'General Info', icon: 'info', label: 'General Info', type: 'select' },
            { id: 'Notification', icon: 'bell', label: 'Notification', type: 'select' },
        ],
    },
];

export default function Example({ navigation }) {
    const [form, setForm] = useState({});

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f6f6f6', marginBottom: 10 }}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.header}></View>
                <View style={styles.viewStyle}>
                    <View style={styles.rectangle}>
                        <Text style={styles.textStyle}>Pune Ayurveda</Text>
                    </View>
                </View>
                {SECTIONS.map(({ header, items }) => (
                    <View style={styles.section} key={header}>
                        <View style={styles.sectionHeader}>
                            <Text style={styles.sectionHeaderText}>{header}</Text>
                        </View>
                        <View style={styles.sectionBody}>
                            {items.map(({ label, id, type, icon }, index) => (
                                <View
                                    style={[
                                        styles.rowWrapper,
                                        index === 0 && { borderTopWidth: 0 },
                                    ]}
                                    key={id}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            if (id === 'Orders') {
                                                navigation.navigate('Orders');
                                            }

                                            else if (id === 'Address') {
                                                navigation.navigate('Address');
                                            }

                                            else if (id === 'Notification') {
                                                navigation.navigate('Notification');
                                            }

                                        }}>
                                        <View style={styles.row}>
                                            <FeatherIcon name={icon} color="#800080" size={22} style={{ marginRight: 12 }}
                                            />
                                            <Text style={styles.rowLabel}>{label}</Text>
                                            <View style={styles.rowSpacer} />
                                            {type === 'select' && (
                                                <Text style={styles.rowValue}>{form[id]}</Text>
                                            )}
                                            {['select', 'link'].includes(type) && (
                                                <FeatherIcon
                                                    name="chevron-right"
                                                    color="#E0115F"
                                                    size={22}
                                                />
                                            )}
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            ))}
                        </View>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        paddingVertical: 24,
    },
    header: {
        paddingHorizontal: 24,
        marginBottom: 12,
    },
    title: {
        fontSize: 30,
        fontWeight: '700',
        color: '#1d1d1d',
        marginBottom: 6,
    },
    viewStyle: {
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
    },
    rectangle: {
        backgroundColor: "lightgreen",
        padding: 10,
        borderRadius: 10,
        marginLeft: 20,
        marginRight: 20,
        // marginBottom:30,
        // marginTop:10,
    },
    textStyle: {
        fontSize: 15,
        color: "black",
        textAlign: "left",
    },
    subtitle: {
        fontSize: 15,
        fontWeight: '300',
        color: '#929292'
    },
    rowWrapper: {
        paddingLeft: 24,
        borderTopWidth: 1,
        borderColor: '#e3e3e3',
        backgroundColor: '#fff'
    },
    row: {
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingRight: 24,
    },
    rowLabel: {
        fontSize: 17,
        fontWeight: '500',
        color: '#000',
    },
    rowSpacer: {
        flex: 1,
    },
    rowValue: {
        fontSize: 17,
        fontWeight: '500',
        color: '#800080',
        marginRight: 4,
    }
});



