import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { auth } from "../../components/firebaseConfig";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithCredential,
  User
} from "firebase/auth";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Login">;

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen(NavigationActivation: { new(): NavigationActivation; prototype: NavigationActivation; }) {
  const navigation = useNavigation<NavigationProp>();

  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: "705247021596-6dmprmmr3t1m94vdeeeckq3fdo1m9k7g.apps.googleusercontent.com",
    iosClientId: "705247021596-f2v3vunmdemt75sbifb1qitaskpbt8s9.apps.googleusercontent.com",
    androidClientId: "705247021596-itqbjgtrmuo5tuv560v10vejqe3q04tl.apps.googleusercontent.com",
    webClientId: "705247021596-fb5b3u0fv1pb3lis8bpkrn9tea32t5pn.apps.googleusercontent.com",
  });

  const handleLoginEmail = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, senha);
    } catch (error: any) {
      console.log("Erro no login:", error.message);
    }
  };

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, senha);
    } catch (error: any) {
      console.log("Erro no registro:", error.message);
    }
  };

  useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params as any;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [response]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      if (user) {
        navigation.replace("Home");
      }
    });
    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Our Haven ❤️</Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity style={styles.button} onPress={handleLoginEmail}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonSecondary} onPress={handleRegister}>
        <Text style={styles.buttonText}>Criar Conta</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.googleButton}
        disabled={!request}
        onPress={() => promptAsync()}
      >
        <Text style={styles.buttonText}>Entrar com Google</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#FFE4EC", padding: 20 },
  title: { fontSize: 28, fontWeight: "bold", color: "#C2185B", marginBottom: 20 },
  input: { width: "100%", padding: 12, backgroundColor: "#fff", borderRadius: 8, marginBottom: 10, borderWidth: 1, borderColor: "#ccc" },
  button: { backgroundColor: "#C2185B", padding: 12, borderRadius: 8, width: "100%", alignItems: "center", marginBottom: 10 },
  buttonSecondary: { backgroundColor: "#AD1457", padding: 12, borderRadius: 8, width: "100%", alignItems: "center", marginBottom: 10 },
  googleButton: { backgroundColor: "#DB4437", padding: 12, borderRadius: 8, width: "100%", alignItems: "center" },
  buttonText: { color: "#fff", fontWeight: "bold" },
});
