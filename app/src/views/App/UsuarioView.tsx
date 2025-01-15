import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const UsuarioView = () => {
  const [nome, setNome] = useState('João Silva');
  const [email, setEmail] = useState('joao@exemplo.com');
  const [telefone, setTelefone] = useState('123456789');
  const [mensagem, setMensagem] = useState('');

  const editarPerfil = () => {
    setMensagem('Perfil atualizado com sucesso!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil do Usuário</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={telefone}
        onChangeText={setTelefone}
      />
      <Button title="Atualizar Perfil" onPress={editarPerfil} />
      {mensagem !== '' && <Text style={styles.message}>{mensagem}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  message: {
    marginTop: 10,
    textAlign: 'center',
    color: 'green',
  },
});

export default UsuarioView;
