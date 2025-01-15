class Notificacao {
    // Atributos
    ID: number;
    mensagem: string;
    tipo: string; // Tipo da notificação (exemplo: "Atualização", "Lembrete")
    usuarioDestino: number; // ID do usuário destinatário
  
    constructor(ID: number, mensagem: string, tipo: string, usuarioDestino: number) {
      this.ID = ID;
      this.mensagem = mensagem;
      this.tipo = tipo;
      this.usuarioDestino = usuarioDestino;
    }
  
    // Métodos
    gerarNotificacao(
      mensagem: string,
      tipo: string,
      idUsuario: number
    ): Notificacao {
      return new Notificacao(
        Math.floor(Math.random() * 10000), // Gera um ID aleatório
        mensagem,
        tipo,
        idUsuario
      );
    }
  
    enviarNotificacao(notificacao: Notificacao): boolean {
      console.log(`Notificação enviada para o usuário ${notificacao.usuarioDestino}: ${notificacao.mensagem}`);
      return true; // Simula o envio com sucesso
    }
  }
  
export default Notificacao;