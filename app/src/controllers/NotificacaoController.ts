import NotificacaoModel from '../models/NotificacaoModel';

class NotificacaoController {
    // Método para gerar uma notificação
    gerarNotificacao(
      mensagem: string,
      tipo: string,
      idUsuario: number
    ): NotificacaoModel {
      console.log(
        `Gerando notificação para o usuário ${idUsuario}: ${mensagem} [Tipo: ${tipo}]`
      );
  
      // Simulando criação da notificação
      const novaNotificacao = new NotificacaoModel(
        Math.floor(Math.random() * 10000), // ID único gerado aleatoriamente
        mensagem,
        tipo,
        idUsuario
      );
  
      return novaNotificacao;
    }
  
    // Método para enviar uma notificação
    enviarNotificacao(notificacao: NotificacaoModel): boolean {
      console.log(
        `Enviando notificação para o usuário ${notificacao.usuarioDestino}: ${notificacao.mensagem}`
      );
  
      // Simulando envio de notificação
      return true; // Retorna true para simular o sucesso do envio
    }
  }
  
  export default NotificacaoController;