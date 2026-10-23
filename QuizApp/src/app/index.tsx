import * as Device from 'expo-device';
import { useState } from 'react';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AnimatedIcon } from '@/components/animated-icon';
import { HintRow } from '@/components/hint-row';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { WebBadge } from '@/components/web-badge';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

export default function HomeScreen() {

  const[quizIniciado, setQuizIniciado] = useState(false);

  function iniciarQuiz() {
    setQuizIniciado(true);
    console.log("O quiz comecou!");
  }

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.conteudo}>

          <Text style={styles.titulo}>QUIZ</Text>

          <Pressable
            style={({ pressed }) => [
              styles.botao,
              pressed && styles.botaoPressionado
            ]}
            onPress={iniciarQuiz}
          >
            <Text style={styles.textoBotao}>START</Text>
          </Pressable>

        </View>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#af4af7b6',
  },
  conteudo: {
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    alignItems: 'center',
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  },
  heroSection: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: Spacing.four,
    gap: Spacing.four,
  },
  title: {
    textAlign: 'center',
  },
  code: {
    textTransform: 'uppercase',
  },
  stepContainer: {
    gap: Spacing.three,
    alignSelf: 'stretch',
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.four,
    borderRadius: Spacing.four,
  },
  titulo: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
    marginTop: 400,
  },
  botao: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 17,
    paddingHorizontal: 60,
    borderRadius: 25,
    elevation: 3, // Sombra no Android
    shadowColor: '#000', // Sombra no iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginTop: 300,
  },
  botaoPressionado: {
    opacity: 0.8,
    transform: [{ scale: 0.95 }], // Efeito de "apertar"
  },
  textoBotao: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6A0DAD',
  },
});
