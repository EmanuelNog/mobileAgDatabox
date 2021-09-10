import React, {Component, useState} from "react";
import {View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Surface, Button, Appbar, 
        List, Portal, Dialog } from 'react-native-paper';



import styles from './styles';
import api from '../../services/api';
import newOperation from '../newOperation';

export default function Operation(){
    const[area,setArea] = useState("")
    const[initDate,setInitDate] = useState("")
    const[finishDate,setFinishDate] = useState("")
    const[listArea,setListArea] = useState([])
    //const[showAreas,setShowAreas] = useState(showAreas ? true : false);

    const navigation = useNavigation();

    const Areas =   [{key: '1', label: 'Sitio'},
                     {key: '2', label: 'Chacara'}
                    ];
    function onChooseArea(chooseArea){
        setArea(chooseArea);
        setShowAreas(false);
    }

    function navigateTo(place, param = null) {
        navigation.navigate(place, { param });
    }

    async function getAreas(){
       await api.get('area/todas').then(r=> setListArea(r.data)).catch();
       console.log(setListArea)
    }

    // UseEffect(()=>{

    // },[])

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
                    style={[{width: "100%",
                            padding:10},
                            styles.alignAndJustify]}>
                    Nova Operacao
                </Button>
                <Text> </Text>

                <TouchableOpacity
                    activeOpacity={1}
                    //</View>onPress={()=>setShowAreas(true)}
                >
                    <Text>
                        {area ? area:"selecione a area"}
                    </Text>
                </TouchableOpacity>

                <Portal>
                    <Dialog
                    visible = {showAreas}
                    //onDismiss = {()=>setShowAreas(false)}
                    >
                        <Dialog.Title> 
                            Selecione a Area 
                        </Dialog.Title>
                        <Dialog.Content>
                            {Areas.map(data=>{
                                return (
                                    <List.Item
                                        key={data.key}
                                        title={data.label}
                                        onPress={ onChooseArea(data)}
                                    />
                                );
                            })}
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button 
                            //    onPress = {()=>setShowAreas(false)}
                            > 
                                Voltar
                            </Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>

                {/* <Button mode="outlined" onPress={() => getAreas()}
                      style={[{  width: "50%",
                              margin:15},
                              styles.alignAndJustify]}>
                      Listar Areas
                </Button> */}
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
