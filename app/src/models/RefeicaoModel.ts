class Refeicao {
    // Atributos
    ID: string;
    alimentos: string; // Lista com os alimentos incluídos na refeição
    calorias: number; // Total de calorias da refeição
    status: boolean; // Indica se a refeição foi marcada como concluída (true ou false)
  
    constructor(ID: string, alimentos: string, calorias: number, status: boolean) {
      this.ID = ID;
      this.alimentos = alimentos;
      this.calorias = calorias;
      this.status = status;
    }
  
    // Métodos
    adicionarAlimento(alimento: string): void {
      this.alimentos += `, ${alimento}`;
    }
  
    removerAlimento(alimento: string): void {
      const alimentosArray = this.alimentos.split(", ").filter((item) => item !== alimento);
      this.alimentos = alimentosArray.join(", ");
    }
  
    calcularCalorias(): number {
      // Aqui, assumimos que o cálculo das calorias já está integrado
      return this.calorias;
    }
  
    visualizarRefeicao(): Refeicao {
      console.log(`Refeição ID: ${this.ID}`);
      console.log(`Alimentos: ${this.alimentos}`);
      console.log(`Calorias: ${this.calorias}`);
      console.log(`Status: ${this.status ? "Concluída" : "Não concluída"}`);
      return this;
    }
  }

export default Refeicao;