/**
 * Exercício 3: Métodos com nomes não descritivos
 * Problema: Os métodos e propriedades abaixo têm nomes que não descrevem bem o que fazem.
 */
class Usuario {
  constructor(bancoDeDados) {
    this.bancoDeDados = bancoDeDados;
  }

  procurarUsuario(email, senha) {
    const usuario = this.bancoDeDados.buscarPorEmail(email);
    if (!usuario) {
      return { sucesso: false, mensagem: "Usuário não encontrado" };
    }

    // Verifica se a senha coincide com a do banco de dados
    if (this.bancoDeDados.verificandoSenha(usuario.id, senha)) {
      // Cria token de autenticação
      const tokenDeAutenticacao = this.bancoDeDados.getToken(usuario.id);
      return { sucesso: true, tokenDeAutenticacao };
    } else {
      return { sucesso: false, mensagem: "Senha incorreta" };
    }
  }

  getId(id) {
    // Busca usuários por ID, exclui dados sensíveis
    const usuario = this.bancoDeDados.buscarDados(id);
    if (usuario) {
      const { senha, pin, ...dadosPessoais } = usuario;
      return dadosPessoais;
    }
    return null;
  }

  excluirUsuario(id) {
    // Remove usuário da base de dados
    return this.bancoDeDados.removerUsuario(id);
  }
}
