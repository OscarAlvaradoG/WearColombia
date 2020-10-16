import React, {useEffect, useState} from 'react';
import { ImageBackground, StyleSheet, Text, View , Image, Modal, TouchableHighlight} from 'react-native';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function login(props){  
    return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> 
    <ImageBackground source={require('../assets/fondo2.png')} style={styles.image}>    

    <View style={styles.encabezado}>
        <Image
        style={styles.iconocerrar}
        source={require('../assets/cerrar.png')} />
    </View>

    <Icon
          name="arrow-right"
          size={30}
          color="#FFFFFF"
        />
      <Image source={require('../assets/logo2.png')} style={styles.imgLogo}></Image>      
      <Text style={styles.textlbl}>Email</Text>
      <Input keyboardType={"email-address"} style={styles.textInput} />
      <Text style={styles.textlbl}>Contraseña</Text>
      <Input secureTextEntry={true}/>
      <Text style={styles.text}>
        ¿Olvidaste tu Contraseña?
            <Text style={styles.textLink} onPress={()=>{props.navigation.navigate('RecordarContraseña')}}>Recuerdala</Text>
        </Text> 

      <Button
      icon={
        <Icon
          name="arrow-right"
          size={15}
          color="#1B3268"
        />
      }
      title="Iniciar Sesión" 
      buttonStyle={{ backgroundColor: '#F2CC13', 
      width: 300, 
      marginRight: 30,
      marginLeft: 30,
      marginBottom: 8, 
      borderRadius: 20, 
      color:'#1B3268'}}></Button>
 <Icon
          name="arrow-right"
          size={30}
          color="#FFFFFF"
        />

<Button
      icon={
        <Icon
          name="arrow-right"
          size={15}
          color="white"
        />
      }
      title="Iniciar Sesión con Facebook" 
      buttonStyle={{ backgroundColor: '#32599E', 
      width: 300, 
      marginRight: 30,
      marginLeft: 30, 
      borderRadius: 20, 
      color: "white"}}></Button>



      <Button
      icon={
        <Icon
          name="arrow-right"
          size={15}
          color="white"
        />
      }
      title="Iniciar Sesión con Google" 
      buttonStyle={{ backgroundColor: 'red', 
      width: 300, 
      marginRight: 30,
      marginLeft: 30, 
      borderRadius: 20, 
      color: "white"}}></Button>

      <Text style={styles.text}>
        ¿Aun no estás registrado?
            <Text style={styles.textLink} onPress={()=>{props.navigation.navigate('Registro')}}> Registrarse</Text>
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
      color: "#000000",
      fontSize: 16,
      textAlign: "center",
      fontWeight: "bold",
      marginTop: 10    
    },
    textLink: {
      color: "#1B3268",
      fontSize: 16,
      textAlign: "center",
      fontWeight: 'bold',
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
    Cerrar:{
      width: 40,
      height: 40,
      marginBottom: '50%',
      marginLeft: 5
    },

    encabezado: {
      height: 90,
      width: '100%',
      top: 0,
      backgroundColor: '#1B3268',
      position: 'absolute',
  },

iconocerrar: {
      marginTop: 30,
      marginLeft: 10,
      position: 'absolute',
      width: 50,
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