import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';
import React from 'react';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FFD1DC', dark: '#3A1F2B' }}
      headerImage={
        <Image
          source={require('@/assets/images/ourhaven.png')} // logo personalizada
          style={styles.logo}
        />
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

      <View style={styles.card}>
        <ThemedText type="subtitle" style={styles.cardTitle}>
          💌 Inicie uma conversa
        </ThemedText>
        <ThemedText style={styles.cardText}>
          Troque mensagens de forma privada e exclusiva com seu par.
        </ThemedText>
      </View>

      <View style={styles.card}>
        <ThemedText type="subtitle" style={styles.cardTitle}>
          📷 Compartilhe memórias
        </ThemedText>
        <ThemedText style={styles.cardText}>
          Envie fotos, áudios e vídeos para criar um álbum especial.
        </ThemedText>
      </View>

      <View style={styles.card}>
        <ThemedText type="subtitle" style={styles.cardTitle}>
          🌹 Surpreenda
        </ThemedText>
        <ThemedText style={styles.cardText}>
          Mande mensagens carinhosas e descubra novas formas de demonstrar afeto.
        </ThemedText>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    marginTop: 20,
    resizeMode: 'contain',
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
  },
  card: {
    backgroundColor: '#FFE4EC',
    padding: 16,
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    color: '#AD1457',
    fontWeight: 'bold',
    marginBottom: 6,
  },
  cardText: {
    color: '#4A0D29',
    fontSize: 14,
  },
});
