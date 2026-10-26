import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import CardPerfil from './src/components/CardPerfil';
export default function App() {
  const usuario = {
    nome: 'João Gabriel Cardoso',
    funcao: 'Discente',
    imagemUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80',
    email: 'joaocardoso@exemplo.com',
    telefone: '(21) 99999-9999',
  };
  return (
    <View style={styles.container}>
      <StatusBar style="dark" backgroundColor="#F8FAFC" />
      <CardPerfil
        nome={usuario.nome}
        funcao={usuario.funcao}
        imagemUrl={usuario.imagemUrl}
        email={usuario.email}
        telefone={usuario.telefone}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});