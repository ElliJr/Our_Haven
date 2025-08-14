import { Image } from 'expo-image';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import React from 'react';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';


export default function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  
  const handleLoginPress = () => {
    navigation.navigate("LoginScreen");
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
        <ThemedText type="title" style={styles.welcomeTitle}>
          Bem-vindo ao Our Haven ❤️
        </ThemedText>
      </ThemedView>

      <View style={styles.messageContainer}>
        <ThemedText style={styles.description}>
          O seu espaço seguro para compartilhar momentos, mensagens e sentimentos 
          com quem você ama.
        </ThemedText>
      </View>

      {[
        { icon: "💌", title: "Inicie uma conversa", text: "Troque mensagens de forma privada e exclusiva com seu par." },
        { icon: "📷", title: "Compartilhe memórias", text: "Envie fotos, áudios e vídeos para criar um álbum especial." },
        { icon: "🌹", title: "Surpreenda", text: "Mande mensagens carinhosas e descubra novas formas de demonstrar afeto." }
      ].map((card, index) => (
        <View key={index} style={styles.card}>
          <ThemedText type="subtitle" style={styles.cardTitle}>
            {card.icon} {card.title}
          </ThemedText>
          <ThemedText style={styles.cardText}>
            {card.text}
          </ThemedText>
        </View>
      ))}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerContent: {
    alignItems: 'center',
    marginTop: 50,
    position: 'relative',
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
    marginBottom: 20,
  },
  welcomeTitle: {
    color: '#C2185B',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  messageContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#6A1B4D',
    textAlign: 'center',
    lineHeight: 22,
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
    lineHeight: 20,
  },
});
