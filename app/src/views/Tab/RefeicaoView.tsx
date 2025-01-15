import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, FlatList, Alert } from "react-native";

const RefeicaoView = () => {
  const [refeicoes, setRefeicoes] = useState([]);
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [calorias, setCalorias] = useState("");

  const adicionarRefeicao = () => {
    if (!nome || !descricao || !calorias) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }

    const novaRefeicao = {
      id: Math.random().toString(),
      nome,
      descricao,
      calorias,
    };
    setRefeicoes([...refeicoes, novaRefeicao]);

    Alert.alert("Sucesso", "Refeição adicionada com sucesso.");

    setNome("");
    setDescricao("");
    setCalorias("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Refeições</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome da refeição"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
      />
      <TextInput
        style={styles.input}
        placeholder="Calorias"
        value={calorias}
        onChangeText={setCalorias}
        keyboardType="numeric"
      />
      <Button title="Adicionar Refeição" onPress={adicionarRefeicao} />

      <FlatList
        data={refeicoes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>Nome: {item.nome}</Text>
            <Text>Descrição: {item.descricao}</Text>
            <Text>Calorias: {item.calorias}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  item: {
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#f9f9f9",
  },
});

export default RefeicaoView;
