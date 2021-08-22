import React, { useState, useEffect }  from 'react';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';
import { TextInput, Surface, Button, Appbar  } from 'react-native-paper';
import AuthContext from '../../context/auth';

import styles from './styles';
//import api from '../../services/api';

export default function Menu(){

    const { signOut } = React.useContext(AuthContext);
    const navigation = useNavigation();

    
    function navigateTo(place, param = null) {
            navigation.navigate(place, { param });
        }
    // async function onLogout(){
    //     await signOut();
    //     navigateTo(Login);
        
    // }
    /*
    
       */
    return (
    <Surface style = {{ flex: 1}}>
      <Appbar.Header>
      <Appbar.BackAction 
      //onPress={onLogout()} 
      />
      <Appbar.Content title="Title" subtitle="Subtitle" />
      <Appbar.Action icon="magnify"  />
      <Appbar.Action icon="dots-vertical"  />
      </Appbar.Header>

      <View style={styles.bodyContainer}> 
        <View style={styles.menuButtons}>
            <Button icon={() => <FontAwesome5 name='map-marked-alt' size={50} color="#0b980d"/>}
            mode="outlined" onPress={() => console.log('Operacao')}
            style={styles.menuButton}
            //contentStyle={menuButtonsInside}
            >
            </Button>
            <Button icon={() => <FontAwesome5 name='leaf' size={50} color="#0b980d"/>}
            mode="outlined" onPress={() => console.log('Operacao')}
            style={styles.menuButton}
            //contentStyle={menuButtonsInside}
            >
            </Button>
            <Button icon={() => <FontAwesome5 name='tools' size={50} color="#0b980d"/>}
            mode="outlined" onPress={() => console.log('Operacao')}
            style={styles.menuButton}
            //contentStyle={menuButtonsInside}
            >
            </Button>
        </View>
        <View style={styles.menuButtonsRow}>
            <Text style={styles.menuButtonsText}>area</Text>
            <Text style={styles.menuButtonsText}>safra</Text>
            <Text style={styles.menuButtonsText}>operacao</Text>
        </View>
        <View style={styles.menuButtons}>
            <Button icon={() => <FontAwesome5 name='map-marked-alt' size={50} />}
            mode="outlined" onPress={() => console.log('Operacao')}
            style={styles.menuButton}
            //contentStyle={menuButtonsInside}
            >
            </Button>
            <Button icon={() => <FontAwesome5 name='map-marked-alt' size={50} />}
            mode="outlined" onPress={() => console.log('Operacao')}
            style={styles.menuButton}
            //contentStyle={menuButtonsInside}
            >
            </Button>
            <Button icon={() => <FontAwesome5 name='map-marked-alt' size={50} />}
            mode="outlined" onPress={() => console.log('Operacao')}
            style={styles.menuButton}
            //contentStyle={menuButtonsInside}
            >
            </Button>
        </View>
        <View style={styles.menuButtonsRow}>
            <Text style={styles.menuButtonsText}>nome1</Text>
            <Text style={styles.menuButtonsText}>nome2</Text>
            <Text style={styles.menuButtonsText}>nome3</Text>
        </View>
        <View style={styles.menuButtons}>
            <Button icon={() => <FontAwesome5 name='map-marked-alt' size={50} />}
            mode="outlined" onPress={() => console.log('Operacao')}
            style={styles.menuButton}
            //contentStyle={menuButtonsInside}
            >
            </Button>
            <Button icon={() => <FontAwesome5 name='map-marked-alt' size={50} />}
            mode="outlined" onPress={() => console.log('Operacao')}
            style={styles.menuButton}
            //contentStyle={menuButtonsInside}
            >
            </Button>
            <Button 
            icon={() => <FontAwesome5 name='map-marked-alt' size={50} />}
            mode="outlined" onPress={() => console.log('Operacao')}
            style={styles.menuButton}
            //contentStyle={menuButtonInside}
            >
            </Button> 
        </View>
        <View style={styles.menuButtonsRow}>
            <Text style={styles.menuButtonsText}>nome1</Text>
            <Text style={styles.menuButtonsText}>nome2</Text>
            <Text style={styles.menuButtonsText}>nome3</Text>
        </View>
      </View>
    </Surface>
    )
}