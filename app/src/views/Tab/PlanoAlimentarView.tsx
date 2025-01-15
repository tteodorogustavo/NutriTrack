import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, FlatList, Alert } from "react-native";

const PlanoAlimentarView = () => {
  const [planos, setPlanos] = useState([]);
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [refeicoes, setRefeicoes] = useState("");

  const adicionarPlano = () => {
    if (!nome || !descricao || !refeicoes) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }

    const novoPlano = {
      id: Math.random().toString(),
      nome,
      descricao,
      refeicoes: refeicoes.split(",").map((refeicao) => refeicao.trim()),
    };
    setPlanos([...planos, novoPlano]);

    Alert.alert("Sucesso", "Plano alimentar adicionado com sucesso.");

    setNome("");
    setDescricao("");
    setRefeicoes("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Planos Alimentares</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do plano"
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
        placeholder="Refeições (separadas por vírgula)"
        value={refeicoes}
        onChangeText={setRefeicoes}
      />
      <Button title="Adicionar Plano" onPress={adicionarPlano} />

      <FlatList
        data={planos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>Nome: {item.nome}</Text>
            <Text>Descrição: {item.descricao}</Text>
            <Text>Refeições: {item.refeicoes.join(", ")}</Text>
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

export default PlanoAlimentarView;