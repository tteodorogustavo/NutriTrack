import PacienteModel from '../models/PacienteModel';
import PlanoAlimentar from '../models/PlanoAlimentarModel';
import Relatorio from '../models/RelatorioModel';
import Refeicao from '../models/RefeicaoModel';

class PacienteController {
  // Método para calcular o IMC
  calcularIMC(peso: number, altura: number): number {
    if (altura === 0) throw new Error("Altura não pode ser zero.");
    const imc = peso / (altura * altura);
    return parseFloat(imc.toFixed(2));
  }

  // Método para visualizar o plano alimentar
  async visualizarPlanoAlimentar(idPaciente: number) {
    const planoAlimentar = await PlanoAlimentar.findByPacienteId(idPaciente);
    if (!planoAlimentar) {
      throw new Error("Plano alimentar não encontrado.");
    }
    return planoAlimentar;
  }

  // Método para visualizar o relatório de progresso
  async visualizarRelatorioProgresso(idPaciente: number) {
    const relatorio = await Relatorio.findByPacienteId(idPaciente);
    if (!relatorio) {
      throw new Error("Relatório não encontrado.");
    }
    return relatorio;
  }

  // Método para marcar uma refeição como cumprida
  async marcarRefeicaoCumprida(idPaciente: number, idRefeicao: number): Promise<boolean> {
    const refeicao = await Refeicao.findById(idRefeicao);
    if (!refeicao) {
      throw new Error("Refeição não encontrada.");
    }

    refeicao.status = true; // Marca a refeição como cumprida
    await refeicao.save();
    return true;
  }
}

export default new PacienteController();
