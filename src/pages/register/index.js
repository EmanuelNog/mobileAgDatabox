import React, {Component, useState} from "react";
import {View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { TextInput, Surface, Button } from 'react-native-paper';
import AuthContext from '../../context/auth';
import {Authenticate} from '../../controller/autenticate';
//import { configSurface } from '../globalStyle';


import styles from './styles';
import api from '../../services/api';

export default function Register(){
    const[nome,setNome] = useState("")
    const[phone,setPhone] = useState("")
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const navigation = useNavigation();
    const { signIn } = React.useContext(AuthContext);

    function navigateTo(place, param = null) {
        navigation.navigate(place, { param });
    }

    async function onLogin(textEmail,textPassword){
      await Authenticate(textEmail,textPassword).then(async resAuth=>{
        console.log(resAuth.data);
        await signIn({ token: resAuth.data.token });
      }).catch(async e=>{
        console.log(e.response);
      })
    }
  return (
    <Surface style = { styles.container}>
            <View style={styles.bodyContainer}>
            <Text style={styles.titleImage}>Cadastro no AgDatabox</Text>
            <TextInput
                mode = "outlined"
                label="Nome"
                value={nome}
                onChangeText={setNome}
                style ={{margin: 10}}
            />
            <TextInput
                mode ="outlined"
                label="Telefone"
                value={phone}
                onChangeText={setPhone}
                style ={{margin: 10}}
            />
            <TextInput
                mode ="outlined"
                label="Email"
                value={email}
                onChangeText={setEmail}
                style ={{margin: 10}}
            />
            <TextInput
                mode ="outlined"
                label="Senha"
                value={password}
                onChangeText={setPassword}
                style ={{margin: 10}}
            />
            <View style={styles.rowOrientation}>
                <Button mode="outlined" onPress={() => navigation.goBack()}
                  style={{  width: "40%",
                          alignSelf:"center",
                          margin:15}}>
                  Cancelar
                </Button>
                <Button mode="contained" 
                style={{  width: "40%",
                          alignSelf:"center",
                          margin:15}}>
                  Cadastrar
                </Button>
            </View>
            </View>
    </Surface>
  )
}

