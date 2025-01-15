import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export const RecuperarSenhaView = () => {
    const [email, setEmail] = useState('');

    const handlePasswordReset = () => {
        if (email) {
            // Aqui você pode adicionar a lógica para enviar o email de recuperação de senha
            Alert.alert('Email enviado', 'Verifique sua caixa de entrada para redefinir sua senha.');
        } else {
            Alert.alert('Erro', 'Por favor, insira um endereço de email válido.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Recuperar Senha</Text>
            <Text style={styles.instructions}>Por favor, insira seu endereço de email cadastrado para recuperar sua senha.</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <Button title="Enviar" onPress={handlePasswordReset} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    instructions: {
        fontSize: 16,
        marginBottom: 16,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
        borderRadius: 4,
    },
});
