import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  FlatList,
} from "react-native";

const NutricionistaView = () => {
  const [pacientes, setPacientes] = useState([]);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  const cadastrarPaciente = () => {
    if (!nome || !email || !cpf || !dataNascimento) {
      Alert.alert("Erro", "Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    const pacienteExistente = pacientes.find(
      (p) => p.cpf === cpf || p.email === email
    );
    if (pacienteExistente) {
      Alert.alert("Erro", "Email ou CPF já cadastrados. Tente novamente.");
      return;
    }

    const imc = peso && altura ? (parseFloat(peso) / (parseFloat(altura) * parseFloat(altura))).toFixed(2) : null;

    const novoPaciente = {
      id: Math.random().toString(),
      nome,
      email,
      cpf,
      dataNascimento,
      peso,
      altura,
      imc,
    };
    setPacientes([...pacientes, novoPaciente]);

    Alert.alert(
      "Sucesso",
      "Paciente cadastrado com sucesso. Email com senha temporária enviado."
    );

    setNome("");
    setEmail("");
    setCpf("");
    setDataNascimento("");
    setPeso("");
    setAltura("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nutricionista</Text>

      <Text style={styles.subtitle}>Cadastro de Paciente</Text>
      
    /* Formulário com instruções em cada campo */
        <TextInput
          style={styles.input}
          placeholder="Digite o nome completo do paciente"
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite o email do paciente (ex: paciente@email.com)"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Digite o CPF do paciente (somente números)"
          value={cpf}
          onChangeText={setCpf}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Digite a data de nascimento (DD/MM/AAAA)"
          value={dataNascimento}
          onChangeText={setDataNascimento}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite o peso do paciente em kg (opcional)"
          value={peso}
          onChangeText={setPeso}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Digite a altura do paciente em metros (opcional, ex: 1.75)"
          value={altura}
          onChangeText={setAltura}
          keyboardType="numeric"
        />
        <Button title="Cadastrar Paciente" onPress={cadastrarPaciente} />

      <Text style={styles.subtitle}>Pacientes Cadastrados</Text>
      
      {/* Lista de pacientes cadastrados */}
      <FlatList
        data={pacientes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>Nome: {item.nome}</Text>
            <Text>Email: {item.email}</Text>
            <Text>CPF: {item.cpf}</Text>
            <Text>Data de Nascimento: {item.dataNascimento}</Text>
            <Text>Peso: {item.peso} kg</Text>
            <Text>Altura: {item.altura} m</Text>
            <Text>IMC: {item.imc}</Text>
            <Button
              title="Atualizar Dados"
              onPress={() => Alert.alert("Atualizar Dados", "Função em implementação.")}
            />
            <Button
              title="Excluir Paciente"
              color="red"
              onPress={() => Alert.alert("Excluir Paciente", "Função em implementação.")}
            />
            <Button
              title="Criar Plano Alimentar"
              onPress={() => Alert.alert("Plano Alimentar", "Função em implementação.")}
            />
            <Button
              title="Gerar Relatório de Progresso"
              onPress={() => Alert.alert("Relatório de Progresso", "Função em implementação.")}
            />
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
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
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

export default NutricionistaView;
