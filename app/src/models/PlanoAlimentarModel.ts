import Refeicao from "./RefeicaoModel";
import Paciente from "./PacienteModel";

class PlanoAlimentar {
    // Atributos
    ID: number;
    refeicoes: Refeicao[]; // Lista de refeições associadas ao plano
    progresso: number; // Progresso do cumprimento das metas
    objetivo: number; // Objetivo do plano alimentar (ex: calorias ou metas)
    observadores: Paciente[]; // Lista de pacientes que observam o plano (Observer Pattern)
  
    constructor(ID: number, objetivo: number) {
      this.ID = ID;
      this.refeicoes = [];
      this.progresso = 0;
      this.objetivo = objetivo;
      this.observadores = [];
    }
  
    // Métodos
    adicionarRefeicao(refeicao: Refeicao): boolean {
      this.refeicoes.push(refeicao);
      return true;
    }
  
    removerRefeicao(refeicao: Refeicao): boolean {
      this.refeicoes = this.refeicoes.filter((r) => r.ID !== refeicao.ID);
      return true;
    }
  
    adicionarObservador(paciente: Paciente): void {
      this.observadores.push(paciente);
    }
  
    removerObservador(paciente: Paciente): void {
      this.observadores = this.observadores.filter((obs) => obs.cpf !== paciente.cpf);
    }
  
    notificarObservadores(mensagem: string): void {
      this.observadores.forEach((paciente) => {
        console.log(`Notificando paciente ${paciente.cpf}: ${mensagem}`);
        // Aqui você pode integrar com o sistema de notificação
      });
    }
  
    atualizarMeta(progresso: number): void {
      this.progresso += progresso;
      if (this.progresso >= this.objetivo) {
        this.notificarObservadores("Meta do plano alimentar alcançada!");
      }
    }
  
    consultarMetasCumpridas(): number {
      return this.progresso;
    }
  
    visualizarPlano(): PlanoAlimentar {
      console.log(`Plano ID: ${this.ID}`);
      console.log(`Refeições: ${this.refeicoes.length}`);
      console.log(`Progresso: ${this.progresso}/${this.objetivo}`);
      return this;
    }

    //método para buscar plano alimentar por ID
    static findByPacienteId(idPaciente: number): PlanoAlimentar {
      // Simula a busca no banco de dados
      const plano = new PlanoAlimentar(1, 2000);
      plano.adicionarRefeicao(new Refeicao("café", "Café da Manhã", 8, false));
      plano.adicionarRefeicao(new Refeicao("almoço", "Almoço", 12, true));
      plano.adicionarRefeicao(new Refeicao("janta", "Jantar", 18, false));
      return plano;
    }
  }
  
export default PlanoAlimentar;