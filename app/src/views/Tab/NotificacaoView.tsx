import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  Alert,
  Switch,
} from "react-native";

const NotificacaoView = () => {
  // Estado das notificações
  const [notificacoes, setNotificacoes] = useState([
    {
      id: "1",
      tipo: "Meta Diária",
      mensagem: "Lembre-se de cumprir sua meta diária de hidratação.",
      data: "01/01/2025",
    },
    {
      id: "2",
      tipo: "Atualização de Dieta",
      mensagem: "Sua dieta foi atualizada pelo nutricionista.",
      data: "02/01/2025",
    },
    {
      id: "3",
      tipo: "Progresso Semanal",
      mensagem: "Resumo semanal: Você está no caminho certo!",
      data: "07/01/2025",
    },
  ]);

  // Estado para preferências de notificações
  const [preferencias, setPreferencias] = useState({
    lembretesDiarios: true,
    atualizacoesDietas: true,
    progressoSemanal: true,
  });

  // Exibe detalhes da notificação ao clicar
  const exibirDetalhesNotificacao = (notificacao) => {
    Alert.alert(
      notificacao.tipo,
      `${notificacao.mensagem}\n\nData: ${notificacao.data}`
    );
  };

  // Alterna preferências de notificações
  const alternarPreferencia = (tipo) => {
    setPreferencias((prev) => ({
      ...prev,
      [tipo]: !prev[tipo],
    }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notificações</Text>

      {/* Histórico de notificações */}
      <FlatList
        data={notificacoes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemTitle}>{item.tipo}</Text>
            <Text style={styles.itemMessage}>{item.mensagem}</Text>
            <Button
              title="Detalhes"
              onPress={() => exibirDetalhesNotificacao(item)}
            />
          </View>
        )}
      />

      <Text style={styles.subtitle}>Preferências de Notificação</Text>

      {/* Configuração de lembretes diários */}
      <View style={styles.preference}>
        <Text>Lembretes Diários</Text>
        <Switch
          value={preferencias.lembretesDiarios}
          onValueChange={() => alternarPreferencia("lembretesDiarios")}
        />
      </View>

      {/* Configuração de atualizações de dieta */}
      <View style={styles.preference}>
        <Text>Atualizações de Dieta</Text>
        <Switch
          value={preferencias.atualizacoesDietas}
          onValueChange={() => alternarPreferencia("atualizacoesDietas")}
        />
      </View>

      {/* Configuração de progresso semanal */}
      <View style={styles.preference}>
        <Text>Resumo Semanal</Text>
        <Switch
          value={preferencias.progressoSemanal}
          onValueChange={() => alternarPreferencia("progressoSemanal")}
        />
      </View>
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
    marginVertical: 10,
  },
  item: {
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#f9f9f9",
  },
  itemTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  itemMessage: {
    marginBottom: 10,
    fontSize: 14,
    color: "#555",
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
  },
});

export default NotificacaoView;
