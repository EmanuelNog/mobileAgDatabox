import React, {Component, useState} from "react";
import {View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { TextInput, Surface, Button, Appbar } from 'react-native-paper';
import AuthContext from '../../context/auth';
import {Authenticate} from '../../controller/autenticate';


import styles from './styles';
import api from '../../services/api';

export default function newOperation(){
    const[nome,setNome] = useState("")
    const[operationType,setOperationType] = useState("")
    const[crop,setCrop] = useState("")
    const[area,setArea] = useState("")
    const[initDate,setInitDate] = useState("")
    const[finishDate,setFinishDate] = useState("")
    
    const navigation = useNavigation();

    function navigateTo(place, param = null) {
        navigation.navigate(place, { param });
    }

  return (
    <Surface style = {styles.container}>
            <Appbar.Header>
            <Appbar.BackAction onPress={() => navigation.goBack()}
            />
            <Appbar.Content title="Cadastro de Operacao" />
            <Appbar.Action icon="dots-vertical"  />
            </Appbar.Header>
            <View style={styles.bodyContainer}>
                <TextInput
                    mode = "outlined"
                    label="Nome da Operacao"
                    value={nome}
                    onChangeText={setNome}
                    style ={{margin: 10}}
                />
                <TextInput
                    mode ="outlined"
                    label="Tipo da Operacao"
                    value={operationType}
                    onChangeText={setOperationType}
                    style ={{margin: 10}}
                />
                <TextInput
                    mode ="outlined"
                    label="Safra"
                    value={crop}
                    onChangeText={setCrop}
                    style ={{margin: 10}}
                />
                <TextInput
                    mode ="outlined"
                    label="Área"
                    value={area}
                    onChangeText={setArea}
                    style ={{margin: 10}}
                />
                <TextInput
                    mode ="outlined"
                    label="Data de Inicio"
                    value={initDate}
                    onChangeText={setInitDate}
                    style ={{margin: 10}}
                />
                <TextInput
                    mode ="outlined"
                    label="Data de Termino"
                    value={finishDate}
                    onChangeText={setFinishDate}
                    style ={{margin: 10}}
                />
                <View style={styles.rowOrientation}>
                <Button mode="outlined" onPress={() => navigation.goBack()}
                  style={{  width: "40%",
                          alignSelf:"center",
                          margin:15}}>
                  Limpar
                </Button>
                <Button mode="contained" onPress={() => navigation.goBack()} 
                style={{  width: "40%",
                          alignSelf:"center",
                          margin:15}}>
                  Salvar
                </Button>
                </View>
          </View>
            
    </Surface>
  )
}

