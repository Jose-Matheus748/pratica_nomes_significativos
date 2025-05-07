/**
 * Exercício 2: Constantes mágicas
 * Problema: O código abaixo contém valores numéricos "mágicos" e métodos e outros valores sem significado claro.
 */
function aplicarDescontoNaPassagem(passagem) {
  let passagemComDesconto = passagem.preco;

  if (passagem.tipo === 1) {
    return passagemComDesconto * 0.92;
  } else if (passagem.tipo === 2) {
    return passagemComDesconto * 0.94;
  } else if (passagem.tipo === 3) {
    return passagemComDesconto * 0.9;
  } else {
    return passagemComDesconto;
  }
}

console.log(aplicarDescontoNaPassagem({preco: 10, tipo: 1}));
