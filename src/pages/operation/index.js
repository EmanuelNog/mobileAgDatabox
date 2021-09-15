import React, {Component, useState} from "react";
import {View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Surface, Button, Appbar, 
        List, Portal, Dialog, Provider as PaperProvider } from 'react-native-paper';



import styles from './styles';
import api from '../../services/api';
import newOperation from '../newOperation';

export default function Operation(){
    const[area,setArea] = useState("")
    const[initDate,setInitDate] = useState("")
    const[finishDate,setFinishDate] = useState("")
    const[listArea,setListArea] = useState([])
    //const[showAreas,setShowAreas] = useState(showAreas ? true : false);
    const[areaVisible,setAreavisible] = useState(false);

    const areaVisibleShow = () => setAreavisible(true);
    
    const areaVisibleHide = () => setAreavisible(false);

    function chooseArea(areaText){
        areaVisibleHide;
        setArea(areaText);
    }

    const navigation = useNavigation();

    const Areas =   [{key: '1', label: 'Sitio'},
                     {key: '2', label: 'Chacara'}
                    ];

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
    <PaperProvider>
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

                <Button
                    activeOpacity={1}
                    onPress={areaVisibleShow}
                >
                    <Text>
                        {/* {area ? area:"selecione a area"} */}
                        botao de selecionar area
                    </Text>
                </Button>

                
                <Portal>
                    <Dialog
                    visible = {areaVisible}
                    onDismiss = {areaVisibleHide}
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
                                        onPress={ chooseArea(data)}
                                    />
                                );
                            })}
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button 
                                onPress = {areaVisibleHide}
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
    </PaperProvider>
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
