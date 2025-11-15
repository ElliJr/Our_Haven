import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function MetaPR() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meta PR</Text>
      <Text style={styles.subtitle}>Aqui você vai definir suas metas de treino!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#121212',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00ffb0',
  },
  subtitle: {
    marginTop: 8,
    fontSize: 16,
    color: '#ccc',
  },
});