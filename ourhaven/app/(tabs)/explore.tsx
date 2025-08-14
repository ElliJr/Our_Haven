import { Image } from 'expo-image';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  LoginScreen: undefined;
  // add other screens here if needed
};

export default function TabTwoScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const handleLoginPress = () => {
        navigation.replace("LoginScreen");
      console.log("Ir para login");
    };
  
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FFD1DC', dark: '#3A1F2B' }}
      headerImage={
        <View style={styles.headerContent}>
          <Image
            source={require('@/assets/images/ourhaven.png')}
            style={styles.logo}
          />
          <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
            <ThemedText style={styles.loginText}>Login</ThemedText>
          </TouchableOpacity>
        </View>
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.pageTitle}>
          Explore ❤️
        </ThemedText>
      </ThemedView>

      <ThemedText style={styles.description}>
        Descubra novas formas de fortalecer seu relacionamento.
        Dicas, ideias e recursos para vocês curtirem juntos!
      </ThemedText>

      <View style={styles.card}>
        <ThemedText type="subtitle" style={styles.cardTitle}>
          💡 Dicas para Casais
        </ThemedText>
        <ThemedText style={styles.cardText}>
          Receba sugestões diárias para manter a chama acesa no relacionamento.
        </ThemedText>
      </View>
      <View style={styles.card}>
        <ThemedText type="subtitle" style={styles.cardTitle}>
          🎯 Desafios 
        </ThemedText>
        <ThemedText style={styles.cardText}>
          Participe de pequenos desafios e surpreenda seu amor.
        </ThemedText>
      </View>

      <View style={styles.card}>
        <ThemedText type="subtitle" style={styles.cardTitle}>
          📅 Agenda
        </ThemedText>
        <ThemedText style={styles.cardText}>
          Marque datas importantes e nunca mais esqueça momentos especiais.
        </ThemedText>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerContent: {
    alignItems: 'center',
    marginTop: 50,
  },
  logo: {
    height: 150,
    width: 150,
    borderRadius: 75,
    resizeMode: 'contain',
  },
    loginButton: {
    position: 'absolute',
    right: 20,
    top: 20,
    backgroundColor: '#C2185B',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    elevation: 3,
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 15,
  },
  pageTitle: {
    color: '#C2185B',
    fontSize: 26,
    fontWeight: 'bold',
  },
  description: {
    textAlign: 'center',
    fontSize: 16,
    color: '#6A1B4D',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFE4EC',
    padding: 16,
    marginHorizontal: 20,
    borderRadius: 16,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    color: '#AD1457',
    fontWeight: 'bold',
    marginBottom: 6,
    fontSize: 16,
  },
  cardText: {
    color: '#4A0D29',
    fontSize: 14,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#C2185B',
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
