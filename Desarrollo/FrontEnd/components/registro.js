import React, {useEffect, useState} from 'react';
import { ImageBackground, StyleSheet, Text, View , Image, Modal, Linking, TouchableHighlight} from 'react-native';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function registro(props){
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackground source={require('../assets/fondo2.png')} style={styles.image}>    

            <View style={styles.encabezado}>
                <Image
                style={styles.cuenta}
                source={require('../assets/Micuenta.png')} />
            </View>

      <View style={styles.formulario1}>

      <View style={styles.formulario}>
      <Text style={styles.textlbl}>Nombre de Propietario</Text>
      <Input style={styles.textInput}/>
      <Text style={styles.textlbl}>Nombre de Marca</Text>
      <Input style={styles.textInput}/>
      <Text style={styles.textlbl}>Registro Comercial (NIT)</Text>
      <Input secureTextEntry={true}/>
      <Text style={styles.textlbl}>Telefono de Contacto</Text>
      <Input style={styles.textInput}/>
      <Text style={styles.textlbl}>Email</Text>
      <Input style={styles.textInput}/>
      <Text style={styles.textlbl}>Contraseña</Text>
      <Input secureTextEntry={true}/>
      </View>
      </View>

      <View style={styles.botones}>
    <Button
      icon={
        <Icon
          name="arrow-right"
          size={15}
          color="#1B3268"
        />
      }
      title="REGISTRARME" 
      buttonStyle={{ backgroundColor: '#1F396D', 
      width: 300, 
      marginRight: 30,
      marginLeft: 30,
      marginBottom: 8, 
      borderRadius: 20, 
      color:'#1B3268'}}></Button>

      </View>
      <Text style={styles.text}>
        ¿Ya estoy registrado?
        <Text style={styles.textLink} onPress={()=>{props.navigation.navigate('Inicio')}}> Iniciar Sesion</Text>
        </Text>


      </ImageBackground>              
    </View>
    )
}

const styles = StyleSheet.create({    
    image: {
      flex: 1,
      position: "absolute",    
      resizeMode: "cover",
      justifyContent: "center",
      width: '100%',
      height: '100%',
    },
    text: {
      color: "#B4B4B4",
      fontSize: 16,
      textAlign: "center",
      fontWeight: "bold",
      marginTop: 10    
    },

    textLink: {
      color: "#1F396D",
      fontSize: 16,
      textAlign: "center",
      fontWeight: 'bold',
      marginTop: 10    
    },
    imgLogo: {
      width: 250,
      height: 100,
      marginLeft: 40,
      marginRight: 40,
      marginBottom: 20
    },
    textlbl: {
        color: "#747474",
        fontSize: 15,
        textAlign: "center",
        fontWeight: 'bold',
        lineHeight: 15,
    },
    

    formulario1: {
        width: '90%',
        height: 480,
        fontSize: 14,
        textAlign: "center",
        fontWeight: "bold",   
        marginLeft: 15,
        marginTop: 80,
      },

    formulario: {
        width: '90%',
        height: 480,
        fontSize: 14,
        textAlign: "center",
        fontWeight: "bold",   
        marginLeft: 15,
        lineHeight: 5,
      },

    encabezado: {
        height: 90,
        width: '100%',
        top: 0,
        backgroundColor: '#1B3268',
        position: 'absolute',
    },
  
  cuenta: {
        marginTop: 30,
        marginLeft: 10,
        position: 'absolute',
        width: 160,
        height: 50,
    },

    botones: {
        marginTop: 25,
    },

    textInput:{
      borderColor: "#B4B4B4",
      width: "90%",
      height:1,
      margin: 2,
      fontSize: 14,      
      textAlign: "center"
    }  
  });