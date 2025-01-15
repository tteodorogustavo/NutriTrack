import User from "./User";
import Refeicao from "./RefeicaoModel";
import Notificacao from "./NotificacaoModel";

class Paciente extends User {
  // Atributos da classe
  cpf: string;
  idNutri: number;
  dataNasc: Date;
  peso: number;
  altura: number;
  imc: number;
  notificacao: Notificacao[]; // Lista de notificações associadas ao paciente
  IDplano: number; // Identificador do plano alimentar associado

  constructor(
    ID: string,
    Nome: string,
    Email: string,
    Telefone: string,
    Senha: string,
    cpf: string,
    idNutri: number,
    dataNasc: Date,
    peso: number,
    altura: number,
    IDplano: number
  ) {
    super(ID, Nome, Email, Telefone, Senha);
    this.cpf = cpf;
    this.ID = ID;
    this.idNutri = idNutri;
    this.dataNasc = dataNasc;
    this.peso = peso;
    this.altura = altura;
    this.imc = this.calcularIMC(peso, altura);
    this.notificacao = [];
    this.IDplano = IDplano;
  }

  // Métodos
  calcularIMC(peso: number, altura: number): number {
    return peso / (altura * altura); // Calcula o IMC com base no peso e altura
  }

  visualizarPlanoAlimentar(): boolean {
    // Retorna true se o paciente tem um plano alimentar válido associado
    return this.IDplano !== null && this.IDplano !== undefined;
  }

  visualizarRelatorioProgresso(): boolean {
    // Retorna true se o paciente possui relatórios de progresso associados
    return this.notificacao.length > 0; // Supondo que notificações incluem progresso
  }

  marcarRefeicaoCumprida(refeicao: Refeicao): boolean {
    // Marca a refeição como cumprida (implementação dependente do sistema)
    console.log(`Refeição ${refeicao} marcada como cumprida.`);
    return true;
  }
}

export default Paciente;