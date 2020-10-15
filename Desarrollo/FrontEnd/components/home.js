import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableHighlight, Image } from 'react-native';

export default function Home(props) {
    return (
        <View
            style={styles.margenesVista}>
            <ImageBackground
                source={require('../assets/fondo.png')}
                style={styles.imagenFondoInicio}>
                <View>
                    <Image
                        style={styles.iconoinicio}
                        source={require('../assets/logo.png')} />
                </View>
            </ImageBackground>
        </View>
    )
};

const styles = StyleSheet.create({
    imagenFondoInicio: {
        position: 'absolute',
        justifyContent: "center",
        width: '100%',
        height: '100%',
    },
    margenesVista: {
        flex: 1,
        justifyContent: 'center'
    },
    iconoinicio: {
        width: 250,
        height: 250,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
});