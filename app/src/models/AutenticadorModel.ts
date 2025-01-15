class Autenticador {
    // Atributos
    //singleton
    private static instancia: Autenticador | null = null; // Instância única do Autenticador
  
    // Construtor privado para evitar instâncias diretas
    private constructor() {}
  
    // Métodos estáticos
    static getInstancia(): Autenticador {
      if (Autenticador.instancia === null) {
        Autenticador.instancia = new Autenticador();
      }
      return Autenticador.instancia;
    }
  
    // Métodos
    autenticarLogin(email: string, senha: string): boolean {
      console.log(`Autenticando login para o email: ${email}`);
      // Simulação de autenticação bem-sucedida
      return true;
    }
  
    autenticarCadastroDeUsuario(CPF: string): boolean {
      console.log(`Autenticando cadastro para o CPF: ${CPF}`);
      // Simulação de cadastro bem-sucedido
      return true;
    }
  
    logout(): boolean {
      console.log("Fazendo logout...");
      // Simulação de logout bem-sucedido
      return true;
    }
  }
  
export default Autenticador;