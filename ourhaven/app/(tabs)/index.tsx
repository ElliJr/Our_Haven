import React from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity 
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function AzaironScreen(): JSX.Element {
  return (
    <ScrollView style={styles.container}>
      
      {/* HERO */}
      <LinearGradient
        colors={["#140014", "#000000"]}
        style={styles.hero}
      >
        <Text style={styles.heroTitle}>Azairon</Text>

        <Text style={styles.heroLead}>
          Seu novo treinador inteligente.{"\n"}
          Crie sua conta grátis e receba um treino completo em segundos.
        </Text>

        <View style={styles.heroButtons}>
          <TouchableOpacity style={styles.btnPrimary}>
            <Text style={styles.btnPrimaryText}>Criar Conta</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnOutline}>
            <Text style={styles.btnOutlineText}>Saiba Mais</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.heroNote}>Menos de 2 minutos para começar.</Text>
      </LinearGradient>

      {/* COMO FUNCIONA */}
      <Text style={styles.sectionTitle}>Como funciona?</Text>

      <View style={styles.grid}>
        {howData.map((item, i) => (
          <View key={i} style={styles.card}>
            <Text style={styles.cardNumber}>{item.number}</Text>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardText}>{item.text}</Text>
          </View>
        ))}
      </View>

      {/* FEATURES */}
      <Text style={styles.sectionTitle}>Por que usar o Azairon?</Text>

      <View style={styles.grid}>
        {featuresData.map((item, i) => (
          <View key={i} style={styles.featureCard}>
            <Text style={styles.featureTitle}>{item.title}</Text>
            <Text style={styles.featureText}>{item.text}</Text>
          </View>
        ))}
      </View>

      {/* TESTEMUNHOS */}
      <Text style={styles.sectionTitle}>O que estão dizendo</Text>

      <View style={styles.grid}>
        {testimonialsData.map((item, i) => (
          <View key={i} style={styles.testimonialCard}>
            <Text style={styles.testimonialText}>{item.text}</Text>
            <Text style={styles.testimonialAuthor}>— {item.author}</Text>
          </View>
        ))}
      </View>

      {/* CTA FINAL */}
      <View style={styles.ctaFinal}>
        <Text style={styles.ctaTitle}>Pronto para transformar seu treino?</Text>
        <Text style={styles.ctaText}>Crie sua conta e comece agora.</Text>

        <TouchableOpacity style={styles.btnPrimaryBig}>
          <Text style={styles.btnPrimaryText}>Começar Agora</Text>
        </TouchableOpacity>
      </View>

      {/* FOOTER */}
      <Text style={styles.footer}>
        © 2025 Azairon — Todos os direitos reservados.
      </Text>

    </ScrollView>
  );
}

/* -----------------------------
   TIPAGEM DOS DADOS
----------------------------- */

interface StepItem {
  number: string;
  title: string;
  text: string;
}

interface FeatureItem {
  title: string;
  text: string;
}

interface TestimonialItem {
  text: string;
  author: string;
}

/* -----------------------------
   ARRAYS DE CONTEÚDO
----------------------------- */

const howData: StepItem[] = [
  {
    number: "1",
    title: "Crie sua conta",
    text: "Leva menos de 1 minuto. Você só precisa informar seus objetivos."
  },
  {
    number: "2",
    title: "IA analisa seu perfil",
    text: "Nível, experiência, rotina, equipamentos… tudo é considerado automaticamente."
  },
  {
    number: "3",
    title: "Receba seu treino",
    text: "Um treino completo otimizado, atualizado semanalmente."
  }
];

const featuresData: FeatureItem[] = [
  { title: "Treinos personalizados", text: "IA que entende seu corpo, objetivo e rotina." },
  { title: "Evolução contínua", text: "Ajustes automáticos com segurança." },
  { title: "Comunidade ativa", text: "Compartilhe conquistas e evolua junto." },
  { title: "Acompanhamento inteligente", text: "Recomendações em tempo real." },
  { title: "Biblioteca de exercícios", text: "Vídeos e execução correta de cada movimento." }
];

const testimonialsData: TestimonialItem[] = [
  { text: "“Em 3 semanas tive mais evolução do que em meses treinando sozinho.”", author: "Lucas Andrade" },
  { text: "“A IA ajusta tudo de acordo com meu tempo. Muito eficiente!”", author: "Marina Santos" },
  { text: "“Parece treino feito por um personal. Excelente!”", author: "Rafael Monteiro" }
];

/* -----------------------------
   STYLESHEET
----------------------------- */

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#050505",
  },

  /* HERO */
  hero: {
    paddingVertical: 80,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  heroTitle: {
    fontSize: 42,
    fontWeight: "900",
    color: "#ff0044",
    textShadowRadius: 15,
  },
  heroLead: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 14,
    color: "#d8d8d8",
    maxWidth: 320,
  },
  heroButtons: {
    flexDirection: "row",
    gap: 12,
    marginTop: 30,
  },
  heroNote: {
    marginTop: 30,
    color: "#aaa",
    fontSize: 12,
  },

  /* BUTTONS */
  btnPrimary: {
    backgroundColor: "#ff0044",
    paddingVertical: 12,
    paddingHorizontal: 26,
    borderRadius: 10,
  },
  btnPrimaryBig: {
    backgroundColor: "#ff0044",
    paddingVertical: 16,
    paddingHorizontal: 50,
    borderRadius: 12,
    marginTop: 20,
  },
  btnPrimaryText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
  btnOutline: {
    borderWidth: 2,
    borderColor: "#ff0044",
    paddingVertical: 12,
    paddingHorizontal: 26,
    borderRadius: 10,
  },
  btnOutlineText: {
    color: "#ff0044",
    fontWeight: "700",
    fontSize: 16,
  },

  /* TITLES */
  sectionTitle: {
    color: "#ff0044",
    fontSize: 26,
    fontWeight: "900",
    textAlign: "center",
    marginTop: 50,
    marginBottom: 20,
  },

  /* GRID */
  grid: {
    paddingHorizontal: 20,
    gap: 20,
  },

  /* CARDS */
  card: {
    backgroundColor: "#0e0e0e",
    padding: 20,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#1a1a1a",
  },
  cardNumber: {
    backgroundColor: "#ff0044",
    color: "#fff",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 8,
    fontWeight: "900",
    alignSelf: "flex-start",
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "700",
  },
  cardText: {
    marginTop: 5,
    color: "#ccc",
  },

  /* FEATURES */
  featureCard: {
    backgroundColor: "#0e0e0e",
    padding: 20,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#222",
  },
  featureTitle: {
    color: "#00ffb0",
    fontSize: 18,
    marginBottom: 6,
  },
  featureText: {
    color: "#ccc",
  },

  /* TESTEMUNHOS */
  testimonialCard: {
    backgroundColor: "#111",
    padding: 20,
    borderRadius: 14,
    borderColor: "#222",
    borderWidth: 1,
  },
  testimonialText: {
    color: "#e4e4e4",
    fontSize: 16,
    marginBottom: 6,
  },
  testimonialAuthor: {
    color: "#aaa",
    fontSize: 12,
  },

  /* CTA FINAL */
  ctaFinal: {
    alignItems: "center",
    padding: 40,
    marginTop: 40,
  },
  ctaTitle: {
    fontSize: 26,
    color: "#ff0044",
    fontWeight: "900",
  },
  ctaText: {
    marginTop: 10,
    color: "#ccc",
    fontSize: 16,
  },

  /* FOOTER */
  footer: {
    textAlign: "center",
    padding: 40,
    color: "#777",
    fontSize: 12,
  },
});
