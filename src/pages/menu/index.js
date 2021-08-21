import React, { useState, useEffect }  from 'react';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { TextInput, Surface, Button, Appbar  } from 'react-native-paper';
import AuthContext from '../../context/auth';

import styles from './styles';
import api from '../../services/api';

export default function Menu(){

    const { signOut } = React.useContext(AuthContext);
    const navigation = useNavigation();

    
    function navigateTo(place, param = null) {
            navigation.navigate(place, { param });
        }

    async function handleLogin(){      
        
        const data = {
            login: 'miranteazi2@gmail.com',
            password: 'emanuel12'
        }
        
        try{
            const response = await api.post('auth/login',data) 

            console.log(response);
            console.log(response.data);
            //localStorage.setItem('userToken',response.data);
        } catch(err){
            alert('Falha no login, tente novamente!');
        }
    }
    /*async function onLogout(){
        await signOut();
        navigateTo(Login)
        <Appbar.Header>
      <Appbar.BackAction onPress={await signOut()} />
      <Appbar.Content title="Title" subtitle="Subtitle" />
      <Appbar.Action icon="magnify"  />
      <Appbar.Action icon="dots-vertical"  />
      </Appbar.Header>
    }*/
    return (
    <Surface style = {{ flex: 1}}>
      <View style={styles.bodyContainer}> 
        <View style={styles.menuButtons}>
          <TouchableOpacity 
                onPress={() => onLogout()}
              >
                <View style={styles.menuButtonsInside}> 
                <FontAwesome5 name="map-marked-alt" size={50} color="#0b980d" />
                <Text style={styles.menuButtonsText}>Área</Text>
                </View>
          </TouchableOpacity>
          <TouchableOpacity 
                onPress={handleLogin}
              >
                <View style={styles.menuButtonsInside}> 
                <FontAwesome5 name="leaf" size={50} color="#0b980d" />
                <Text style={styles.menuButtonsText}>Safra</Text>
                </View>
          </TouchableOpacity>
          <TouchableOpacity 
                onPress={handleLogin}
              >
                <View style={styles.menuButtonsInside}> 
                  <FontAwesome5 name="tools" size={50} color="#0b980d" />
                  <Text style={styles.menuButtonsText}>Operação</Text>
                </View>
          </TouchableOpacity>
        </View>
      </View>
    </Surface>
    )
}