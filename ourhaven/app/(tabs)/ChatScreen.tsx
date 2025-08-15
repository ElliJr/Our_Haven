// ChatScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { auth, db } from '../../components/firebaseConfig'; // db do Firestore
import { collection, addDoc, onSnapshot, query, orderBy, Timestamp } from 'firebase/firestore';

type Message = {
  id: string;
  text: string;
  sender: string;
  createdAt: any;
};

export default function ChatScreen() {
  const [mensagem, setMensagem] = useState('');
  const [mensagens, setMensagens] = useState<Message[]>([]);

  useEffect(() => {
    const q = query(collection(db, 'mensagens'), orderBy('createdAt', 'asc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs: Message[] = snapshot.docs.map(doc => ({
        id: doc.id,
        text: doc.data().text,
        sender: doc.data().sender,
        createdAt: doc.data().createdAt,
      }));
      setMensagens(msgs);
    });
    return unsubscribe;
  }, []);

  const enviarMensagem = async () => {
    if (!mensagem.trim()) return;

    try {
      await addDoc(collection(db, 'mensagens'), {
        text: mensagem,
        sender: auth.currentUser?.email,
        createdAt: Timestamp.now(),
      });
      setMensagem('');
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
    }
  };

  const renderItem = ({ item }: { item: Message }) => (
    <View style={[styles.mensagemContainer, item.sender === auth.currentUser?.email ? styles.mensagemMinha : styles.mensagemOutra]}>
      <Text style={styles.textoMensagem}>{item.text}</Text>
      <Text style={styles.sender}>{item.sender === auth.currentUser?.email ? 'Você' : item.sender}</Text>
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <FlatList
        data={mensagens}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.listaMensagens}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={mensagem}
          onChangeText={setMensagem}
          placeholder="Digite sua mensagem..."
          placeholderTextColor="#aaa"
        />
        <TouchableOpacity style={styles.botaoEnviar} onPress={enviarMensagem}>
          <Text style={styles.textoBotao}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1F3B',
  },
  listaMensagens: {
    flex: 1,
    padding: 10,
  },
  mensagemContainer: {
    padding: 10,
    borderRadius: 12,
    marginVertical: 5,
    maxWidth: '80%',
  },
  mensagemMinha: {
    backgroundColor: '#E91E63',
    alignSelf: 'flex-end',
  },
  mensagemOutra: {
    backgroundColor: '#FF4081',
    alignSelf: 'flex-start',
  },
  textoMensagem: {
    color: '#fff',
    fontSize: 16,
  },
  sender: {
    fontSize: 10,
    color: '#ddd',
    marginTop: 2,
    textAlign: 'right',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopColor: '#2C2F4A',
    borderTopWidth: 1,
    backgroundColor: '#1B1F3B',
  },
  input: {
    flex: 1,
    backgroundColor: '#2C2F4A',
    borderRadius: 20,
    paddingHorizontal: 15,
    color: '#fff',
  },
  botaoEnviar: {
    backgroundColor: '#E91E63',
    borderRadius: 20,
    paddingHorizontal: 15,
    justifyContent: 'center',
    marginLeft: 10,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
