import RelatorioModel from "../models/RelatorioModel";

export class RelatorioController {
  private model: RelatorioModel;

  constructor(model: RelatorioModel) {
    this.model = model;
  }

  gerarGraficoProgresso(): Blob {
    console.log("Gerando gráfico de progresso...");
    // Simulação de um gráfico gerado
    return new Blob();
  }

  gerarResumoRelatorio(): Blob {
    console.log("Gerando resumo do relatório...");
    // Simulação de um resumo gerado
    return new Blob();
  }
}

export default RelatorioController;