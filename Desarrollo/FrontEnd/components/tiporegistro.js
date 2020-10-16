import React, {useEffect, useState} from 'react';
import { ImageBackground, StyleSheet, Text, View , Image, Modal, TouchableHighlight} from 'react-native';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Inicio(props){  
    return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> 
    <ImageBackground source={require('../assets/fondo2.png')} style={styles.image}>    

    <View style={styles.encabezado}>
    <TouchableHighlight onPress={()=>{ props.navigation.navigate('Inicio')}}>
        <Image
        style={styles.registroicono} 
        source={require('../assets/registro.png')} onPress={()=>{props.navigation.navigate('Inicio')}} />
        </TouchableHighlight>
    </View>

    <Icon
          name="arrow-right"
          size={30}
          color="#FFFFFF"
        />
      <Image source={require('../assets/logo2.png')} style={styles.imgLogo}></Image>      
      <Text style={styles.textlbl}>Selecciona tu Rol a llevar dentro
                                    del aplicativo</Text>

      <View style={styles.boton1}>
      <Button
      icon={
        <Icon
          name="arrow-right"
          size={15}
          color="#1B3268"
        />
      }
      onPress={()=>{props.navigation.navigate('Regi')}}
      title="REGISTRO COMO COMERCIANTE" 
      buttonStyle={{ backgroundColor: '#F2CC13', 
      width: 300, 
      marginRight: 30,
      marginLeft: 30,
      marginBottom: 8, 
      borderRadius: 20, 
      color:'#1B3268'}}></Button>
        </View>

    <Text style={styles.text}>
    *Requiere previos permisor del administrador del aplicativo
        <Text style={styles.textLink} onPress={()=>{props.navigation.navigate('RecordarContraseña')}}>Info Aqui</Text>
        </Text> 

        <View style={styles.boton2}>
      <Button
      icon={
        <Icon
          name="arrow-right"
          size={15}
          color="#1B3268"
        />
      }
      title="REGISTRO COMO USUARIO" 
      buttonStyle={{ backgroundColor: '#F2CC13', 
      width: 300, 
      marginRight: 30,
      marginLeft: 30,
      marginBottom: 8, 
      borderRadius: 20, 
      color:'#1B3268'}}></Button>
        </View>

    <Text style={styles.text}>
    Permite realizar tus compras y visualizar la diversidad catálogos existentes de las diferentes marcas.
        <Text style={styles.textLink} onPress={()=>{props.navigation.navigate('RecordarContraseña')}}>Registrate</Text>
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
        width: '90%',
      color: "#B2B2B2",
      fontSize: 14,
      textAlign: "center",
      fontWeight: "bold",
      marginTop: 10, 
      marginLeft: 17,  
    },

    textLink: {
      color: "#1B3268",
      fontSize: 16,
      textAlign: "center",
      fontWeight: 'bold',
      marginTop: 10    
    },

    boton1: {
        marginTop: 10    
      },

    boton2: {
        marginTop: 10    
      },

    imgLogo: {
      width: 210,
      height: 80,
      marginLeft: 75,
      marginRight: 90,
      marginBottom: 20
    },
    textlbl: {
      color: "#747474",
      fontSize: 18,
      textAlign: "center",
      fontWeight: 'bold',
    },
    encabezado: {
      height: 90,
      width: '100%',
      top: 0,
      backgroundColor: '#1B3268',
      position: 'absolute',
  },

    registroicono: {
      marginTop: 30,
      marginLeft: 10,
      position: 'absolute',
      width: 170,
      height: 50,
  },

    textInput:{
      borderColor: "#B4B4B4",      
      height: 50,
      width: "90%",
      margin: 10,
      fontSize: 23,
      textAlign: "center"
    }  
  });