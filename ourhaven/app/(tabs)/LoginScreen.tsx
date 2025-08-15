import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { auth } from '../../components/firebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, User } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';


type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export default function LoginScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const fazerLogin = async () => {
    if (!email || !senha) {
      Alert.alert('Erro', 'Preencha e-mail e senha');
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, senha);
      const user: User = userCredential.user;

      // Salva localmente
      const dadosSalvos = await AsyncStorage.getItem('usuarios');
      const usuarios = dadosSalvos ? JSON.parse(dadosSalvos) : [];
      const existe = usuarios.some((u: { email: string }) => u.email === email);
      if (!existe) {
        usuarios.push({ email, senha });
        await AsyncStorage.setItem('usuarios', JSON.stringify(usuarios));
      }

      Alert.alert('Sucesso', `Bem-vindo, ${user.email}`);
      navigation.navigate('Home'); // ✅ agora funciona
    } catch (error: any) {
      console.log('Erro login Firebase:', error.message);
      Alert.alert('Erro', 'Usuário ou senha inválidos');
    }
  };

  const cadastrarUsuario = async () => {
    if (!email || !senha) {
      Alert.alert('Erro', 'Preencha e-mail e senha');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const user: User = userCredential.user;

      // Salva localmente
      const dadosSalvos = await AsyncStorage.getItem('usuarios');
      const usuarios = dadosSalvos ? JSON.parse(dadosSalvos) : [];
      usuarios.push({ email, senha });
      await AsyncStorage.setItem('usuarios', JSON.stringify(usuarios));

      Alert.alert('Sucesso', `Conta criada! Bem-vindo, ${user.email}`);
      setEmail('');
      setSenha('');
    } catch (error: any) {
      console.log('Erro cadastro Firebase:', error.message);
      Alert.alert('Erro', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>OurHaven ❤️</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={fazerLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.cadastroButton]} onPress={cadastrarUsuario}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1B1F3B', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 },
  title: { fontSize: 32, fontWeight: 'bold', color: '#E91E63', marginBottom: 20 },
  input: { width: '100%', padding: 12, backgroundColor: '#2C2F4A', borderRadius: 8, color: '#fff', marginBottom: 15 },
  button: { width: '100%', backgroundColor: '#E91E63', paddingVertical: 12, borderRadius: 8, alignItems: 'center', marginBottom: 10 },
  cadastroButton: { backgroundColor: '#FF4081' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
