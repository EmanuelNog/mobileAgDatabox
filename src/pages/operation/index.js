import React, {Component, useState} from "react";
import {View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { TextInput, Surface, Button, Appbar, Searchbar } from 'react-native-paper';
import AuthContext from '../../context/auth';
import {Authenticate} from '../../controller/autenticate';
//import { configSurface } from '../globalStyle';


import styles from './styles';
import api from '../../services/api';
import newOperation from '../newOperation';

export default function Operation(){
    const[area,setArea] = useState("")
    const[initDate,setInitDate] = useState("")
    const[finishDate,setFinishDate] = useState("")
    const[password,setPassword] = useState("")
    const[listArea,setListArea] = useState([])

    const navigation = useNavigation();

    function navigateTo(place, param = null) {
        navigation.navigate(place, { param });
    }

    async function getAreas(){
       await api.get('/area').then(r=> setListArea(r.data)).catch();
       console.log(setListArea)
    }

  return (
    <Surface style = {styles.container}>
            <Appbar.Header>
            <Appbar.BackAction onPress={() => navigation.goBack()}
            />
            <Appbar.Content title="Operacao"/>
            <Appbar.Action icon="dots-vertical"  />
            </Appbar.Header>
            <View style={styles.bodyContainer}>
                <Button icon="plus" mode="outlined" onPress={() => navigateTo(newOperation)}
                      style={{  width: "95%",
                              height: "10%",
                              alignSelf:"center",
                              justifyContent: "center",
                              margin: 10}}>
                      Nova Operacao
                </Button>
                <TextInput
                    mode = "outlined"
                    label="Selecionar área"
                    value={area}
                    onChangeText={setArea}
                    style ={{margin: 10}}
                />
                <Button mode="outlined" onPress={() => getAreas()}
                      style={{  width: "40%",
                              alignSelf:"center",
                              margin:15}}>
                      Listar Areas
                </Button>
                
                
          </View>
            
    </Surface>
  )
}
/*
<TextInput
                    mode ="outlined"
                    label="Data de Início"
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
*/
