import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function HomeScreen() {
  const [contador, setContador] = useState(0);

  function adicionar() {
    setContador(contador + 1);
  }

  function tirar() {
    if (contador > 0) {
      setContador(contador - 1);
    }
  }

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.numero,
          contador > 10
            ? styles.vermelho
            : styles.preto,
        ]}
      >
        {contador}
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={adicionar}
      >
        <Text style={styles.textoBotao}>
          Incrementar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={tirar}
      >
        <Text style={styles.textoBotao}>
          Decrementar
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },

  numero: {
    fontSize: 80,
    fontWeight: 'bold',
    marginBottom: 40,
  },

  preto: {
    color: '#000',
  },

  vermelho: {
    color: 'red',
  },

  botao: {
    backgroundColor: '#00ff15',
    padding: 15,
    width: 200,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 15,
  },

  textoBotao: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});