import User from "./User";
import Paciente from "./PacienteModel";

class Nutricionista extends User {
    // Atributos
    crn: string;
    pacientes: Paciente[]; // Lista de Pacientes associados ao Nutricionista

    constructor(ID: string, Nome: string, Email: string, Telefone: string, Senha: string, crn: string) {
        // Chama o construtor da classe base (User) com os parâmetros necessários
        super(ID, Nome, Email, Telefone, Senha);
        this.crn = crn;
        this.pacientes = [];
    }

    // Métodos
    cadastrar(
        nome: string,
        email: string,
        cpf: string,
        telefone: string,
        crn: string,
        dataNasc: Date
    ): void {
        // Implementação do método cadastrar
    }
}

export default Nutricionista;