import React, { useState, useEffect }  from 'react';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity, StatusBar } from 'react-native';

import styles from './styles';
import api from '../../services/api';

export default function Menu(){

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
    return (
      
    <View style={styles.container}>
      <StatusBar backgroundColor="#0b980d"></StatusBar>
      <View style={styles.navBar}>
        <View>
          <TouchableOpacity style={styles.navBarTouch}>
            <Feather name="arrow-left" size={30} color="#13131a" />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.navBarText}> Menu </Text>
        </View>
        <View>
        <TouchableOpacity style={styles.navBarTouch}>
          <FontAwesome5 name="cog" size={30} color="#13131a" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bodyContainer}> 
        <View style={styles.menuButtons}>
          <TouchableOpacity 
                onPress={() => navigateTo('Login')}
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
                onPress={() => navigateTo('Login')}
              >
                <View style={styles.menuButtonsInside}> 
                  <FontAwesome5 name="tools" size={50} color="#0b980d" />
                  <Text style={styles.menuButtonsText}>Operação</Text>
                </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    )
}