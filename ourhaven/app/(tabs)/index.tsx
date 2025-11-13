import React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router'



export default function WorkoutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedText type="title" style={styles.title}>🏋️ Rotina de Treino – Hipertrofia (Avançado)</ThemedText>

      {/* Aquecimento */}
      <ThemedView style={styles.highlight}>
        <ThemedText>
          <ThemedText style={{ fontWeight: 'bold' }}>Aquecimento Inicial:</ThemedText> 3 a 5 minutos de agachamento, bicicleta ou elíptico, seguido de 2 séries leves do primeiro exercício do treino.
        </ThemedText>
      </ThemedView>

      {/* Segunda */}
      <ThemedText type="subtitle" style={styles.subtitle}>📅 Segunda – Peito e Tríceps</ThemedText>
      <ThemedView style={styles.section}>
        {[
          { exercise: 'Supino reto', sets: '4x8-10', rest: '90s', load: 'Alta', notes: 'Manter escápulas retraídas' },
          { exercise: 'Supino inclinado c/halteres', sets: '4x10', rest: '90s', load: 'Moderada a alta', notes: 'Controle na descida' },
          { exercise: 'Crucifixo no cabo', sets: '4x10', rest: '90s', load: 'Moderada a alta', notes: 'Controle na descida' },
          { exercise: 'Crossover', sets: '3x12', rest: '60s', load: 'Moderada', notes: 'Não juntar totalmente os braços' },
          { exercise: 'Paralelas', sets: '3x até falha', rest: '90s', load: 'Peso corporal/carga adicional', notes: 'Corpo firme' },
          { exercise: 'Tríceps francês/coice', sets: '3x10-12', rest: '60s', load: 'Moderada', notes: 'Não abrir os cotovelos' },
          { exercise: 'Tríceps testa cabo', sets: '3x10-12', rest: '60s', load: 'Moderada', notes: 'Não abrir os cotovelos' },
        ].map((item, idx) => (
          <ThemedView key={idx} style={styles.row}>
            <Text style={styles.cell}>{item.exercise}</Text>
            <Text style={styles.cell}>{item.sets}</Text>
            <Text style={styles.cell}>{item.rest}</Text>
            <Text style={styles.cell}>{item.load}</Text>
            <Text style={styles.cell}>{item.notes}</Text>
          </ThemedView>
        ))}
      </ThemedView>

      {/* Terça */}
      <ThemedText type="subtitle" style={styles.subtitle}>📅 Terça – Costas e Bíceps</ThemedText>
      <ThemedView style={styles.section}>
        {[
          { exercise: 'Remada curvada', sets: '4x8-10', rest: '90s', load: 'Alta', notes: 'Coluna reta' },
          { exercise: 'Puxada na frente', sets: '3x10-12', rest: '75s', load: 'Moderada', notes: 'Segurar 1s embaixo' },
          { exercise: 'remada cabo', sets: '3x10-12', rest: '75s', load: 'Moderada', notes: '//' },
          { exercise: 'Rosca direta barra W', sets: '4x10', rest: '75s', load: 'Moderada a alta', notes: 'Evitar balanço' },
          { exercise: 'Biceps na máquina', sets: '3x8-10-12', rest: '75s', load: 'Moderada a alta', notes: 'Aumento progresivo' },
          { exercise: 'Rosca alternada', sets: '3x12', rest: '60s', load: 'Moderada', notes: 'Rotacionar punho no topo' },
          { exercise: 'Rosca Martelo', sets: '3x12', rest: '60s', load: 'Moderada', notes: 'Evitar balanço' },
        ].map((item, idx) => (
          <ThemedView key={idx} style={styles.row}>
            <Text style={styles.cell}>{item.exercise}</Text>
            <Text style={styles.cell}>{item.sets}</Text>
            <Text style={styles.cell}>{item.rest}</Text>
            <Text style={styles.cell}>{item.load}</Text>
            <Text style={styles.cell}>{item.notes}</Text>
          </ThemedView>
        ))}
      </ThemedView>

      {/* Quarta */}
      <ThemedText type="subtitle" style={styles.subtitle}>📅 Quarta – Pernas e Abdômen</ThemedText>
      <ThemedView style={styles.section}>
        {[
          { exercise: 'Cadeira extensora', sets: '3x12', rest: '60s', load: 'Moderada', notes: 'Contrair no topo' },
          { exercise: 'Mesa flexora', sets: '3x12', rest: '60s', load: 'Moderada', notes: 'Controle na fase excêntrica' },
          { exercise: 'Leg press', sets: '4x10', rest: '90s', load: 'Alta', notes: 'Não travar joelhos' },
          { exercise: 'Agachamento livre', sets: '5x8', rest: '120s', load: 'Alta', notes: 'Descer até 90° ou mais' },
          { exercise: 'Agachamento Smith', sets: '5x8', rest: '120s', load: 'Alta', notes: 'Descer até 90° ou mais' },
          { exercise: 'Oblíquos', sets: '4x20', rest: '30s', load: 'Peso corporal', notes: 'Rotação consciente' },
        ].map((item, idx) => (
          <ThemedView key={idx} style={styles.row}>
            <Text style={styles.cell}>{item.exercise}</Text>
            <Text style={styles.cell}>{item.sets}</Text>
            <Text style={styles.cell}>{item.rest}</Text>
            <Text style={styles.cell}>{item.load}</Text>
            <Text style={styles.cell}>{item.notes}</Text>
          </ThemedView>
        ))}
      </ThemedView>

      {/* Quinta */}
      <ThemedText type="subtitle" style={styles.subtitle}>📅 Quinta – Ombros e Trapézio</ThemedText>
      <ThemedView style={styles.section}>
        {[
          { exercise: 'Desenvolvimento militar com barra', sets: '4x8-10', rest: '90s', load: 'Alta', notes: 'Não arquear a lombar' },
          { exercise: 'Elevação lateral', sets: '4x12', rest: '60s', load: 'Moderada', notes: 'Subir até altura dos ombros' },
          { exercise: 'Elevação frontal', sets: '3x12', rest: '60s', load: 'Moderada', notes: 'Controle na descida' },
          { exercise: 'Remada alta barra W', sets: '3x10', rest: '75s', load: 'Moderada a alta', notes: 'Cuidado com punho' },
          { exercise: 'Encolhimento de ombros', sets: '4x15', rest: '60s', load: 'Alta', notes: 'Contrair bem em cima' },
          { exercise: 'Remada Alta', sets: '4x15', rest: '60s', load: 'Alta', notes: 'Contrair bem em cima' },
        ].map((item, idx) => (
          <ThemedView key={idx} style={styles.row}>
            <Text style={styles.cell}>{item.exercise}</Text>
            <Text style={styles.cell}>{item.sets}</Text>
            <Text style={styles.cell}>{item.rest}</Text>
            <Text style={styles.cell}>{item.load}</Text>
            <Text style={styles.cell}>{item.notes}</Text>
          </ThemedView>
        ))}
      </ThemedView>

      {/* Sexta */}
      <ThemedText type="subtitle" style={styles.subtitle}>📅 Sexta – Funcional / HIIT</ThemedText>
      <ThemedView style={styles.section}>
        {[
          { exercise: 'Rosca Alternada', sets: '3x12', rest: '60s', load: 'Moderada', notes: 'Rotacionar punho no topo' },
          { exercise: 'Antebraço', sets: '3x12', rest: '60s', load: 'alta', notes: 'Rotacionar punho no topo' },
          { exercise: 'Supino reto', sets: '4x8-10', rest: '90s', load: 'Alta', notes: 'Manter escápulas retraídas' },
          { exercise: 'Supino inclinado c/halteres', sets: '4x10', rest: '90s', load: 'Moderada a alta', notes: 'Controle na descida' },
          { exercise: 'Puxada na frente', sets: '3x10-12', rest: '75s', load: 'Moderada', notes: 'Segurar 1s embaixo' },
        ].map((item, idx) => (
          <ThemedView key={idx} style={styles.row}>
            <Text style={styles.cell}>{item.exercise}</Text>
            <Text style={styles.cell}>{item.sets}</Text>
            <Text style={styles.cell}>{item.rest}</Text>
            <Text style={styles.cell}>{item.load}</Text>
            <Text style={styles.cell}>{item.notes}</Text>
          </ThemedView>
        ))}
      </ThemedView>


      <Text>
        
        

      </Text>


      {/* Alongamento */}
      <ThemedView style={styles.highlight}>
        <ThemedText>
          <ThemedText style={{ fontWeight: 'bold' }}>Alongamento Final:</ThemedText> 5 a 10 minutos de alongamento estático para os principais grupos musculares trabalhados.
        </ThemedText>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#000000ff',
  },
  title: {
    fontSize: 28,
    top: 50,
    textAlign: 'center',
    marginBottom: 40,
    color: 'white',
  },
  subtitle: {
    fontSize: 20,
    marginTop: 25,
    color: '#ffffffff',
  },
  section: {
    backgroundColor: '#960505e7',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  cell: {
    flex: 1,
    fontSize: 14,
    marginHorizontal: 2,
    backgroundColor: '#f3f0e5ff',
    padding: 4,
    borderRadius: 3,
  },
  highlight: {
    backgroundColor: '#2c2c1941',
    borderLeftWidth: 4,
    borderLeftColor: '#af0101ff',
    padding: 10,
    marginVertical: 15,
  },
});
