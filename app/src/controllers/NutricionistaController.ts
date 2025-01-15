interface Paciente {
    nome: string;
    email: string;
    cpf: string;
    telefone: string;
    dataNascimento: Date;
    peso?: number;
    altura?: number;
  }
  
  interface PlanoAlimentar {
    refeicoes: string[];
    objetivo: string;
  }
  
  interface Relatorio {
    nomePaciente: string;
    comentarios: string;
    pesos: number[];
    alturas: number[];
    imcs: number[];
    metasCumpridas: number;
    metasPendentes: number;
  }
  
  class NutricionistaController {
    // Lista simulada de pacientes e planos alimentares
    private pacientes: Paciente[] = [];
  
    /**
     * Cadastrar um novo nutricionista
     * @param nome
     * @param email
     * @param cpf
     * @param telefone
     * @param dataNascimento
     * @param peso
     * @param altura
     */
    public Cadastrar(
      nome: string,
      email: string,
      cpf: string,
      telefone: string,
      dataNascimento: Date,
      peso?: number,
      altura?: number
    ): void {
      console.log("Nutricionista cadastrado com sucesso:", {
        nome,
        email,
        cpf,
        telefone,
        dataNascimento,
        peso,
        altura,
      });
    }
  
    /**
     * Cadastrar um novo paciente
     * @param nome
     * @param email
     * @param cpf
     * @param telefone
     * @param dataNascimento
     * @param peso
     * @param altura
     * @returns Paciente
     */
    public CadastrarPaciente(
      nome: string,
      email: string,
      cpf: string,
      telefone: string,
      dataNascimento: Date,
      peso?: number,
      altura?: number
    ): Paciente {
      const paciente: Paciente = {
        nome,
        email,
        cpf,
        telefone,
        dataNascimento,
        peso,
        altura,
      };
      this.pacientes.push(paciente);
      console.log("Paciente cadastrado com sucesso:", paciente);
      return paciente;
    }
  
    /**
     * Criar um plano alimentar para um paciente
     * @param refeicoes
     * @param objetivo
     * @returns PlanoAlimentar
     */
    public CriarPlanoAlimentar(
      refeicoes: string[],
      objetivo: string
    ): PlanoAlimentar {
      const plano: PlanoAlimentar = { refeicoes, objetivo };
      console.log("Plano alimentar criado com sucesso:", plano);
      return plano;
    }
  
    /**
     * Editar um plano alimentar existente
     * @param refeicoes
     * @param objetivo
     * @returns boolean
     */
    public EditarPlanoAlimentar(
      refeicoes: string[],
      objetivo: string
    ): boolean {
      console.log("Plano alimentar editado com sucesso:", { refeicoes, objetivo });
      return true;
    }
  
    /**
     * Editar as informações de um paciente
     * @param nome
     * @param email
     * @param cpf
     * @param telefone
     * @param dataNascimento
     * @param peso
     * @param altura
     * @returns boolean
     */
    public EditarInfoPaciente(
      nome: string,
      email: string,
      cpf: string,
      telefone: string,
      dataNascimento: Date,
      peso?: number,
      altura?: number
    ): boolean {
      const paciente = this.pacientes.find((p) => p.cpf === cpf);
      if (!paciente) {
        console.error("Paciente não encontrado.");
        return false;
      }
  
      paciente.nome = nome;
      paciente.email = email;
      paciente.telefone = telefone;
      paciente.dataNascimento = dataNascimento;
      if (peso) paciente.peso = peso;
      if (altura) paciente.altura = altura;
  
      console.log("Informações do paciente atualizadas com sucesso:", paciente);
      return true;
    }
  
    /**
     * Deletar um paciente
     * @param cpf
     * @returns boolean
     */
    public DeletarPaciente(cpf: string): boolean {
      const index = this.pacientes.findIndex((p) => p.cpf === cpf);
      if (index === -1) {
        console.error("Paciente não encontrado.");
        return false;
      }
  
      this.pacientes.splice(index, 1);
      console.log("Paciente deletado com sucesso.");
      return true;
    }
  
    /**
     * Gerar relatório de progresso do paciente
     * @param nomePaciente
     * @param comentarios
     * @param pesos
     * @param alturas
     * @param imcs
     * @param metasCumpridas
     * @param metasPendentes
     * @returns Relatorio
     */
    public GerarRelatorio(
      nomePaciente: string,
      comentarios: string,
      pesos: number[],
      alturas: number[],
      imcs: number[],
      metasCumpridas: number,
      metasPendentes: number
    ): Relatorio {
      const relatorio: Relatorio = {
        nomePaciente,
        comentarios,
        pesos,
        alturas,
        imcs,
        metasCumpridas,
        metasPendentes,
      };
  
      console.log("Relatório gerado com sucesso:", relatorio);
      return relatorio;
    }
  
    /**
     * Visualizar lista de pacientes cadastrados
     * @returns Paciente[]
     */
    public VisualizarPacientes(): Paciente[] {
      console.log("Lista de pacientes cadastrados:", this.pacientes);
      return this.pacientes;
    }
  }
  
  export default NutricionistaController;
  