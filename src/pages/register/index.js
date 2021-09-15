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
    const[name,setName] = useState("")
    const[email,setEmail] = useState("")
    const[phone,setPhone] = useState("")
    const[username,setUsername] = useState("")
    const[password,setPassword] = useState("")
    const[confpassword,setConfPassword] = useState("")
    const navigation = useNavigation();
    const { signIn } = React.useContext(AuthContext);

    function navigateTo(place, param = null) {
        navigation.navigate(place, { param });
    }

    async function onRegister(textName,textEmail,textPhone,textUsername,textPassword){
      var userObj =  new Object();
      userObj.name = textName;
      userObj.mail = textEmail;
      userObj.phone = textPhone;
      userObj.username = textUsername;
      userObj.password = textPassword;
      //console.log(userObj);
      const response = await api.post('user',{name:textName, mail:textEmail, phone:textPhone, username:textUsername, 
                                              password:textPassword, isAdmin:true, authType:"d"});
      console.log(response.data);
      navigation.goBack();
    }
  return (
    <Surface style = { styles.container}>
            <View style={styles.bodyContainer}>
            <Text style={styles.titleImage}>Cadastro no AgDatabox</Text>
            <TextInput
                mode = "outlined"
                label="Nome"
                value={name}
                onChangeText={setName}
                style ={{margin: 10}}
            />
            <TextInput
                mode ="outlined"
                label="Nome de Usuario"
                value={username}
                onChangeText={setUsername}
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
                label="Telefone"
                value={phone}
                onChangeText={setPhone}
                style ={{margin: 10}}
            />
            <TextInput
                mode ="outlined"
                label="Senha"
                value={password}
                onChangeText={setPassword}
                style ={{margin: 10}}
            />
            <TextInput
                mode ="outlined"
                label="Confirmar Senha"
                value={confpassword}
                onChangeText={setConfPassword}
                style ={{margin: 10}}
            />
            <View style={styles.rowOrientation}>
                <Button mode="outlined" onPress={() => navigation.goBack()}
                  style={{  width: "40%",
                          alignSelf:"center",
                          margin:15}}>
                  Cancelar
                </Button>
                <Button mode="contained" onPress={() => onRegister(name,email,phone,username,password)}
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

