import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";

export const LoginView: React.FC = () => {
  const [identifier, setIdentifier] = useState<string>(""); // Email, telefone ou CPF
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [role, setRole] = useState<string>("Paciente"); // Alterna entre "Paciente" e "Nutricionista"
  const navigation = useNavigation();

  const handleLogin = () => {
    if (identifier === "" || password === "") {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }

    // Simulação de autenticação
    if (identifier === "usuario@exemplo.com" && password === "12345678") {
      Alert.alert("Login Bem-sucedido", "Você será redirecionado.");
      navigation.navigate(role === "Paciente" ? "Paciente" : "Nutricionista");
    } else {
      setError("Email ou senha incorretos");
    }
  };

  const handleForgotPassword = () => {
    // Redireciona para a tela de recuperação de senha
    navigation.navigate('RecuperarSenha');
      };

  const handleRoleSwitch = (newRole: string) => {
    setRole(newRole);
    setError(""); // Limpa erros ao trocar de papel
    setIdentifier("");
    setPassword("");
  };

  const handleRegister = () => {
    navigation.navigate('Register'); // Redireciona para a tela de cadastro
  };

  return (
    <View style={styles.container}>
      <View style={styles.roleSwitch}>
        <TouchableOpacity
          style={[
            styles.roleButton,
            role === "Paciente" && styles.activeRoleButton,
          ]}
          onPress={() => handleRoleSwitch("Paciente")}
        >
          <Text style={[styles.roleButtonText, role === "Paciente" && styles.activeRoleButtonText]}>
            Entrar como{"\n"}Paciente
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.roleButton,
            role === "Nutricionista" && styles.activeRoleButton,
          ]}
          onPress={() => handleRoleSwitch("Nutricionista")}
        >
          <Text style={[styles.roleButtonText, role === "Nutricionista" && styles.activeRoleButtonText]}>
            Entrar como{"\n"}Nutricionista
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>
        Bem-vindo {role === "Paciente" ? "Paciente" : "Nutricionista"}
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Email, Telefone ou CPF"
        value={identifier}
        onChangeText={setIdentifier}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      {role === "Nutricionista" && (
        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
          <Text style={styles.registerButtonText}>Cadastrar-se</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity style={styles.forgotPassword} onPress={handleForgotPassword}>
        <Text style={styles.forgotPasswordText}>Esqueci minha senha</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    padding: 16,
  },
  roleSwitch: {
    flexDirection: "row",
    marginBottom: 16,
  },
  roleButton: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  activeRoleButton: {
    backgroundColor: "#007BFF",
  },
  roleButtonText: {
    color: "#007BFF",
    fontWeight: "bold",
    textAlign: "center",
  },
  activeRoleButtonText: {
    color: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 32,
  },
  input: {
    width: "100%",
    padding: 12,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  button: {
    width: "100%",
    padding: 16,
    backgroundColor: "#007BFF",
    borderRadius: 8,
    marginTop: 16,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  registerButton: {
    marginTop: 16,
    alignItems: "center",
  },
  registerButtonText: {
    color: "#007BFF",
    textDecorationLine: "underline",
  },
  forgotPassword: {
    marginTop: 16,
  },
  forgotPasswordText: {
    color: "#007BFF",
    textDecorationLine: "underline",
  },
  error: {
    color: "red",
    marginVertical: 8,
  },
});

