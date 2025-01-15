import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  Alert,
  ScrollView,
} from "react-native";

const RelatorioView = () => {
  const [relatorio, setRelatorio] = useState([
    { id: "1", data: "01/01/2025", peso: 70.5, altura: 1.75, imc: 23.0 },
    { id: "2", data: "15/01/2025", peso: 69.0, altura: 1.75, imc: 22.5 },
  ]);

  const [mensagemErro, setMensagemErro] = useState("");

  // Exibe o relatório completo
  const exibirRelatorioCompleto = () => {
    if (relatorio.length === 0) {
      setMensagemErro("Dados insuficientes para gerar o relatório completo.");
      return;
    }
    Alert.alert("Relatório Completo", "Relatório completo exibido.");
  };

  // Formata os gráficos com os dados
  const formatarGrafico = () => {
    if (relatorio.length === 0) {
      setMensagemErro("Não há dados para gerar gráficos.");
      return;
    }
    Alert.alert("Gráficos Gerados", "Os gráficos foram formatados.");
  };

  // Exibe relatório mensal
  const exibirRelatorioMensal = (inicio, fim) => {
    if (relatorio.length === 0) {
      setMensagemErro("Não há dados mensais disponíveis.");
      return;
    }
    Alert.alert(
      "Relatório Mensal",
      `Exibindo relatório de ${inicio} a ${fim}.`
    );
  };

  // Exibe relatório específico (intervalo de datas)
  const exibirRelatorioEspecifico = (inicio, fim) => {
    if (relatorio.length === 0) {
      setMensagemErro("Não há dados suficientes para este intervalo.");
      return;
    }
    Alert.alert(
      "Relatório Específico",
      `Exibindo relatório de ${inicio} a ${fim}.`
    );
  };

  // Mensagem de erro
  const mostrarErro = () => {
    if (mensagemErro !== "") {
      Alert.alert("Erro", mensagemErro);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Relatórios de Progresso</Text>

      {/* Botão para exibir relatório completo */}
      <Button
        title="Exibir Relatório Completo"
        onPress={exibirRelatorioCompleto}
      />

      {/* Botão para formatar gráficos */}
      <Button title="Formatar Gráficos" onPress={formatarGrafico} />

      {/* Botão para exibir relatório mensal */}
      <Button
        title="Exibir Relatório Mensal"
        onPress={() => exibirRelatorioMensal("01/01/2025", "31/01/2025")}
      />

      {/* Botão para exibir relatório específico */}
      <Button
        title="Exibir Relatório Específico"
        onPress={() => exibirRelatorioEspecifico("01/01/2025", "15/01/2025")}
      />

      {/* Mensagem de erro */}
      {mensagemErro !== "" && (
        <Text style={styles.errorMessage}>{mensagemErro}</Text>
      )}

      {/* Lista de Relatórios (Apenas como exemplo) */}
      <Text style={styles.subtitle}>Dados Disponíveis:</Text>
      <FlatList
        data={relatorio}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>Data: {item.data}</Text>
            <Text>Peso: {item.peso} kg</Text>
            <Text>Altura: {item.altura} m</Text>
            <Text>IMC: {item.imc}</Text>
          </View>
        )}
      />
    </ScrollView>
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
    marginTop: 20,
    marginBottom: 10,
  },
  item: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  errorMessage: {
    color: "red",
    fontSize: 16,
    marginTop: 20,
    textAlign: "center",
  },
});

export default RelatorioView;
