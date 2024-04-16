import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const DetailTarot = ({ route }) => {
    const { card } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{card.name}</Text>
            <Image source={card.img} style={styles.image} />
            <Text style={styles.description}>{card.description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    image: {
        width: 200,
        height: 300,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
    },
});

export default DetailTarot;