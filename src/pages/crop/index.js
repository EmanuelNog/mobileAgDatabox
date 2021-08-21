import React, { useState, useEffect }  from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Area(){
    return (
        <View style={styles.container}>
        <Text>Area!</Text>
        </View>
    );
}