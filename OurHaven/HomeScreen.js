import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function HomeScreen({navigation}){
    return(
        <View>
            <Text>olá, sejá bem vindo ao Our Haven, esse é um chat voltado especialmente para casais.</Text>
            <Button title="Cadastrar" onPress={() => navigation.navigate('Cadastro')} />    
        </View>
    )

} 
const styles = StyleSheet.create({
    
});