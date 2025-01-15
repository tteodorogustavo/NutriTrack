    import React, { useState } from "react";
    import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity, Alert } from "react-native";

    const CustomCheckBox = ({ value, onValueChange }) => {
    return (
        <TouchableOpacity
        style={[styles.checkbox, value ? styles.checkboxSelected : null]}
        onPress={onValueChange}
        >
        {value && <Text style={styles.checkboxText}>✓</Text>}
        </TouchableOpacity>
    );
    };

    const PacienteView = () => {
    // Estado para refeições do dia
    const [refeicoes, setRefeicoes] = useState([
        { id: "1", nome: "Café da Manhã", concluida: false },
        { id: "2", nome: "Almoço", concluida: false },
        { id: "3", nome: "Jantar", concluida: false },
    ]);

    // Estado para relatório de medidas
    const [relatorio, setRelatorio] = useState([
        { id: "1", data: "01/01/2025", peso: 70.5, altura: 1.75, imc: 23.0 },
        { id: "2", data: "15/01/2025", peso: 69.0, altura: 1.75, imc: 22.5 },
    ]);

    // Estado para a dieta e metas
    const [dieta, setDieta] = useState({
        metas: [{ id: "1", descricao: "Beber 2L de água", concluida: false }],
        atualizacao: "15/01/2025",
    });

    // Função para marcar refeições como concluídas
    const marcarRefeicao = (id) => {
        setRefeicoes((prevState) =>
        prevState.map((refeicao) =>
            refeicao.id === id
            ? { ...refeicao, concluida: !refeicao.concluida }
            : refeicao
        )
        );
    };

    // Função para exibir relatórios
    const exibirRelatorio = () => {
        if (relatorio.length === 0) {
        Alert.alert(
            "Nenhum dado de medida disponível",
            "Consulte seu nutricionista para mais informações."
        );
        return;
        }
        Alert.alert("Relatórios disponíveis", "Selecione o relatório desejado.");
    };

    // Função para verificar atualizações na dieta
    const verificarAtualizacoes = () => {
        // Simulando verificação
        Alert.alert(
        "Atualização",
        "Sua dieta já está na versão mais recente (15/01/2025)."
        );
    };

    return (
        <View style={styles.container}>
        {/* Refeições do Dia */}
        <Text style={styles.title}>Refeições do Dia</Text>
        <FlatList
            data={refeicoes}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
            <View style={styles.item}>
                <CustomCheckBox
                value={item.concluida}
                onValueChange={() => marcarRefeicao(item.id)}
                />
                <Text style={styles.itemText}>
                {item.nome} - {item.concluida ? "Concluída" : "Pendente"}
                </Text>
            </View>
            )}
        />

        {/* Relatórios */}
        <Text style={styles.title}>Relatórios de Medidas</Text>
        <Button title="Visualizar Relatórios" onPress={exibirRelatorio} />

        {/* Dieta e Metas */}
        <Text style={styles.title}>Dieta e Metas</Text>
        <FlatList
            data={dieta.metas}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
            <View style={styles.item}>
                <CustomCheckBox
                value={item.concluida}
                onValueChange={() =>
                    setDieta((prev) => ({
                    ...prev,
                    metas: prev.metas.map((meta) =>
                        meta.id === item.id
                        ? { ...meta, concluida: !meta.concluida }
                        : meta
                    ),
                    }))
                }
                />
                <Text style={styles.itemText}>
                {item.descricao} - {item.concluida ? "Concluída" : "Pendente"}
                </Text>
            </View>
            )}
        />
        <Button title="Verificar Atualizações" onPress={verificarAtualizacoes} />
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
        marginVertical: 10,
    },
    item: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 5,
    },
    itemText: {
        marginLeft: 10,
        fontSize: 16,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor: "#000",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
    },
    checkboxSelected: {
        backgroundColor: "#0f0",
        borderColor: "#0f0",
    },
    checkboxText: {
        color: "#fff",
        fontWeight: "bold",
    },
    });

    export default PacienteView;
