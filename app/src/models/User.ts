class User {
    ID: string;
    Nome: string;
    Email: string;
    Telefone: string;
    Senha: string;

    constructor(ID: string, Nome: string, Email: string, Telefone: string, Senha: string) {
        this.ID = ID;
        this.Nome = Nome;
        this.Email = Email;
        this.Telefone = Telefone;
        this.Senha = Senha;
    }

    Login(email: string, senha: string): boolean {
        return this.Email === email && this.Senha === senha;
    }

    RecuperarSenha(email: string): string {
        if (this.Email === email) {
            
            return "Instruções para recuperar a senha foram enviadas para o seu email.";
        } else {
            return "Email não encontrado.";
        }
    }

    EditarInformacoes(email: string, nome: string, telefone: string, senha: string): void {
        if (this.Email === email) {
            this.Nome = nome;
            this.Telefone = telefone;
            this.Senha = senha;
        } else {
            throw new Error("Email não encontrado.");
        }
    }
}

export default User;