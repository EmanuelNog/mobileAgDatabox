import React, {Component, useState} from "react";
import {View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { TextInput, Surface, Button } from 'react-native-paper';
import AuthContext from '../../context/auth';
import {Authenticate} from '../../controller/autenticate';
//import { configSurface } from '../globalStyle';


import styles from './styles';
import api from '../../services/api';
import Register from "../register";

export default function Login(){
    const[username,setUsername] = useState("cc")
    const[password,setPassword] = useState("123")
    const navigation = useNavigation();
    const { signIn } = React.useContext(AuthContext);

    function navigateTo(place, param = null) {
        navigation.navigate(place, { param });
    }
    async function onLogin(textEmail,textPassword){
      // console.log("telalogin",textEmail)
      // console.log(textPassword)
      await Authenticate(textEmail,textPassword).then(async resAuth=>{
        console.log(resAuth);
        await signIn({ token: resAuth.data.token });
      }).catch(async e=>{
        console.log(e.response);
      })
    }
  return (
    <Surface style = {{ flex: 1,
                        justifyContent: "center",
                        paddingHorizontal: 10,
                        paddingTop: 20}}>
            <Text style={styles.titleImage}>AgDatabox</Text>
            <TextInput
                mode = "outlined"
                label="Nome de Usuario"
                value={username}
                onChangeText={setUsername}
                style ={{margin: 10}}
            />
            <TextInput
                mode = "outlined"
                label="Senha"
                value={password}
                onChangeText={setPassword}
                style ={{margin: 10}}
            />
            <Button mode="contained" onPress={() => onLogin(username,password)}
            style={{  width: "50%",
                      alignSelf:"center",
                      margin:15}}>
              Login
            </Button>
            <Button mode="outlined" onPress={() => navigateTo(Register)}
            style={{  width: "50%",
                      alignSelf:"center",
                      margin:5}}>
              Criar Conta
            </Button>
            
    </Surface>
  )
}


    /* <View style={styles.bodyContainer}>
    <TextInput
                style={styles.insertionField}
                onChangeText={onChangeEmail}
                value={email}
                placeholderStyle={styles.insertEmailField}
                placeholder={"        Insira seu email"}
            />
    <Button mode="text" onPress={() => onLogin(email,password)}
            style={{  width: "100%",
                      alignSelf:"center",
                      margin:15}}>
              Esqueceu sua senha
            </Button> */