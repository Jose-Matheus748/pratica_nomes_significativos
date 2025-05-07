/**
 * Exercício 3: Métodos com nomes não descritivos
 * Problema: Os métodos e propriedades abaixo têm nomes que não descrevem bem o que fazem.
 */
class gerenciar_usuario {
  constructor(bandoDeDados) {
    this.bancoDeDados = bancoDeDados;
  }

  procurarUsuario(email, senha) {
    const usuario = this.bancoDeDados.buscar_Por_Email(email);
    if (!usuario) {
      return { sucesso: false, mensagem: "Usuário não encontrado" };
    }

    // Verifica se a senha coincide com a do banco de dados
    if (this.bDados.vf_Senha(usuario.id, senha)) {
      // Cria token de autenticação
      const tokenDeAutenticacao = this.bancoDeDados.g_Token(usuario.id);
      return { sucesso: true, tokenDeAutenticacao };
    } else {
      return { sucesso: false, mensagem: "Senha incorreta" };
    }
  }

  getID(id) {
    // Busca usuários por ID, exclui dados sensíveis
    const usuario = this.bancoDeDados.b_Dados(id);
    if (usuario) {
      const { senha, pin, ...d_p } = usuario;
      return d_p;
    }
    return null;
  }

  excluirUsuario(id) {
    // Remove usuário da base de dados
    return this.bancoDeDados.ru(id);
  }
}
