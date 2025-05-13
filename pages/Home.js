import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Home() {
    return (
        <View style={styles.container}>
            <Header />

            <View style={styles.buttons}>
                
                <View style={styles.block}>
                <Text style={styles.title}>CW</Text>
                </View>

                <TouchableOpacity style={styles.gearButton}>
                    <FontAwesome name="gear" size={24} color="black" />
                </TouchableOpacity>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
    },
    block: {
        backgroundColor: 'red',
        width: 30,
        height: 30,
        marginLeft: 20,
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
        marginTop: 5,
    },
    gearButton: {
        marginRight: 20,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        alignItems: 'center',
    },
});